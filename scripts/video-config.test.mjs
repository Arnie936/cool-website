import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { readConfig, videoConfig } from "./video-config.mjs";

test("example credentials fail for either provider; KIE remains the default", () => {
  const example = fs.readFileSync(new URL("../.env.example", import.meta.url), "utf8");
  const values = Object.fromEntries(example.split(/\r?\n/).filter(l => /^[A-Z_]+=/.test(l)).map(l => l.split("=")));
  assert.deepEqual(videoConfig(values).missing, ["KIE_AI_API_KEY"]);
  assert.deepEqual(videoConfig(values, "higgsfield").missing, ["HF_API_KEY_ID", "HF_API_KEY_SECRET"]);
  assert.equal(videoConfig({}).provider, "kie");
});

test("provider validation requires only selected credentials", () => {
  assert.deepEqual(videoConfig({ HF_API_KEY_ID: "test-id", HF_API_KEY_SECRET: "test-secret" }, "higgsfield").missing, []);
  assert.deepEqual(videoConfig({ KIE_AI_API_KEY: "test-key" }).missing, []);
  assert.deepEqual(videoConfig({ HF_API_KEY_ID: "test-id", HF_API_KEY_SECRET: "" }, "higgsfield").missing, ["HF_API_KEY_SECRET"]);
  assert.throws(() => videoConfig({}, "typo"), /provider must be/);
});

test("nearest .env, quoted values, comments and process overrides agree", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "cw-video-"));
  try {
    const nested = path.join(root, "site");
    fs.mkdirSync(nested);
    fs.writeFileSync(path.join(root, ".env"), 'COOL_WEBSITE_VIDEO_PROVIDER=higgsfield\nHF_API_KEY_ID="test-id"\nHF_API_KEY_SECRET=\'test#secret\'\nKIE_AI_API_KEY=""\n');
    let values = readConfig(nested, {});
    assert.deepEqual(videoConfig(values).missing, []);
    assert.equal(values.HF_API_KEY_SECRET, "test#secret");
    assert.deepEqual(videoConfig(values, "kie").missing, ["KIE_AI_API_KEY"]);
    fs.writeFileSync(path.join(nested, ".env"), 'export KIE_AI_API_KEY=test-key # comment\n');
    values = readConfig(nested, {});
    assert.equal(values.KIE_AI_API_KEY, "test-key");
    assert.equal(values.HF_API_KEY_ID, undefined);
    assert.equal(readConfig(nested, { KIE_AI_API_KEY: "override" }).KIE_AI_API_KEY, "override");
    assert.deepEqual(videoConfig(readConfig(nested, { KIE_AI_API_KEY: "" })).missing, ["KIE_AI_API_KEY"]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
