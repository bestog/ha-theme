// Hausmeister theme: loads Barlow (text) and Barlow Semi Condensed (headings, values).
// SIL OFL 1.1, latin subset. Each face tries the self-hosted copy in /config/www/fonts
// (served at /local/fonts) first and falls back to Google's copy while it is missing.
// Register as a dashboard resource of type "JavaScript module".
const ID = "hausmeister-fonts";
const G = "https://fonts.gstatic.com/s/";
const FACES = [
  ["Barlow", 400, "barlow-400", "barlow/v13/7cHpv4kjgoGqM7E_DMs5"],
  ["Barlow", 500, "barlow-500", "barlow/v13/7cHqv4kjgoGqM7E3_-gs51os"],
  ["Barlow", 600, "barlow-600", "barlow/v13/7cHqv4kjgoGqM7E30-8s51os"],
  ["Barlow", 700, "barlow-700", "barlow/v13/7cHqv4kjgoGqM7E3t-4s51os"],
  ["Barlow Semi Condensed", 600, "barlow-semi-condensed-600", "barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfp66_B2sl"],
  ["Barlow Semi Condensed", 700, "barlow-semi-condensed-700", "barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfw6-_B2sl"],
];
const RANGE = "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD";
if (!document.getElementById(ID)) {
  const style = document.createElement("style");
  style.id = ID;
  style.textContent = FACES.map(([family, weight, file, google]) => `@font-face {
  font-family: '${family}';
  font-style: normal;
  font-weight: ${weight};
  font-display: swap;
  src: url('/local/fonts/${file}.woff2') format('woff2'),
       url('${G}${google}.woff2') format('woff2');
  unicode-range: ${RANGE};
}`).join("\n");
  document.head.appendChild(style);
}
