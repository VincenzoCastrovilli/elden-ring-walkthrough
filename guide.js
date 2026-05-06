const EPS = [
{
  id: 1,
  title: "Episode 01",
  steps: [
    "After intro cut scene: <i>Gesture: The Ring</i>",
    "Corpse on the right: <i>Tarnished's Wizened Finger</i>",
    "Open the double doors, move up and get killed by Grafted Scion",
    { t:'tip', text:"It is possible to kill the Grafted Scion now, but it's very difficult and not worth the trouble. We'll be back here much later to get our revenge." },
    "Cut scene → <i>3x Flask of Crimson Tears</i> + <i>1x Flask of Cerulean Tears</i>",
    "Jump down the hole to the right",
    "Move up → Site of Grace: Cave of Knowledge → Rest",
    "Do the Tutorial area",
    { t:'tip', text:"Unsheathe is an amazing Ash of War" },
    { t:'tip', text:"Use Jump Attacks vs Shield enemies to break their posture and get a critical hit" },
    { t:'tip', text:"Stealthing and backstabs — sneak behind enemies for free damage" },
    { t:'tip', text:"Spacing — let enemies swing first, then backstab" },
    { t:'tip', text:"Parrying — great when it works, but requires perfect timing and knowing the enemy's movesets. We'll rarely use it in this guide and rely on much safer mechanics instead." },
    "At the end of Tutorial area: <i>Gesture: Strength!</i>",
    "Open double doors → Site of Grace: Stranded Graveyard → Rest",
    "Move up, loot corpse on the right: <i>Finger Severer</i> + <i>Tarnished's Furled Finger</i>",
    "Take lift up and exit",
    "Talk to Varré 3 times",
    "Activate Site of Grace: The First Step",
    "Drop down to the right: <i>Small Golden Effigy</i>",
    "Head North to Church of Elleh — avoid the knight rider in golden armor",
    "<i>Golden Rune [2]</i> (in front of the church)",
    "Activate Site of Grace: Church of Elleh",
    "Talk to Kalé → \"About Kalé\" → buy <i>Crafting Kit</i> (300 Runes)",
    "Next to Kalé on the anvil: <i>Smithing Stone [1]</i>",
    "Run North along the path through the woods: <i>4x Kukri</i> (west side of the path)",
    "<i>4x Ruin Fragment</i> (east side of the path on some ruins)",
    { t:'tip', text:"Ruin Fragments are crafting materials that respawn every time you rest at a grace — just grab them on the way whenever you see them. They won't be listed each time." },
    "Go left around the big camp → Site of Grace: Gatefront",
    "Open inventory and use our keepsake: <i>Lands Between Rune</i> — also use the <i>Golden Rune [2]</i> we just picked up",
    "Rest at the grace to trigger cut scene with Melina → \"Accept\"",
    "<i>Spectral Steed Whistle</i>",
    "Level up: put all runes into Vigor",
    { t:'tip', text:"For now our priority is to have enough health to not die every time we get hit — so Vigor it is!" }
  ]
}
,
{
  id: 2,
  title: "Episode 02",
  steps: [
    "Clear Gatefront Ruins — use a mix of stealthing (night time helps) and bow pulling",
    "<i>Map: Limgrave, West</i> (stele at the start of the camp)",
    "<i>3x Ruin Fragment</i> (corpse southwestern side of camp)",
    "<i>Longsworn's Greatsword</i> (chariot gate side of camp)",
    "<i>Flail</i> (chariot northeast of camp)",
    "Take stairs down and open chest: <i>Whet Knife</i> + <i>Ash of War: Storm Stomp</i>",
    "Hotkey your Spectral Steed Whistle and use it to summon Torrent",
    "Southeast along the road → Site of Grace: Agheel Lake North → Rest and level up",
    "All into Vigor until 20",
    { t:'tip', text:"Stats goals by priority: Vigor 20 → Strength 18 → End 15 → Dex 17 → Vigor 25 → End 20" },
    "Pass time until morning (roads are safer during daytime)",
    "East/Southeast: find Boc the Seamster by hitting a suspicious bush",
    "Talk to Boc the Seamster 2x → <i>10x Mushroom</i>",
    "Talk to Boc once more",
    "<i>Arteria Leaf</i> (southwest a few steps)",
    "East until bridge → <i>Ash of War: Determination</i> (kill Grey Scarab)",
    "<i>Smithing Stone [1]</i> (corpse on bridge's edge)",
    "Southeast past Waypoint Ruins to a graveyard — kill wolf pack then loot the coffins: <i>Golden Rune [1]</i>, <i>Golden Rune [2]</i>, <i>Golden Rune [3]</i>, <i>Golden Rune [1]</i>, <i>Golden Rune [1]</i>",
    "Warp to Church of Elleh",
    "Talk to Renna → \"I can call the spectral steed\" → <i>Spirit Calling Bell</i> + <i>Lone Wolf Ashes</i>",
    "Talk to Renna again until she vanishes",
    "Talk to Kalé",
    "Talk 2x (he'll tell you about his people)",
    "Buy from Kalé: <i>Nomadic Warrior's Cookbook [1]</i>",
    { t:'tip', text:"Don't worry about the other cookbooks, we'll buy them later, we won't need them any time soon, our runes will be better spent elsewhere" },
    "Upgrade <i>Uchigatana +1</i> (at the anvil)",
    "Warp to Gatefront",
    "Ride northwest straight through the gate, loot corpse on the way: <i>Lump of Flesh</i>",
    "Keep going until you see a small golden tree on the right side of the path: <i>Golden Seed</i>",
    "Further up the path → Site of Grace: Stormhill Shack → Rest → Add Charge to Flask",
    "<i>Stonesword Key</i> (few steps southeast, corpse up wooden structure)",
    "Inside the shack, talk to Roderika 3x → <i>Gesture: Sitting Sideways</i> + <i>Spirit Jellyfish Ashes</i>"
  ]
}
];

// ─── STATE ───────────────────────────────────────────────────
const KEY = 'er_guide_v1';
let S = {};
function load() { try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { S = {}; } }
function save() { localStorage.setItem(KEY, JSON.stringify(S)); }
function isRevealed(eid, idx) { return !!(S[eid] && S[eid].r && S[eid].r[idx]); }
function isDone(eid, idx)     { return !!(S[eid] && S[eid].d && S[eid].d[idx]); }
function setRevealed(eid, idx) {
  if (!S[eid]) S[eid] = {};
  if (!S[eid].r) S[eid].r = {};
  S[eid].r[idx] = true; save();
}
function toggleDone(eid, idx) {
  if (!S[eid]) S[eid] = {};
  if (!S[eid].d) S[eid].d = {};
  S[eid].d[idx] = !S[eid].d[idx]; save();
}
function resetAll() {
  if (!confirm('Reset all progress?')) return;
  S = {}; save(); render();
}
function resetEp(id) {
  if (!confirm('Reset progress for this episode?')) return;
  delete S[id]; save();
  const openEps = [...document.querySelectorAll('.ep.open')].map(e => e.id);
  render();
  openEps.forEach(id => { const el = document.getElementById(id); if(el) el.classList.add('open'); });
}

// ─── RENDER ──────────────────────────────────────────────────
function render() {
  load();
  const app = document.getElementById('app');
  app.innerHTML = '';

  EPS.forEach(ep => {
    const checks = ep.steps.map((s,i) => typeof s === 'string' ? i : null).filter(i => i !== null);
    const epDone = checks.filter(i => isDone(ep.id, i)).length;
    const complete = epDone === checks.length && checks.length > 0;

    const div = document.createElement('div');
    div.className = 'ep' + (epDone > 0 ? ' has-done' : '') + (complete ? ' complete' : '');
    div.id = 'ep' + ep.id;

    let content = '<div class="ep-inner">';
    ep.steps.forEach((s, idx) => {
      if (typeof s === 'object') {
        if (s.t === 'sec')  content += `<div class="sec">${s.text}</div>`;
        if (s.t === 'warn') content += `<div class="warn">${s.text}</div>`;
        if (s.t === 'tip')  content += `<div class="tip">${s.text}</div>`;
      } else {
        const revealed = isRevealed(ep.id, idx);
        const done_    = isDone(ep.id, idx);
        const cls = done_ ? 'done' : (!revealed ? 'hidden' : '');
        content += `<div class="step ${cls}" data-ep="${ep.id}" data-idx="${idx}">
          <div class="cb"></div>
          <div class="step-txt">${s}</div>
        </div>`;
      }
    });
    content += '</div>';

    div.innerHTML = `
      <div class="ep-hdr" onclick="toggleEp(${ep.id})">
        <div class="ep-num">EP<br>${String(ep.id).padStart(2,'0')}</div>
        <div class="ep-name">${ep.title}</div>
        <div class="ep-stat ${complete ? 'ok' : ''}"></div>
        ${epDone > 0 ? `<button class="btn-ep-rst" onclick="event.stopPropagation();resetEp(${ep.id})">Reset</button>` : ''}
        <div class="ep-arr">▶</div>
      </div>
      <div class="ep-body">${content}</div>`;

    app.appendChild(div);
  });

  document.querySelectorAll('.step').forEach(el => {
    el.addEventListener('click', () => {
      const eid = +el.dataset.ep, idx = +el.dataset.idx;
      if (el.classList.contains('hidden')) {
        setRevealed(eid, idx);
      } else {
        toggleDone(eid, idx);
      }
      const openEps = [...document.querySelectorAll('.ep.open')].map(e => e.id);
      render();
      openEps.forEach(id => { const el = document.getElementById(id); if(el) el.classList.add('open'); });
    });
  });
}

function toggleEp(id) {
  document.getElementById('ep' + id).classList.toggle('open');
}

load(); render();
