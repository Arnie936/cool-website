# Higgsfield API for optional videos

Use this route when the user chooses Higgsfield or
`COOL_WEBSITE_VIDEO_PROVIDER=higgsfield`. This is the official REST API,
not browser automation or a Higgsfield CLI session. Images still use the
integrated image model. No KIE key is required for this route.

## Setup and model choice

1. Copy `.env.example` to the website project root as `.env`. Fill
   `HF_API_KEY_ID` and `HF_API_KEY_SECRET` from the
   [Console](https://console.higgsfield.ai/), and select `higgsfield`.
2. Run `node <skill>/scripts/doctor.mjs --video --provider higgsfield`.
   This is a local configuration check, not proof of authentication or credit.
3. Check API balance, model access, current schema and price in the official
   Console/docs. Record provider, exact model ID and authorized budget in
   BRIEF.md before paid generation. Do not substitute website subscription
   credits or an old KIE price estimate.
4. Select image-to-video for a camera move from an approved still, or
   text-to-video when the brief calls for it. Use the model's own parameters.
   KIE model IDs, upload endpoints and `tail_image_url` are not interchangeable.

## REST requests

Run requests locally in the agent's shell or server code, never in the shipped
HTML/JavaScript. Load `.env` explicitly; a shell does not load it automatically.
For a local Node `.mjs` script, reuse `<skill>/scripts/video-config.mjs`:

```js
// Replace <skill> with the actual skill path (a file URL on Windows).
import { readConfig, videoConfig } from "<skill>/scripts/video-config.mjs";
const values = readConfig();
const config = videoConfig(values, "higgsfield");
if (config.missing.length) throw new Error(`Missing: ${config.missing.join(", ")}`);
const headers = {
  "Content-Type": "application/json",
  Authorization: `Key ${values.HF_API_KEY_ID}:${values.HF_API_KEY_SECRET}`,
};
```

Send `POST https://api.higgsfield.ai/<model-id>` with JSON and these headers.
For example, the documented `bytedance/seedance-2.0/text-to-video` accepts:

```json
{
  "prompt": "A slow continuous camera drift along a sunlit coastal road, no cuts",
  "duration": 5,
  "resolution": "720p",
  "aspect_ratio": "16:9",
  "generate_audio": false
}
```

For image-to-video, one documented option is
`kling-video/v3.0/4k/image-to-video`, with `image_url`, `prompt`, integer
`duration`, `sound: "off"`, and `multi_shots: false`. It also documents
`last_image_url` for a final anchor. This is an example, not a cheapest-model
recommendation. Recheck the selected model before spending. Provide a
provider-accessible image URL via the documented upload/storage flow; a local
Windows path or localhost URL is not an input URL. Do not upload customer
assets to another provider just to obtain a URL. If suitable storage/upload
is unavailable, report that prerequisite before submitting a paid request.

## Wait, save, and encode

- Set a per-request HTTP timeout and a total generation deadline. Save the
  accepted `request_id` and returned `status_url` immediately in a local job
  record so a timeout can resume polling instead of creating another video.
- Poll the returned `status_url`, checking it belongs to
  `https://api.higgsfield.ai` before sending credentials. Start around two
  seconds, increase to ten seconds, and use jitter for concurrent jobs.
- Stop on `completed`, `failed`, `nsfw`, or `canceled`. Retry transient polling
  network/5xx errors with bounded backoff; honor rate-limit retry guidance.
  Stop on authentication or access errors. Do not automatically retry an
  ambiguous generation POST or switch providers; it can incur another charge.
- For a completed video, download `video.url` to a versioned local MP4 without
  forwarding the Authorization header to the media host. Check HTTP success
  and inspect the clip. Treat missing output as an error, not a successful job.
- Use `scripts/encode.sh` for desktop/mobile scrub versions and extract a
  poster from the encoded first frame as described in [assets.md](assets.md).
- Record actual results and costs. Do not claim a live API test from a local
  credential check. Keep credentials out of logs, screenshots and build assets.

## Official references

Checked 2026-09-22. Verify current model access, inputs and pricing at use time.

- [Authentication](https://docs.higgsfield.ai/docs/authentication)
- [Requests and lifecycle](https://docs.higgsfield.ai/docs/concepts/requests)
- [Polling](https://docs.higgsfield.ai/docs/concepts/polling)
- [Seedance text-to-video schema](https://open.higgsfield.ai/models/bytedance/seedance-2.0/text-to-video/api-reference)
- [Kling image-to-video schema](https://open.higgsfield.ai/models/kling-video/v3.0/4k/image-to-video/api-reference)
