---
name: cool-website
description: >
  Erstellt individuelle, standardmäßig deutsche Landingpages mit räumlichen
  Einstiegen, Scroll-Animationen und eigenständigen Interaktionen. Nutzt eigene
  Medien oder das integrierte Bildmodell für Bilder, kie.ai nur für Videos und
  den integrierten Browser zur Kontrolle. Bietet nach dem ersten Interview
  optional datenbasierte SEO mit dem DataForSEO MCP samt Einrichtung an.
  Verwenden für Cool Website,
  interaktive Landingpages, cinematische Websites und Scrollytelling.

---

# Cool Website

## Defaults

- Website language is German unless the user explicitly requests another
  language. This includes navigation, headings, body copy, buttons, forms,
  validation and success messages, alt text, accessibility labels, metadata,
  and generated downloads. Set `<html lang="de">`. Preserve proper names.
- Generate and edit raster images with Codex's integrated `image_gen` tool
  by default. Follow the available imagegen skill and current tool schema.
  No external image API key is required. Use supplied assets when suitable.
- Use kie.ai only to generate videos, through `scripts/kie.mjs shot`.
  A KIE key and credit check are needed only for that video workflow.
  Do not use kie.ai as an image-generation fallback.
- All browser control and visual verification use the integrated browser
  through `mcp__cua_repl`.
- Offer optional DataForSEO-backed SEO immediately after the first interview
  round, before fixing the page structure, writing copy, or generating assets.
  Follow [references/seo-dataforseo.md](references/seo-dataforseo.md) when chosen.
  Keep basic semantic HTML and metadata even when research is declined.
- Cool Website is the skill name, not the client's brand. Do not add skill
  branding, creator credits, sample brand names, or approval claims to a site.
  Retain the supplied LICENSE file with copies of the engine/software.


Scroll is the only input every visitor already knows how to use. This skill
treats it as a timeline: the wheel is a scrubber, the page is a film with real
text on top, and each section behaves differently enough that the visitor keeps
going to find out what the next one does.

**What you produce:** an interview brief, a page grammar, a customer-journey map,
a feeling curve with one engineered peak, a scroll score, one signature move,
generated assets, real HTML page(s) on a token-driven design floor, and a strip
of screenshots proving it holds up at every scroll position.

## What this is not

It is not "generate a flythrough and drop text on it." That approach produces
one device applied to a whole page, and every site built that way is
recognisable at a glance: same claymation diorama, same centred copy, same
`01 / 06` counter, same "scroll to explore" nudge. Five sections that behave
identically are one section shown five times.

Four rules follow from that, and they are the spine of this skill:

1. **Variety is the product.** A page uses at least four device families and
   never the same device twice in a row. Read [references/devices.md](references/devices.md).
2. **The world is photographic unless the brand is genuinely illustrated.**
   Soft matte low-poly clay diorama is banned as a default. Read
   [references/worlds.md](references/worlds.md).
3. **No continuous chain.** A single unbroken camera flight is the most
   expensive and most fragile thing you can build, and it exists only to hide
   cuts between scenes. Vary the device instead and the cut disappears for free,
   because the visitor is not watching one film. Chain only when the brief is
   literally "one continuous journey."
4. **A different world is not a different page.** The device kit varies how a
   page looks. Structure is a separate axis, and it has to be decided
   deliberately or every build inherits the same skeleton. The first four builds
   did exactly that. Read [references/uniqueness.md](references/uniqueness.md).

## Hero composition

**Dimensional layering is a baseline requirement for a premium marketing hero.**
Plan independently moving background, subject, foreground, and atmospheric
planes before requesting assets. A beautiful single background with text fades
does not satisfy this preference. Depth must come from visible separation,
occlusion, and controlled differences in movement, while the headline stays
readable and the scene tells one clear story.

Read [references/hero-depth.md](references/hero-depth.md) before planning the hero
or generating its assets. It covers clean plates, genuine alpha cutouts, shared
contact anchors, typography between planes, restrained scroll choreography,
mobile art direction, and visual acceptance.
Use the composition that fits the chosen grammar; do not repeat an example scene
or impose pinning on a grammar that forbids it. Honor explicit static or simpler
directions, and keep depth in the static composition when motion is reduced.

## Design and delivery standard

Read [references/design-standard.md](references/design-standard.md) before
planning a marketing site. It covers brand research, independent visual
layers, useful interactions, mobile composition, and final browser checks.
These principles guide a custom page; they are not a fixed page template.

## Step 0: The brief and creative authority

**Establish the brief before generating anything.** Reuse answers and assets
already provided. When the user explicitly delegates creative direction (for
example, "use your judgment" or "I want to get out of your way"), write a
`Self-authored under explicit creative delegation` brief and proceed. Cover the
eight topics below, distinguish evidence from assumptions, and do not invent
user quotations or force another interview/approval checkpoint.

Otherwise, interview for the missing decisions. Ask actual questions, record
the answers, and avoid inferring an entire brand from its name.

Include the offer, audience, main visitor action, and existing website/domain
in the first round when unknown. Treat the eight design topics below as a
coverage list; group related topics and ask at most three short questions per
round. After the first answers, offer Step 0a before asking further design
details. Reuse facts across the design and SEO interviews.

The skill is a range instrument, not a house style. The human brings intent and
whatever assets they own; the interview is where that turns into the right kind
of page: one unbroken world, distinct scenes, printed chapters, a live surface.
The skill can do any of them. The interview decides which.

Cover these eight topics without forcing all eight questions in one pass:

1. **Vibe in three to five words**, plus up to three references from any medium.
   A film, an album cover, a shop, a magazine, a game. Not "sites you like":
   naming sites is how a page ends up looking like an existing site.
2. **The scroll journey, section by section, in their words.** What the visitor
   should hit first, what comes next, what the last thing is. Their sequence,
   not a menu you offered.
3. **The energy curve.** Where it should feel calm, where it should feel
   intense. A page that is loud the whole way is as flat as one that is quiet
   the whole way.
4. **How should someone feel while scrolling, stage by stage, and what is the
   ONE moment they should remember?** Energy is loudness. This is emotion, and
   the two do not line up: on a loud page the quiet act can be the most intense.
   The stage-by-stage answer becomes the feeling curve, the one moment becomes
   the peak. Both are required in BRIEF.md. See [references/feel.md](references/feel.md).
5. **One thing this site should do that no site they have seen does.** This is
   the seed of the signature move. Push for a real answer; "be memorable" is not
   one.
6. **How far from premium-minimal they want to go.** Offer the range in
   [uniqueness.md §5](references/uniqueness.md): brutalist, maximalist, playful,
   retro, dense, editorial, premium-minimal. Their answer governs the aesthetic
   family, not your taste.
7. **One unbroken world, or distinct scenes?** Should the whole page feel like
   one continuous place the scroll flies through (worldflight, see
   [references/worldflight.md](references/worldflight.md)), or like separate
   scenes, chapters, or cuts? This is the single biggest structural fork, and it
   is their call, not a device you pick later. Offer both plainly; neither is
   the default.
8. **What assets do they already have?** Footage, photos, product shots, a
   brand kit, clips of themselves. Real assets anchor the world and cut
   generation cost; the answer decides what gets graded and encoded versus
   generated. "Nothing" is a fine answer and means a fully generated world.

Write the answers into `<workspace>/builds/<name>/BRIEF.md` before any act planning, in
their words, not paraphrased into marketing prose. Everything downstream reads
from that file.

BRIEF.md must contain, at minimum:

- The eight topics, with verbatim user answers where supplied and clearly labeled authored decisions where delegated.
- **The feeling curve.** One line per act: the emotion, then what on screen
  causes it. Written before the acts exist, added to as the score fills in.
- **The peak.** The one moment, written as the sentence a visitor would say to
  a friend, plus which act it lives in.
- **The completed tell-someone sentence.** "It's the site where ___", filled
  with an experience, not a device name.
- Any authored silence, so the verification pass can tell it from dead scroll.

[references/feel.md](references/feel.md) is the spec for all four.

**If the human is genuinely unreachable** and the run is fully autonomous, write
BRIEF.md yourself: answer all eight questions in the brand's voice, mark the file
`Self-authored, not interviewed` at the top, and say so in the final report. A
self-authored brief without delegation is a fallback. Explicit delegation above
is a normal supported workflow and does not require the human to be unreachable.

## Step 0a: Early SEO choice

After the first interview answers, ask in German:
"Soll ich die Website auch gezielt für Google optimieren? Mit DataForSEO kann
ich passende Suchbegriffe und Wettbewerber prüfen und die Ergebnisse direkt
in Seitenaufbau und Texte übernehmen."
Offer: "Ja, mit DataForSEO", "Nur die technischen Grundlagen", "Später".
Skip this question if the user already chose SEO. Creative delegation alone
does not authorize installing an external service or spending API credit.

For yes, follow [seo-dataforseo.md](references/seo-dataforseo.md): complete the
focused intake, connect or offer to install the MCP, establish the research
budget, research the chosen market, then use the findings throughout the build.
Read [dataforseo-setup.md](references/dataforseo-setup.md) only for setup/auth
and credit guidance. A server URL alone is enough to identify the remote
connection; account authorization still has to complete.

Record `SEO: enabled | basics-only | deferred | blocked` in BRIEF.md, plus the
target market and budget if enabled. For basics-only or deferred, continue
without MCP installation or paid research. If connection is blocked, continue
independent design and technical work; mark keyword decisions provisional.
Do not present pending DataForSEO research as completed.

## Bootstrap

Environment, not a stage of the work. Do it once the interview is answered and
before Step 1.

**Run the preflight rather than checking by hand.** It knows the failure modes
that otherwise surface later as misleading errors, chiefly a stripped ffmpeg
that reports a missing filter as a syntax error in your command:

```bash
node <skill>/scripts/doctor.mjs
```

It reports Node, a full ffmpeg build, the optional API key, and the resolved
workspace. Add `--video` only when video generation is planned. Required failures exit non-zero. Browser control and verification
use Codex's integrated browser through `mcp__cua_repl`; no separate browser
automation package or local browser executable is required by this skill.

### The workspace

Builds and the fingerprint registry live in one directory, and **it is resolved,
never assumed**:

```bash
node <skill>/scripts/workspace.mjs --ensure     # prints it, creates it, seeds the registry
```

Resolution order, first hit wins:

1. `COOL_WEBSITE_HOME`
2. the nearest `.cool-website.json` walking up from the cwd, `{ "workspace": "..." }`
3. `<project root>/cool-website`, where the project root is the nearest ancestor
   holding a `.git`

So a build folder is `<workspace>/builds/<name>/` and the registry is
`<workspace>/FINGERPRINTS.md`. The registry starts **empty**: the gate exists to
stop you repeating yourself, so your first build has nothing to clear.

If you already keep builds somewhere else, drop a `.cool-website.json` at your
project root pointing at it and nothing moves.

### The rest

1. Images use the integrated image model; no KIE key or credit probe is needed.
   Only when generating videos, run `doctor.mjs --video`, configure
   `KIE_AI_API_KEY`, and check credit with `scripts/kie.mjs probe`. Plan video
   costs from current provider information. Supplied footage needs no KIE call.
2. A brand kit if one exists (colours, logo, type, existing product shots). If
   the brand has a folder in this repo, read it before generating anything, and
   obey its hard rules. A brand that forbids invented numbers means no stat
   counters, however good they look.

Copy `engine/cool-website.js`, `engine/cool-website.css`, and `LICENSE` into the build folder.
Never edit the engine per-project; it is the mechanism. Theme it with tokens and
write your own markup.

## Step 1: The brief, journey first

The subject is the user's to state. Ask it open, in plain prose, never as a
fabricated multiple-choice list of industries: a made-up menu biases them and
reads as you deciding their business for them.

Step 0 already covered vibe, sequence, energy and range. Do not ask any of it
again. Ask only what you cannot sensibly default:

1. **What is this, and who is it for?** One or two sentences in their words.
2. **What must the visitor believe by the end?** The single sentence the page
   exists to install. Not a feature list. If they give three, make them pick.
3. **What does the visitor do next?** One action. One label for it, used
   everywhere on the page.
4. **What do you already have?** Logo, palette, photography, product shots,
   footage, a brand doc. Real assets beat generated ones every time.
5. **Art direction**: offer the worlds in [references/worlds.md](references/worlds.md)
   as a real choice, and say they can go their own way.

Then write the **journey** before anything else: four to seven beats, each one a
shift in what the visitor knows or feels.

When SEO is enabled, use the researched search intent and keyword-to-URL map
from SEO-PLAN.md before finalizing this journey. If distinct search intents
need separate pages, explain the proposed scope and implement it within the
user's authorization. Do not force unrelated services onto one scroll page.
Respect an explicit one-page constraint and explain the coverage tradeoff.

```
1  Recognition   they see their own morning
2  Tension       the cost of it, named plainly
3  Turn          the thing that changes
4  Substance     why it holds up
5  Range         what they can choose
6  Commitment    the one action
```

Beats are the spine. Sections serve beats; a section that serves no beat is cut,
however nice the shot is. Resolve the journey before generating assets. Show it
to the user when their decisions are needed; under explicit creative delegation,
record the chosen journey and proceed within the authorized scope.

## Step 2: Grammar, gate, then score

Three things in order, and the first two come before any act planning. Full
detail in [references/uniqueness.md](references/uniqueness.md).

**Pick a grammar.** Start with the eight defined grammars and their constraints.
A new grammar is allowed when its navigation, sequence, ending, and explicit
bans describe a different structure; a new label alone earns no credit. Filmic one-shot is the one the first four
builds all used, so choosing it again means saying in the report why the other
seven did not fit the interview. Nav, hero and close all follow from the
grammar; they are not decided separately.

**Invent the signature move.** One bespoke interaction that lives on this site
alone, coded in the page, not a parameter change to a kit device. Question 5 of
the interview is the seed. The engine stays untouched.

**Run the fingerprint gate.** Read your registry at
`<workspace>/FINGERPRINTS.md` (see **The workspace** in Bootstrap; run
`node <skill>/scripts/workspace.mjs` to print the path). The planned build must differ
from **every** existing row on at least 4 of 6 dimensions: grammar, nav
treatment, hero device, act-sequence shape, close pattern, signature move. Four
against each row individually. If it fails, change the plan, not the log.

**Write the feeling curve before the score table.** One line per act: the
emotion, then what causes it. Curve first, acts second, because a device chosen
before the feeling is a device looking for a reason. Two adjacent acts with the
same feeling means one is filler, and it is cheaper to cut it here than after
the assets exist. Name the peak in the same pass and give it the largest span on
the page. Full method in [references/feel.md](references/feel.md).

Then assign each beat a device. Do it deliberately and write it down as a table:

| Beat | Device | Why this one |
|---|---|---|
| Recognition | `scrub` | The camera moving under the reader's own hand is the strongest possible open |
| Tension | `pin` + kinetic | Copy assembles line by line while the frame holds still |
| Turn | `reveal` | A wipe is a change of state, which is what this beat is |
| Substance | `scrub` (macro) | Texture at a scale the eye cannot get otherwise |
| Range | `pan` | Lateral travel reads as "options", vertical reads as "argument" |
| Commitment | `pin` + pointer | The page stops moving and starts responding |

That table is a **filmic** score. It is the right shape for one grammar and the
wrong shape for the other seven, so read your grammar's leans-on and bans list
before filling in a row.

Checks before you build:

- The grammar's bans hold. A grammar that forbids `pin` forbids it here too,
  however well it would have worked.
- Four or more distinct device families. Fewer means the page has one idea.
- No device family twice in a row.
- At most two `scrub` acts. Video is the heaviest thing on the page, and the
  third one stops being a surprise.
- No two adjacent acts carry the same feeling. If they do, one is filler.
- One act is the peak and it has the largest span by a visible margin. The act
  before it is quieter than it is.
- Every act earns its scroll span. Eight to fourteen viewport-heights is a
  pacing reference for longer cinematic pages, not a quota. Shorter editorial,
  gallery, or working-surface grammars should stay short when the journey is
  complete. Never add filler or empty pinning to hit a length target.
- The act count and total length do not land in the 6-to-7 acts at 13.6-13.8vh
  band that all four prior builds hit. That band is a fingerprint dimension now.

## Step 3: Generate the assets

Full pipeline, prompt scaffolds and model notes: [references/assets.md](references/assets.md).

First generate or edit the required still images with the integrated
`image_gen` tool. Inspect local reference images before edits, pass the intended
references using the current tool schema, inspect outputs, and copy selected
project assets into the build's `assets/` folder. Preserve genuine alpha.
If the built-in model is unavailable, report that and continue work that does
not depend on it; do not silently switch image providers.

Only if videos are needed, use a selected still as the video input:

```bash
node <skill>/scripts/kie.mjs shot "<camera move>" assets/01-hero.png out/01.mp4 --dur 5
bash <skill>/scripts/encode.sh out/01.mp4 assets/01.mp4
bash <skill>/scripts/encode.sh out/01.mp4 assets/01-m.mp4 mobile
```

Four things that decide whether this looks premium or generated:

- **One style preamble, reused verbatim in every prompt.** This is what makes
  six separate images look like one shoot. Write it once, never paraphrase it.
- **Look at every asset before you use it.** Read the PNG. Generation is cheap
  and rerolling is cheaper than shipping a bad frame.
- **Encode for scrubbing, not playback.** `encode.sh` sets a dense GOP because
  seeking walks from the previous keyframe. A normal web encode plays perfectly
  and scrubs like mud.
- **Layer the hero.** Cut the scene into planes that scroll at slightly
  different rates, with the product parked between the mid and foreground
  planes. Depth from differential movement is the cheapest premium signal on
  the page. The recipe and its traps are under `parallax` in
  [references/devices.md](references/devices.md).

## Step 4: Build the page

When SEO is enabled, implement the content and technical requirements from
[seo-dataforseo.md](references/seo-dataforseo.md), including unique indexable
URLs where planned. Animation must preserve crawlable text, ordinary links,
accessible controls, and a usable static reading order.

Write real HTML. Real `<h1>`, real `<p>`, real links, real reading order. The
engine reads `data-cw-*` attributes off your markup and drives it; it never
generates DOM. A runtime that builds the page from a config object is exactly
why every site built on one looks the same.

Start from `references/template.html`. The device patterns are in
[references/devices.md](references/devices.md); the spacing, type, depth and
colour rules are in [references/taste.md](references/taste.md). Read taste.md
before writing markup, not after, and build without announcing the checklist.

Theme by overriding tokens, six values and two fonts:

```css
:root {
  --cw-canvas: #0A0806;  --cw-surface: #16110E;
  --cw-ink:    #F5EBDD;  --cw-ink-soft: #A2968A;
  --cw-accent: #FF5A3D;  --cw-accent-ink: #15110F;
  --cw-font-display: "Archivo", system-ui, sans-serif;
  --cw-font-text:    "Geist", system-ui, sans-serif;
}
```

## Step 5: Verify in the integrated browser

Use Codex's integrated browser through `mcp__cua_repl` for all browser control,
visual inspection, scrolling, interaction checks, and screenshots. Follow its
current tool documentation. Do not install or launch a separate automation
library, browser driver, or external browser process for this workflow.

Serve the build over local HTTP with `scripts/serve.mjs`, then open its URL in
the integrated browser. Follow [references/verify.md](references/verify.md) and
[design-standard.md section 7](references/design-standard.md#7-require-visual-and-functional-evidence-before-delivery).
Inspect each section's opening, intermediate states, and exit, including clip
entry/exit slides. Check changing video frames, cue visibility, text over bright
and dark backgrounds, overflow, keyboard focus, and real control outcomes.
Capture and inspect screenshots of the relevant states.

Check mobile layouts and reduced motion when the integrated browser exposes
those controls. Report unsupported modes or unavailable measurements as
unverified; do not claim an automated contrast audit or real-phone validation
from visual desktop checks. A desktop preview does not reproduce an iPhone's
video decoder, Low Power Mode, or touch scrolling. See the phone diagnostics
in [references/verify.md](references/verify.md#the-phone-is-a-different-machine).

Then run the [feel check](references/feel.md#6-the-feel-check): scroll the page
without rereading BRIEF.md, record the feeling of each act, and compare it with
the intended curve. Confirm the peak and final screen work as planned.
Fix findings, repeat affected checks in the integrated browser, and report what
was actually verified and what remains unverified.

For enabled SEO, also complete the local/source and authorized public-URL
checks in [seo-dataforseo.md](references/seo-dataforseo.md#6-prüfen-und-veröffentlichen).
Remote crawlers cannot audit localhost or a private preview. Keep release and
indexing checks pending until a real public URL is available; do not publish
merely to make an SEO audit possible.

## Hard rules

Ship-blockers, not preferences. Each one is a thing that makes a page read as
machine-made.

| Never | Instead |
|---|---|
| Clay diorama / low-poly / claymation as the default world | Photographic. See worlds.md |
| A "scroll" cue, arrow, or animated mouse icon | Nothing. They are looking at the hero; they know |
| `01 / 06` section counters | Delete them. Sequence is not information here |
| An eyebrow above every section heading | At most one per three sections. The heading carries itself |
| Em dash anywhere visible | Period, comma, colon, or parentheses |
| Centred copy in every act | Vary the anchor: lead, trail, centre, split |
| The same device twice in a row | Score the journey properly in Step 2 |
| Generating before the brief and creative authority are clear | Run Step 0. Record actual answers or explicitly delegated authored decisions in `BRIEF.md` |
| A page with no engineered peak, or with three competing ones | One peak. It gets the asset budget, the silence before it, and the most scroll room. See feel.md §2 |
| An ending that trails off, fades out, or just becomes a footer | The close resolves and holds. The last feeling is the one they carry |
| Planning acts before the feeling curve exists | Curve first, devices second. See feel.md §1 |
| Shipping without one bespoke signature move | Invent one. A recoloured spotlight or a retuned tilt is not one. See uniqueness.md §3 |
| A build that clears fewer than 4 of 6 fingerprint dimensions against any existing row | Change the plan, not `FINGERPRINTS.md` |
| Editing the engine to get a bespoke behaviour | Bespoke JS in the page, driven off `--cw-p` and your own `data-cw-*` |
| Reaching for filmic one-shot because it is what the last build did | Pick from all eight grammars, and say why the other seven lost |
| A full-frame dark overlay to fix contrast | A scrim only where the text sits |
| Text baked into a generated image | Real markup, always. It is selectable, translatable and sharp |
| Invented statistics in a counter | Only real numbers. No number, no counter |
| `transition: all`, or animating width/height/top/left | `transform` and `opacity`; `clip-path` for wipes |
| Gradient text, neon glow, zero-offset coloured halo shadows | Weight and size for emphasis; shadows with offset and blur |
| Autoplaying audio, or any audio at all on a scrub clip | Strip the track. `encode.sh` already does |
| Shipping without running Step 5 | Run Step 5 |

## Output

The build folder, including `BRIEF.md`, then a short report: the grammar and why
the other seven lost, the signature move, the fingerprint gate result against
each existing row, the journey, the feeling curve and the peak, the feel-check
diff (intended curve against felt curve, and what you changed), the score table
(device per beat), what you
generated, what you verified with screenshots, and anything you could not
verify. Say if the brief was self-authored rather than interviewed. Give the
local URL. Keep it brief; the page is the deliverable.

For enabled SEO, include SEO-PLAN.md, SEO-REPORT.md, the compact query/cost log,
implemented pages and metadata, and prioritized remaining launch/follow-up
tasks. Distinguish implemented, locally verified, live verified, and pending.
No ranking, indexing, rich-result, traffic, or revenue guarantees.

Then append the build's row to `<workspace>/FINGERPRINTS.md`.

Changes to the skill itself, and the build findings that drove them, are logged
in [CHANGELOG.md](CHANGELOG.md).
