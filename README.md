# Nebel: Home Assistant Theme

A warm, homely theme for Home Assistant: smoky blue-gray base, indigo accent,
amber for light and warmth. Light and dark mode switch automatically with the system.
Optimized for the Companion App (smartphone) and wall tablets, and supports the
standard Home Assistant cards and **Mushroom Cards**.

## Installation

### Via HACS (recommended)
1. HACS → three-dot menu → *Custom repositories* → add `https://github.com/bestog/ha-theme`, type **Theme**.
2. Install "Nebel", then call the action `frontend.reload_themes` (or restart Home Assistant).

### Manually
1. Copy `themes/nebel.yaml` to `/config/themes/`.
2. In `configuration.yaml` (if not already present):
   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```
3. Restart Home Assistant or call `frontend.reload_themes`.

### Enabling it
Profile → *Theme* → **Nebel**, mode *Auto*. For wall tablets, set it per device in the
browser profile, or for a single dashboard via `theme: Nebel` in the view.

## Loading the font (optional, recommended)
The theme uses **Plus Jakarta Sans** and otherwise falls back to the system font.
To load it:
*Settings → Dashboards → ⋮ → Resources → Add resource*

- URL: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`
- Type: **Stylesheet**

(Requires "Advanced mode" in your user profile.)

## card-mod (optional, recommended)
With [card-mod](https://github.com/thomasloven/lovelace-card-mod) (HACS) the theme also applies
styles that variables can't express:
- **Active tiles** (light on, heating running, window open …) get a soft tint of their state color.
- **Tabular figures**: values like temperatures don't jump in width when they change.

Without card-mod these extras are skipped and everything else still works.

## Customizing
All main colors sit at the top of each mode in `themes/nebel.yaml`, marked with
`# ---- Palette (customize here) ----`. Values with `&name` are reused throughout
the file. If you change them there, the change carries through everywhere. For colors
written as RGB (`rgb-…`, `mush-rgb-…`), adjust the matching triplet as well.

| Role | Light | Dark |
|---|---|---|
| Background | `#EEF1F4` | `#1B1F25` |
| Card | `#FFFFFF` | `#252B33` |
| Text | `#2A313B` | `#E3E7EC` |
| Secondary text | `#616C7C` | `#959EAB` |
| Accent (indigo) | `#5866C9` | `#9EA7EE` |
| Warm (light/heating) | `#BA7E34` | `#E7B26C` |

All text and icon colors meet WCAG AA on card and background
(text ≥ 4.5:1, icons ≥ 3:1).

## Preview
`preview/taste-test.html` shows the color direction (variant B = Nebel) in light and dark.

See also: [`DESIGN.md`](DESIGN.md), the design brief behind the decisions.
