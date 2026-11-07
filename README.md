# Hausmeister: Home Assistant Theme

A friendly, everyday-tech theme for Home Assistant. In light mode it uses a warm off-white
page with white cards and charcoal text; in dark mode ("Nachtschicht") it is charcoal with
glowing amber. Amber marks light and warmth, teal means all good, red asks for attention.

It is built from Home Assistant's own means: theme variables plus a small
[card-mod](https://github.com/thomasloven/lovelace-card-mod) layer, with no extra fonts and no
custom cards. It works with the standard cards (Tile, Heading, Badges, Markdown, graphs) and
follows the system's light/dark setting.

**card-mod (recommended):** gives active tiles a filled icon square with a dark symbol (lights
and heating in yellow), tighter headings and even digits. Without card-mod the theme still
works; active tiles then show Home Assistant's tinted icon square.

## Installation

### Via HACS (recommended)
1. HACS → three-dot menu → *Custom repositories* → add `https://github.com/bestog/ha-theme`, type **Theme**.
2. Install "Hausmeister", then call the action `frontend.reload_themes` (or restart Home Assistant).

### Manually
1. Copy `themes/hausmeister.yaml` to `/config/themes/`.
2. In `configuration.yaml` (if not already present):
   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```
3. Restart Home Assistant or call `frontend.reload_themes`.

### Enabling it
Profile → *Theme* → **Hausmeister**, mode *Auto*.

## Customizing
All main colors sit at the top of each mode in `themes/hausmeister.yaml`, marked with
`# ---- Palette (customize here) ----`. Values with `&name` are reused throughout the file,
so a change there carries through everywhere. For colors written as RGB (`rgb-…`), adjust the
matching triplet as well.

| Role | Light | Dark |
|---|---|---|
| Page | `#FAFAF7` | `#16181D` |
| Card / line | `#FFFFFF` / `#E4E2DA` | `#20232A` / `#2C3038` |
| Text / secondary | `#16181D` / `#6A707C` | `#F2F1EC` / `#9AA0AA` |
| Primary (switches, buttons) | `#16181D` | `#F5B544` |
| Light & warmth | `#B97A12` | `#F5B544` |
| All good | `#1F8C80` | `#3CC4B4` |
| Attention (open window/door, warning) | `#D9534A` | `#EF6A5F` |
| Alarm / error | `#A8322B` | `#FF5247` |
| Other "on" states | `#3B6FE0` | `#6F97F2` |

Text meets WCAG AA (≥ 4.5:1) on cards and page; state and icon colors meet ≥ 3:1 on cards.

## Preview
`preview/hausmeister-varianten.html` compares the design directions (chosen: 1 light, 3 dark).
See also [`DESIGN.md`](DESIGN.md), the design brief behind the decisions.
