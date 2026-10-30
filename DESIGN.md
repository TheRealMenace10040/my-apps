---
name: My Apps
description: A front-desk key board for every app Dennis has built; tap a fob, the app opens.
colors:
  board: "#18191b"
  brass: "#c9a24a"
  brass-hi: "#e6c574"
  brass-lo: "#8c6d2a"
  brass-dim: "rgba(201, 162, 74, 0.3)"
  text: "#ecebe7"
  shared-copper: "#9c5a2b"
  play-slate: "#5f7480"
  tools-pewter: "#a9abae"
  work-brass: "#d8b55a"
  work-ink: "#18191b"
  fob-ink-light: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(30px, 6vw, 52px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 125"
  numeral:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    letterSpacing: "0.2em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.03em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.3
    fontVariation: "'wdth' 88"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    letterSpacing: "0.12em"
  sub:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.16em"
rounded:
  plate: "3px"
  tab: "4px"
  fob: "16px 16px 34px 34px / 16px 16px 44px 44px"
  ring: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  index-h: "56px"
  tab-gap: "8px"
  hook-gap-phone: "12px"
  hook-gap-row: "16px"
  hook-gap-col: "18px"
  hook-drop: "34px"
  row-top: "30px"
  board-max: "1120px"
components:
  index-tab:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.board}"
    typography: "{typography.label}"
    rounded: "{rounded.tab}"
    padding: "0 14px 0 10px"
    height: "36px"
  index-tab-hover:
    backgroundColor: "{colors.brass-hi}"
    textColor: "{colors.board}"
  row-heading:
    textColor: "{colors.brass}"
    typography: "{typography.headline}"
    padding: "0 0 8px"
  fob-shared:
    backgroundColor: "{colors.shared-copper}"
    textColor: "{colors.fob-ink-light}"
    typography: "{typography.title}"
    rounded: "{rounded.fob}"
    padding: "24px 14px 20px"
    height: "108px"
  fob-play:
    backgroundColor: "{colors.play-slate}"
    textColor: "{colors.fob-ink-light}"
    rounded: "{rounded.fob}"
  fob-tools:
    backgroundColor: "{colors.tools-pewter}"
    textColor: "{colors.work-ink}"
    rounded: "{rounded.fob}"
  fob-work:
    backgroundColor: "{colors.work-brass}"
    textColor: "{colors.work-ink}"
    rounded: "{rounded.fob}"
  fob-wide:
    padding: "26px 14px 20px"
    height: "150px"
---

# Design System: My Apps

## Overview

**Creative North Star: "The Front-Desk Key Board"**

The launcher is a hotel front-desk key board after hours: a charcoal panel lit from above by a soft lamp, brass hooks screwed in rows, and on every hook a moulded fob in its row's colour with a stamped two-digit number. Every app is a key; the row is recognised by colour before any word is read, and the number is the room. The system exists to make one person's launching fast, so the metaphor is carried by material (brass, plastic, a ring through a punched hole) rather than by decoration around it.

Density is a working board, not a showcase: two fobs across on a phone, four to five on desktop, a sticky brass thumb index that jumps to a row. Type is one family, Archivo, pushed to its extremes of width: wide and heavy for the wordmark and stamped numerals, condensed for fob descriptions. Motion is physical and singular: a fob swings on its hook when touched and settles.

The world is charcoal and metal, chosen by Dennis over the earlier walnut board. There is no grain or texture; the only atmosphere is the warm lamp falloff at the top of the board.

**Key Characteristics:**
- Charcoal board, brass hardware, four coloured fob rows.
- Every fob hangs: plate, stem, ring, then the tag.
- Stamped two-digit hook numbers (row then position) are the address of each app.
- One family (Archivo), ranked by width, weight and case, not by many sizes.
- The swing on the hook is the only motion vocabulary.

## Colors

A dark, warm-metal palette: a near-black charcoal ground, one brass family for every piece of hardware, and four muted group colours reserved for the fobs.

### Primary
- **Hardware Brass** (`brass`): every fixture on the board: row-heading text and rules, the index tabs, the per-slot hook plates and stems, the fob rings, selection highlight. Its highlight **Polished Brass** (`brass-hi`) is the lit edge (tab bevel, hook gradient top, hover tab, focus outlines); **Shadowed Brass** (`brass-lo`) is the turned-away side of the hook gradient. **Tarnished Brass Line** (`brass-dim`) is the 30% brass used for hairline rules (index bottom border, row-heading underline) and the scrollbar thumb.

### Secondary (the fob rows)
- **Shared Copper** (`shared-copper`): the Shared row's fobs and the swatch in its index tab, with white ink.
- **Play Slate** (`play-slate`): the Play row, with white ink.
- **Tools Pewter** (`tools-pewter`): the Tools row, with dark ink (`work-ink`). Moved from graphite to pewter so the rows stay distinguishable on charcoal.
- **Work Brass** (`work-brass`): the Work row, a lighter, yellower brass than the hardware, with dark ink.

### Neutral
- **Front-Desk Charcoal** (`board`): page ground, sticky index background, the hole inside each fob ring, the iOS status-bar cover, manifest theme and background colour, and dark ink on brass and light fobs.
- **Lamp-Lit Paper** (`text`): the wordmark and default text on the board.
- **Lamp Falloff**: a single radial gradient at the top of the board (`radial-gradient(120% 70% at 50% 0%, rgba(255, 220, 160, 0.06), transparent 70%)`). It is light, not texture.

### Named Rules
**The Hardware Is Brass Rule.** Anything that is a fixture on the board (rules, hooks, rings, tabs, focus) is brass in one of its three tones. Group colours never appear on fixtures except as the small swatch in an index tab.

**The Row Owns Its Colour Rule.** A group colour belongs to exactly one row and is set once per row (`--row` and `--ink` on the row and its tab). Light rows (Tools, Work) take charcoal ink; dark rows (Shared, Play) take white ink. A new row needs its own colour and an ink that passes contrast on it.

## Typography

**Display Font:** Archivo (variable width 62 to 125, weight 500 to 800), with system-ui, sans-serif
**Body Font:** Archivo, same family

**Character:** One grotesque used at its width extremes: stretched to 125% for the wordmark and stamped numerals so they read as pressed metal, condensed to 88% for descriptions so three lines fit a fob.

### Hierarchy
- **Display** (800, clamp(30px, 6vw, 52px), line-height 1, 125% width, uppercase): the "My Apps" wordmark only.
- **Sub** (600, 12px, 0.16em tracking, uppercase, brass): the live line under the wordmark ("14 keys", plus the desktop typing hint).
- **Numeral** (800, 26px, line-height 1, 125% width, tabular figures): the stamped hook number on each fob.
- **Headline** (800, 13px, 0.2em tracking, uppercase, brass): row names, sitting on a 2px tarnished-brass rule.
- **Label** (800, 13px, 0.12em tracking, uppercase): index tabs. Under 480px they drop to 12px and 0.06em so four tabs fit one line.
- **Title** (800, 14px, 0.03em tracking, uppercase, balanced wrap): the app name on a fob.
- **Body** (500, 14px, line-height 1.3, 88% width): the fob description, clamped to three lines, shown from 640px up.

### Named Rules
**The One Fob Size Rule.** Name and description on a fob share one text size (14px); rank comes from weight, case and width. Only the stamped numeral is larger.

**The Width Is The Voice Rule.** Emphasis is made by stretching or condensing Archivo, not by adding families or sizes.

## Layout

A centred board, max 1120px wide, with a fluid gutter (clamp(16px, 4vw, 48px)). Top to bottom: the desk header (wordmark and sub-line), a sticky 56px thumb index under the safe-area inset, then one section per row. Above 1184px the index's left padding aligns its first tab with the board edge.

Each row is a labelled section 30px below the last, its heading ruled off, then a grid of hooks: two equal columns at 12px gaps on phones, and from 640px `auto-fill` columns of at least 196px with 16px row and 18px column gaps. Every slot reserves a 34px drop at its top for the hook hardware. Below 640px index tabs stretch to share the bar; from 640px they sit at natural width.

Phones show number and name only; descriptions join at 640px, where fobs grow from 108px to 150px tall. The body keeps 56px plus the bottom safe-area inset clear at the foot. Scroll targets offset by the index height so a jumped-to row is not hidden under the bar.

## Elevation & Depth

Depth is physical and lit from above: the board is flat, and everything that hangs on it casts a short, soft drop shadow downward with a lighter top edge. There are no floating panels, no cards lifting on hover, and no offset shadows.

### Shadow Vocabulary
- **Hanging fob** (`box-shadow: inset 0 -3px 0 rgba(0,0,0,0.18), 0 10px 18px -6px rgba(0,0,0,0.7)`): every fob. The inset is the moulded bottom lip; the outer shadow drops below the tag. Paired with a top gloss (`linear-gradient(180deg, rgba(255,255,255,0.12), transparent 38%)`) over the row colour.
- **Brass tab** (`box-shadow: inset 0 1px 0 #e6c574, 0 2px 6px rgba(0,0,0,0.35)`): index tabs, a lit top bevel and short drop.
- **Hook plate** (`box-shadow: 0 2px 3px rgba(0,0,0,0.5)`): the screwed plate above each slot.
- **Ring** (`box-shadow: 0 1px 2px rgba(0,0,0,0.5), inset 0 1px 1px rgba(0,0,0,0.6)`): the brass ring, with an inset for the punched hole.

### Named Rules
**The Lamp Above Rule.** Light comes from the top: highlights sit on top edges (gloss, bevels, the `brass-hi` end of gradients) and shadows fall straight down. Never offset a shadow sideways.

## Shapes

The fob silhouette carries the system: a tag with gently rounded shoulders and a deep, rounded bottom (`16px 16px 34px 34px / 16px 16px 44px 44px`), like a moulded hotel key fob. Hardware is small and nearly square: tabs at 4px, hook plates at 3px, the stem rounded only at its foot. The ring is a full circle with a 3px brass stroke, sitting over the fob's top centre where the hole would be punched. Hairline brass rules (1px under the index, 2px under row names) are the only borders on the board.

## Components

### Index Tabs
Brass shortcut tabs in a sticky bar; a thumb jumps straight to a row.
- **Shape:** gently squared (4px), 36px tall, padding 0 14px 0 10px.
- **Colour:** brass ground with charcoal Label type; a 14px swatch of the row colour, outlined 2px in charcoal, leads each tab.
- **Hover / Focus:** hover lifts to polished brass; focus-visible draws a 2px polished-brass outline at 3px offset.

### Row Headings
- **Style:** brass Headline type on a 2px tarnished-brass underline, 8px below the text, 16px above the hooks.

### Hook (per slot)
- **Structure:** an 18 by 10px brass plate with a vertical gradient (polished to shadowed) and a 4 by 20px stem with a horizontal gradient, centred above each fob. Every slot gets its own hook; there is no shared rail.

### Key Fob (signature)
The app itself: a coloured, moulded tag hanging on its ring.
- **Shape:** the fob silhouette (see Shapes), min 108px tall on phones and 150px from 640px; padding 24px 14px 20px (26px top on wide).
- **Colour:** the row's colour under a 12% white top gloss, with the row's ink.
- **Content:** stamped numeral, then uppercase name, then (640px up) a condensed three-line description. The numeral is decorative to assistive tech; the link text is the name and description.
- **Focus / armed:** 3px polished-brass outline at 5px offset, shared by keyboard focus and the "armed" state while a typed number matches.
- **Motion:** pivots from 14px above its top edge (the hook). Hover (fine pointers) and press both swing it: 6deg, -3.5deg, 1.4deg, rest over 0.9s on `cubic-bezier(0.16, 1, 0.3, 1)`. Press uses its own keyframe name so a press restarts the swing even while hovering. An armed fob stirs once (2deg over 0.5s). All motion is gated on `prefers-reduced-motion: no-preference`.
- **Typing:** on desktop, typing a fob's two-digit hook number (row then position) opens it in a new tab; the first digit arms the matching fobs, Escape or 1.5s clears.

### Home-Screen Icon
A single Work-brass fob on a brass hook and ring over charcoal, with two charcoal bars for a label, rendered from one SVG source at 512px and resized to 192 and 180. The favicon is the same fob without the bars.

## Do's and Don'ts

### Do:
- **Do** hang every app on its own hook: plate, stem, ring, fob, in that order.
- **Do** keep fixtures brass (`brass`, `brass-hi`, `brass-lo`, `brass-dim`) and fobs in their row colour.
- **Do** number fobs row then position (Play's second key is 22), so appending an app never renumbers the others.
- **Do** rank fob text by weight, case and width at one 14px size.
- **Do** light from above: gloss and bevels on top, soft shadows straight down.
- **Do** gate every swing behind `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** add grain, wood or paper texture to the board; the lamp falloff is the only atmosphere.
- **Don't** reuse a row's colour for another row or for hardware.
- **Don't** put light ink on Tools pewter or Work brass, or dark ink on Shared copper or Play slate.
- **Don't** lift fobs on hover; they swing on the hook, they don't float.
- **Don't** add a second typeface; vary Archivo's width instead.
