(function(){
"use strict";

/* ============ Icons (inline SVG, multi-color detailed glyphs) ============ */
const PAL = {
  blue:"#3E7BFA", lightblue:"#8FB8FF", navy:"#274C8A",
  orange:"#F2994A", green:"#33A871", darkgreen:"#1F7A50",
  purple:"#9B6FDB", red:"#E8564F", teal:"#2FB8AE",
  yellow:"#F2C230", pink:"#E667A6", indigo:"#6C63C9",
  brown:"#A9702F", gold:"#D4AF37", gray:"#8A94A6",
};

const ICONS = {
  dashboard: `<rect x="3" y="3" width="8" height="8" rx="2" fill="${PAL.blue}"/><rect x="13" y="3" width="8" height="8" rx="2" fill="${PAL.orange}"/><rect x="3" y="13" width="8" height="8" rx="2" fill="${PAL.green}"/><rect x="13" y="13" width="8" height="8" rx="2" fill="${PAL.purple}"/>`,
  exam: `<path d="M9 2h6l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#EAF1FF" stroke="${PAL.blue}" stroke-width="1.5"/><path d="M14 2v5h5" fill="none" stroke="${PAL.blue}" stroke-width="1.5"/><path d="M8 13h8" stroke="${PAL.orange}" stroke-width="1.8"/><path d="M8 17h5" stroke="${PAL.green}" stroke-width="1.8"/><path d="M8 9h3" stroke="${PAL.purple}" stroke-width="1.8"/>`,
  pbq: `<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" fill="none" stroke="${PAL.indigo}" stroke-width="1.6"/><path d="M9 11l3 3L22 4" fill="none" stroke="${PAL.green}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  settings: `<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" fill="none" stroke="${PAL.blue}" stroke-width="1.5"/><circle cx="12" cy="12" r="3.1" fill="${PAL.orange}"/>`,
  acronym: `<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#FBF0DC" stroke="${PAL.brown}" stroke-width="1.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" stroke="${PAL.brown}" stroke-width="1.5"/><path d="M9 7h7" stroke="${PAL.orange}" stroke-width="1.8"/><path d="M9 11h5" stroke="${PAL.teal}" stroke-width="1.8"/>`,
  download: `<path d="M12 3v12" stroke="${PAL.blue}" stroke-width="2"/><path d="M7 10l5 5 5-5" fill="none" stroke="${PAL.blue}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 19h16" stroke="${PAL.orange}" stroke-width="2.4" stroke-linecap="round"/>`,
  domain1: `<path d="M9 18h6" stroke="${PAL.gray}" stroke-width="1.5"/><path d="M10 22h4" stroke="${PAL.gray}" stroke-width="1.5"/><path d="M12 2a7 7 0 0 0-4 12.7c.7.5 1.1 1.3 1.1 2.1v.2h6v-.2c0-.8.4-1.6 1.1-2.1A7 7 0 0 0 12 2z" fill="${PAL.yellow}" stroke="${PAL.orange}" stroke-width="1.2"/>`,
  domain2: `<path d="M21 12a9 9 0 1 1-3-6.7" fill="none" stroke="${PAL.blue}" stroke-width="1.8"/><path d="M21 3v6h-6" fill="none" stroke="${PAL.orange}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
  domain3: `<path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" fill="${PAL.teal}" stroke="${PAL.navy}" stroke-width="1.2"/>`,
  domain4: `<path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" fill="${PAL.purple}" stroke="${PAL.gold}" stroke-width="1.2"/>`,
  chevron: `<path d="M9 6l6 6-6 6" fill="none" stroke="${PAL.gray}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
  check: `<path d="M20 6L9 17l-5-5" fill="none" stroke="${PAL.green}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  cross: `<path d="M18 6L6 18M6 6l12 12" stroke="${PAL.red}" stroke-width="2.2" stroke-linecap="round"/>`,
  flag: `<path d="M4 22V3" stroke="${PAL.brown}" stroke-width="1.7" stroke-linecap="round"/><path d="M4 4h13l-2.5 4L17 12H4z" fill="${PAL.red}" stroke="${PAL.red}"/>`,
  book: `<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#E8F0FF" stroke="${PAL.navy}" stroke-width="1.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" stroke="${PAL.navy}" stroke-width="1.5"/><path d="M9 8h7M9 12h7" stroke="${PAL.blue}" stroke-width="1.3"/>`,
  target: `<circle cx="12" cy="12" r="9" fill="none" stroke="${PAL.red}" stroke-width="1.6"/><circle cx="12" cy="12" r="5.3" fill="none" stroke="${PAL.orange}" stroke-width="1.6"/><circle cx="12" cy="12" r="1.6" fill="${PAL.red}"/>`,
  trophy: `<path d="M7 4h10v5a5 5 0 0 1-10 0V4z" fill="${PAL.gold}" stroke="#B8891A" stroke-width="1.1"/><path d="M17 5h3a3 3 0 0 1-3 5M7 5H4a3 3 0 0 0 3 5" fill="none" stroke="${PAL.gold}" stroke-width="1.4"/><path d="M8 21h8M12 17v4" stroke="${PAL.brown}" stroke-width="1.6" stroke-linecap="round"/>`,
  palette: `<circle cx="12" cy="12" r="9" fill="none" stroke="${PAL.gray}" stroke-width="1.3"/><circle cx="8" cy="11" r="1.4" fill="${PAL.red}"/><circle cx="12" cy="8" r="1.4" fill="${PAL.yellow}"/><circle cx="16" cy="11" r="1.4" fill="${PAL.green}"/><circle cx="10" cy="15" r="1.4" fill="${PAL.blue}"/><path d="M12 21a1.5 1.5 0 0 1 0-3c1 0 1.8-.9 1.5-1.9-.4-1.2.5-2.1 1.6-2.1H17a4 4 0 0 0 0-8" fill="none" stroke="${PAL.purple}" stroke-width="1.4"/>`,
  font: `<path d="M5 19L10 5h1l5 14" fill="none" stroke="${PAL.blue}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 14.5h8" stroke="${PAL.blue}" stroke-width="1.6"/><path d="M17 19l2.5-6L22 19" fill="none" stroke="${PAL.orange}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`,
  scale: `<path d="M4 20h16" stroke="${PAL.gray}" stroke-width="1.5" stroke-linecap="round"/><path d="M12 4v16" stroke="${PAL.gray}" stroke-width="1.5"/><path d="M12 4l4 8H8l4-8z" fill="${PAL.teal}" stroke="${PAL.navy}" stroke-width="1"/>`,
  reset: `<path d="M3 12a9 9 0 1 0 3-6.7" fill="none" stroke="${PAL.teal}" stroke-width="1.8" stroke-linecap="round"/><path d="M3 4v5h5" fill="none" stroke="${PAL.teal}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
  order: `<path d="M8 6h13M8 12h13M8 18h13" stroke="${PAL.blue}" stroke-width="1.6" stroke-linecap="round"/><circle cx="3.5" cy="6" r="1.6" fill="${PAL.orange}"/><circle cx="3.5" cy="12" r="1.6" fill="${PAL.green}"/><circle cx="3.5" cy="18" r="1.6" fill="${PAL.purple}"/>`,
  match: `<circle cx="6" cy="6" r="3" fill="${PAL.pink}"/><circle cx="18" cy="18" r="3" fill="${PAL.pink}"/><path d="M8.5 8.5L15.5 15.5" stroke="${PAL.gray}" stroke-width="1.4"/><circle cx="18" cy="6" r="3" fill="${PAL.blue}"/><circle cx="6" cy="18" r="3" fill="${PAL.blue}"/><path d="M15.5 8.5L8.5 15.5" stroke="${PAL.gray}" stroke-width="1.4"/>`,
  layers: `<path d="M12 2l9 5-9 5-9-5 9-5z" fill="${PAL.purple}"/><path d="M3 12l9 5 9-5" fill="none" stroke="${PAL.blue}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17l9 5 9-5" fill="none" stroke="${PAL.green}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`,
  idea: `<path d="M9 18h6" stroke="${PAL.gray}" stroke-width="1.5"/><path d="M10 22h4" stroke="${PAL.gray}" stroke-width="1.5"/><path d="M12 2a7 7 0 0 0-4 12.7c.7.5 1.1 1.3 1.1 2.1v.2h6v-.2c0-.8.4-1.6 1.1-2.1A7 7 0 0 0 12 2z" fill="${PAL.yellow}" stroke="${PAL.orange}" stroke-width="1.2"/><path d="M12 2V1M4.2 4.2l.7.7M19.8 4.2l-.7.7" stroke="${PAL.orange}" stroke-width="1.3" stroke-linecap="round"/>`,
  chartpie: `<circle cx="12" cy="12" r="8" fill="none" stroke="${PAL.blue}" stroke-width="8" stroke-dasharray="20 30.3" transform="rotate(-90 12 12)"/><circle cx="12" cy="12" r="8" fill="none" stroke="${PAL.orange}" stroke-width="8" stroke-dasharray="15 35.3" stroke-dashoffset="-20" transform="rotate(-90 12 12)"/><circle cx="12" cy="12" r="8" fill="none" stroke="${PAL.green}" stroke-width="8" stroke-dasharray="15.27 35" stroke-dashoffset="-35" transform="rotate(-90 12 12)"/>`,
  brain: `<path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5c0 .4.06.8.17 1.15A3 3 0 0 0 4 9.5c0 .9.4 1.7 1 2.28A3.5 3.5 0 0 0 4 14.5 3.5 3.5 0 0 0 7.5 18a3.5 3.5 0 0 0 3.5-3.5V5.5A3.5 3.5 0 0 0 9.5 2z" fill="${PAL.pink}"/><path d="M14.5 2a3.5 3.5 0 0 1 3.5 3.5c0 .4-.06.8-.17 1.15A3 3 0 0 1 20 9.5c0 .9-.4 1.7-1 2.28a3.5 3.5 0 0 1 1 2.72A3.5 3.5 0 0 1 16.5 18a3.5 3.5 0 0 1-3.5-3.5V5.5A3.5 3.5 0 0 1 14.5 2z" fill="${PAL.purple}"/><path d="M7.5 18v2M16.5 18v2" stroke="${PAL.gray}" stroke-width="1.3" stroke-linecap="round"/>`,
  teach: `<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#EAF1FF" stroke="${PAL.blue}" stroke-width="1.5"/><circle cx="9" cy="11.5" r="1.1" fill="${PAL.orange}"/><circle cx="12.5" cy="11.5" r="1.1" fill="${PAL.orange}"/><circle cx="16" cy="11.5" r="1.1" fill="${PAL.orange}"/>`,
  bookopen: `<path d="M2 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" fill="${PAL.brown}"/><path d="M22 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z" fill="${PAL.orange}"/>`,
  network: `<path d="M12 7.2V10M10.2 13.4L6.6 17.3M13.8 13.4l3.6 3.9" stroke="${PAL.gray}" stroke-width="1.4"/><circle cx="12" cy="5" r="2.2" fill="${PAL.blue}"/><circle cx="5" cy="19" r="2.2" fill="${PAL.green}"/><circle cx="19" cy="19" r="2.2" fill="${PAL.orange}"/><circle cx="12" cy="12" r="2.2" fill="${PAL.purple}"/>`,
  warning: `<path d="M12 3l10 18H2L12 3z" fill="${PAL.yellow}" stroke="#B8891A" stroke-width="1.1"/><path d="M12 10v4" stroke="${PAL.brown}" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1" fill="${PAL.brown}"/>`,
  shuffle: `<path d="M3 6h4l9 12h5" fill="none" stroke="${PAL.blue}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 6h4v4" fill="none" stroke="${PAL.blue}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 18h4l9-12h5" fill="none" stroke="${PAL.orange}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 18h4v-4" fill="none" stroke="${PAL.orange}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
  clock: `<circle cx="12" cy="13" r="8" fill="#EAF1FF" stroke="${PAL.blue}" stroke-width="1.5"/><path d="M12 9v4l3 2" fill="none" stroke="${PAL.red}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 2h6M12 2v3" stroke="${PAL.gray}" stroke-width="1.5" stroke-linecap="round"/>`,
};
function icon(name, cls){
  return `<svg class="icon ${cls||''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||''}</svg>`;
}
function hexA(hex, alpha){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16), g = parseInt(h.substring(2,4),16), b = parseInt(h.substring(4,6),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
const BADGE_CYCLE = [PAL.blue, PAL.orange, PAL.green, PAL.purple, PAL.pink, PAL.teal, PAL.red, PAL.indigo, PAL.gold, PAL.brown];
function badgeColor(i){ return BADGE_CYCLE[i % BADGE_CYCLE.length]; }
function statBadge(name, colorHex){
  return `<div class="stat-icon" style="background:${hexA(colorHex,0.16)}; box-shadow:inset 0 0 0 1.5px ${hexA(colorHex,0.35)};">${icon(name,"icon-lg")}</div>`;
}




/* ============ Persistence (localStorage) ============ */
const LS_PREFIX = "pk0005_";
function lsGet(key, fallback){
  try{ const v = localStorage.getItem(LS_PREFIX+key); return v ? JSON.parse(v) : fallback; }
  catch(e){ return fallback; }
}
function lsSet(key, val){
  try{ localStorage.setItem(LS_PREFIX+key, JSON.stringify(val)); }catch(e){}
}

function getObjProgress(objId){
  return lsGet("obj_"+objId, {attempted:0, correct:0, lastRunAt:null});
}
function saveObjProgress(objId, attempted, correct){
  const prev = getObjProgress(objId);
  lsSet("obj_"+objId, {
    attempted: prev.attempted + attempted,
    correct: prev.correct + correct,
    lastRunAt: Date.now()
  });
}
function getExamHistory(){ return lsGet("exam_history", []); }
function addExamHistory(entry){
  const h = getExamHistory(); h.unshift(entry); lsSet("exam_history", h.slice(0,50));
}
function getObjTestHistory(){ return lsGet("obj_test_history", []); }
function addObjTestHistory(entry){
  const h = getObjTestHistory(); h.unshift(entry); lsSet("obj_test_history", h.slice(0,300));
}
function objTestRuns(objId, size){
  return getObjTestHistory().filter(h=>h.objId===objId && h.size===size);
}
function getPbqProgress(){ return lsGet("pbq_progress", {}); }
function savePbqResult(id, correct){
  const p = getPbqProgress(); p[id] = {correct: !!correct, at: Date.now()}; lsSet("pbq_progress", p);
}
function getAcronymProgress(){ return lsGet("acronym_progress", {}); }
function saveAcronymResult(a, knew){
  const p = getAcronymProgress(); p[a] = {knew: !!knew, at: Date.now()}; lsSet("acronym_progress", p);
}
function getConceptProgress(){ return lsGet("concept_progress", {}); }
function saveConceptResult(term, knew){
  const p = getConceptProgress(); p[term] = {knew: !!knew, at: Date.now()}; lsSet("concept_progress", p);
}
function resetAllProgress(){
  Object.keys(localStorage).filter(k=>k.startsWith(LS_PREFIX)).forEach(k=>localStorage.removeItem(k));
}

/* ============ Settings ============ */
const THEME_GROUPS = [
  { group:"Classic", themes:[
    {id:"light",label:"Light"},{id:"dark",label:"Dark"},{id:"sepia",label:"Sepia"},
    {id:"high-contrast",label:"High Contrast"},{id:"solarized-light",label:"Solarized Light"},
    {id:"solarized-dark",label:"Solarized Dark"},{id:"nord",label:"Nord"},{id:"dracula",label:"Dracula"},
    {id:"ocean",label:"Ocean"},{id:"forest",label:"Forest"},{id:"sunset",label:"Sunset"},
    {id:"pastel",label:"Pastel"},{id:"mono",label:"Mono"},{id:"neon",label:"Neon"},
    {id:"plain",label:"Plain"},{id:"rose",label:"Rose"},{id:"slate",label:"Slate"},
  ]},
  { group:"Aurora", themes:[
    {id:"aurora-dawn",label:"Dawn"},{id:"aurora-dusk",label:"Dusk"},{id:"aurora-night",label:"Night"},
  ]},
  { group:"Autumn", themes:[
    {id:"autumn-amber",label:"Amber"},{id:"autumn-rust",label:"Rust"},{id:"autumn-umber",label:"Umber"},
  ]},
  { group:"Coral Reef", themes:[
    {id:"reef-shallow",label:"Shallow"},{id:"reef-lagoon",label:"Lagoon"},{id:"reef-abyss",label:"Abyss"},
  ]},
  { group:"Desert", themes:[
    {id:"desert-dune",label:"Dune"},{id:"desert-mesa",label:"Mesa"},{id:"desert-canyon",label:"Canyon"},
  ]},
  { group:"Lavender Fields", themes:[
    {id:"lavender-bloom",label:"Bloom"},{id:"lavender-dusk",label:"Dusk"},{id:"lavender-twilight",label:"Twilight"},
  ]},
  { group:"Arctic", themes:[
    {id:"arctic-frost",label:"Frost"},{id:"arctic-glacier",label:"Glacier"},{id:"arctic-polar-night",label:"Polar Night"},
  ]},
  { group:"Volcanic", themes:[
    {id:"volcanic-ember",label:"Ember"},{id:"volcanic-magma",label:"Magma"},{id:"volcanic-obsidian",label:"Obsidian"},
  ]},
  { group:"Meadow", themes:[
    {id:"meadow-spring",label:"Spring"},{id:"meadow-summer",label:"Summer"},{id:"meadow-moss",label:"Moss"},
  ]},
  { group:"Royal", themes:[
    {id:"royal-sapphire",label:"Sapphire"},{id:"royal-gold",label:"Gold"},{id:"royal-amethyst",label:"Amethyst"},
  ]},
  { group:"Retro", themes:[
    {id:"retro-mustard",label:"Mustard"},{id:"retro-rust",label:"Rust"},{id:"retro-avocado",label:"Avocado"},{id:"retro-cream",label:"Cream"},
  ]},
];
const THEMES = THEME_GROUPS.flatMap(g=>g.themes.map(t=>t.id));
const FONTS = [
  {label:"Georgia (serif)", value:'"Georgia","Cambria","Times New Roman",serif'},
  {label:"Times New Roman", value:'"Times New Roman",Times,serif'},
  {label:"Cambria", value:'"Cambria","Georgia",serif'},
  {label:"Garamond", value:'"Garamond","Baskerville","Georgia",serif'},
  {label:"Arial", value:'Arial,"Helvetica Neue",Helvetica,sans-serif'},
  {label:"Calibri (Carlito)", value:'Calibri,Carlito,"Segoe UI",sans-serif'},
  {label:"Verdana", value:'Verdana,Geneva,sans-serif'},
  {label:"Trebuchet MS", value:'"Trebuchet MS",sans-serif'},
  {label:"Segoe UI", value:'"Segoe UI",Tahoma,sans-serif'},
  {label:"Courier New (mono)", value:'"Courier New",Courier,monospace'},
  {label:"Comic Sans MS", value:'"Comic Sans MS","Comic Sans",cursive'},
];

const LAYOUTS = [
  {id:"sidebar-left", label:"Classic Sidebar", desc:"Left sidebar, content fills the rest — the default."},
  {id:"sidebar-right", label:"Right Sidebar", desc:"Same as classic, but the sidebar sits on the right edge."},
  {id:"top-bar", label:"Top Navigation Bar", desc:"Full nav (links + domain tree) lives in a bar across the top."},
  {id:"bottom-bar", label:"Bottom Navigation", desc:"Mobile-app style — main nav pinned to the bottom of the screen."},
  {id:"icon-rail", label:"Compact Icon Rail", desc:"Slim icon-only rail. Hover for labels; maximizes content width."},
  {id:"boxed", label:"Centered Boxed", desc:"The whole app sits in a centered, margined box instead of edge-to-edge."},
  {id:"floating", label:"Floating Panels", desc:"Sidebar and content render as separate floating rounded cards."},
  {id:"wide-panel", label:"Wide Control Panel", desc:"A wider sidebar with nav as chips and a 2-column objective grid."},
  {id:"drawer", label:"Overlay Drawer", desc:"Sidebar is a hidden drawer toggled by a floating button — full-width focus mode."},
  {id:"top-tabs", label:"Minimal Top Tabs", desc:"An ultra-thin pill-tab strip replaces the sidebar entirely."},
];

const LINE_HEIGHTS = [
  {id:"compact", label:"Compact", value:"1.25"},
  {id:"normal", label:"Normal", value:"1.55"},
  {id:"relaxed", label:"Relaxed", value:"1.85"},
  {id:"spacious", label:"Spacious", value:"2.2"},
];
const LETTER_SPACINGS = [
  {id:"normal", label:"Normal", value:"normal"},
  {id:"wide", label:"Wide", value:"0.02em"},
  {id:"wider", label:"Wider", value:"0.05em"},
];
const HEADING_WEIGHTS = [
  {id:"normal", label:"Normal", value:"500"},
  {id:"bold", label:"Bold", value:"700"},
  {id:"extrabold", label:"Extra Bold", value:"800"},
];
const CORNER_STYLES = [
  {id:"sharp", label:"Sharp", value:"0px"},
  {id:"soft", label:"Soft", value:"6px"},
  {id:"round", label:"Round", value:"14px"},
  {id:"pill", label:"Extra Round", value:"22px"},
];
const CONTENT_WIDTHS = [
  {id:"narrow", label:"Narrow", value:"720px"},
  {id:"normal", label:"Normal", value:"980px"},
  {id:"wide", label:"Wide", value:"1240px"},
  {id:"full", label:"Full width", value:"none"},
];

const DENSITIES = [
  {id:"compact", label:"Compact", padding:"12px", gap:"8px"},
  {id:"comfortable", label:"Comfortable", padding:"20px", gap:"14px"},
  {id:"spacious", label:"Spacious", padding:"30px", gap:"22px"},
];
const BG_PATTERNS = [
  {id:"none", label:"None"},
  {id:"dots", label:"Dots"},
  {id:"grid", label:"Grid"},
  {id:"diagonal", label:"Diagonal"},
];
function bgPatternImage(id, color){
  const c = encodeURIComponent(color);
  if(id==="dots") return `radial-gradient(${color} 1px, transparent 1px)`;
  if(id==="grid") return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;
  if(id==="diagonal") return `repeating-linear-gradient(45deg, ${color}, ${color} 1px, transparent 1px, transparent 14px)`;
  return "none";
}
/* ============ Sound effects (Web Audio API, no external files) ============ */
let _audioCtx = null;
function getAudioCtx(){
  if(!_audioCtx){
    try{ _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ return null; }
  }
  return _audioCtx;
}
function playTone(freq, start, duration, type, gainPeak){
  const ctx = getAudioCtx();
  if(!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, ctx.currentTime + start);
  gain.gain.linearRampToValueAtTime(gainPeak!=null?gainPeak:0.12, ctx.currentTime + start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration + 0.02);
}
function soundEnabled(){ return !!getSettings().soundEffects; }
function playCorrectSound(){ if(!soundEnabled()) return; playTone(523.25,0,0.11,"sine"); playTone(783.99,0.08,0.16,"sine"); }
function playIncorrectSound(){ if(!soundEnabled()) return; playTone(220,0,0.22,"sine",0.09); playTone(174.6,0.05,0.24,"sine",0.07); }
function playCelebrationSound(){
  if(!soundEnabled()) return;
  [523.25,659.25,783.99,1046.5].forEach((f,i)=>playTone(f, i*0.09, 0.22, "triangle", 0.09));
}

/* ============ Confetti celebration ============ */
function launchConfetti(){
  const s = getSettings();
  if(!s.celebrations || s.reduceMotion) return;
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed; inset:0; width:100vw; height:100vh; pointer-events:none; z-index:999;";
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if(!ctx){ canvas.remove(); return; }
  const colors = [PAL.blue,PAL.orange,PAL.green,PAL.purple,PAL.pink,PAL.teal,PAL.red,PAL.gold];
  const pieces = [];
  const count = 140;
  for(let i=0;i<count;i++){
    pieces.push({
      x: Math.random()*canvas.width,
      y: -20 - Math.random()*canvas.height*0.4,
      w: 6+Math.random()*6, h: 4+Math.random()*8,
      color: colors[Math.floor(Math.random()*colors.length)],
      vx: (Math.random()-0.5)*2.2,
      vy: 2+Math.random()*3.2,
      rot: Math.random()*Math.PI*2,
      vr: (Math.random()-0.5)*0.3,
    });
  }
  let frame = 0;
  const maxFrames = 220;
  function tick(){
    frame++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vy += 0.03;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    if(frame < maxFrames){
      requestAnimationFrame(tick);
    } else {
      canvas.remove();
    }
  }
  tick();
}

function getSettings(){
  return lsGet("settings", {
    theme:"light", font:FONTS[0].value, fontSize:15, layout:"sidebar-left",
    lineHeight:"normal", letterSpacing:"normal", headingWeight:"bold",
    corners:"soft", contentWidth:"normal", reduceMotion:false,
    density:"comfortable", bgPattern:"none", accentOverride:"",
    dyslexiaMode:false, soundEffects:false, celebrations:true,
    customTheme:null,
  });
}
function saveSettings(s){ lsSet("settings", s); applySettings(s); }
function findVal(list, id, fallback){ const f = list.find(x=>x.id===id); return f ? f.value : fallback; }
function applySettings(s){
  const root = document.documentElement;
  root.setAttribute("data-theme", s.theme);
  root.setAttribute("data-layout", s.layout || "sidebar-left");
  root.style.setProperty("--font-body", s.dyslexiaMode ? '"Verdana","Comic Sans MS",Arial,sans-serif' : s.font);
  root.style.setProperty("--font-ui", s.dyslexiaMode ? '"Verdana","Comic Sans MS",Arial,sans-serif' : s.font);
  root.style.fontSize = (s.fontSize!=null ? s.fontSize : 15) + "px";
  root.style.setProperty("--line-height", s.dyslexiaMode ? "2" : findVal(LINE_HEIGHTS, s.lineHeight, "1.55"));
  root.style.setProperty("--letter-spacing", s.dyslexiaMode ? "0.06em" : findVal(LETTER_SPACINGS, s.letterSpacing, "normal"));
  root.style.setProperty("--heading-weight", findVal(HEADING_WEIGHTS, s.headingWeight, "700"));
  root.style.setProperty("--radius", findVal(CORNER_STYLES, s.corners, "10px"));
  root.style.setProperty("--content-max-width", findVal(CONTENT_WIDTHS, s.contentWidth, "980px"));
  root.classList.toggle("reduce-motion", !!s.reduceMotion);
  root.classList.toggle("dyslexia-mode", !!s.dyslexiaMode);

  const dens = DENSITIES.find(d=>d.id===s.density) || DENSITIES[1];
  root.style.setProperty("--density-padding", dens.padding);
  root.style.setProperty("--density-gap", dens.gap);

  // Custom theme: apply stored color overrides directly (theme id "custom")
  if(s.theme === "custom" && s.customTheme){
    const ct = s.customTheme;
    Object.keys(ct).forEach(k=>{
      root.style.setProperty("--"+k.replace(/_/g,"-"), ct[k]);
    });
  } else {
    ["bg","bg-elev","bg-sunken","text","text-dim","accent","accent-text","border","success","danger","warn"].forEach(k=>root.style.removeProperty("--"+k));
  }

  // Accent override applies on top of whichever theme is active (preset or custom)
  if(s.accentOverride){
    root.style.setProperty("--accent", s.accentOverride);
  }

  // Background pattern, tinted using the current theme's border color for subtlety
  const patternColor = getComputedStyle(root).getPropertyValue("--border").trim() || "#ccc";
  if(s.bgPattern && s.bgPattern!=="none"){
    document.body.style.backgroundImage = bgPatternImage(s.bgPattern, patternColor);
    document.body.style.backgroundSize = s.bgPattern==="dots" ? "16px 16px" : s.bgPattern==="grid" ? "24px 24px" : "auto";
  } else {
    document.body.style.backgroundImage = "none";
  }
}
applySettings(getSettings());

function layoutPreview(id){
  const frame = "width:100%;height:56px;border:1px solid var(--border);border-radius:8px;overflow:hidden;background:var(--bg-elev);display:flex;";
  const side = "background:var(--accent);opacity:0.55;";
  const main = "background:var(--bg-sunken);";
  const wrap = (inner, extra) => `<div style="${frame}${extra||''}">${inner}</div>`;
  switch(id){
    case "sidebar-left":
      return wrap(`<div style="${side}width:22%;"></div><div style="${main}flex:1;"></div>`);
    case "sidebar-right":
      return wrap(`<div style="${main}flex:1;"></div><div style="${side}width:22%;"></div>`);
    case "top-bar":
      return wrap(`<div style="${side}height:32%;width:100%;"></div><div style="${main}flex:1;width:100%;"></div>`, "flex-direction:column;");
    case "bottom-bar":
      return wrap(`<div style="${main}flex:1;width:100%;"></div><div style="${side}height:32%;width:100%;"></div>`, "flex-direction:column;");
    case "icon-rail":
      return wrap(`<div style="${side}width:9%;"></div><div style="${main}flex:1;"></div>`);
    case "boxed":
      return wrap(`<div style="display:flex;width:100%;height:70%;margin:auto;border-radius:6px;overflow:hidden;border:1px solid var(--border);"><div style="${side}width:24%;"></div><div style="${main}flex:1;"></div></div>`, "background:var(--bg-sunken);align-items:center;padding:0 6%;");
    case "floating":
      return wrap(`<div style="${side}width:22%;border-radius:6px;"></div><div style="${main}flex:1;border-radius:6px;"></div>`, "gap:5px;background:var(--bg-sunken);padding:6px;");
    case "wide-panel":
      return wrap(`<div style="${side}width:40%;"></div><div style="${main}flex:1;"></div>`);
    case "drawer":
      return wrap(`<div style="${main}flex:1;"></div><div style="${side}width:30%;position:absolute;left:0;top:0;bottom:0;"></div>`, "position:relative;");
    case "top-tabs":
      return wrap(`<div style="${side}height:16%;width:100%;"></div><div style="${main}flex:1;width:100%;"></div>`, "flex-direction:column;");
    default:
      return wrap(`<div style="${side}width:22%;"></div><div style="${main}flex:1;"></div>`);
  }
}

/* ============ Chart helpers (pure SVG, no dependencies) ============ */
const DOMAIN_COLORS = {1:"#3b82c4", 2:"#e0824a", 3:"#4aa892", 4:"#9370c9"};

function donutChart(segments, opts){
  opts = opts||{};
  const size = opts.size||150, stroke = opts.stroke||20;
  const r = (size - stroke)/2, c = 2*Math.PI*r, cx=size/2, cy=size/2;
  const total = segments.reduce((s,seg)=>s+seg.value,0);
  if(!total){
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" style="stroke:var(--border)" stroke-width="${stroke}"/>
      <text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="12" style="fill:var(--text-dim)">No data</text>
    </svg>`;
  }
  let offset = 0;
  const circles = segments.filter(s=>s.value>0).map(seg=>{
    const frac = seg.value/total;
    const dash = frac*c;
    const el = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" style="stroke:${seg.color}" stroke-width="${stroke}"
      stroke-dasharray="${dash} ${c-dash}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += dash;
    return el;
  }).join("");
  const centerLabel = opts.centerLabel!=null ? `<text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="17" font-weight="700" style="fill:var(--text)">${opts.centerLabel}</text>` : "";
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${circles}${centerLabel}</svg>`;
}

function donutLegend(segments){
  const total = segments.reduce((s,seg)=>s+seg.value,0) || 1;
  return `<div style="display:flex; flex-direction:column; gap:6px;">
    ${segments.map(seg=>`<div style="display:flex; align-items:center; gap:8px; font-size:0.82rem;">
      <span style="width:10px; height:10px; border-radius:3px; background:${seg.color}; flex-shrink:0;"></span>
      <span style="flex:1;">${seg.label}</span>
      <span class="muted">${seg.value} (${Math.round(100*seg.value/total)}%)</span>
    </div>`).join("")}
  </div>`;
}

function lineChart(values, opts){
  opts = opts||{};
  const w = opts.width||600, h = opts.height||170, pad = 30;
  if(!values.length){
    return `<p class="muted">No full-exam attempts yet — take one to start tracking your trend.</p>`;
  }
  const n = values.length;
  const xStep = n>1 ? (w-2*pad)/(n-1) : 0;
  const pts = values.map((v,i)=>[pad+i*xStep, h-pad-(v/100)*(h-2*pad)]);
  const path = pts.map((p,i)=>(i===0?"M":"L")+p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ");
  const grid = [0,25,50,75,100].map(v=>{
    const y = h-pad-(v/100)*(h-2*pad);
    return `<line x1="${pad}" y1="${y}" x2="${w-pad}" y2="${y}" style="stroke:var(--border)" stroke-width="1"/>
      <text x="2" y="${y+4}" font-size="10" style="fill:var(--text-dim)">${v}%</text>`;
  }).join("");
  const dots = pts.map((p,i)=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4" style="fill:var(--accent)"><title>Attempt ${i+1}: ${values[i]}%</title></circle>`).join("");
  return `<svg width="100%" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
    ${grid}
    <path d="${path}" fill="none" style="stroke:var(--accent)" stroke-width="2.5"/>
    ${dots}
  </svg>`;
}

/* Radar/spider chart: axes = array of {label, value(0-100), color}, all sharing one 0-100 scale */
function radarChart(axes, opts){
  opts = opts||{};
  const size = opts.size||220, cx=size/2, cy=size/2, r=size*0.36;
  const n = axes.length;
  const angle = (i)=> -Math.PI/2 + i*(2*Math.PI/n);
  const ringLevels = [25,50,75,100];
  const rings = ringLevels.map(lvl=>{
    const pts = axes.map((_,i)=>{
      const rr = r*(lvl/100);
      return [cx+rr*Math.cos(angle(i)), cy+rr*Math.sin(angle(i))];
    });
    return `<polygon points="${pts.map(p=>p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ")}" fill="none" style="stroke:var(--border)" stroke-width="1"/>`;
  }).join("");
  const spokes = axes.map((_,i)=>{
    const p = [cx+r*Math.cos(angle(i)), cy+r*Math.sin(angle(i))];
    return `<line x1="${cx}" y1="${cy}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" style="stroke:var(--border)" stroke-width="1"/>`;
  }).join("");
  const dataPts = axes.map((ax,i)=>{
    const rr = r*(Math.max(0,Math.min(100,ax.value))/100);
    return [cx+rr*Math.cos(angle(i)), cy+rr*Math.sin(angle(i))];
  });
  const dataPoly = `<polygon points="${dataPts.map(p=>p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ")}" style="fill:var(--accent); fill-opacity:0.25; stroke:var(--accent)" stroke-width="2"/>`;
  const dots = dataPts.map((p,i)=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.5" style="fill:${axes[i].color||'var(--accent)'}"><title>${axes[i].label}: ${Math.round(axes[i].value)}%</title></circle>`).join("");
  const labels = axes.map((ax,i)=>{
    const lr = r+18;
    const p = [cx+lr*Math.cos(angle(i)), cy+lr*Math.sin(angle(i))];
    const anchor = Math.cos(angle(i))>0.3?"start":Math.cos(angle(i))<-0.3?"end":"middle";
    return `<text x="${p[0].toFixed(1)}" y="${p[1].toFixed(1)}" font-size="10" text-anchor="${anchor}" style="fill:var(--text)">${ax.label}</text>`;
  }).join("");
  return `<svg width="100%" viewBox="0 0 ${size} ${size+10}" preserveAspectRatio="xMidYMid meet">${rings}${spokes}${dataPoly}${dots}${labels}</svg>`;
}

/* Horizontal bar chart: bars = array of {label, value, max, color} */
function barChart(bars, opts){
  opts = opts||{};
  const rowH = opts.rowH||26, gap=6, labelW=opts.labelW||130, w=opts.width||560;
  const chartW = w - labelW - 50;
  const h = bars.length*(rowH+gap);
  const rows = bars.map((b,i)=>{
    const y = i*(rowH+gap);
    const pct = b.max ? Math.max(0,Math.min(1,b.value/b.max)) : 0;
    const barW = chartW*pct;
    return `<text x="0" y="${y+rowH*0.65}" font-size="11" style="fill:var(--text)">${b.label}</text>
      <rect x="${labelW}" y="${y+2}" width="${chartW}" height="${rowH-4}" rx="4" style="fill:var(--bg-sunken)"/>
      <rect x="${labelW}" y="${y+2}" width="${barW.toFixed(1)}" height="${rowH-4}" rx="4" style="fill:${b.color||'var(--accent)'}"/>
      <text x="${labelW+chartW+8}" y="${y+rowH*0.65}" font-size="11" style="fill:var(--text-dim)">${b.value}${b.suffix||""}</text>`;
  }).join("");
  return `<svg width="100%" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">${rows}</svg>`;
}

/* Compact heatmap grid for 24 objectives: cells = array of {label, value(0-100 or null), sublabel} */
function heatmapGrid(cells, opts){
  opts = opts||{};
  const cols = opts.cols||6;
  function colorFor(v){
    if(v==null) return "var(--bg-sunken)";
    if(v>=80) return "var(--success)";
    if(v>=60) return "#d4a72c";
    if(v>=1) return "var(--danger)";
    return "var(--bg-sunken)";
  }
  return `<div style="display:grid; grid-template-columns:repeat(${cols},1fr); gap:6px;">
    ${cells.map(c=>`<div title="${c.label}: ${c.value==null?'not attempted':c.value+'%'}"
        style="background:${colorFor(c.value)}; border-radius:6px; padding:8px 4px; text-align:center; font-size:0.66rem; color:${c.value!=null&&c.value>=1?'#fff':'var(--text-dim)'};">
        <div style="font-weight:700;">${c.sublabel}</div>
        <div>${c.value==null?'—':c.value+'%'}</div>
      </div>`).join("")}
  </div>`;
}

/* Simple activity calendar heatmap: last N days, counts = {dateString: count} */
function calendarHeatmap(counts, days){
  days = days||84; // 12 weeks
  const today = new Date();
  const cells = [];
  for(let i=days-1; i>=0; i--){
    const d = new Date(today); d.setDate(d.getDate()-i);
    const key = d.toDateString();
    cells.push({date:d, count: counts[key]||0});
  }
  const max = Math.max(1, ...cells.map(c=>c.count));
  function colorFor(count){
    if(count===0) return "var(--bg-sunken)";
    const ratio = count/max;
    if(ratio>0.66) return "var(--success)";
    if(ratio>0.33) return "var(--accent)";
    return "var(--warn)";
  }
  const weeks = [];
  for(let i=0;i<cells.length;i+=7) weeks.push(cells.slice(i,i+7));
  return `<div style="display:flex; gap:3px; overflow-x:auto; padding-bottom:4px;">
    ${weeks.map(week=>`<div style="display:flex; flex-direction:column; gap:3px;">
      ${week.map(c=>`<div title="${c.date.toDateString()}: ${c.count} activit${c.count===1?'y':'ies'}"
        style="width:11px; height:11px; border-radius:3px; background:${colorFor(c.count)};"></div>`).join("")}
    </div>`).join("")}
  </div>`;
}

/* Histogram: values = array of numbers 0-100, bucketed into 5 bins */
function histogramChart(values, opts){
  opts = opts||{};
  const w = opts.width||560, h = opts.height||140, pad=28;
  const buckets = [0,0,0,0,0]; // 0-20,20-40,40-60,60-80,80-100
  values.forEach(v=>{
    let idx = Math.floor(v/20); if(idx>4) idx=4; if(idx<0) idx=0;
    buckets[idx]++;
  });
  const max = Math.max(1, ...buckets);
  const barW = (w-2*pad)/5;
  const bars = buckets.map((b,i)=>{
    const bh = (h-2*pad)*(b/max);
    const x = pad+i*barW;
    const y = h-pad-bh;
    return `<rect x="${x+6}" y="${y}" width="${barW-12}" height="${bh}" rx="4" style="fill:var(--accent)"/>
      <text x="${x+barW/2}" y="${h-pad+14}" font-size="9" text-anchor="middle" style="fill:var(--text-dim)">${i*20}-${i*20+20}</text>
      <text x="${x+barW/2}" y="${y-4}" font-size="10" text-anchor="middle" style="fill:var(--text)">${b}</text>`;
  }).join("");
  if(!values.length) return `<p class="muted">No data yet.</p>`;
  return `<svg width="100%" viewBox="0 0 ${w} ${h+10}" preserveAspectRatio="xMidYMid meet">${bars}</svg>`;
}


/* ============ Helpers ============ */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function mulberry32(seed){
  return function(){
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function seededShuffle(arr, seed){
  const rand = mulberry32(seed);
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j = Math.floor(rand()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
const EXAM_LENGTHS = [
  {id:10, label:"10 Questions", desc:"A quick, focused check-in."},
  {id:30, label:"30 Questions", desc:"A short session covering a good cross-section."},
  {id:50, label:"50 Questions", desc:"A solid mid-length practice run."},
  {id:100, label:"100 Questions", desc:"An in-depth session, over half the real exam's length."},
  {id:200, label:"200 Questions", desc:"An extended deep-dive across every objective."},
  {id:"all", label:"All Questions", desc:"Every question in the bank, in one marathon session."},
];
function computeDomainCounts(total){
  const weights = {1:33, 2:30, 3:19, 4:18};
  const domIds = [1,2,3,4];
  const raw = {}; domIds.forEach(id=>{ raw[id] = total * weights[id] / 100; });
  const floors = {}; let flooredSum = 0;
  domIds.forEach(id=>{ floors[id] = Math.floor(raw[id]); flooredSum += floors[id]; });
  let remainder = total - flooredSum;
  const fracs = domIds.map(id=>({id, frac: raw[id]-floors[id]})).sort((a,b)=>b.frac-a.frac);
  for(let i=0;i<remainder;i++){ floors[fracs[i%4].id]++; }
  return floors;
}
function buildExam(lengthOption){
  if(lengthOption === "all"){ return shuffle(window.QBANK.slice()); }
  const total = Math.min(lengthOption, window.QBANK.length);
  const counts = computeDomainCounts(total);
  let selected = [];
  window.DOMAINS.forEach(d=>{
    const pool = shuffle(domainQuestions(d.id));
    const n = Math.min(counts[d.id]||0, pool.length);
    selected = selected.concat(pool.slice(0, n));
  });
  return shuffle(selected);
}
function qByObjective(objId){ return window.QBANK.filter(q=>q.obj===objId); }
function objMeta(objId){
  for(const d of window.DOMAINS){ for(const o of d.objectives){ if(o.id===objId) return {domain:d, objective:o}; } }
  return null;
}
function domainQuestions(domId){ return window.QBANK.filter(q=>q.obj.startsWith(domId+".")); }

/* ============ Routing ============ */
function currentRoute(){
  const h = location.hash.replace(/^#\//,"") || "dashboard";
  return h.split("/");
}
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", ()=>{ renderSidebar(); render(); });

function navigate(path){ location.hash = "#/"+path; }

/* ============ Sidebar ============ */
function decorateTopNav(){
  const iconFor = {"dashboard":"dashboard","exam-full":"exam","pbq":"pbq","acronyms":"acronym","studytips":"idea","settings":"settings"};
  document.querySelectorAll(".nav-top .nav-link").forEach(a=>{
    const route = a.getAttribute("data-route");
    const ic = iconFor[route];
    if(ic && !a.dataset.decorated){
      a.innerHTML = icon(ic) + "<span>" + a.textContent + "</span>";
      a.title = a.textContent.replace(/\s+/g," ").trim();
      a.dataset.decorated = "1";
    }
  });
}
const DOMAIN_ICON = {1:"domain1", 2:"domain2", 3:"domain3", 4:"domain4"};
function renderSidebar(){
  decorateTopNav();
  const nav = document.getElementById("navDomains");
  nav.innerHTML = "";
  window.DOMAINS.forEach(d=>{
    const block = document.createElement("div");
    block.className = "domain-block";
    const header = document.createElement("div");
    header.className = "domain-header";
    const dCol = DOMAIN_COLORS[d.id];
    header.innerHTML = `<span style="display:flex;align-items:center;gap:8px;" title="${d.name}">
      <span style="width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;background:${hexA(dCol,0.16)};box-shadow:inset 0 0 0 1.5px ${hexA(dCol,0.35)};">${icon(DOMAIN_ICON[d.id])}</span>
      <span>${d.name}</span></span><span style="display:flex;align-items:center;gap:6px;"><span class="domain-weight">${d.weight}%</span><span class="domain-chevron">${icon("chevron")}</span></span>`;
    const list = document.createElement("ul");
    list.className = "obj-list collapsed";
    list.id = "obj-list-"+d.id;
    header.addEventListener("click", ()=>{
      list.classList.toggle("collapsed");
      header.querySelector(".domain-chevron").classList.toggle("open");
    });
    d.objectives.forEach((o,oi)=>{
      const prog = getObjProgress(o.id);
      const li = document.createElement("li");
      li.className = "obj-item";
      const badge = prog.attempted ? `${Math.round(100*prog.correct/prog.attempted)}%` : "—";
      li.innerHTML = `<a class="obj-link" href="#/objective/${o.id}" data-route="obj-${o.id}" title="${o.id} ${o.title}">
        <span style="display:flex;align-items:center;gap:8px;">
          <span style="width:20px;height:20px;border-radius:6px;display:flex;align-items:center;justify-content:center;background:${hexA(dCol,0.14)};flex-shrink:0;">${icon("target")}</span>
          <span>${o.id} ${o.title}</span></span><span class="obj-badge">${badge}</span></a>`;
      list.appendChild(li);
    });
    block.appendChild(header);
    block.appendChild(list);
    nav.appendChild(block);
  });

  document.getElementById("menuToggle").addEventListener("click", ()=>{
    document.getElementById("sidebar").classList.toggle("open");
  });
  const dlIcon = document.querySelector(".download-btn .download-icon");
  if(dlIcon) dlIcon.innerHTML = icon("download");
}

function markActiveNav(routeKey){
  document.querySelectorAll(".nav-link, .obj-link").forEach(a=>a.classList.remove("active"));
  const el = document.querySelector(`[data-route="${routeKey}"]`);
  if(el) el.classList.add("active");
  document.getElementById("sidebar").classList.remove("open");
}

/* ============ Views ============ */
const view = ()=>document.getElementById("view");

function render(){
  const parts = currentRoute();
  const page = parts[0];
  if(page==="dashboard") return renderDashboard();
  if(page==="settings") return renderSettings();
  if(page==="acronyms") return renderAcronyms();
  if(page==="studytips") return renderStudyTips();
  if(page==="objective" && !parts[2]) return renderObjectiveQuiz(parts[1]);
  if(page==="objective" && parts[2]) return renderObjectiveRun(parts[1], parseInt(parts[2],10));
  if(page==="exam" && parts[1]==="full" && !parts[2]) return renderExamList();
  if(page==="exam" && parts[1]==="full" && parts[2]) return renderExamRun(parts[2]==="all" ? "all" : parseInt(parts[2],10));
  if(page==="pbq" && !parts[1]) return renderPbqList();
  if(page==="pbq" && parts[1]) return renderPbqItem(parts[1]);
  return renderDashboard();
}

/* ---- Dashboard ---- */
function renderDashboard(){
  markActiveNav("dashboard");

  let totalAttempted=0, totalCorrect=0;
  const domainStats = window.DOMAINS.map(d=>{
    let att=0, cor=0;
    d.objectives.forEach(o=>{ const p=getObjProgress(o.id); att+=p.attempted; cor+=p.correct; });
    totalAttempted+=att; totalCorrect+=cor;
    return {d, att, cor};
  });
  const overallPct = totalAttempted ? Math.round(100*totalCorrect/totalAttempted) : 0;
  const history = getExamHistory(); // newest first
  const pbqProg = getPbqProgress();
  const pbqAttempted = Object.keys(pbqProg).length;
  const pbqCorrect = Object.values(pbqProg).filter(x=>x.correct).length;
  const acrProg = getAcronymProgress();
  const acrAttempted = Object.keys(acrProg).length;
  const acrKnown = Object.values(acrProg).filter(x=>x.knew).length;
  const cProg = getConceptProgress();
  const cAttempted = Object.keys(cProg).length;
  const cKnown = Object.values(cProg).filter(x=>x.knew).length;

  const totalBankItems = window.QBANK.length + window.PBQ.length + window.ACRONYMS.length + window.CONCEPT_CARDS.length;
  const examsTaken = history.length;
  const bestExam = examsTaken ? Math.max(...history.map(h=>Math.round(100*h.correct/h.total))) : 0;

  // distinct study days + per-date activity counts (for streak + calendar heatmap)
  const allTimestamps = [];
  window.DOMAINS.forEach(d=>d.objectives.forEach(o=>{ const p=getObjProgress(o.id); if(p.lastRunAt) allTimestamps.push(p.lastRunAt); }));
  Object.values(pbqProg).forEach(x=>x.at && allTimestamps.push(x.at));
  Object.values(acrProg).forEach(x=>x.at && allTimestamps.push(x.at));
  Object.values(cProg).forEach(x=>x.at && allTimestamps.push(x.at));
  history.forEach(h=>h.at && allTimestamps.push(h.at));
  const dateKeys = allTimestamps.map(t=>new Date(t).toDateString());
  const studyDays = new Set(dateKeys).size;
  const activityCounts = {};
  dateKeys.forEach(k=>{ activityCounts[k] = (activityCounts[k]||0)+1; });

  // current streak: consecutive days up to today with activity
  let streak = 0;
  { const d = new Date();
    while(true){
      if(activityCounts[d.toDateString()]){ streak++; d.setDate(d.getDate()-1); }
      else break;
    }
  }

  // strongest/weakest objective (min attempts threshold of 3 to be meaningful)
  const objRows = [];
  window.DOMAINS.forEach(d=>d.objectives.forEach(o=>{
    const p = getObjProgress(o.id);
    objRows.push({id:o.id, title:o.title, domId:d.id, att:p.attempted, cor:p.correct, pct: p.attempted? Math.round(100*p.correct/p.attempted):null});
  }));
  const attempted = objRows.filter(r=>r.att>=3);
  const strongest = attempted.length ? attempted.slice().sort((a,b)=>b.pct-a.pct)[0] : null;
  const weakest = attempted.length ? attempted.slice().sort((a,b)=>a.pct-b.pct)[0] : null;

  // question bank composition by domain
  const bankComposition = window.DOMAINS.map(d=>({
    label: "D"+d.id, value: domainQuestions(d.id).length, max: Math.max(...window.DOMAINS.map(x=>domainQuestions(x.id).length)),
    color: DOMAIN_COLORS[d.id]
  }));

  view().innerHTML = `
    <div class="eyebrow">Overview</div>
    <h1>${icon("dashboard","icon-lg")} Your Study Dashboard</h1>
    <p class="muted">Track mastery across all four PK0-005 domains, PBQ progress, acronym recall, and full-exam history.</p>

    <h2>${icon("layers","icon-lg")} Totals</h2>
    <div class="grid grid-3" style="margin:0 0 20px;">
      <div class="card">${statBadge("bookopen",PAL.brown)}<div class="stat-num">${totalBankItems}</div><div class="stat-label">Total items in the bank (${window.QBANK.length} MCQs + ${window.PBQ.length} PBQs + ${window.ACRONYMS.length} acronyms + ${window.CONCEPT_CARDS.length} concept cards)</div></div>
      <div class="card">${statBadge("target",PAL.red)}<div class="stat-num">${totalAttempted}</div><div class="stat-label">MCQ answers submitted (of ${window.QBANK.length} unique questions)</div></div>
      <div class="card">${statBadge("trophy",PAL.gold)}<div class="stat-num">${overallPct}%</div><div class="stat-label">Overall MCQ accuracy (${totalCorrect}/${totalAttempted||0} correct)</div></div>
      <div class="card">${statBadge("pbq",PAL.indigo)}<div class="stat-num">${pbqAttempted}/${window.PBQ.length}</div><div class="stat-label">PBQs attempted (${pbqCorrect} correct)</div></div>
      <div class="card">${statBadge("acronym",PAL.orange)}<div class="stat-num">${acrKnown}/${window.ACRONYMS.length}</div><div class="stat-label">Acronyms known (${acrAttempted} reviewed)</div></div>
      <div class="card">${statBadge("idea",PAL.pink)}<div class="stat-num">${cKnown}/${window.CONCEPT_CARDS.length}</div><div class="stat-label">Concept cards known (${cAttempted} reviewed)</div></div>
      <div class="card">${statBadge("exam",PAL.blue)}<div class="stat-num">${examsTaken}</div><div class="stat-label">Full exams taken${examsTaken?` (best ${bestExam}%)`:""}</div></div>
      <div class="card">${statBadge("clock",PAL.teal)}<div class="stat-num">${studyDays}</div><div class="stat-label">Distinct days you've studied on this device</div></div>
      <div class="card">${statBadge("reset",PAL.green)}<div class="stat-num">${streak}</div><div class="stat-label">Current daily study streak</div></div>
      <div class="card">${statBadge("chartpie",PAL.purple)}<div class="stat-num">${window.DOMAINS.filter((d,i)=>domainStats[i].att>0).length}/4</div><div class="stat-label">Domains you've started practicing</div></div>
      <div class="card">${statBadge("check",PAL.green)}<div class="stat-num">${totalAttempted+pbqAttempted+acrAttempted+cAttempted}</div><div class="stat-label">Total practice interactions logged</div></div>
      <div class="card">${statBadge("layers",PAL.navy||PAL.blue)}<div class="stat-num">${objRows.filter(r=>r.att>0).length}/24</div><div class="stat-label">Objectives you've started practicing</div></div>
    </div>

    <h2>${icon("chartpie","icon-lg")} Analytics</h2>
    <div class="grid grid-2">
      <div class="card">
        <div class="card-icon-row"><strong>MCQ accuracy</strong></div>
        <div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap;">
          ${donutChart([{label:"Correct",value:totalCorrect,color:"var(--success)"},{label:"Incorrect",value:totalAttempted-totalCorrect,color:"var(--danger)"}], {centerLabel: totalAttempted? overallPct+"%":""})}
          ${donutLegend([{label:"Correct",value:totalCorrect,color:"var(--success)"},{label:"Incorrect",value:totalAttempted-totalCorrect,color:"var(--danger)"}])}
        </div>
      </div>
      <div class="card">
        <div class="card-icon-row"><strong>Practice distribution by domain</strong></div>
        <div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap;">
          ${donutChart(domainStats.map(s=>({label:s.d.name, value:s.att, color:DOMAIN_COLORS[s.d.id]})), {centerLabel: totalAttempted||""})}
          ${donutLegend(domainStats.map(s=>({label:"D"+s.d.id+" "+s.d.name, value:s.att, color:DOMAIN_COLORS[s.d.id]})))}
        </div>
      </div>
      <div class="card">
        <div class="card-icon-row"><strong>PBQ results</strong></div>
        <div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap;">
          ${donutChart([
            {label:"Correct",value:pbqCorrect,color:"var(--success)"},
            {label:"Needs retry",value:pbqAttempted-pbqCorrect,color:"var(--danger)"},
            {label:"Not attempted",value:window.PBQ.length-pbqAttempted,color:"var(--border)"}
          ], {centerLabel: pbqAttempted+"/"+window.PBQ.length})}
          ${donutLegend([
            {label:"Correct",value:pbqCorrect,color:"var(--success)"},
            {label:"Needs retry",value:pbqAttempted-pbqCorrect,color:"var(--danger)"},
            {label:"Not attempted",value:window.PBQ.length-pbqAttempted,color:"var(--border)"}
          ])}
        </div>
      </div>
      <div class="card">
        <div class="card-icon-row"><strong>Acronym recall</strong></div>
        <div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap;">
          ${donutChart([
            {label:"Known",value:acrKnown,color:"var(--success)"},
            {label:"Still learning",value:acrAttempted-acrKnown,color:"var(--warn)"},
            {label:"Not reviewed",value:window.ACRONYMS.length-acrAttempted,color:"var(--border)"}
          ], {centerLabel: acrKnown+"/"+window.ACRONYMS.length})}
          ${donutLegend([
            {label:"Known",value:acrKnown,color:"var(--success)"},
            {label:"Still learning",value:acrAttempted-acrKnown,color:"var(--warn)"},
            {label:"Not reviewed",value:window.ACRONYMS.length-acrAttempted,color:"var(--border)"}
          ])}
        </div>
      </div>
    </div>

    <h2>${icon("exam","icon-lg")} Full-exam score trend</h2>
    <div class="card">
      ${lineChart(history.slice().reverse().map(h=>Math.round(100*h.correct/h.total)))}
    </div>

    <h2>${icon("chartpie","icon-lg")} Domain balance &amp; distribution</h2>
    <div class="grid grid-2">
      <div class="card">
        <div class="card-icon-row"><strong>Domain accuracy radar</strong></div>
        ${radarChart(domainStats.map(s=>({label:"D"+s.d.id, value: s.att ? Math.round(100*s.cor/s.att) : 0, color:DOMAIN_COLORS[s.d.id]})))}
      </div>
      <div class="card">
        <div class="card-icon-row"><strong>Question bank composition by domain</strong></div>
        <p class="muted" style="font-size:0.78rem; margin-bottom:10px;">How the ${window.QBANK.length}-question bank is distributed (matches the real exam's domain weighting).</p>
        ${barChart(bankComposition)}
      </div>
    </div>

    <h2>${icon("target","icon-lg")} Objective mastery heatmap</h2>
    <div class="card">
      <p class="muted" style="font-size:0.8rem; margin-bottom:10px;">Green = strong (80%+), amber = developing (60&ndash;79%), red = needs work (&lt;60%), gray = not yet attempted. Hover a cell for details.</p>
      ${heatmapGrid(objRows.map(r=>({label:r.title, value:r.pct, sublabel:r.id})))}
    </div>

    ${(strongest || weakest) ? `
    <div class="grid grid-2">
      ${strongest ? `<div class="card"><div class="card-icon-row">${icon("trophy")}<strong>Strongest objective</strong></div>
        <div class="stat-num" style="font-size:1.3rem;">${strongest.id} — ${strongest.title}</div>
        <div class="muted">${strongest.pct}% accuracy over ${strongest.att} attempts</div></div>` : ""}
      ${weakest ? `<div class="card"><div class="card-icon-row">${icon("target")}<strong>Needs the most attention</strong></div>
        <div class="stat-num" style="font-size:1.3rem;">${weakest.id} — ${weakest.title}</div>
        <div class="muted">${weakest.pct}% accuracy over ${weakest.att} attempts &middot; <a href="#/objective/${weakest.id}">Practice this now</a></div></div>` : ""}
    </div>` : ""}

    <h2>${icon("clock","icon-lg")} Study activity</h2>
    <div class="card">
      <p class="muted" style="font-size:0.8rem; margin-bottom:10px;">Your last 12 weeks of activity on this device. Darker/greener squares mean more practice that day.</p>
      ${calendarHeatmap(activityCounts, 84)}
    </div>

    <h2>${icon("exam","icon-lg")} Exam score distribution</h2>
    <div class="card">
      <p class="muted" style="font-size:0.8rem; margin-bottom:6px;">How your full-exam scores have been distributed across score ranges.</p>
      ${histogramChart(history.map(h=>Math.round(100*h.correct/h.total)))}
    </div>

    <h2>${icon("layers","icon-lg")} Domain mastery</h2>
    <div class="card">
      ${domainStats.map(s=>{
        const pct = s.att ? Math.round(100*s.cor/s.att) : 0;
        return `<div style="margin-bottom:14px;">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; margin-bottom:4px;">
            <span style="display:flex; align-items:center; gap:6px;"><span style="width:9px;height:9px;border-radius:3px;background:${DOMAIN_COLORS[s.d.id]};display:inline-block;"></span><strong>${s.d.name}</strong> <span class="muted">(${s.d.weight}% of exam)</span></span>
            <span>${s.att ? pct+'% · '+s.cor+'/'+s.att : 'Not started'}</span>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%; background:${DOMAIN_COLORS[s.d.id]};"></div></div>
        </div>`;
      }).join("")}
    </div>

    <h2>${icon("target","icon-lg")} Objective-level breakdown (all 24)</h2>
    <div class="card">
      ${window.DOMAINS.map(d=>d.objectives.map(o=>{
        const p = getObjProgress(o.id);
        const pct = p.attempted ? Math.round(100*p.correct/p.attempted) : 0;
        return `<div style="margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; margin-bottom:3px;">
            <span><span class="muted">${o.id}</span> ${o.title}</span>
            <span class="muted">${p.attempted ? pct+'% ('+p.correct+'/'+p.attempted+')' : '—'}</span>
          </div>
          <div class="progress-track" style="height:6px;"><div class="progress-fill" style="width:${pct}%; background:${DOMAIN_COLORS[d.id]};"></div></div>
        </div>`;
      }).join("")).join("")}
    </div>

    <h2>${icon("exam","icon-lg")} Recent full-exam attempts</h2>

    <div class="card">
      ${history.length ? `<table><thead><tr><th>Date</th><th>Exam</th><th>Score</th><th>Percent</th></tr></thead><tbody>
        ${history.slice(0,15).map(h=>`<tr><td>${new Date(h.at).toLocaleString()}</td><td>${h.length?(h.length==="all"?"All":h.length+"Q"):"—"}</td><td>${h.correct}/${h.total}</td><td>${Math.round(100*h.correct/h.total)}%</td></tr>`).join("")}
      </tbody></table>` : `<p class="muted">No full exam attempts yet. <a href="#/exam/full">Start one now</a>.</p>`}
    </div>

    <h2>${icon("book","icon-lg")} Official reference</h2>
    <div class="card" style="display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;">
      <div class="card-icon-row">
        ${icon("book","icon-xl")}
        <div>
          <strong>CompTIA Project+ (PK0-005) Exam Objectives</strong>
          <p class="muted" style="margin:4px 0 0;">The official domain/objective document this entire study desk is mapped to.</p>
        </div>
      </div>
      <a class="btn" href="PK0-005-exam-objectives.pdf" download="CompTIA-Project-Plus-PK0-005-Exam-Objectives.pdf">${icon("download")} Download PDF</a>
    </div>

    <button class="btn secondary" id="resetBtn">${icon("reset")} Reset all progress</button>
  `;
  document.getElementById("resetBtn").addEventListener("click", ()=>{
    if(confirm("This clears all saved progress on this device. Continue?")){
      resetAllProgress(); renderSidebar(); renderDashboard();
    }
  });
}

const THEME_PREVIEW = {"light": {"bg": "#f7f6f3", "bg_elev": "#ffffff", "bg_sunken": "#eeece7", "text": "#1c1c1c", "text_dim": "#5c5c5c", "accent": "#2f5d50", "accent_text": "#ffffff", "border": "#dedbd3", "success": "#2f7d4f", "danger": "#b3402f", "warn": "#a9761d"}, "dark": {"bg": "#14161a", "bg_elev": "#1c1f24", "bg_sunken": "#252932", "text": "#e8e8e6", "text_dim": "#9a9fa8", "accent": "#5aa9a0", "accent_text": "#08131a", "border": "#2f333b", "success": "#4caf7d", "danger": "#e08175", "warn": "#e0b463"}, "sepia": {"bg": "#f1e7d0", "bg_elev": "#f8f1e2", "bg_sunken": "#e6d9bd", "text": "#3b2f1e", "text_dim": "#7a6a4e", "accent": "#8a5a2c", "accent_text": "#fff8ec", "border": "#d8c69f", "success": "#4c7a3e", "danger": "#a0402c", "warn": "#93641c"}, "high-contrast": {"bg": "#000000", "bg_elev": "#0a0a0a", "bg_sunken": "#1a1a1a", "text": "#ffffff", "text_dim": "#cfcfcf", "accent": "#ffd400", "accent_text": "#000000", "border": "#525252", "success": "#5dff8a", "danger": "#ff5c5c", "warn": "#ffd400"}, "solarized-light": {"bg": "#fdf6e3", "bg_elev": "#fffdf5", "bg_sunken": "#eee8d5", "text": "#586e75", "text_dim": "#93a1a1", "accent": "#268bd2", "accent_text": "#fff", "border": "#dfd9c3", "success": "#859900", "danger": "#dc322f", "warn": "#b58900"}, "solarized-dark": {"bg": "#002b36", "bg_elev": "#073642", "bg_sunken": "#0a4152", "text": "#eee8d5", "text_dim": "#93a1a1", "accent": "#2aa198", "accent_text": "#00232b", "border": "#0e4a58", "success": "#859900", "danger": "#dc322f", "warn": "#b58900"}, "nord": {"bg": "#2e3440", "bg_elev": "#3b4252", "bg_sunken": "#434c5e", "text": "#eceff4", "text_dim": "#a6adba", "accent": "#88c0d0", "accent_text": "#1b1e26", "border": "#4c566a", "success": "#a3be8c", "danger": "#bf616a", "warn": "#ebcb8b"}, "dracula": {"bg": "#282a36", "bg_elev": "#31333f", "bg_sunken": "#3d3f4d", "text": "#f8f8f2", "text_dim": "#b7b8c2", "accent": "#bd93f9", "accent_text": "#1e1f29", "border": "#4a4c5c", "success": "#50fa7b", "danger": "#ff5555", "warn": "#f1fa8c"}, "ocean": {"bg": "#eaf4f6", "bg_elev": "#ffffff", "bg_sunken": "#d7ebef", "text": "#0d2b33", "text_dim": "#4c6d74", "accent": "#0a7ea4", "accent_text": "#ffffff", "border": "#bfe0e6", "success": "#1c8a5e", "danger": "#c0473b", "warn": "#c48620"}, "forest": {"bg": "#eef2e6", "bg_elev": "#f7faf3", "bg_sunken": "#dde6cd", "text": "#233417", "text_dim": "#5a6b4a", "accent": "#3f6b34", "accent_text": "#f4faee", "border": "#c8d6b3", "success": "#3f6b34", "danger": "#a13d2c", "warn": "#8a6a1c"}, "sunset": {"bg": "#fff1e6", "bg_elev": "#fff8f1", "bg_sunken": "#ffe1c9", "text": "#4a2a1d", "text_dim": "#8a5f4c", "accent": "#e0642e", "accent_text": "#fff8f1", "border": "#f0c9a8", "success": "#4c8a53", "danger": "#c23b2e", "warn": "#c47d1a"}, "pastel": {"bg": "#f5f2fb", "bg_elev": "#fdfcff", "bg_sunken": "#e9e2f7", "text": "#3a3350", "text_dim": "#7c7396", "accent": "#9b7fd4", "accent_text": "#ffffff", "border": "#ddd2f0", "success": "#5fa88a", "danger": "#d97a9c", "warn": "#d2a15a"}, "mono": {"bg": "#f2f2f2", "bg_elev": "#ffffff", "bg_sunken": "#e2e2e2", "text": "#111111", "text_dim": "#666666", "accent": "#333333", "accent_text": "#ffffff", "border": "#cccccc", "success": "#3a3a3a", "danger": "#000000", "warn": "#555555"}, "neon": {"bg": "#0b0014", "bg_elev": "#160222", "bg_sunken": "#20032f", "text": "#f2e9ff", "text_dim": "#b48ee0", "accent": "#ff2ec4", "accent_text": "#0b0014", "border": "#3a1656", "success": "#39ff9d", "danger": "#ff4d6d", "warn": "#ffe14d"}, "plain": {"bg": "#ffffff", "bg_elev": "#ffffff", "bg_sunken": "#f4f4f4", "text": "#000000", "text_dim": "#444444", "accent": "#000000", "accent_text": "#ffffff", "border": "#000000", "success": "#006600", "danger": "#990000", "warn": "#997700"}, "rose": {"bg": "#fbeef1", "bg_elev": "#fff6f8", "bg_sunken": "#f6dde3", "text": "#3d1b23", "text_dim": "#8a5762", "accent": "#b8496a", "accent_text": "#fff6f8", "border": "#f0c7d1", "success": "#4c8a5e", "danger": "#a4362e", "warn": "#a97a1a"}, "slate": {"bg": "#1e2530", "bg_elev": "#262e3b", "bg_sunken": "#2f3847", "text": "#dbe2ea", "text_dim": "#8b97a6", "accent": "#5b8def", "accent_text": "#0b111a", "border": "#38424f", "success": "#4fbf8b", "danger": "#e3675a", "warn": "#e0a94f"}, "aurora-dawn": {"bg": "#f2f7f7", "bg_elev": "#ffffff", "bg_sunken": "#e2eef0", "text": "#14313a", "text_dim": "#4f7078", "accent": "#2fb6a3", "accent_text": "#ffffff", "border": "#cfe4e6", "success": "#2f9e6d", "danger": "#d1495b", "warn": "#e0a94f"}, "aurora-dusk": {"bg": "#1b2a3a", "bg_elev": "#22384a", "bg_sunken": "#2b4459", "text": "#eaf4f4", "text_dim": "#9db7c2", "accent": "#7fd8c9", "accent_text": "#0d1f26", "border": "#375267", "success": "#6fd19a", "danger": "#e88a8a", "warn": "#f0c675"}, "aurora-night": {"bg": "#0c1420", "bg_elev": "#121d2c", "bg_sunken": "#182636", "text": "#dfeaf0", "text_dim": "#7f95a6", "accent": "#b98aff", "accent_text": "#0c1420", "border": "#24384a", "success": "#59c98f", "danger": "#ff7a7a", "warn": "#ffd479"}, "autumn-amber": {"bg": "#fdf3e3", "bg_elev": "#fffaf0", "bg_sunken": "#f7e4c1", "text": "#4a2f10", "text_dim": "#8a6a3c", "accent": "#d98a1c", "accent_text": "#fffaf0", "border": "#ecd3a0", "success": "#5f7a2e", "danger": "#b23a24", "warn": "#b8791a"}, "autumn-rust": {"bg": "#4a2418", "bg_elev": "#5c2f1f", "bg_sunken": "#6b3826", "text": "#fbe9df", "text_dim": "#d3a793", "accent": "#e2703a", "accent_text": "#33150d", "border": "#79412c", "success": "#8fae4f", "danger": "#ff8360", "warn": "#f0b25a"}, "autumn-umber": {"bg": "#241209", "bg_elev": "#331a0e", "bg_sunken": "#3f2112", "text": "#f2ded0", "text_dim": "#b8927b", "accent": "#cf6a2e", "accent_text": "#241209", "border": "#4f2c17", "success": "#8fae4f", "danger": "#ff8a60", "warn": "#e0a25a"}, "reef-shallow": {"bg": "#e9fbfa", "bg_elev": "#ffffff", "bg_sunken": "#d3f3ef", "text": "#0c3b3a", "text_dim": "#4c7a76", "accent": "#ff7a68", "accent_text": "#ffffff", "border": "#bfe6e2", "success": "#2a9d8f", "danger": "#ff5a4d", "warn": "#e0a53a"}, "reef-lagoon": {"bg": "#0d4c53", "bg_elev": "#12606a", "bg_sunken": "#16717d", "text": "#eafcfb", "text_dim": "#9fd4d1", "accent": "#ff9478", "accent_text": "#062226", "border": "#1c7e8b", "success": "#6fe0c4", "danger": "#ff8a75", "warn": "#ffce7a"}, "reef-abyss": {"bg": "#041f26", "bg_elev": "#072a33", "bg_sunken": "#0a3540", "text": "#d7f0ef", "text_dim": "#6f9ea0", "accent": "#ff8266", "accent_text": "#041f26", "border": "#124450", "success": "#4fc2a1", "danger": "#ff7364", "warn": "#ffcb70"}, "desert-dune": {"bg": "#f7ecd8", "bg_elev": "#fff8ec", "bg_sunken": "#edd9b3", "text": "#4a3a1e", "text_dim": "#8a744a", "accent": "#c46a2e", "accent_text": "#fff8ec", "border": "#e2c894", "success": "#6f7a2e", "danger": "#b0402a", "warn": "#b8801a"}, "desert-mesa": {"bg": "#8a5a34", "bg_elev": "#96633a", "bg_sunken": "#7a4d2c", "text": "#fff3e2", "text_dim": "#f0d8b8", "accent": "#e0932e", "accent_text": "#2c1a0c", "border": "#5e3a1e", "success": "#a3b062", "danger": "#ff8a5c", "warn": "#ffce7a"}, "desert-canyon": {"bg": "#2c1a0f", "bg_elev": "#3a2314", "bg_sunken": "#472c19", "text": "#f2e2cc", "text_dim": "#b89a76", "accent": "#e0812e", "accent_text": "#2c1a0f", "border": "#5c3a20", "success": "#9fae52", "danger": "#ff8a5c", "warn": "#eab35a"}, "lavender-bloom": {"bg": "#f6f1fb", "bg_elev": "#fffcff", "bg_sunken": "#ece2f7", "text": "#362a48", "text_dim": "#7a6a91", "accent": "#8a5fc7", "accent_text": "#ffffff", "border": "#ddd0ef", "success": "#5f9d7a", "danger": "#d16a8a", "warn": "#c99a4a"}, "lavender-dusk": {"bg": "#362a48", "bg_elev": "#423355", "bg_sunken": "#4d3d63", "text": "#f2ecfb", "text_dim": "#bfa9d9", "accent": "#b78ce8", "accent_text": "#241a33", "border": "#5c4a74", "success": "#7fc79f", "danger": "#e88aa8", "warn": "#e0b877"}, "lavender-twilight": {"bg": "#1c1428", "bg_elev": "#251a35", "bg_sunken": "#2e2242", "text": "#ece4f7", "text_dim": "#9a86b3", "accent": "#c79aff", "accent_text": "#1c1428", "border": "#3f2f57", "success": "#6fc797", "danger": "#e87f9d", "warn": "#e0b877"}, "arctic-frost": {"bg": "#eef6fb", "bg_elev": "#ffffff", "bg_sunken": "#dcedf5", "text": "#102a38", "text_dim": "#4f7383", "accent": "#2a8fc7", "accent_text": "#ffffff", "border": "#c3dfec", "success": "#2f9d7a", "danger": "#d1495b", "warn": "#c98a2a"}, "arctic-glacier": {"bg": "#163040", "bg_elev": "#1d3d50", "bg_sunken": "#234a5f", "text": "#e6f4fb", "text_dim": "#9dc0d1", "accent": "#6fd0f0", "accent_text": "#0a1b24", "border": "#2f5468", "success": "#6fd6ae", "danger": "#ff8a8a", "warn": "#f0c675"}, "arctic-polar-night": {"bg": "#06141c", "bg_elev": "#0b1e28", "bg_sunken": "#102734", "text": "#d9edf5", "text_dim": "#6f95a3", "accent": "#7fd9ff", "accent_text": "#06141c", "border": "#1c3948", "success": "#5fd1a5", "danger": "#ff7a7a", "warn": "#f0c46e"}, "volcanic-ember": {"bg": "#2b1210", "bg_elev": "#391916", "bg_sunken": "#45201c", "text": "#fbe4de", "text_dim": "#d19b8f", "accent": "#ff6a3d", "accent_text": "#2b1210", "border": "#5c2b24", "success": "#9fae52", "danger": "#ff5a3d", "warn": "#ffb84e"}, "volcanic-magma": {"bg": "#1a0806", "bg_elev": "#250d0a", "bg_sunken": "#30120d", "text": "#f2ded8", "text_dim": "#b8867a", "accent": "#ff7a45", "accent_text": "#1a0806", "border": "#4a201a", "success": "#94ae52", "danger": "#ff6440", "warn": "#ffb04a"}, "volcanic-obsidian": {"bg": "#0a0403", "bg_elev": "#140807", "bg_sunken": "#1c0c0a", "text": "#ece0dc", "text_dim": "#9c7c74", "accent": "#ff8a52", "accent_text": "#0a0403", "border": "#3a1a15", "success": "#8aab52", "danger": "#ff6a48", "warn": "#ffab4a"}, "meadow-spring": {"bg": "#f2f9e9", "bg_elev": "#ffffff", "bg_sunken": "#e3f0cf", "text": "#263a12", "text_dim": "#5c7a3e", "accent": "#6fa42e", "accent_text": "#ffffff", "border": "#d3e6b3", "success": "#4f9e3a", "danger": "#c2492f", "warn": "#c9942a"}, "meadow-summer": {"bg": "#2e4a1e", "bg_elev": "#395a26", "bg_sunken": "#42672e", "text": "#f0f7e2", "text_dim": "#bcd6a3", "accent": "#9fd94e", "accent_text": "#16260c", "border": "#547a34", "success": "#a3e06e", "danger": "#ff8a6e", "warn": "#f0cf6e"}, "meadow-moss": {"bg": "#16260c", "bg_elev": "#1e3211", "bg_sunken": "#253d16", "text": "#e6f0d9", "text_dim": "#92ab7c", "accent": "#8fd45a", "accent_text": "#16260c", "border": "#3a5426", "success": "#8fd45a", "danger": "#ff8a6e", "warn": "#e0c26a"}, "royal-sapphire": {"bg": "#0d1a3d", "bg_elev": "#14224d", "bg_sunken": "#1a2b5c", "text": "#eaf0ff", "text_dim": "#93a6d9", "accent": "#d4af37", "accent_text": "#0d1a3d", "border": "#26397a", "success": "#5fbf8a", "danger": "#ff7a7a", "warn": "#d4af37"}, "royal-gold": {"bg": "#fbf6e6", "bg_elev": "#fffdf5", "bg_sunken": "#f2e7c2", "text": "#3a2e0c", "text_dim": "#7a6a3c", "accent": "#16337a", "accent_text": "#fffdf5", "border": "#e2d29a", "success": "#3a7a5f", "danger": "#a3392f", "warn": "#b8891a"}, "royal-amethyst": {"bg": "#240d3d", "bg_elev": "#301252", "bg_sunken": "#391963", "text": "#f0e6ff", "text_dim": "#b39ad9", "accent": "#d4af37", "accent_text": "#240d3d", "border": "#4a2470", "success": "#5fbf8a", "danger": "#ff7a9a", "warn": "#d4af37"}, "retro-mustard": {"bg": "#fbf2df", "bg_elev": "#fffaf0", "bg_sunken": "#f2e2b8", "text": "#3a2e12", "text_dim": "#7a6a3c", "accent": "#d99b1c", "accent_text": "#fffaf0", "border": "#e6d29a", "success": "#5f7a2e", "danger": "#c2492f", "warn": "#d99b1c"}, "retro-rust": {"bg": "#6e2f1e", "bg_elev": "#7c3924", "bg_sunken": "#8a422b", "text": "#fbe6d9", "text_dim": "#d9b39e", "accent": "#f0a94e", "accent_text": "#2c120a", "border": "#a35630", "success": "#9fae52", "danger": "#ff8a5c", "warn": "#f0c675"}, "retro-avocado": {"bg": "#3a4a1e", "bg_elev": "#465826", "bg_sunken": "#52662e", "text": "#f0f2d9", "text_dim": "#b3bc8f", "accent": "#d9c23a", "accent_text": "#1c2610", "border": "#647a3a", "success": "#9fd45a", "danger": "#ff8a5c", "warn": "#d9c23a"}, "retro-cream": {"bg": "#fbf6ec", "bg_elev": "#fffdf7", "bg_sunken": "#f2e9d2", "text": "#4a3c26", "text_dim": "#8a7a5c", "accent": "#7a4a2e", "accent_text": "#fffdf7", "border": "#e6d9ba", "success": "#5f7a3e", "danger": "#a3492f", "warn": "#b8791a"}};

function themeMockup(pv){
  if(!pv) return "";
  return `<div style="background:${pv.bg}; border:1px solid ${pv.border}; border-radius:8px; padding:8px; display:flex; gap:6px; height:74px; overflow:hidden;">
    <div style="width:22%; background:${pv.bg_elev}; border-radius:5px; padding:5px 4px; display:flex; flex-direction:column; gap:4px;">
      <div style="width:60%; height:5px; border-radius:2px; background:${pv.accent};"></div>
      <div style="width:80%; height:3px; border-radius:2px; background:${pv.text_dim};"></div>
      <div style="width:70%; height:3px; border-radius:2px; background:${pv.text_dim}; opacity:0.6;"></div>
      <div style="width:75%; height:3px; border-radius:2px; background:${pv.text_dim}; opacity:0.6;"></div>
    </div>
    <div style="flex:1; display:flex; flex-direction:column; gap:5px;">
      <div style="width:55%; height:6px; border-radius:2px; background:${pv.text};"></div>
      <div style="width:85%; height:3px; border-radius:2px; background:${pv.text_dim};"></div>
      <div style="background:${pv.bg_elev}; border:1px solid ${pv.border}; border-radius:5px; padding:5px; flex:1; display:flex; align-items:center; gap:5px;">
        <div style="width:16px; height:16px; border-radius:4px; background:${pv.accent};"></div>
        <div style="flex:1; display:flex; flex-direction:column; gap:3px;">
          <div style="width:70%; height:3px; border-radius:2px; background:${pv.text};"></div>
          <div style="width:50%; height:3px; border-radius:2px; background:${pv.text_dim};"></div>
        </div>
      </div>
      <div style="display:flex; gap:4px;">
        <div style="width:10px; height:8px; border-radius:2px; background:${pv.success};"></div>
        <div style="width:10px; height:8px; border-radius:2px; background:${pv.warn};"></div>
        <div style="width:10px; height:8px; border-radius:2px; background:${pv.danger};"></div>
        <div style="flex:1;"></div>
        <div style="width:26px; height:8px; border-radius:8px; background:${pv.accent};"></div>
      </div>
    </div>
  </div>`;
}


/* ---- Settings ---- */
function renderSettings(){
  markActiveNav("settings");
  const s = getSettings();
  view().innerHTML = `
    <div class="eyebrow">Preferences</div>
    <h1>${icon("settings","icon-lg")} Settings</h1>
    <p class="muted">Changes apply immediately across the whole site and are saved to this browser.</p>

    <h2>${icon("layers","icon-lg")} Layout <span class="muted" style="font-weight:400; font-size:0.85rem;">(10 GUI design models — changes where navigation lives)</span></h2>
    <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:12px; margin-bottom:8px;" id="layoutGrid"></div>

    <h2>${icon("palette","icon-lg")} Theme <span class="muted" style="font-weight:400; font-size:0.85rem;">(27 themes across 11 families, most with 2–4 color tones)</span></h2>
    <div id="themeGroups"></div>

    <h2>${icon("font","icon-lg")} Text &amp; Typography <span class="muted" style="font-weight:400; font-size:0.85rem;">(font size 4&ndash;24, plus line height, spacing, and weight)</span></h2>
    <div class="card">
      <div class="setting-row">
        <label for="fontSelect" style="display:flex; align-items:center; gap:8px;">${icon("font")} Font family</label>
        <select id="fontSelect"></select>
      </div>
      <div class="setting-row">
        <label for="sizeRange" style="display:flex; align-items:center; gap:8px;">${icon("scale")} Text size — <span id="sizeVal">${s.fontSize}</span>px</label>
        <input type="range" id="sizeRange" min="4" max="24" step="1" value="${s.fontSize}">
      </div>
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("layers")} Line height</label>
        <div class="chip-row" id="lineHeightChips"></div>
      </div>
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("target")} Letter spacing</label>
        <div class="chip-row" id="letterSpacingChips"></div>
      </div>
      <div class="setting-row" style="border-bottom:none;">
        <label style="display:flex; align-items:center; gap:8px;">${icon("idea")} Heading weight</label>
        <div class="chip-row" id="headingWeightChips"></div>
      </div>
    </div>
    <div class="card" id="textPreviewCard">
      <div class="eyebrow">Live preview</div>
      <h2 id="previewH2" style="margin-top:4px;">The quick brown fox jumps</h2>
      <p id="previewP">This is a sample paragraph showing your current font, size, line height, and letter spacing settings applied together, exactly as they'll look throughout the site.</p>
    </div>

    <h2>${icon("layouts","icon-lg")} Shape &amp; Density</h2>
    <div class="card">
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("layers")} Corner roundness</label>
        <div class="chip-row" id="cornerChips"></div>
      </div>
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("layouts")} Content width</label>
        <div class="chip-row" id="widthChips"></div>
      </div>
      <div class="setting-row" style="border-bottom:none;">
        <label style="display:flex; align-items:center; gap:8px;">${icon("reset")} Reduce motion</label>
        <label class="switch"><input type="checkbox" id="reduceMotionToggle" ${s.reduceMotion?"checked":""}><span class="switch-slider"></span></label>
      </div>
    </div>
    <div class="card">
      <div class="eyebrow">Live preview</div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
        <div id="previewCard" class="card" style="margin:0; width:160px;"><strong>Sample card</strong><p class="muted" style="margin:6px 0 0; font-size:0.8rem;">Corner + width preview</p></div>
        <button class="btn" id="previewBtn">Sample button</button>
      </div>
    </div>

    <h2>${icon("chartpie","icon-lg")} Density, Background &amp; Accent</h2>
    <div class="card">
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("layers")} Spacing density</label>
        <div class="chip-row" id="densityChips"></div>
      </div>
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("palette")} Background pattern</label>
        <div class="chip-row" id="bgPatternChips"></div>
      </div>
      <div class="setting-row" style="border-bottom:none;">
        <label style="display:flex; align-items:center; gap:8px;">${icon("target")} Accent color override <span class="muted" style="font-weight:400;">(works with any theme)</span></label>
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="color" id="accentColorPicker" value="${s.accentOverride || "#2f5d50"}">
          <button class="btn secondary" id="accentResetBtn" style="padding:6px 12px; font-size:0.78rem;">Reset to theme</button>
        </div>
      </div>
    </div>

    <h2>${icon("idea","icon-lg")} Accessibility &amp; Effects</h2>
    <div class="card">
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("font")} Dyslexia-friendly mode <span class="muted" style="font-weight:400;">(legible font, wider spacing)</span></label>
        <label class="switch"><input type="checkbox" id="dyslexiaToggle" ${s.dyslexiaMode?"checked":""}><span class="switch-slider"></span></label>
      </div>
      <div class="setting-row">
        <label style="display:flex; align-items:center; gap:8px;">${icon("check")} Sound effects <span class="muted" style="font-weight:400;">(quiz answer chimes)</span></label>
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="btn secondary" id="soundTestBtn" style="padding:6px 12px; font-size:0.78rem;">${icon("target")} Test sound</button>
          <label class="switch"><input type="checkbox" id="soundToggle" ${s.soundEffects?"checked":""}><span class="switch-slider"></span></label>
        </div>
      </div>
      <div class="setting-row" style="border-bottom:none;">
        <label style="display:flex; align-items:center; gap:8px;">${icon("trophy")} Celebration effects <span class="muted" style="font-weight:400;">(confetti + chime at 80%+ scores)</span></label>
        <label class="switch"><input type="checkbox" id="celebrationToggle" ${s.celebrations?"checked":""}><span class="switch-slider"></span></label>
      </div>
    </div>

    <h2>${icon("palette","icon-lg")} Create Your Own Theme <span class="muted" style="font-weight:400; font-size:0.85rem;">— design a fully custom theme, live-previewed</span></h2>
    <div class="card">
      <p class="muted" style="font-size:0.85rem;">Pick your own colors below — the mockup updates instantly. Click <strong>Save &amp; Apply My Theme</strong> when you're happy with it; it's stored right alongside the 48 presets and can be re-selected any time.</p>
      <div class="grid" style="grid-template-columns:1fr 1fr; gap:20px; align-items:start; margin-top:14px;">
        <div id="customColorPickers" style="display:grid; grid-template-columns:1fr 1fr; gap:10px 16px;"></div>
        <div>
          <div class="muted" style="font-size:0.78rem; margin-bottom:6px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">Live mockup</div>
          <div id="customThemeMockup"></div>
          <div style="margin-top:14px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn" id="saveCustomThemeBtn">${icon("check")} Save &amp; Apply My Theme</button>
            <button class="btn secondary" id="randomizeThemeBtn">${icon("reset")} Randomize</button>
          </div>
        </div>
      </div>
    </div>
  `;
  const layoutGrid = document.getElementById("layoutGrid");
  LAYOUTS.forEach(l=>{
    const card = document.createElement("div");
    card.className = "card layout-card" + (s.layout===l.id ? " active":"");
    card.style.cursor = "pointer";
    card.style.padding = "12px";
    card.innerHTML = `
      ${layoutPreview(l.id)}
      <div style="font-weight:700; font-size:0.85rem; margin-top:10px;">${l.label}</div>
      <div class="muted" style="font-size:0.76rem; margin-top:2px;">${l.desc}</div>
    `;
    card.addEventListener("click", ()=>{
      const ns = getSettings(); ns.layout = l.id; saveSettings(ns); renderSidebar(); renderSettings();
    });
    layoutGrid.appendChild(card);
  });

  const groupsEl = document.getElementById("themeGroups");
  if(s.customTheme){
    const wrap = document.createElement("div");
    wrap.className = "theme-group";
    wrap.innerHTML = `<div class="theme-group-title">${icon("idea")} My Custom Theme</div><div class="theme-row theme-row-detailed"></div>`;
    const row = wrap.querySelector(".theme-row");
    const pv = s.customTheme;
    const sw = document.createElement("div");
    sw.className = "theme-swatch theme-swatch-detailed" + (s.theme==="custom" ? " active":"");
    sw.innerHTML = `
      ${themeMockup(pv)}
      <div class="theme-swatch-label" style="background:${pv.bg_elev}; color:${pv.text};">
        ${s.theme==="custom" ? icon("check","icon") : ""}<span>My Theme</span>
      </div>
    `;
    sw.style.borderColor = s.theme==="custom" ? pv.accent : "var(--border)";
    if(s.theme==="custom"){ sw.style.boxShadow = `0 0 0 2px ${pv.accent}`; }
    sw.addEventListener("click", ()=>{
      const ns = getSettings(); ns.theme = "custom"; saveSettings(ns); renderSettings();
    });
    row.appendChild(sw);
    groupsEl.appendChild(wrap);
  }
  THEME_GROUPS.forEach(g=>{
    const wrap = document.createElement("div");
    wrap.className = "theme-group";
    wrap.innerHTML = `<div class="theme-group-title">${g.group}</div><div class="theme-row theme-row-detailed"></div>`;
    const row = wrap.querySelector(".theme-row");
    g.themes.forEach(t=>{
      const pv = THEME_PREVIEW[t.id];
      const sw = document.createElement("div");
      sw.className = "theme-swatch theme-swatch-detailed" + (s.theme===t.id ? " active":"");
      sw.setAttribute("data-theme-preview", t.id);
      sw.innerHTML = `
        ${themeMockup(pv)}
        <div class="theme-swatch-label" style="background:${pv?pv.bg_elev:''}; color:${pv?pv.text:''};">
          ${s.theme===t.id ? icon("check","icon") : ""}<span>${t.label}</span>
        </div>
      `;
      if(pv){
        sw.style.borderColor = s.theme===t.id ? pv.accent : "var(--border)";
        if(s.theme===t.id){ sw.style.boxShadow = `0 0 0 2px ${pv.accent}`; }
      }
      sw.addEventListener("click", ()=>{
        const ns = getSettings(); ns.theme = t.id; saveSettings(ns); renderSettings();
      });
      row.appendChild(sw);
    });
    groupsEl.appendChild(wrap);
  });

  const fontSelect = document.getElementById("fontSelect");
  FONTS.forEach(f=>{
    const opt = document.createElement("option");
    opt.value = f.value; opt.textContent = f.label;
    if(f.value===s.font) opt.selected = true;
    fontSelect.appendChild(opt);
  });
  function updatePreview(){
    const ns = getSettings();
    const p = document.getElementById("previewP");
    const h = document.getElementById("previewH2");
    if(p && h){
      [p,h].forEach(el=>{
        el.style.fontFamily = ns.font;
        el.style.lineHeight = findVal(LINE_HEIGHTS, ns.lineHeight, "1.55");
        el.style.letterSpacing = findVal(LETTER_SPACINGS, ns.letterSpacing, "normal");
      });
      h.style.fontWeight = findVal(HEADING_WEIGHTS, ns.headingWeight, "700");
    }
  }
  fontSelect.addEventListener("change", e=>{
    const ns = getSettings(); ns.font = e.target.value; saveSettings(ns); updatePreview();
  });
  document.getElementById("sizeRange").addEventListener("input", e=>{
    const ns = getSettings(); ns.fontSize = parseInt(e.target.value,10); saveSettings(ns);
    document.getElementById("sizeVal").textContent = ns.fontSize;
  });

  function buildChipRow(containerId, options, settingKey, onChange){
    const el = document.getElementById(containerId);
    options.forEach(opt=>{
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip-btn" + (s[settingKey]===opt.id ? " active" : "");
      chip.textContent = opt.label;
      chip.addEventListener("click", ()=>{
        const ns = getSettings(); ns[settingKey] = opt.id; saveSettings(ns);
        el.querySelectorAll(".chip-btn").forEach(c=>c.classList.remove("active"));
        chip.classList.add("active");
        if(onChange) onChange();
      });
      el.appendChild(chip);
    });
  }
  buildChipRow("lineHeightChips", LINE_HEIGHTS, "lineHeight", updatePreview);
  buildChipRow("letterSpacingChips", LETTER_SPACINGS, "letterSpacing", updatePreview);
  buildChipRow("headingWeightChips", HEADING_WEIGHTS, "headingWeight", updatePreview);
  buildChipRow("cornerChips", CORNER_STYLES, "corners");
  buildChipRow("widthChips", CONTENT_WIDTHS, "contentWidth");
  updatePreview();

  document.getElementById("reduceMotionToggle").addEventListener("change", e=>{
    const ns = getSettings(); ns.reduceMotion = e.target.checked; saveSettings(ns);
  });

  buildChipRow("densityChips", DENSITIES, "density");
  buildChipRow("bgPatternChips", BG_PATTERNS, "bgPattern");

  const accentPicker = document.getElementById("accentColorPicker");
  accentPicker.addEventListener("input", e=>{
    const ns = getSettings(); ns.accentOverride = e.target.value; saveSettings(ns);
  });
  document.getElementById("accentResetBtn").addEventListener("click", ()=>{
    const ns = getSettings(); ns.accentOverride = ""; saveSettings(ns); renderSettings();
  });

  document.getElementById("dyslexiaToggle").addEventListener("change", e=>{
    const ns = getSettings(); ns.dyslexiaMode = e.target.checked; saveSettings(ns); updatePreview();
  });
  document.getElementById("soundToggle").addEventListener("change", e=>{
    const ns = getSettings(); ns.soundEffects = e.target.checked; saveSettings(ns);
    if(e.target.checked) playCorrectSound();
  });
  document.getElementById("soundTestBtn").addEventListener("click", ()=>{
    const ns = getSettings();
    if(!ns.soundEffects){ ns.soundEffects = true; saveSettings(ns); document.getElementById("soundToggle").checked = true; }
    playCelebrationSound();
  });
  document.getElementById("celebrationToggle").addEventListener("change", e=>{
    const ns = getSettings(); ns.celebrations = e.target.checked; saveSettings(ns);
  });

  /* ---- Custom Theme Creator ---- */
  const CUSTOM_FIELDS = [
    {key:"bg", label:"Page background"}, {key:"bg_elev", label:"Card background"}, {key:"bg_sunken", label:"Sunken/muted background"},
    {key:"text", label:"Main text"}, {key:"text_dim", label:"Muted text"},
    {key:"accent", label:"Accent color"}, {key:"accent_text", label:"Text on accent"},
    {key:"border", label:"Borders"}, {key:"success", label:"Success"}, {key:"danger", label:"Danger"}, {key:"warn", label:"Warning"},
  ];
  const seedTheme = s.customTheme || THEME_PREVIEW[s.theme!=="custom" ? s.theme : "light"] || THEME_PREVIEW.light;
  let customColors = Object.assign({}, seedTheme);

  const pickerWrap = document.getElementById("customColorPickers");
  CUSTOM_FIELDS.forEach(f=>{
    const row = document.createElement("div");
    row.innerHTML = `<label style="display:flex; flex-direction:column; gap:3px; font-size:0.72rem; color:var(--text-dim);">${f.label}
      <input type="color" data-field="${f.key}" value="${customColors[f.key]}" style="width:100%; height:30px; border-radius:6px; border:1px solid var(--border); cursor:pointer;">
    </label>`;
    pickerWrap.appendChild(row);
  });
  function redrawMockup(){
    document.getElementById("customThemeMockup").innerHTML = themeMockup(customColors);
  }
  pickerWrap.querySelectorAll("input[type=color]").forEach(inp=>{
    inp.addEventListener("input", e=>{
      customColors[e.target.dataset.field] = e.target.value;
      redrawMockup();
    });
  });
  redrawMockup();

  document.getElementById("saveCustomThemeBtn").addEventListener("click", ()=>{
    const ns = getSettings();
    ns.customTheme = Object.assign({}, customColors);
    ns.theme = "custom";
    saveSettings(ns);
    renderSidebar();
    renderSettings();
  });
  document.getElementById("randomizeThemeBtn").addEventListener("click", ()=>{
    function randHex(){ return "#"+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,"0"); }
    function luminance(hex){
      const n = parseInt(hex.slice(1),16);
      const r=(n>>16)&255, g=(n>>8)&255, b=n&255;
      return (0.299*r+0.587*g+0.114*b)/255;
    }
    const bg = randHex();
    const dark = luminance(bg) < 0.5;
    customColors = {
      bg, bg_elev: dark ? "#2a2a32" : "#ffffff", bg_sunken: dark ? "#34343e" : "#eeeeee",
      text: dark ? "#f0f0f2" : "#161616", text_dim: dark ? "#a8a8b4" : "#606060",
      accent: randHex(), accent_text: "#ffffff",
      border: dark ? "#44444e" : "#dddddd",
      success: "#33a871", danger: "#e8564f", warn: "#e0a53a",
    };
    pickerWrap.querySelectorAll("input[type=color]").forEach(inp=>{
      inp.value = customColors[inp.dataset.field];
    });
    redrawMockup();
  });
}

/* ---- Quiz engine (shared by objective quiz and full exam) ---- */
function runQuiz(questions, opts){
  // opts: {title, subtitle, onFinish(correctCount, total)}
  let idx = 0;
  const selections = new Array(questions.length).fill(null);
  const answered = new Array(questions.length).fill(false);
  // Randomize where the correct answer appears for each question. displayOrders[i] is a
  // shuffled array of ORIGINAL option indices; selections[]/scoring still use original indices,
  // only the on-screen position is randomized.
  const displayOrders = questions.map(q => shuffle(q.c.map((_, i) => i)));

  function renderQ(){
    const q = questions[idx];
    const letters = ["A","B","C","D","E","F"];
    const order = displayOrders[idx];
    view().innerHTML = `
      <div class="eyebrow">${opts.title}</div>
      <h1 style="font-size:1.3rem;">${opts.subtitle||""}</h1>
      <div class="progress-track" style="margin:10px 0 18px;"><div class="progress-fill" style="width:${100*(idx+1)/questions.length}%"></div></div>
      <div class="card">
        <div class="q-meta">Question ${idx+1} of ${questions.length} &middot; Objective ${q.obj}</div>
        <div class="q-text">${q.q}</div>
        <div id="choices"></div>
        <div id="explainBox"></div>
        <div class="quiz-nav">
          <button class="btn secondary" id="prevBtn" ${idx===0?"disabled":""}>Previous</button>
          <button class="btn" id="nextBtn">${idx===questions.length-1 ? "Finish" : "Next"}</button>
        </div>
      </div>
    `;
    const choicesEl = document.getElementById("choices");
    order.forEach((ci, displayPos)=>{
      const choice = q.c[ci];
      const div = document.createElement("div");
      div.className = "choice";
      div.innerHTML = `<span class="choice-letter">${letters[displayPos]}</span><span>${choice}</span>`;
      if(answered[idx]){
        if(ci===q.a) div.classList.add("correct");
        else if(ci===selections[idx]) div.classList.add("incorrect");
      } else if(selections[idx]===ci){
        div.classList.add("selected");
      }
      div.addEventListener("click", ()=>{
        if(answered[idx]) return;
        selections[idx]=ci; answered[idx]=true;
        if(ci===q.a) playCorrectSound(); else playIncorrectSound();
        renderQ();
      });
      choicesEl.appendChild(div);
    });
    if(answered[idx]){
      const correct = selections[idx]===q.a;
      document.getElementById("explainBox").innerHTML =
        `<div class="explain"><span class="pill ${correct?'correct':'wrong'}">${correct?'Correct':'Incorrect'}</span><br><br>${q.e}</div>`;
    }
    document.getElementById("prevBtn").addEventListener("click", ()=>{ idx--; renderQ(); });
    document.getElementById("nextBtn").addEventListener("click", ()=>{
      if(idx < questions.length-1){ idx++; renderQ(); }
      else finish();
    });
  }

  function finish(){
    let correct = 0;
    questions.forEach((q,i)=>{ if(selections[i]===q.a) correct++; });
    opts.onFinish(correct, questions.length, questions, selections);
  }

  renderQ();
}

function renderResultSummary(title, correct, total, questions, selections, backRoute){
  const pct = Math.round(100*correct/total);
  view().innerHTML = `
    <div class="eyebrow">Results</div>
    <h1>${title}</h1>
    <div class="card">
      <div class="stat-num">${correct}/${total} (${pct}%)</div>
      <div class="stat-label">${pct>=80?"Strong performance.":pct>=60?"Getting there — review the misses below.":"Keep practicing this area."}</div>
    </div>
    <h2>Review</h2>
    ${questions.map((q,i)=>{
      const ok = selections[i]===q.a;
      const letters=["A","B","C","D","E","F"];
      return `<div class="card">
        <div class="q-meta">Objective ${q.obj} <span class="pill ${ok?'correct':'wrong'}">${ok?'Correct':'Incorrect'}</span></div>
        <div class="q-text" style="font-size:1rem;">${q.q}</div>
        <p><strong>Your answer:</strong> ${selections[i]!=null ? letters[selections[i]]+". "+q.c[selections[i]] : "—"}</p>
        ${!ok? `<p><strong>Correct answer:</strong> ${letters[q.a]}. ${q.c[q.a]}</p>`:""}
        <div class="explain">${q.e}</div>
      </div>`;
    }).join("")}
    <button class="btn" id="backBtn">Back</button>
  `;
  document.getElementById("backBtn").addEventListener("click", ()=>navigate(backRoute));
  if(pct>=80){ launchConfetti(); playCelebrationSound(); }
}

/* ---- Objective quiz ---- */
const OBJECTIVE_TEST_SIZES = [
  {id:10, label:"10 Questions", desc:"A quick, focused check-in."},
  {id:30, label:"30 Questions", desc:"A short session covering a good cross-section."},
  {id:50, label:"50 Questions", desc:"A solid mid-length practice run."},
  {id:100, label:"100 Questions", desc:"An in-depth session for this objective."},
  {id:200, label:"200 Questions", desc:"An extended deep-dive, cycling back through the pool if needed."},
  {id:300, label:"300 Questions", desc:"The maximum-length marathon session for this objective."},
];
function renderObjectiveQuiz(objId){
  markActiveNav("obj-"+objId);
  const meta = objMeta(objId);
  if(!meta){ view().innerHTML = "<p>Objective not found.</p>"; return; }
  const pool = qByObjective(objId);
  view().innerHTML = `
    <div class="eyebrow">${meta.domain.name} &middot; ${objId}</div>
    <h1>${icon("target","icon-lg")} ${meta.objective.title}</h1>
    <p class="muted">Choose how many questions to practice for this objective. ${pool.length} unique questions exist for it; sizes beyond that will draw from the full ${pool.length}-question pool with repeats mixed back in to reach your chosen length.</p>
    <div class="grid grid-3" id="objSizeGrid"></div>
  `;
  const grid = document.getElementById("objSizeGrid");
  OBJECTIVE_TEST_SIZES.forEach((opt, i)=>{
    const runs = objTestRuns(objId, opt.id);
    const best = runs.length ? Math.max(...runs.map(h=>Math.round(100*h.correct/h.total))) : null;
    const col = badgeColor(i);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="stat-icon" style="background:${hexA(col,0.16)}; box-shadow:inset 0 0 0 1.5px ${hexA(col,0.35)};">${icon("target","icon-lg")}</div>
      <h3 style="margin:4px 0 2px;">${opt.label}</h3>
      <p class="muted" style="font-size:0.82rem; margin-bottom:6px;">${opt.desc}</p>
      <p class="muted" style="font-size:0.78rem; margin-bottom:10px;">${runs.length} attempt${runs.length===1?"":"s"}${best!=null?` &middot; best ${best}%`:""}</p>
      <a class="btn" href="#/objective/${objId}/${opt.id}" style="width:100%; text-align:center; display:block;">${icon("exam")} ${runs.length?"Retake":"Start"}</a>
    `;
    grid.appendChild(card);
  });
}

function renderObjectiveRun(objId, size){
  markActiveNav("obj-"+objId);
  const meta = objMeta(objId);
  if(!meta){ view().innerHTML = "<p>Objective not found.</p>"; return; }
  const opt = OBJECTIVE_TEST_SIZES.find(o=>o.id===size);
  if(!opt){ navigate("objective/"+objId); return; }
  const pool = qByObjective(objId);
  const runs = objTestRuns(objId, size);
  const best = runs.length ? Math.max(...runs.map(h=>Math.round(100*h.correct/h.total))) : null;
  const actualCount = Math.min(size, pool.length);
  view().innerHTML = `
    <div class="eyebrow">${meta.domain.name} &middot; ${objId}</div>
    <h1>${icon("target","icon-lg")} ${meta.objective.title} — ${opt.label}</h1>
    <p class="muted">
      ${size > pool.length
        ? `This objective has ${pool.length} unique question${pool.length===1?"":"s"}, so a ${size}-question test cycles back through the pool (reshuffled) to reach ${size} total.`
        : `${actualCount} questions, randomly drawn from the ${pool.length} available for this objective.`}
      ${best!=null?` Your best score at this length so far: <strong>${best}%</strong>.`:" You haven't attempted this length yet."}
    </p>
    <button class="btn" id="startBtn">${icon("exam")} Start (${size} question${size===1?"":"s"})</button>
    <a class="btn secondary" href="#/objective/${objId}" style="margin-left:8px;">${icon("chevron")} Back to all sizes</a>
  `;
  document.getElementById("startBtn").addEventListener("click", ()=>{
    let questions = [];
    if(size <= pool.length){
      questions = shuffle(pool).slice(0, size);
    } else {
      // cycle through reshuffled copies of the pool until reaching the requested size
      while(questions.length < size){
        questions = questions.concat(shuffle(pool));
      }
      questions = questions.slice(0, size);
    }
    runQuiz(questions, {
      title: `Objective ${objId}`,
      subtitle: `${meta.objective.title} — ${opt.label}`,
      onFinish: (correct, total, qs, sels)=>{
        saveObjProgress(objId, total, correct);
        addObjTestHistory({objId, size, correct, total, at: Date.now()});
        renderSidebar();
        markActiveNav("obj-"+objId);
        renderResultSummary(`${objId} — ${meta.objective.title} (${opt.label})`, correct, total, qs, sels, "objective/"+objId+"/"+size);
      }
    });
  });
}

/* ---- Full practice exam (flexible length) ---- */
function renderExamList(){
  markActiveNav("exam-full");
  const history = getExamHistory();
  view().innerHTML = `
    <div class="eyebrow">Full-length simulations</div>
    <h1>${icon("exam","icon-lg")} Practice Exams</h1>
    <p class="muted">Choose how many questions to practice. Every option is weighted like the real PK0-005 blueprint (Project Management Concepts 33%, Project Life Cycle Phases 30%, Tools and Documentation 19%, Basics of IT and Governance 18%) and freshly drawn from the ${window.QBANK.length}-question bank each time you start.</p>
    <div class="grid grid-3" id="examGrid"></div>
  `;
  const grid = document.getElementById("examGrid");
  EXAM_LENGTHS.forEach((opt, i)=>{
    const runs = history.filter(h=>h.length===opt.id);
    const best = runs.length ? Math.max(...runs.map(h=>Math.round(100*h.correct/h.total))) : null;
    const col = badgeColor(i);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="stat-icon" style="background:${hexA(col,0.16)}; box-shadow:inset 0 0 0 1.5px ${hexA(col,0.35)};">${icon("exam","icon-lg")}</div>
      <h3 style="margin:4px 0 2px;">${opt.label}</h3>
      <p class="muted" style="font-size:0.82rem; margin-bottom:6px;">${opt.desc}</p>
      <p class="muted" style="font-size:0.78rem; margin-bottom:10px;">${runs.length} attempt${runs.length===1?"":"s"}${best!=null?` &middot; best ${best}%`:""}</p>
      <a class="btn" href="#/exam/full/${opt.id}" style="width:100%; text-align:center; display:block;">${icon("exam")} ${runs.length?"Retake":"Start"}</a>
    `;
    grid.appendChild(card);
  });
}

function renderExamRun(lengthOption){
  markActiveNav("exam-full");
  const opt = EXAM_LENGTHS.find(o=>o.id===lengthOption);
  if(!opt){ navigate("exam/full"); return; }
  const history = getExamHistory();
  const runs = history.filter(h=>h.length===lengthOption);
  const best = runs.length ? Math.max(...runs.map(h=>Math.round(100*h.correct/h.total))) : null;
  const actualCount = lengthOption==="all" ? window.QBANK.length : Math.min(lengthOption, window.QBANK.length);
  view().innerHTML = `
    <div class="eyebrow">Full-length simulation</div>
    <h1>${icon("exam","icon-lg")} ${opt.label}</h1>
    <p class="muted">${actualCount} questions, freshly and randomly drawn in blueprint-matched proportions from the bank. ${best!=null?`Your best score on this length so far: <strong>${best}%</strong>.`:"You haven't attempted this length yet."}</p>
    <button class="btn" id="startFull">${icon("exam")} Start (${actualCount} questions)</button>
    <a class="btn secondary" href="#/exam/full" style="margin-left:8px;">${icon("chevron")} Back to all options</a>
  `;
  document.getElementById("startFull").addEventListener("click", ()=>{
    const selected = buildExam(lengthOption);
    runQuiz(selected, {
      title: opt.label,
      subtitle: `${selected.length}-question simulation`,
      onFinish: (correct, total, qs, sels)=>{
        qs.forEach((q,i)=>{ saveObjProgress(q.obj, 1, sels[i]===q.a?1:0); });
        addExamHistory({at: Date.now(), correct, total, length: lengthOption});
        renderSidebar();
        markActiveNav("exam-full");
        renderResultSummary(`${opt.label} Results`, correct, total, qs, sels, "exam/full/"+lengthOption);
      }
    });
  });
}

/* ---- Acronyms ---- */
function renderAcronyms(){
  markActiveNav("acronyms");
  let mode = "list";

  function draw(){
    const prog = getAcronymProgress();
    const known = Object.values(prog).filter(x=>x.knew).length;
    const cprog = getConceptProgress();
    const cknown = Object.values(cprog).filter(x=>x.knew).length;
    view().innerHTML = `
      <div class="eyebrow">Reference &amp; recall</div>
      <h1>${icon("acronym","icon-lg")} Acronym &amp; Concept Study</h1>
      <p class="muted">All ${window.ACRONYMS.length} acronyms plus ${window.CONCEPT_CARDS.length} key concept/scenario flashcards from the official PK0-005 objectives. Study the full table, or drill either set as flashcards.</p>
      <div class="grid grid-2" style="margin-bottom:16px;">
        <div class="card"><div class="card-icon-row">${icon("trophy")}<span>${known}/${window.ACRONYMS.length} acronyms marked "known"</span></div></div>
        <div class="card"><div class="card-icon-row">${icon("idea")}<span>${cknown}/${window.CONCEPT_CARDS.length} concepts marked "known"</span></div></div>
      </div>
      <div class="tab-row">
        <button class="tab-btn ${mode==='list'?'active':''}" id="tabList">${icon("book")} Acronym list</button>
        <button class="tab-btn ${mode==='cards'?'active':''}" id="tabCards">${icon("layers")} Acronym flashcards</button>
        <button class="tab-btn ${mode==='concepts'?'active':''}" id="tabConcepts">${icon("idea")} Concept flashcards</button>
      </div>
      <div id="acrBody"></div>
    `;
    document.getElementById("tabList").addEventListener("click", ()=>{ mode="list"; draw(); });
    document.getElementById("tabCards").addEventListener("click", ()=>{ mode="cards"; draw(); });
    document.getElementById("tabConcepts").addEventListener("click", ()=>{ mode="concepts"; draw(); });
    if(mode==="list") drawList();
    else if(mode==="cards") drawCards();
    else drawConcepts();
  }

  function drawList(){
    const body = document.getElementById("acrBody");
    body.innerHTML = `
      <div class="acr-toolbar">${icon("target")}<input type="text" class="acr-search" id="acrSearch" placeholder="Search acronym or definition..."></div>
      <div class="card"><table class="acr-table" id="acrTable"><thead><tr><th>Acronym</th><th>Definition</th><th>Why it matters</th></tr></thead><tbody></tbody></table></div>
    `;
    function renderRows(filter){
      const tbody = body.querySelector("tbody");
      const f = (filter||"").toLowerCase();
      const rows = window.ACRONYMS.filter(x=> !f || x.a.toLowerCase().includes(f) || x.d.toLowerCase().includes(f) || (x.e||"").toLowerCase().includes(f));
      tbody.innerHTML = rows.map(x=>`<tr><td>${x.a}</td><td>${x.d}</td><td class="muted" style="font-size:0.82rem;">${x.e||""}</td></tr>`).join("") ||
        `<tr><td colspan="3" class="muted">No matches.</td></tr>`;
    }
    renderRows("");
    document.getElementById("acrSearch").addEventListener("input", e=>renderRows(e.target.value));
  }

  function drawCards(){
    let deck = shuffle(window.ACRONYMS.map((x,i)=>i));
    let idx = 0, revealed = false;
    function drawCard(){
      const body = document.getElementById("acrBody");
      const item = window.ACRONYMS[deck[idx]];
      body.innerHTML = `
        <div class="q-meta">Card ${idx+1} of ${deck.length}</div>
        <div class="card flashcard" id="fcCard">
          ${revealed ? `<div>${item.a}<span class="fc-sub">${item.d}</span><span class="fc-explain">${item.e||""}</span></div>` : `<div>${item.a}<span class="fc-sub">Tap card to reveal definition</span></div>`}
        </div>
        <div class="fc-controls">
          <button class="btn secondary" id="dontKnow">${icon("cross")} Didn't know</button>
          <button class="btn" id="doKnow">${icon("check")} Knew it</button>
        </div>
        <div class="fc-controls">
          <button class="btn secondary" id="reshuffle">${icon("reset")} Reshuffle deck</button>
        </div>
      `;
      document.getElementById("fcCard").addEventListener("click", ()=>{ revealed = !revealed; drawCard(); });
      document.getElementById("doKnow").addEventListener("click", (e)=>{
        e.stopPropagation(); saveAcronymResult(item.a, true); next();
      });
      document.getElementById("dontKnow").addEventListener("click", (e)=>{
        e.stopPropagation(); saveAcronymResult(item.a, false); next();
      });
      document.getElementById("reshuffle").addEventListener("click", (e)=>{
        e.stopPropagation(); deck = shuffle(window.ACRONYMS.map((x,i)=>i)); idx=0; revealed=false; drawCard();
      });
    }
    function next(){
      revealed = false;
      idx = (idx+1) % deck.length;
      drawCard();
    }
    drawCard();
  }

  function drawConcepts(){
    let deck = shuffle(window.CONCEPT_CARDS.map((x,i)=>i));
    let idx = 0, revealed = false;
    function drawCard(){
      const body = document.getElementById("acrBody");
      const item = window.CONCEPT_CARDS[deck[idx]];
      const meta = objMeta(item.obj);
      body.innerHTML = `
        <div class="q-meta">Card ${idx+1} of ${deck.length} &middot; Objective ${item.obj}${meta?" — "+meta.objective.title:""}</div>
        <div class="card flashcard" id="fcCard">
          ${revealed ? `<div>${item.term}<span class="fc-explain">${item.def}</span></div>` : `<div>${item.term}<span class="fc-sub">Tap card to reveal explanation</span></div>`}
        </div>
        <div class="fc-controls">
          <button class="btn secondary" id="dontKnow">${icon("cross")} Didn't know</button>
          <button class="btn" id="doKnow">${icon("check")} Knew it</button>
        </div>
        <div class="fc-controls">
          <button class="btn secondary" id="reshuffle">${icon("reset")} Reshuffle deck</button>
        </div>
      `;
      document.getElementById("fcCard").addEventListener("click", ()=>{ revealed = !revealed; drawCard(); });
      document.getElementById("doKnow").addEventListener("click", (e)=>{
        e.stopPropagation(); saveConceptResult(item.term, true); next();
      });
      document.getElementById("dontKnow").addEventListener("click", (e)=>{
        e.stopPropagation(); saveConceptResult(item.term, false); next();
      });
      document.getElementById("reshuffle").addEventListener("click", (e)=>{
        e.stopPropagation(); deck = shuffle(window.CONCEPT_CARDS.map((x,i)=>i)); idx=0; revealed=false; drawCard();
      });
    }
    function next(){
      revealed = false;
      idx = (idx+1) % deck.length;
      drawCard();
    }
    drawCard();
  }

  draw();
}

/* ---- Study Tips ---- */
const STUDY_TECHNIQUES = [
  {
    icon:"target", tag:"Highest-impact",
    name:"Practice Testing (Active Recall)",
    blurb:"Quizzing yourself, rather than re-reading notes, is one of the two techniques that a large review of decades of learning research rated as consistently high-value across subjects and age groups.",
    how:["Answer a question before you check the answer — don't peek early.","Explain out loud why the other three choices are wrong, not just why one is right.","Treat every quiz attempt as a rehearsal for the real exam, including the ones you get wrong."],
    apply:"This is exactly what the Objective quizzes and the 90-question Practice Exams are built for. Answer first, then read the explanation — don't just skim questions passively."
  },
  {
    icon:"clock", tag:"Highest-impact",
    name:"Distributed Practice (Spaced Repetition)",
    blurb:"Spreading study sessions out over days or weeks — reviewing material again right around the point you're about to forget it — produces far stronger long-term retention than one long cram session.",
    how:["Study each domain more than once across the week instead of finishing it in a single sitting.","Revisit an objective 1 day, then 3 days, then a week after you first study it.","Let harder objectives resurface more often than ones you've already mastered."],
    apply:"Revisit objectives where your Dashboard shows lower accuracy every few days rather than only once. Use the Acronym flashcards' reshuffle to keep bringing weaker acronyms back around."
  },
  {
    icon:"shuffle", tag:"High-impact",
    name:"Interleaved Practice",
    blurb:"Mixing topics or question types in one session — instead of drilling one domain until it feels mastered — improves your ability to tell similar concepts apart, which is exactly what multiple-choice exams test.",
    how:["Alternate between two or three objectives in a single session instead of doing one at a time.","Deliberately mix domains: e.g. a risk-management question, then a tools question, then a change-control question.","Resist the urge to \"finish\" one topic before touching another — interleaving feels harder but builds more durable recall."],
    apply:"Each of the 10 Practice Exams interleaves all four domains automatically in a fixed random order — work through several of them across your prep, not just as a final check, to build this skill throughout."
  },
  {
    icon:"brain", tag:"High-impact",
    name:"Elaborative Interrogation & Self-Explanation",
    blurb:"Asking yourself \"why is this true?\" or \"how does this connect to what I already know?\" forces you to build real understanding instead of surface familiarity.",
    how:["After reading an explanation, ask \"why does that make the other options wrong?\"","Connect new terms to ones you already know — e.g. how a RACI matrix relates to a RAM.","Say out loud how a concept would show up in a real IT project you've worked on or heard about."],
    apply:"When you get a question wrong, don't just note the correct letter — read the explanation and ask yourself why your original choice was a trap. That habit compounds fast across 240 questions."
  },
  {
    icon:"teach", tag:"Deep understanding",
    name:"The Feynman Technique",
    blurb:"Named for physicist Richard Feynman: pick a concept, explain it in plain language as if teaching someone with no background in it, then use the gaps you find to target your review.",
    how:["Pick one objective, e.g. \"change control.\"","Explain it out loud or in writing, in simple words, with no jargon.","Circle anywhere you got vague, stuck, or fell back on a term you can't define — that's your real study list.","Go back to the material only for those gaps, then re-explain the whole thing simply again."],
    apply:"Try this on the acronym-heavy objectives (RACI, WBS, CCB, SLA) and on Agile vs. Waterfall — if you can't explain the difference simply, that's a signal to revisit that objective's quiz."
  },
  {
    icon:"clock", tag:"Focus & consistency",
    name:"The Pomodoro Technique",
    blurb:"A simple time-boxing method: work in focused intervals (traditionally 25 minutes) with short breaks between them, which helps prevent burnout and makes it easier to start a study session in the first place.",
    how:["Set a timer for 25 minutes and study one objective with no phone, tabs, or notifications.","Take a 5-minute break — stand up, stretch, look away from the screen.","After 4 rounds, take a longer 15–30 minute break.","Adjust the interval length (e.g. 45/15) if 25 minutes feels too short once you're in flow."],
    apply:"One Pomodoro round maps neatly to one Objective quiz (10 questions) plus reading its explanations — a natural, low-friction unit of study."
  },
  {
    icon:"bookopen", tag:"Reading strategy",
    name:"SQ3R for the official objectives document",
    blurb:"A structured reading method — Survey, Question, Read, Recite, Review — for getting more out of dense reference material like the official CompTIA objectives PDF, instead of passively reading start to finish.",
    how:["Survey: skim the whole PDF first for structure — four domains, their weightings, and objective headings.","Question: turn each objective heading into a question (\"how do I apply change control throughout the life cycle?\").","Read: read that section actively looking for the answer to your question.","Recite: close the document and say the answer in your own words.","Review: come back later and see if you can still recite it without looking."],
    apply:"Use the downloadable PDF (linked on the Dashboard and in the sidebar) for this — then immediately test what you just read using that objective's quiz."
  },
  {
    icon:"network", tag:"Organization",
    name:"Mind Mapping & Dual Coding",
    blurb:"Pairing words with visual structure — diagrams, charts, spatial layouts — tends to build stronger memory than text alone, because you're encoding the same idea two different ways.",
    how:["Draw the project life cycle as a simple flow: Discovery → Initiation → Planning → Execution → Closing.","Sketch a quadrant for Agile vs. Waterfall trade-offs instead of writing a paragraph.","Map how RACI, RAM, and stakeholder roles relate to each other visually, not just as a list."],
    apply:"Objective 3.1–3.3 literally cover charts and diagrams (Gantt, PERT, fishbone, Pareto) — study those with an actual sketch in front of you, not just the multiple-choice text."
  },
  {
    icon:"warning", tag:"What to deprioritize",
    name:"Skip passive re-reading and highlighting as your main method",
    blurb:"The same research that rates practice testing and spaced practice highly rates re-reading, highlighting, and summarizing on their own as low-value — they create a feeling of familiarity that doesn't reliably translate into recall under exam conditions.",
    how:["If you're going to re-read the PDF, pair it with SQ3R above rather than reading passively start to finish.","Replace \"read the chapter again\" with \"take the objective's quiz again.\"","Use highlighting only to mark what you'll come back and quiz yourself on — never as the last step."],
    apply:"Every objective in this app has its own quiz specifically so you can replace re-reading with retrieval practice — treat the quizzes as your primary tool, and the PDF as reference material you consult, not re-read cover to cover."
  },
];

function renderStudyTips(){
  markActiveNav("studytips");
  view().innerHTML = `
    <div class="eyebrow">Learn how to learn</div>
    <h1>${icon("idea","icon-lg")} Study Tips &amp; Methods</h1>
    <p class="muted">Nine techniques drawn from cognitive-science research on learning and memory (including the widely-cited Dunlosky et al. review of study strategies), adapted specifically to this PK0-005 study desk.</p>

    <div class="card">
      <div class="card-icon-row">${icon("trophy")}<strong>Suggested weekly rhythm</strong></div>
      <p class="muted">A simple way to combine the techniques below rather than picking just one:</p>
      <table>
        <thead><tr><th>Session</th><th>Focus</th></tr></thead>
        <tbody>
          <tr><td>1–2 short sessions</td><td>SQ3R read of one domain in the official PDF, then that domain's objective quizzes (practice testing)</td></tr>
          <tr><td>2–3 short sessions</td><td>Interleave: mix objectives across domains + acronym flashcards (spaced repetition)</td></tr>
          <tr><td>1 session</td><td>Feynman-explain 2–3 tricky objectives out loud; revisit only the gaps you find</td></tr>
          <tr><td>1 session</td><td>Full 90-question Practice Exam under timed, exam-like conditions</td></tr>
          <tr><td>Ongoing</td><td>Revisit your Dashboard's weakest domain/objective every few days — don't let it go untouched for over a week</td></tr>
        </tbody>
      </table>
    </div>

    ${STUDY_TECHNIQUES.map((t,ti)=>`
      <div class="card tip-card" style="border-left-color:${badgeColor(ti)};">
        <div class="tip-head">
          <div class="tip-icon" style="background:${hexA(badgeColor(ti),0.16)}; box-shadow:inset 0 0 0 1.5px ${hexA(badgeColor(ti),0.35)};">${icon(t.icon,"icon-lg")}</div>
          <div>
            <span class="pill" style="margin-bottom:4px; display:inline-block; background:${hexA(badgeColor(ti),0.16)}; color:${badgeColor(ti)};">${t.tag}</span>
            <h3 style="margin:2px 0 0;">${t.name}</h3>
          </div>
        </div>
        <p>${t.blurb}</p>
        <strong style="font-size:0.85rem;">How to do it:</strong>
        <ul class="tip-list">${t.how.map(h=>`<li>${h}</li>`).join("")}</ul>
        <div class="tip-apply"><strong>${icon("check")} In this app:</strong> ${t.apply}</div>
      </div>
    `).join("")}
  `;
}


function renderPbqList(){
  markActiveNav("pbq");
  const prog = getPbqProgress();
  const attempted = Object.keys(prog).length;
  const correct = Object.values(prog).filter(x=>x.correct).length;
  let domFilter = "all", statusFilter = "all";

  function draw(){
    view().innerHTML = `
      <div class="eyebrow">Performance-Based Questions</div>
      <h1>${icon("pbq","icon-lg")} PBQ Practice (${window.PBQ.length})</h1>
      <p class="muted">Sequencing, matching, and scenario-based tasks spread across all four domains — the same style used on the real exam.</p>
      <div class="card" style="margin-bottom:14px;"><div class="card-icon-row">${icon("trophy")}<span>${attempted}/${window.PBQ.length} attempted &middot; ${correct} correct</span></div></div>
      <div class="tab-row" id="domFilterRow" style="margin-bottom:8px;"></div>
      <div class="tab-row" id="statusFilterRow"></div>
      <div class="card">
        <table><thead><tr><th>#</th><th>Title</th><th>Domain</th><th>Type</th><th>Status</th></tr></thead><tbody id="pbqTbody"></tbody></table>
      </div>
    `;
    const domRow = document.getElementById("domFilterRow");
    [{id:"all",label:"All domains"},{id:1,label:"Domain 1"},{id:2,label:"Domain 2"},{id:3,label:"Domain 3"},{id:4,label:"Domain 4"}].forEach(f=>{
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (domFilter===f.id ? " active":"");
      btn.textContent = f.label;
      btn.addEventListener("click", ()=>{ domFilter = f.id; draw(); });
      domRow.appendChild(btn);
    });
    const statusRow = document.getElementById("statusFilterRow");
    [{id:"all",label:"All statuses"},{id:"notattempted",label:"Not attempted"},{id:"correct",label:"Correct"},{id:"retry",label:"Needs retry"}].forEach(f=>{
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (statusFilter===f.id ? " active":"");
      btn.textContent = f.label;
      btn.addEventListener("click", ()=>{ statusFilter = f.id; draw(); });
      statusRow.appendChild(btn);
    });

    const tbody = document.getElementById("pbqTbody");
    const rows = window.PBQ.filter(p=>{
      if(domFilter!=="all" && p.dom!==domFilter) return false;
      const st = prog[p.id];
      if(statusFilter==="notattempted" && st) return false;
      if(statusFilter==="correct" && !(st && st.correct)) return false;
      if(statusFilter==="retry" && !(st && !st.correct)) return false;
      return true;
    });
    tbody.innerHTML = rows.map((p)=>{
      const i = window.PBQ.indexOf(p);
      const st = prog[p.id];
      const typeIcon = p.items ? icon("order") : p.pairs ? icon("match") : icon("target");
      const typeLabel = p.items ? "Sequencing" : p.pairs ? "Matching" : "Scenario";
      return `<tr>
        <td>${i+1}</td>
        <td>${typeIcon} <a href="#/pbq/${p.id}">${p.title}</a></td>
        <td>Domain ${p.dom}</td>
        <td class="muted" style="font-size:0.8rem;">${typeLabel}</td>
        <td>${st ? `<span class="pill ${st.correct?'correct':'wrong'}">${st.correct?'Correct':'Retry'}</span>` : '<span class="pill">Not attempted</span>'}</td>
      </tr>`;
    }).join("") || `<tr><td colspan="5" class="muted">No PBQs match this filter.</td></tr>`;
  }
  draw();
}

/* ---- PBQ single item ---- */
function renderPbqItem(id){
  const p = window.PBQ.find(x=>x.id===id);
  if(!p){ view().innerHTML = "<p>PBQ not found.</p>"; return; }
  markActiveNav("pbq");

  if(p.items){ return renderPbqOrder(p); }
  if(p.pairs){ return renderPbqMatch(p); }
  if(p.options){ return renderPbqMcq(p); }
}

function pbqHeader(p){
  return `
    <div class="eyebrow">PBQ &middot; Domain ${p.dom}</div>
    <h1>${p.title}</h1>
    <p class="muted">${p.scenario}</p>
    <p><strong>${p.task}</strong></p>
  `;
}

function renderPbqOrder(p){
  let order = shuffle(p.items.map((t,i)=>i));
  function draw(){
    view().innerHTML = pbqHeader(p) + `<div class="card" id="listCard"></div>
      <button class="btn" id="checkBtn">Check order</button> <button class="btn secondary" id="backBtn">Back to PBQ list</button>
      <div id="resultBox"></div>`;
    const card = document.getElementById("listCard");
    order.forEach((origIdx, pos)=>{
      const row = document.createElement("div");
      row.className = "pbq-item";
      row.innerHTML = `<span>${p.items[origIdx]}</span>
        <span style="margin-left:auto; display:flex; gap:4px;">
          <button class="btn secondary" data-up="${pos}" ${pos===0?"disabled":""}>↑</button>
          <button class="btn secondary" data-down="${pos}" ${pos===order.length-1?"disabled":""}>↓</button>
        </span>`;
      card.appendChild(row);
    });
    card.querySelectorAll("[data-up]").forEach(b=>b.addEventListener("click", e=>{
      const i = parseInt(e.target.dataset.up); [order[i-1],order[i]]=[order[i],order[i-1]]; draw();
    }));
    card.querySelectorAll("[data-down]").forEach(b=>b.addEventListener("click", e=>{
      const i = parseInt(e.target.dataset.down); [order[i+1],order[i]]=[order[i],order[i+1]]; draw();
    }));
    document.getElementById("checkBtn").addEventListener("click", ()=>{
      const correct = order.every((v,i)=>v===p.order[i]);
      savePbqResult(p.id, correct);
      document.getElementById("resultBox").innerHTML = `<div class="explain">
        <span class="pill ${correct?'correct':'wrong'}">${correct?'Correct order!':'Not quite — correct order shown below'}</span><br><br>
        ${!correct ? p.order.map((oi,i)=>`${i+1}. ${p.items[oi]}`).join("<br>") : ""}
      </div>`;
    });
    document.getElementById("backBtn").addEventListener("click", ()=>navigate("pbq"));
  }
  draw();
}

function renderPbqMatch(p){
  const rightOptions = shuffle(p.pairs.map(pair=>pair[1]));
  view().innerHTML = pbqHeader(p) + `<div class="card" id="matchCard"></div>
    <button class="btn" id="checkBtn">Check matches</button> <button class="btn secondary" id="backBtn">Back to PBQ list</button>
    <div id="resultBox"></div>`;
  const card = document.getElementById("matchCard");
  p.pairs.forEach((pair, i)=>{
    const row = document.createElement("div");
    row.className = "match-row";
    row.innerHTML = `<div>${pair[0]}</div>
      <select class="match-select" data-idx="${i}">
        <option value="">-- select --</option>
        ${rightOptions.map(o=>`<option value="${o}">${o}</option>`).join("")}
      </select>`;
    card.appendChild(row);
  });
  document.getElementById("checkBtn").addEventListener("click", ()=>{
    let allCorrect = true;
    const rows = card.querySelectorAll(".match-select");
    let html = "";
    rows.forEach((sel, i)=>{
      const chosen = sel.value;
      const correctVal = p.pairs[i][1];
      const ok = chosen===correctVal;
      if(!ok) allCorrect = false;
      html += `<div>${ok?"✔":"✘"} ${p.pairs[i][0]} → <strong>${correctVal}</strong>${ok?"":` (you chose: ${chosen||"nothing"})`}</div>`;
    });
    savePbqResult(p.id, allCorrect);
    document.getElementById("resultBox").innerHTML = `<div class="explain">
      <span class="pill ${allCorrect?'correct':'wrong'}">${allCorrect?'All matched correctly!':'Some matches need review'}</span><br><br>${html}</div>`;
  });
  document.getElementById("backBtn").addEventListener("click", ()=>navigate("pbq"));
}

function renderPbqMcq(p){
  let selected = null;
  const order = shuffle(p.options.map((_, i) => i));
  const letters = ["A","B","C","D","E","F"];
  view().innerHTML = pbqHeader(p) + `<div class="card" id="mcqCard"></div><div id="resultBox"></div>
    <button class="btn secondary" id="backBtn">Back to PBQ list</button>`;
  const card = document.getElementById("mcqCard");
  order.forEach((oi, displayPos)=>{
    const opt = p.options[oi];
    const div = document.createElement("div");
    div.className = "choice";
    div.innerHTML = `<span class="choice-letter">${letters[displayPos]}</span><span>${opt}</span>`;
    div.addEventListener("click", ()=>{
      if(selected!=null) return;
      selected = oi;
      const ok = oi===p.answer;
      savePbqResult(p.id, ok);
      Array.from(card.children).forEach((c, pos)=>{
        const origIdx = order[pos];
        if(origIdx===p.answer) c.classList.add("correct");
        else if(origIdx===oi) c.classList.add("incorrect");
      });
      document.getElementById("resultBox").innerHTML = `<div class="explain">
        <span class="pill ${ok?'correct':'wrong'}">${ok?'Correct':'Incorrect'}</span></div>`;
    });
    card.appendChild(div);
  });
  document.getElementById("backBtn").addEventListener("click", ()=>navigate("pbq"));
}

})();
