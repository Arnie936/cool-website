# Design and delivery standard

Use these principles alongside [hero-depth.md](hero-depth.md).
Build the spatial story, structure, and interactions for the actual visitor.

## 1. Establish the actual brand before art direction

Inspect supplied logos, typefaces, product photography, and brand guidelines
before generating imagery or drawing a replacement mark. Open the assets;
filenames are not proof of their contents. An app icon named for one service
turned out to depict another. Correct the identity, not just its filename.

For an existing product, inspect its current official website and documentation.
Record audience, offer, supported platforms, real destinations, and which facts
remain uncertain. Separate a free community from its paid classroom when
labeling screenshots. Do not invent testimonials, availability, nutrition,
pricing, or launch dates. An invented brand needs an honest, complete visitor
flow appropriate to its state, such as launch interest or an editorial tool.

Research visual references in the browser, including their intermediate scroll
states. Godly, Awwwards, motion galleries, and component libraries can help find
references. For each useful reference, write: observed behavior, why it works,
and the principle to adapt. A list of URLs is not evidence of design research.

## 2. Design the first viewport as a physical composition

Before generating assets, write a layer contract:

| Plane | Asset and depth | Independent movement | Contact/occlusion rule |
|---|---|---|---|
| Far environment | Clean background plate | Smallest displacement | No duplicate extracted subject |
| Midground | Architecture, landscape, or a meaningful product surface | Moderate displacement | Establishes scale and distance |
| Focal subject | Real product, alpha cutout, or rendered object | Deliberate travel/rotation | Stays on its support when grounded |
| Near foreground | Cutout, framing element, or physical detail | Strongest restrained displacement | Frames the subject; preserves key copy |
| Atmosphere | Light, mist, dust, or translucent material if appropriate | Slow independent change | Creates separation without washing out the page |
| Typography and controls | Semantic HTML | Stable or carefully staged | Complete headline and primary action remain readable |

Use only planes the scene needs. Several divs that move together are one visual
plane. The opening must already be compelling before the visitor scrolls.
On fine-pointer devices, author subtle pointer response when it strengthens
depth. It is additive: touch, keyboard, and reduced-motion visitors still get
a complete composition. Never request pointer lock for parallax.

Write the opening, midpoint, and resolved exit in plain language. Scrolling
should reveal a spatial relationship or advance the story: outside becomes
inside, scattered becomes ordered, near detail passes the viewer. Unrelated
floating decorations do not become meaningful because their speeds differ.

## 3. Choose the rendering method for the subject

- Use HTML/CSS and genuine alpha imagery for photographic planes, botanicals,
  liquid arcs, foreground framing, and architecture with a transparent opening.
- Use a real 3D renderer when rotation, material response, changing shadows,
  or a useful lighting control materially improves the experience, such as a
  voice sculpture, architectural mark, lamp, or rotating record. A generic primitive is not a substitute for modeling
  the actual object or brand mark accurately.
- Choose video for authored footage or a shot that needs it, not as a default
  replacement for independently moving planes.

Keep the shared engine unchanged for page-specific behavior. Write the bespoke
choreography in page-local code. A shared progress/pointer utility is fine;
generating all pages from one content configuration is not structural variety.

For custom progress, distinguish pinned travel from a natural-flow hero. Dividing
by `elementHeight - viewportHeight` when the two are equal causes a one-pixel
scene jump. Map natural-flow motion across an intentional visible interval.
Pause offscreen/hidden rendering, cap pixel density, and avoid permanent
`preserveDrawingBuffer` on WebGL. Enable it only for an explicit poster capture.

## 4. Generate assets for compositing, then inspect the result

Use the integrated image model for stills, edits, and cutouts. Use the selected provider, kie.ai or the official Higgsfield API, only
for video generation. Follow [assets.md](assets.md) for provider setup. Specify the full
subject, camera, consistent light direction, clear silhouette, and generous
safe margins. A label, wheel, flower, or handle cropped by the generated frame
cannot be repaired by moving the image in CSS. Regenerate incomplete subjects.

Retain originals. Prepare optimized delivery files with real alpha, inspect
their edges over light and dark backgrounds, and inspect actual browser
compositing. A solid magenta plate requires keying and spill removal; it is not
already transparent. Verify spokes, petals, and fine edges after extraction.
Do not judge an alpha image solely by a previewer's exposed RGB backing color.

Group physically connected elements such as a bicycle and its ground shadow.
Keep the room's window opening aligned with the landscape behind it throughout
the transition. Prevent duplicate subjects and visible matte seams.

For WebGL, render exact desktop and phone posters from the final scene. Test
with WebGL unavailable. An unrelated stock picture or blank canvas is not an
acceptable fallback. Preserve complete reading and navigation without motion.

## 5. Make the entire page specific to its visitor

Plan the feeling curve, actual information order, navigation, and ending before
filling sections. Give the visitor agency tied to the offer. Selected state
should carry into examples, exports, or inquiries rather than reset at the CTA.

| Example application | Spatial encounter | Useful interaction or structural lesson |
|---|---|---|
| Learning community | Independent ridges reveal a real community window | Learning route, accurately labeled community proof, and real membership paths |
| Coffee product | A genuine can travels through coffee splash and separate beans | Lateral flavor collection carries the chosen can into launch interest |
| Voice software | Physical lime/chrome voice elements resolve into order | Destination dock changes the example; a clearly labeled local cleanup illustration is usable |
| Advisory service | The architectural brand mark settles into its structure | Side navigation, service ledger, and a downloadable decision brief |
| Alpine hotel | The alpine landscape becomes the view through a room window | A day planner carries its selection into actual correspondence |
| Lighting collection | A modeled pleated lamp responds to light | A photographic object-index drawer, dimmer, and collection desk |
| Ocean exhibition | A translucent specimen approaches and passes the viewer | Depth presets update a sourced light-zone model; the visitor's notebook is the ending |
| Fragrance collection | A complete amber bottle sits among separate botanical planes | Scent composition updates a persistent portrait bookmark and a final document |
| Bicycle collection | A grounded bicycle moves against distant terrain and a near ledge | Terrain presets produce a selected ride dossier and useful export |
| Music event | Independent curtains open behind a near reflective record | Opt-in audio controls stay synchronized; a guest-list form is part of the invitation |

These are examples, not ten mandatory page grammars. A new grammar must define
actual structural constraints. A renamed grammar, palette, industry, or hero
parameter earns no fingerprint credit. Compare each build with every relevant
historical row and each peer in a collection. Preserve rejected rows honestly.

Short galleries, editorial pages, and working surfaces may need less than eight
viewport-heights. Never add empty pinning or filler to satisfy a length target.
Natural flow can be the right choice even when the object itself has depth.
The hero earns attention; the rest of the page must reward it.

## 6. Art-direct and verify the mobile scene separately

Check both a typical phone and a compact 360 × 640 viewport. Recompose the
subject, typography, foreground crop, travel, and scene duration. Do not shrink
the desktop arrangement uniformly. Keep complete subjects when their silhouette
matters, preserve the full heading, and make controls comfortably operable.

Check sticky-header offsets and inherited desktop transforms. Use valid angle
units when resetting rotation, such as `rotate: 0deg`. Verify every intermediate
state: a phone opening can look good while the final room frame covers its copy.
Keyboard focus through a horizontal rail must bring the relevant panel into view.

## 7. Require visual and functional evidence before delivery

Use Codex's integrated browser through `mcp__cua_repl` for every browser action
and screenshot. Follow its current documentation and the capability limits in
[verify.md](verify.md). Record unsupported checks as unverified.

1. Capture the opening, multiple intermediate positions, and resolved hero exit
   on desktop and phone. Sample within each section, not just evenly across the
   total page. Inspect captured sequences and full-size problem frames.
2. Compare actual pointer-state screenshots. Changing CSS transforms or an
   arbitrary progress counter is not proof that meaningful pixels changed.
3. Check reduced motion, no-WebGL posters where applicable, compact phones,
   keyboard entry, menus, drawers, and reading order.
4. Check console errors, failed requests, broken images, links, overflow, and
   contrast on the composited scene. Automated accessibility checks supplement
   visual judgment; they do not certify the whole experience. Document justified
   decorative exclusions precisely and never exclude real copy to get green.
5. Exercise the real controls and their consequences. Verify download contents,
   synchronized selections, validation, persisted inquiries, and keyboard dialog
   closure. Do not display false success. Test forms against isolated data.
6. Check no-JavaScript form behavior. A disabled scripted form must not default
   to a GET request that places personal input in the URL.
7. Fix findings and rerun the affected checks. Preserve the original results and
   identify which later run supersedes a failure. Do not reuse an earlier green
   verdict for a changed release.
8. Open the actual deployment package at its intended root/base URL. Verify
   scripts, module imports, fonts, imagery, and real server behavior there.

Deliver the final reviewed files, not an earlier generator output. Re-running a
base builder can silently discard later refinements. Keep authoring steps
reproducible or mark the final source clearly. Package only needed assets and
licenses; exclude keys, private submissions, and local databases. State which
hosting or integrations remain unconfigured. An inquiry saved for review is not
an email sent, a paid order, or a confirmed booking.

The delivery gate is a complete, visually inspected experience that works.
