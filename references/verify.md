# Verify in the integrated browser

All browser control uses Codex's integrated browser through `mcp__cua_repl`.
Follow the current tool documentation and use only its documented APIs. No
separate automation package, browser driver, or external browser process is
part of this skill. If the integrated browser is unavailable, report that
browser verification is blocked and continue independent file checks.

Also follow [design-standard.md section 7](design-standard.md#7-require-visual-and-functional-evidence-before-delivery).
Test the final files, preserve evidence of failures, and identify the check
that resolves each finding.

## Open the right build

Serve the build over HTTP; `file://` can block the engine's clip fetches.
Start `node <skill>/scripts/serve.mjs --root <build folder> --port <free port>`
using the shell's supported background-process mechanism. Verify the server
started successfully and that the URL serves the intended build. A busy port
can otherwise show an unrelated page with a successful HTTP response.

Use the integrated in-app browser, for example at the tool's documented entry
point: `await cua.createBrowserTab("iab", url, { visible: true })`.
Read the returned documentation and UI state before subsequent operations.
Use documented tab methods to scroll, click, press keys, obtain current UI
state, and capture screenshots. After actions, refresh the accessibility state
before choosing the next target. Follow the browser tool's evidence and access
rules; do not substitute shell automation or undocumented page evaluation.

## Inspect the scroll journey

Review each act's opening, several intermediate positions, and exit. Six
positions per act are a useful starting point; add samples around transitions
and defects. Include the entry and exit slides of pinned video stages.
Use screenshots and current UI state to check:

- **Dead scroll:** movement through empty space without meaningful visible
  change. Shorten the span or add useful content. Deliberate holds belong in
  BRIEF.md so they can be distinguished from loading failures.
- **Frozen clips:** compare the actual video imagery at multiple scroll
  positions. A moving container or a changed progress counter does not prove
  that a video decoded. Allow the playhead to settle before judging a frame,
  and check both forward and backward scrolling.
- **Cue visibility:** every heading, line, and control becomes fully readable
  somewhere. Inspect kinetic headings line by line and focusable controls even
  when their parent cue is faded.
- **Composition:** readable headings, deliberate cropping, aligned layers,
  complete subjects, and a resolved ending. Inspect the live motion as well as
  still frames; screenshots alone do not prove smoothness.
- **Horizontal rails:** the rail actually travels when intended and every item
  remains reachable by keyboard and in static fallbacks. Check desktop as well
  as narrow layouts; a rail can fit one viewport and overflow another.
- **Fixed custom stages:** inspect the rendered scene, not just section markers
  or internal progress. Diagnostic attributes can supplement visible evidence
  but are not an automatic pass/fail detector.

Capture representative screenshots with the integrated browser and inspect
problem frames at full size. Compare the sequence alongside the live scroll.
Do not claim a generated contact sheet or report file unless one was actually
created. Fix findings and repeat the affected journey.

## Legibility and contrast

Inspect text over the actual composited scene at multiple positions. Light
text is weakest over bright patches; dark text is weakest over dark patches.
Check both directions, including gradients, scrims, fades, and inverted sections.
A poster frame alone is insufficient evidence for copy over changing video.

A visual check is not a numerical contrast audit. Report exact ratios only
when measured with an available supported method, and label visual-only
checks accordingly. If measurements are unavailable, record that limitation.
When measuring an isolated background, preserve the scrim while hiding the
text, and exclude foreground navigation from the background sample. A sibling
scrim avoids accidentally hiding it with the copy's pseudo-elements.

## Interaction and fallback checks

Exercise menus, links, buttons, dialogs, downloads, and forms with their real
outcomes, using isolated test data where needed. Verify keyboard focus order,
visible focus, and controls inside pinned/faded sections. Inspect asset failures
and console/network information only when exposed by the integrated browser;
report unavailable diagnostics rather than assuming zero errors.

Check mobile composition, a compact phone layout, and reduced motion through
supported browser controls when available. Do not invent resizing or emulation
APIs. If a mode is unsupported, record it as unverified. Source inspection can
supplement but cannot replace a rendered layout test.
Under reduced motion, clips should remain unfetched, posters should hold, and
all copy, controls, and horizontal-rail content must remain reachable. Check
no-WebGL and no-JavaScript fallbacks where applicable and supported.

**Video credit accounting.** Only generated videos use kie.ai. Record the
actual calls and distinguish current estimates from measured charges. An
account balance difference cannot isolate this build when other jobs share the
account. Integrated image generation does not consume the KIE video budget.

**Mobile.** Pinned stages use `100svh` so the URL bar does not cause a jump.
Copy reflows and does not collide with the fixed bar. Confirm the phone encodes
actually load. Check the portrait crop of every clip: a 16:9 move composed
around left-hand negative space loses exactly that space at 9:16
(see [assets.md](assets.md)). Mobile is a first-class target, not a check at
the end: the phone clips are cut portrait, the lerp is retuned for touch, tap
targets are grown, and every one of those is authored, not inherited.

### The phone is a different machine

The integrated desktop browser cannot reproduce an iPhone's video decoder,
autoplay policy, Low Power Mode, or touch scrolling. Report desktop and mobile
layout checks separately from tests on a real phone.

What iOS does to a scrub clip, and what the engine now handles for you:

- iOS will not *paint* a muted video that has never been played. Seeks land,
  `seeked` fires, and the picture stays on one frame. The decoder has to be
  primed with one `play()`/`pause()`.
- The engine primes each clip at `loadedmetadata` (a muted inline `play()`
  needs no gesture outside Low Power Mode) and retries on `touchstart`,
  `touchend`, `pointerdown`, `click` and `scroll`. `touchend` matters: the
  HTML spec's activation-triggering events include `touchend` but **not**
  `touchstart`, so a Low Power Mode phone that rejects the touchstart attempt
  gets a valid one when the finger lifts.
- A prime must be re-attemptable per clip. A one-shot prime on first touch
  loses a race: the reader touches to scroll within the first second, while
  the hero's megabytes are still downloading, and the shot is spent on a
  sourceless element. The tell is exactly "the first clip is frozen and every
  later one works".
- iOS may leave a `play()` promise pending forever, and may leave `seeking`
  true forever. Both were permanent silent freezes; the engine now releases
  the priming flag on a timer and re-issues any seek stuck past 700ms. The
  reveal also fires on a 2.5s timeout, never only on `seeked`.

Do not re-implement any of that in page JS, and do not strip it when copying
the engine. If a phone still shows a frozen clip, the cause is past what this
machine can measure, which is what the next section is for.

### Ship the diagnostic with the site

You get one question per round with a real device, so make the round count.
`references/device-diag.html` is a standalone page that scrubs the suspect
clip two ways (blob URL, exactly as the engine loads it, and direct file src)
beside a known-good clip, prints a MOVING / FROZEN verdict over each pane,
and reports prime results, seek counts and distinct painted frames. Edit its
`TESTS` array to point at the build's own clips, deploy it next to the site,
and one screenshot from the phone isolates the layer: blob loading, the file,
the device's decode policy, or the engine's lifecycle. Deploy it **with** the
first mobile fix, not after the fourth.

### Ask what differs before asking what's broken

The debugging lesson that cost three wasted rounds: "desktop works, the phone
does not" reads as a platform difference and invites platform theories
(codecs, keyframes, resolution). **"One clip works and another does not, on
the same device"** cannot be a platform difference. Before theorising, write
down every way the working case differs from the broken one; the bug lives in
that list. On the build above the list had one entry: the hero is first, so
it loads while the first touch is being spent.

**Keyboard.** Tab through. Focus order matches visual order, the focus ring is
visible against every ground it crosses, and nothing reachable is parked at
opacity 0. Cues set `pointer-events: none` when faded, but a focusable element
inside a faded cue is still a trap.

The engine helps here but does not finish the job, and the gap is specific:

- **It handles the ordinary case.** On `focusin`, if the focused element is
  inside a `[data-cw-act]` and its own cue computes under 0.85, the engine
  scrolls it to the centre of the viewport with `behavior: 'instant'`
  (`smooth` would animate a multi-screen glide with focus off screen the whole
  way). On a `flow` act, centring the element also opens its cue, because the
  element's viewport position and the act's progress move together.
- **It does not fix a pinned act, and cannot with this approach.** A pinned
  stage is `position: sticky`, so the control holds *one* viewport position for
  the entire act. Centring it is then only achievable by scrolling backwards out
  of the act, which parks progress at 0 and leaves the cue dark. Measured: a CTA
  cued at 0.75 on a 3vh pinned act sits at viewport y=70 from progress 0 to
  0.875; `scrollIntoView({block:'center'})` from inside the act lands *before*
  the act's top, at progress 0, cue opacity 0. The control is on screen and
  still invisible.

**On a pinned act, park the act at the progress where the focused element's own
cue is open.** That is page-local work, because only the page knows which cue
belongs to which control, and because act progress runs through `dwell()` when
the act has any, so the scroll target is not a straight inverse of the cue
window. The descent build does exactly this. If a pinned act carries a focusable
control, write that handler and assert it; do not assume the engine covered you.

**Fresh eyes.** Look again later. Timing you tuned for twenty minutes reads
differently when you have forgotten what it is supposed to do.

---

## Failures worth knowing about

Each of these shipped once during this skill's own build, and each looked fine
until it was measured.

| Symptom | Cause |
|---|---|
| A hero headline wrapped to six lines | `max-width` in `ch` on a **container**: `ch` resolves against the container's font-size, not the display size of the heading inside it |
| Centred copy hanging off the left edge | `inset-inline` declared **after** `left: 50%`; the shorthand resets `left` to auto |
| An act that never pins, silently | An author rule setting `position` on the stage. The engine now warns in the console |
| A stray headline painted over a later section | Cues frozen at their last value when their act scrolled out of range |
| A clip stuck on its poster at the top of its act | The reveal waits for a `seeked` event, and a clip already at time 0 never seeks |
| A closing CTA that fades out before the page ends | A two-value cue on the last act, plus a tall section after it |
| Copied headings reading "even whenbreakfast" | Line-split spans abutting with no whitespace between them |
| A headline from act 2 overlapping act 3, failing contrast on the way | A one-value hold cue on a middle act. Only the last act may hold |
| A phone-only contrast failure on a trail-anchored act | The trail scrim aimed at the corner the copy leaves below 860px. The engine now switches it to a band |
| A rail act that shows one frozen screenful under reduced motion | `[data-cw-pan] { transform: none }` deleting the navigation. The engine now falls back to a scroll region |
| Two washed-out video acts no scrim tuning could rescue | Flat supplied footage with no white point. Grade the intermediate, not the CSS |
| A blank stage for the first viewport of a pinned act | A two-value first cue with no ground. Ground or greet |
| A rail heading dragged off-screen under reduced motion | The scroll-region fallback snap-centres a single wide track; keep the act heading outside the region, or give the rail multiple snap stops |
| Keyboard focus landing on a control nobody can see | The browser's scroll-into-view parks the element barely on screen, which is where its cue has not opened, and the opacity check still passes. **The engine now centres it on `focusin`** when the element is inside a `[data-cw-act]` and its cue is under 0.85. That fixes the off-screen half. See the keyboard notes above for what it does not fix |
| A figure or drop numeral rendering as a plain bar | `data-cw-reveal` on type with `line-height` below 1. `clip-path` is relative to the border box, so the wipe eats the ascender and descender. See devices.md §4 |
| An image three times too tall, pushing its own label off the fold | `width` overridden in CSS while `height` still resolves to the HTML attribute. Override both or neither. See taste.md |
| An inverted section rendering its old ink, graded in the wrong direction | `--cw-ink` redefined on the subtree without restating `color`. See taste.md |
| A ground colour arriving a section late | `drift` on a page of short acts; several are part-way through at once. Paint grounds per section. See devices.md §10 |
| Every cue and reveal in a quiet act snapping 0 to 1 | A pinned act at `data-cw-span` ≤ 1, which is one pixel of travel. Minimum useful pinned span is ~1.2 |
| A clip that scrubs beautifully, stops, and then slides up the page as a still photograph | The clip was mapped to the act's pinned travel, which is 0 through the entire entry slide and 1 through the entire exit slide. The engine now maps clip time across the stage's whole visible life by default. See devices.md §1 |
| A custom fixed stage passing while its first screens do nothing | The review inspected flow markers instead of the visible fixed stage. Compare actual rendered frames and declare only genuine resolved holds |
| The hero clip frozen on a real iPhone, later clips fine, every probe green | iOS never paints an unplayed muted video, and the one-shot gesture prime was spent while the hero was still downloading. The engine now primes per clip at `loadedmetadata` and retries on every gesture, including `touchend` |
| A phone clip soft and stuttering while the same file is smooth on desktop | A landscape mobile encode in a portrait viewport: cover-fit decoded the full frame and threw three quarters of it away. Cut the phone clips portrait from the masters (see assets.md) |
| Four rounds of mobile fixes verified green, phone still broken | A desktop browser cannot reproduce the iOS decoder, Low Power Mode, or touch. Deploy `references/device-diag.html` beside the site on the first mobile report and let the phone answer |

The first three are invisible to every check except looking at rendered output.
That is the argument for this whole pass.
