import fs from "node:fs";
import path from "node:path";

// Nearest .env only; explicit process environment takes precedence.
// No evaluation or variable expansion. Never print credential values.
export function readConfig(start = process.cwd(), env = process.env) {
  let dir = path.resolve(start);
  const values = {};
  for (let i = 0; i < 8; i++) {
    const file = path.join(dir, ".env");
    if (fs.existsSync(file)) {
      for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
        const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
        if (!match) continue;
        let value = match[2];
        if (value.startsWith('"') || value.startsWith("'")) {
          const end = value.indexOf(value[0], 1);
          if (end < 0) continue;
          value = value.slice(1, end);
        } else {
          value = value.replace(/\s+#.*$/, "").trim();
        }
        values[match[1]] = value;
      }
      break;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return { ...values, ...env };
}

export function hasCredential(value) {
  return typeof value === "string" && Boolean(value.trim()) &&
    !/^(your[_-]|replace[_-]|<)/i.test(value.trim());
}

export function videoConfig(values, override) {
  const provider = (override ?? values.COOL_WEBSITE_VIDEO_PROVIDER ?? "kie").trim().toLowerCase();
  if (!["kie", "higgsfield"].includes(provider)) {
    throw new Error("Video provider must be kie or higgsfield (--provider or COOL_WEBSITE_VIDEO_PROVIDER).");
  }
  const required = provider === "kie" ? ["KIE_AI_API_KEY"] : ["HF_API_KEY_ID", "HF_API_KEY_SECRET"];
  return { provider, required, missing: required.filter(key => !hasCredential(values[key])) };
}
