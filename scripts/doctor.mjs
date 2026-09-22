#!/usr/bin/env node
/**
 * Preflight. Run after the brief and before building.
 *
 *   node scripts/doctor.mjs            check everything
 *   node scripts/doctor.mjs --video --provider higgsfield   check Higgsfield credentials
 *   node scripts/doctor.mjs --probe --provider kie   read KIE balance
 *
 * Every check that can fail deep inside a build with a misleading message is
 * checked here with an honest one. The two that actually bite:
 *
 *   - a STRIPPED ffmpeg on PATH. It carries ~50 filters and silently lacks
 *     scale, fps, psnr and the webp muxer, then fails with "No option name
 *     near ..." or "Unable to choose an output format", both of which read as
 *     a mistake in your command rather than a missing feature.
 *   - missing provider credentials, which only matter for generated videos.
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { paths } from "./workspace.mjs";
import { readConfig, videoConfig } from "./video-config.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const rows = [];
const add = (sev, name, ok, detail, fix) => rows.push({ sev, name, ok, detail, fix });

const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return null;
  }
};

// ---------------------------------------------------------------- node ----
const major = Number(process.versions.node.split(".")[0]);
add("required", "node", major >= 18, `v${process.versions.node}`,
  "Install Node 18 or newer.");

// -------------------------------------------------------------- ffmpeg ----
function globWinGet() {
  const home = process.env.USERPROFILE || process.env.HOME || "";
  const base = path.join(home, "AppData/Local/Microsoft/WinGet/Packages");
  if (!fs.existsSync(base)) return [];
  const out = [];
  for (const d of fs.readdirSync(base)) {
    if (!/^Gyan\.FFmpeg/i.test(d)) continue;
    const inner = path.join(base, d);
    for (const e of fs.readdirSync(inner)) {
      const p = path.join(inner, e, "bin/ffmpeg.exe");
      if (fs.existsSync(p)) out.push(p);
    }
  }
  return out;
}

const candidates = [
  process.env.COOL_WEBSITE_FFMPEG,
  "ffmpeg",
  ...globWinGet(),
  "/usr/local/bin/ffmpeg",
  "/opt/homebrew/bin/ffmpeg",
  "/usr/bin/ffmpeg",
  "/snap/bin/ffmpeg",
].filter(Boolean);

let ffmpeg = null, filterCount = 0;
for (const c of candidates) {
  const out = run(c, ["-hide_banner", "-filters"]);
  if (!out) continue;
  const n = out.split("\n").length;
  if (n > filterCount) { filterCount = n; ffmpeg = c; }
  if (n > 200) break;
}
add("required", "ffmpeg (full build)", filterCount > 200,
  ffmpeg ? `${ffmpeg}  (${filterCount} filters)` : "not found",
  "A stripped ffmpeg lacks scale/fps/psnr and the webp muxer. Install a full build (Windows: winget install Gyan.FFmpeg) or set COOL_WEBSITE_FFMPEG to one.");

if (ffmpeg && filterCount > 200) {
  const enc = run(ffmpeg, ["-hide_banner", "-encoders"]) || "";
  add("optional", "  └ libwebp encoder", /libwebp/.test(enc),
    /libwebp/.test(enc) ? "present" : "missing",
    "Posters fall back to JPEG. Not fatal, just heavier.");
}

// Browser verification uses Codex's integrated browser via mcp__cua_repl.
// Its availability is checked by the agent, not through local Node packages.

// ------------------------------------------------------ video provider ----
const needsVideo = process.argv.includes("--video") || process.argv.includes("--probe");
let selectedVideo = null;
if (needsVideo) {
  try {
    const index = process.argv.indexOf("--provider");
    if (index !== -1 && (!process.argv[index + 1] || process.argv[index + 1].startsWith("--"))) {
      throw new Error("--provider requires kie or higgsfield.");
    }
    selectedVideo = videoConfig(readConfig(), index === -1 ? undefined : process.argv[index + 1]);
    for (const key of selectedVideo.required) {
      const ok = !selectedVideo.missing.includes(key);
      add("required", `${key} (${selectedVideo.provider})`, ok, ok ? "configured (not authenticated)" : "missing or placeholder",
        "Copy .env.example to the website project root as .env and fill the selected provider credentials.");
    }
  } catch (error) {
    add("required", "video provider", false, error.message, "Use kie or higgsfield.");
  }
}

// ----------------------------------------------------------- workspace ----
let ws = null;
try {
  ws = paths();
  add("required", "workspace", true, `${ws.workspace}\n      via ${ws.via}`, "");
  add("optional", "  └ registry", fs.existsSync(ws.fingerprints),
    fs.existsSync(ws.fingerprints) ? "present" : "not created yet",
    "Run `node scripts/workspace.mjs --ensure` to create it.");
} catch (e) {
  add("required", "workspace", false, e.message, "Fix or delete the offending .cool-website.json.");
}

// -------------------------------------------------------------- report ----
const mark = (r) => (r.ok ? "\u001b[32m ok \u001b[0m" : r.sev === "required" ? "\u001b[31mFAIL\u001b[0m" : "\u001b[33mwarn\u001b[0m");
console.log("\ncool-website preflight\n");
console.log(" Images: Codex integrated image model.\n");
console.log(" Browser verification: Codex integrated browser (mcp__cua_repl).\n");
for (const r of rows) {
  console.log(` [${mark(r)}] ${r.name.padEnd(22)} ${r.detail}`);
  if (!r.ok && r.fix) console.log(`        ${"\u001b[2m"}${r.fix}${"\u001b[0m"}`);
}

const hardFails = rows.filter((r) => !r.ok && r.sev === "required");
const softFails = rows.filter((r) => !r.ok && r.sev !== "required");
console.log("");
if (hardFails.length) {
  console.log(`\u001b[31m${hardFails.length} required check(s) failed. Fix these before building.\u001b[0m\n`);
  process.exit(1);
}
console.log(softFails.length
  ? `\u001b[33mReady, with ${softFails.length} optional item(s) missing (see above).\u001b[0m\n`
  : "\u001b[32mReady.\u001b[0m\n");

if (process.argv.includes("--probe") && selectedVideo?.provider === "higgsfield") {
  console.log("Higgsfield: local credentials checked only. Check API balance/pricing in the Higgsfield Console; no remote probe or paid generation was run.");
}
if (process.argv.includes("--probe") && selectedVideo?.provider === "kie") {
  const { execFileSync: x } = await import("node:child_process");
  try {
    console.log("credit: " + x(process.execPath, [path.join(HERE, "kie.mjs"), "probe"], { encoding: "utf8" }).trim().replace(/^credit:\s*/, ""));
  } catch (e) { console.log("balance probe failed: " + e.message); }
}
