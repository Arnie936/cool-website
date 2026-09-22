# Images and video assets

## Images: integrated model by default

Use Codex's integrated `image_gen` tool for new raster images, reference-based
variants, edits, clean background plates, and transparent cutouts. Follow the
imagegen skill and the tool's current schema. Do not use external video providers for images.
No KIE or external image API key is needed for this route.

1. Choose the visual direction and reuse one consistent style description.
2. Prefer suitable supplied photography and genuine brand references. Identify
   which image is the reference, edit target, or supporting element.
3. Inspect local edit targets with `view_image` before calling the model.
4. Specify framing, lighting, negative space for German copy, and consistency
   requirements. Keep website copy in real HTML rather than baking it into art.
5. Use the integrated model to generate/edit assets; request real transparency
   for cutouts. Inspect every result and preserve its alpha channel.
6. Copy selected files from the tool's actual output location into the build's
   `assets/` folder. Use the returned path, not a guessed destination. Preserve
   originals and use versioned filenames for iterations.

If the integrated model is unavailable, report that limitation and continue
independent work. Do not silently use an external image provider. Generated
images used as video inputs go only to the selected video provider.

## Videos: choose kie.ai or Higgsfield when needed

Honor the user's provider choice. Otherwise read `COOL_WEBSITE_VIDEO_PROVIDER`
from the process environment or nearest project `.env`; default to `kie`.
Copy the supplied `.env.example` into the website project root as `.env` and
fill only that provider's credentials. Never place secrets in the public build,
frontend code, logs, or source control. A copied placeholder is not configured.
The scripts read the nearest `.env` up to eight directories above the working
directory; process environment values override it. Run from the website project.

For **Higgsfield**, configure `HF_API_KEY_ID` and `HF_API_KEY_SECRET`, run
`doctor.mjs --video --provider higgsfield`, and follow
[higgsfield-api.md](higgsfield-api.md) for REST model selection and generation.
The KIE helper does not route Higgsfield requests. Do not silently fall back to
KIE if Higgsfield is unavailable. Check current API balance and pricing in the
Higgsfield Console; `--probe` does not authenticate or check Higgsfield credit.

For **KIE**, use the following existing helper:

The video helper supports `probe` and `shot`. Its current configured video
model is `kling/v2-1-pro`. Verify current availability and pricing before paid
generation; do not treat old credit estimates as current prices.

```bash
node <skill>/scripts/doctor.mjs --video --provider kie
node <skill>/scripts/kie.mjs probe
node <skill>/scripts/kie.mjs shot "<camera move>" assets/01-hero.png out/01.mp4 --dur 5
bash <skill>/scripts/encode.sh out/01.mp4 assets/01.mp4
bash <skill>/scripts/encode.sh out/01.mp4 assets/01-m.mp4 mobile
```

KIE video generation requires `KIE_AI_API_KEY`; Higgsfield needs only its own
credentials. Supplied footage can be prepared locally without an API call. A page with images and CSS/JS motion
does not need generated video. Choose the number of assets from the design;
ordinary multi-section pages use at most two video-scrub acts.

Every clip needs a poster extracted from its own first frame, not a separately
generated approximation. Use the full FFmpeg build resolved for encoding:

```bash
ffmpeg -i assets/01.mp4 -frames:v 1 assets/01-poster.png
```

Record video calls and their costs separately from integrated image generation.
An account balance delta is attributable to this build only when no other jobs
share the account during that period. Label estimates and measured debits.

## Real footage the client already has

Supplied footage is usually **flat**: shot log-ish or picture-profiled, with no
white point. Downscaled straight into the page it produces washed-out acts that
no amount of scrim tuning rescues, and the instinct to fix it with a CSS filter
over full-bleed media is the thing taste.md warns against, because a filter
flattens the whole frame.

Grade it into a pre-encode intermediate instead:

```bash
# 1. measure. YMIN/YMAX/YAVG tell you whether the clip ever reaches white
ffmpeg -i raw.mov -vf signalstats,metadata=print:key=lavfi.signalstats.YMAX -f null -

# 2. expand levels + a small saturation lift, and land the fps you want
ffmpeg -y -i raw.mov -vf "colorlevels=rimin=0.09:gimin=0.09:bimin=0.09:\
rimax=0.64:gimax=0.64:bimax=0.64,eq=saturation=1.08,fps=30,scale=1920:-2" \
  -c:v libx264 -crf 16 -an graded.mp4

# 3. then the normal dense-GOP encode for scrubbing
bash <skill>/scripts/encode.sh graded.mp4 assets/01.mp4
```

Three more things real footage needs that generated clips do not:

- **Trim before anyone enters frame.** "Nothing enters or leaves" is a hard
  requirement for a clip the reader can park anywhere in, and real recordings
  routinely have someone walk through at second nine.
- **Target 24 to 30fps before `encode.sh`.** A 60fps phone clip at a dense GOP is
  several times the size for motion no hand can resolve. Decimate with `fps=30`
  in the intermediate; the dense keyframes then cost half as much.
- **Re-encode, never stream-copy.** Cuts made with `-c copy` decode badly under
  a scrubber.

---

## Camera moves

`shot` takes a still and moves the camera through it.

What makes a clip scrub well is not the same as what makes it watch well:

- **One continuous move, one direction.** A dolly-in, a drift down, a slow
  orbit. Any cut, snap or direction reversal becomes a jolt under the wheel,
  because the reader controls the playhead and will sit on the reversal.
- **Slower than feels right when previewed.** The move is spread over two or
  three viewport-heights of scroll. A move that looks sedate at 24fps feels
  correct under a hand.
- **The subject stays in frame throughout.** The reader may park anywhere.
- **Nothing enters or leaves.** A person walking in is a different shot at
  frame 1 and frame 120, and the poster will match neither.

Prompt shape: what continues, how the camera moves, then the negatives.

> The camera pushes slowly and steadily forward toward the can, a smooth
> continuous dolly-in with a very slight downward tilt. The blurred window
> slides past on the left as parallax. The can stays perfectly still and in
> frame throughout. One single continuous take, no cuts, no camera shake, no
> zoom snap. Slow, cinematic, controlled.

The KIE script already sends a negative prompt covering judder, warping, morphing,
flicker and scene changes, which are the failure modes that specifically wreck a
scrub.

### Seam locking, if you actually need a chain

For Higgsfield, verify that the selected model supports a last-frame field;
use its documented schema, not KIE's `tail_image_url` or CLI flags.

In the KIE helper, `--tail` pins the last frame as well as the first. Leg N's tail is leg N+1's
head, so the joint is frame-identical:

```bash
ffmpeg -y -sseof -0.05 -i leg1.mp4 -frames:v 1 -q:v 2 seam1.png
node kie.mjs shot "<move>" seam1.png leg2.mp4 --dur 5
```

Extract the seam frame from the **encoded** clip, not the source: re-encoding
shifts frames slightly, and a seam built from the wrong file is a one-frame pop.

**Chaining on pre-generated anchors makes the legs parallel.** Extracting each
leg's head from the previous leg's *encoded* file forces the whole flight to
generate serially, which is roughly 45 minutes for ten legs. Generating every
anchor still first, then giving leg N `--tail` of anchor N+1 and head of anchor
N, means all ten clips run at once and every joint is still frame-locked to an
image both sides were built from. `orrery` did this for a ten-leg flight and
measured 28.5-39.8 dB across all nine joints, inside the band the serial
`descent` chain shipped at. The cost is that you must author the anchors as a
coherent descent, because the model resolves a head-and-tail conflict by pulling
the camera back.

Most pages should not do this at all. A chain exists only to hide cuts between
scenes, and varying the device between acts removes the cut instead of hiding
it, for free and with no failure mode. Chain only when the brief is literally
"one continuous journey".

---

## Encoding

`encode.sh` sets a dense GOP (`-g 8` desktop, `-g 4` mobile), strips audio, and
adds `+faststart`.

The reason is the whole trick: **a normal web encode places a keyframe every two
to five seconds.** Seeking to an arbitrary time makes the decoder walk forward
from the previous keyframe, so a sparse-GOP file plays perfectly and scrubs like
mud. Dense keyframes cost file size and buy responsiveness.

Expect roughly 3MB for a 5s 1080p desktop clip and 1.5MB for the 720p mobile
one. Two clips is about 9MB of video on the page, and the engine fetches each
only as its act approaches.

**Grain-heavy worlds run about double that.** Documentary grain, moving foliage
and film texture gave 5 to 6MB per desktop clip at the script's `-crf 20`;
`-crf 22` is a reasonable dial if a page needs the megabytes back. Longer real
footage costs proportionally more, so a page carrying 15 seconds of supplied
video will sit above the 9MB guideline. That can be the right trade, but make it
deliberately rather than discovering it at the end.

Audio is stripped because these clips are scrubbed, never played. A muted track
is dead weight and an autoplay-policy hazard.

**A stripped ffmpeg will fail here.** Some toolchains put an ffmpeg on PATH with
about 50 filters and no `scale`, `fps` or `tile`. It reports `No option name
near ...`, which reads like a syntax error in your command rather than a missing
filter. `encode.sh` counts filters and goes looking for a real build; override
with `COOL_WEBSITE_FFMPEG`.

---

## Portrait

A 16:9 clip covering a 9:16 viewport crops to the middle third, and a
composition built around negative space on the left loses exactly that space.

Options, in order of cost:

1. **Compose for both.** Keep the subject in the centre third and the copy in a
   bottom band rather than in side negative space, because the bottom band
   survives a centre crop and side space does not. Cheapest, and usually enough.
2. **Native portrait renders.** Generate a 9:16 still and clip for the hero only,
   wire them as `data-cw-src-mobile`, and swap the poster with `<picture>` so the
   frame-holder matches the clip it is holding for:

   ```html
   <picture>
     <source media="(max-width: 860px)" srcset="assets/01-hero-p.webp">
     <img class="cw-stage__poster" src="assets/01-hero.webp" alt="">
   </picture>
   <video data-cw-scrub data-cw-src="assets/01.mp4"
          data-cw-src-mobile="assets/01-p.mp4" playsinline muted></video>
   ```

   A portrait poster with a landscape clip (or the reverse) jumps visibly the
   moment the video paints, which is the whole failure the poster exists to
   prevent. `encode.sh` has no portrait mode; do it by hand:

   ```bash
   ffmpeg -y -i src.mp4 -vf "scale=720:-2" -c:v libx264 -crf 20 -g 4 \
     -pix_fmt yuv420p -an -movflags +faststart assets/01-p.mp4
   # cropping a 16:9 source to 9:16 instead of rendering native:
   #   -vf "crop=ih*9/16:ih,scale=720:-2"
   ```
3. **Drop the clip on phones.** Serve the poster and let the copy carry the act.
   Under reduced motion the engine already does exactly this, so the layout is
   known to work.

Also step the hero display size down on phones. `--cw-t-4xl` floors at 3.4rem,
which is a desktop floor: it wraps a normal hero headline to six lines at 390px.
See [taste.md](taste.md).

Do not solve it with `object-fit: contain`. Letterboxed video on a landing page
reads as a broken embed.
