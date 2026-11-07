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

1. Copy `fonts/plus-jakarta-sans-latin.woff2` to `/config/www/fonts/` (File editor app,
   Studio Code Server or Samba). Files in `/config/www` are served at `/local/`.
2. *Settings → Dashboards → ⋮ → Resources → Add resource*, type **JavaScript module**,
   and paste the contents of `fonts/nebel-font.js` as an inline resource, or copy it to
   `/config/www/fonts/` and use the URL `/local/fonts/nebel-font.js`.

The loader prefers the self-hosted file and only falls back to Google Fonts while the
file is missing, so the wall tablet keeps its font offline and after a cold start.
The font is licensed under the SIL Open Font License 1.1 (`fonts/OFL.txt`).

## card-mod (optional, recommended)
With [card-mod](https://github.com/thomasloven/lovelace-card-mod) (HACS) the theme also applies
styles that variables can't express:
- **Active tiles** (light on, heating running, window open …) get a soft tint of their state color;
  in dark mode a lighter tint plus a fine 1px ring in the state color.
- **Tabular figures**: values like temperatures don't jump in width when they change.

Without card-mod these extras are skipped and everything else still works.

## Customizing
All main colors sit at the top of each mode in `themes/nebel.yaml`, marked with
`# ---- Palette (customize here) ----`. Values with `&name` are reused throughout
the file. If you change them there, the change carries through everywhere. For colors
written as RGB (`rgb-…`), adjust the matching triplet as well.

| Role | Light | Dark |
|---|---|---|
| Background | `#EFEEEA` | `#1B1F25` |
| Card | `#FFFDF8` | `#252B33` |
| Text | `#2A313B` | `#E3E7EC` |
| Secondary text | `#616C7C` | `#959EAB` |
| Accent (indigo) | `#5866C9` | `#9EA7EE` |
| Warm (light/heating only) | `#BA7E34` | `#E7B26C` |
| Attention (open window/door, warning) | `#C9605B` | `#E8807C` |
| Alarm / error | `#A83F3B` | `#F26B65` |

All text colors meet WCAG AA on cards and on the page background (≥ 4.5:1); state and
icon colors meet ≥ 3:1 on cards, where Home Assistant places them (tiles, badges).

## Preview
`preview/taste-test.html` shows the color direction (variant B = Nebel) in light and dark.

See also: [`DESIGN.md`](DESIGN.md), the design brief behind the decisions.
