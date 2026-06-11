// ─────────────────────────────────────────────
// CATEGORY ART TEMPLATES (SVG patterns)
// ─────────────────────────────────────────────
const CAT_ART = {
  'إذاعات الدول': { grad:['#0a4d46','#1a9a8c'], icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>' },
  'منوعات':       { grad:['#6b3a8c','#9b59c5'], icon:'<path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>' },
  'تفسير':        { grad:['#1a5276','#2980b9'], icon:'<path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>' },
  'السيرة النبوية':{ grad:['#7d6608','#d4ac0d'], icon:'<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>' },
  'قراء':         { grad:['#0f5132','#198754'], icon:'<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>' },
  'روايات':       { grad:['#5d4037','#8d6e63'], icon:'<path d="M18 2h-3a5 5 0 0 0-5 5v6H4v4h6v4h4v-4h4l1-4h-5V7a1 1 0 0 1 1-1h3z"/>' },
  'ترجمة':        { grad:['#1565c0','#1e88e5'], icon:'<path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z"/>' },
  'بث مباشر':     { grad:['#c62828','#ef5350'], icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>' },
  'إذاعات MP3Quran':{ grad:['#00695c','#26a69a'], icon:'<path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>' },
  '_default':     { grad:['#1a3d3a','#2a6b64'], icon:'<path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>' }
};

function getArt(cat) { return CAT_ART[cat] || CAT_ART['_default']; }

function artSVG(cat) {
  const a = getArt(cat);
  const [c1,c2] = a.grad;
  const id = 'g' + Math.random().toString(36).slice(2,7);
  return `
    <svg class="art-bg" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
      </linearGradient></defs>
      <rect width="70" height="70" fill="url(#${id})"/>
      <path d="M0 0 L20 0 L0 20Z" fill="rgba(255,255,255,.06)"/>
      <path d="M70 70 L50 70 L70 50Z" fill="rgba(255,255,255,.06)"/>
      <circle cx="35" cy="35" r="30" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="1"/>
      <path d="M35 5 L65 20 L65 50 L35 65 L5 50 L5 20Z" fill="none" stroke="rgba(255,255,255,.06)" stroke-width=".8"/>
    </svg>
    <div class="art-icon"><svg viewBox="0 0 24 24" style="width:28px;height:28px;fill:#fff">${a.icon}</svg></div>
    <div class="eq-bars"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
  `;
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
// stations[] is loaded from stations.js

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let audio        = new Audio();
let hls          = null;
let currentId    = null;
let isPlaying    = false;
let favorites    = safeJSON('qr_fav', []);
let lang         = localStorage.getItem('qr_lang')  || 'ar';
let theme        = localStorage.getItem('qr_theme') || 'dark';
let vol          = parseFloat(localStorage.getItem('qr_vol') || '1');
let showOnlyFav  = false;
let activeCat    = 'all';
let shuffleOn    = false;
let sleepTimer   = null;
let sleepEnd     = 0;
let filteredIds  = [];
let playStart    = 0;  // timestamp when play started (for duration tracking)
let retryCount   = 0;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function safeJSON(k, fb){ try{ return JSON.parse(localStorage.getItem(k)||JSON.stringify(fb)); } catch(e){ return fb; } }
function saveJSON(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
function nowHM(){ const d=new Date(); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
function isYouTube(url){ return url && (url.includes('youtu') || url.includes('embed')); }

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
async function init() {
  applyTheme(theme);
  applyLang(lang);
  audio.volume = vol;
  audio.playsInline = true;
  document.getElementById('volSlider').value = vol;
  renderAyah();
  await mergeMp3Quran();
  renderTags(); renderStats(); renderGrid(); renderSmartRow();
  setupEvents();
  setupKeyboard();
  setupScrollUX();
  setupMediaSession();
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
  restoreScene();
  audio.addEventListener('play',   onAudioPlay);
  audio.addEventListener('pause',  onAudioPause);
  audio.addEventListener('ended',  onAudioEnded);
  audio.addEventListener('error',  onAudioError);
  setInterval(scheduleTick, 30000);
  setInterval(updateSleepBadge, 10000);
  setTimeout(checkStations, 5000); // background health scan for broken stations
  if (localStorage.getItem('qr_big') === '1'){ document.body.classList.add('big-mode'); qs('#bigBtn').classList.add('active'); }
  if (!localStorage.getItem('qr_onboard')) setTimeout(openOnboarding, 500);
}

function onAudioPlay()  { isPlaying=true; retryCount=0; switchingSrc=false; if(!playStart) playStart=Date.now(); if(currentId) markAlive(currentId); setPlayerState(true); }
function onAudioPause() { isPlaying=false; savePlayHistory(); setPlayerState(false); }
function onAudioEnded() {
  isPlaying=false; savePlayHistory(); setPlayerState(false);
  if (shuffleOn) { shufflePlay(); return; }
  playNext(1);
}
function onAudioError(e) {
  // Ignore errors if we deliberately stopped or are mid-switch (no currentId or src cleared)
  if (switchingSrc || !currentId || !audio.src) return;
  // audio errors can never belong to a video/YouTube station (they play in the mini window)
  const cur = stations.find(x=>x.id===currentId);
  if (cur && (cur.video || isYouTube(cur.url))) return;
  retryCount++;
  if (retryCount <= 2) {
    const delay = 3000 * retryCount;
    setStatus(lang==='ar'?`إعادة المحاولة ${retryCount}...`:`Retrying ${retryCount}...`);
    setTimeout(() => {
      if (!currentId) return; // user moved away
      const s = stations.find(x=>x.id===currentId);
      if (!s || s.video || isYouTube(s.url)) return;
      // Re-attach audio fresh
      stopAudio();
      audio = new Audio();
      audio.volume = vol;
      audio.playsInline = true;
      audio.addEventListener('play',   onAudioPlay);
      audio.addEventListener('pause',  onAudioPause);
      audio.addEventListener('ended',  onAudioEnded);
      audio.addEventListener('error',  onAudioError);
      loadStation(currentId);
    }, delay);
  } else {
    retryCount = 0; isPlaying = false; setPlayerState(false);
    setStatus(lang==='ar'?'تعذّر الاتصال':'Connection failed');
    if (currentId) {
      markDead(currentId);
      showToast(lang==='ar'?'تعذّر تشغيل المحطة — تم إخفاؤها مؤقتاً 🔧':'Station failed — temporarily hidden 🔧');
    }
  }
}

// ─────────────────────────────────────────────
    // PLAY ENGINE
    // ─────────────────────────────────────────────
    function playStation(id) {
      const s = stations.find(x => x.id === id);
      if (!s) return;

      // Save history of PREVIOUS station before switching
      if (currentId && currentId !== id) savePlayHistory();

      trackPlay();
      updateMediaSession(s);
      retryCount = 0;
      const favBtn = qs('#playerFavBtn');
      if (favBtn) favBtn.classList.toggle('active', favorites.includes(id));

      if (s.video || isYouTube(s.url)) {
    stopAudio();
    isPlaying = false;
    currentId = id;
    playStart = Date.now(); // track even YouTube views
    setTitle(lang==='ar'?s.name:s.name_en);
    setStatus(lang==='ar'?'🔴 بث مباشر':'🔴 Live');
    showPlayer(); updatePlayingCards();
    addHistEntry(s, 0); // record immediately for YouTube
    openMiniLive(s);
    return;
  }

  closeMiniLive();
  currentId = id;
  playStart = 0; // will be set when audio.play fires
  setTitle(lang==='ar'?s.name:s.name_en);
  setStatus(lang==='ar'?'جاري الاتصال...':'Connecting...');
  showPlayer(); updatePlayingCards();
  loadStation(id);
  saveScene();
}

// ─────────────────────────────────────────────
// LAZY HLS.JS LOADER (fetched only when an HLS stream is first played)
// ─────────────────────────────────────────────
let hlsLoadPromise = null;
function loadHlsLib() {
  if (window.Hls) return Promise.resolve();
  if (hlsLoadPromise) return hlsLoadPromise;
  hlsLoadPromise = new Promise((resolve, reject) => {
    const sc = document.createElement('script');
    sc.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js';
    sc.onload = resolve;
    sc.onerror = () => { hlsLoadPromise = null; reject(new Error('hls.js failed to load')); };
    document.head.appendChild(sc);
  });
  return hlsLoadPromise;
}

function loadStation(id) {
  const s = stations.find(x => x.id === id);
  if (!s) return;
  stopAudio();
  const url = s.url;
  if (!url.includes('.m3u8')) {
    switchingSrc = false;
    audio.src = url; audio.play().catch(()=>{});
    return;
  }
  loadHlsLib().then(() => {
    if (currentId !== id) return; // user switched stations while the lib loaded
    switchingSrc = false;
    if (!Hls.isSupported()) { audio.src = url; audio.play().catch(()=>{}); return; }
    hls = new Hls({ enableWorker:true, lowLatencyMode:true, backBufferLength:90, maxBufferLength:30, maxMaxBufferLength:60 });
    hls.loadSource(url);
    hls.attachMedia(audio);
    hls.on(Hls.Events.MANIFEST_PARSED, () => { audio.play().catch(()=>{}); });
    hls.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) {
        if (data.type===Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad();
        else if (data.type===Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError();
        else onAudioError();
      }
    });
  }).catch(() => {
    if (currentId !== id) return;
    switchingSrc = false;
    audio.src = url; audio.play().catch(()=>{}); // Safari native HLS, or surface the error
  });
}

// browsers fire a bogus 'error' event while a stream is being torn down /
// swapped; this flag tells onAudioError to ignore those
let switchingSrc = false;

function stopAudio() {
  switchingSrc = true;
  // removeAttribute + load() resets silently — src='' would trigger an error event
  try { audio.pause(); audio.removeAttribute('src'); audio.load(); } catch(e){}
  try { if (hls) { hls.destroy(); hls = null; } } catch(e){}
}

function togglePlay() {
  if (!currentId) return;
  const cs = stations.find(x=>x.id===currentId);
  if (cs && (cs.video || isYouTube(cs.url))) {
    // video stream lives in the mini player — reopen it if closed
    if (!qs('#miniLive').classList.contains('visible')) openMiniLive(cs);
    return;
  }
  if (isPlaying) { audio.pause(); }
  else { audio.play().catch(()=>{ loadStation(currentId); }); }
}

function playNext(dir) {
  if (!filteredIds.length) return;
  const idx = filteredIds.indexOf(currentId);
  let ni = (idx + dir + filteredIds.length) % filteredIds.length;
  playStation(filteredIds[ni]);
}

function shufflePlay() {
  const pool = filteredIds.length ? filteredIds : stations.map(s=>s.id);
  const id = pool[Math.floor(Math.random()*pool.length)];
  playStation(id);
}

// ─────────────────────────────────────────────
// PLAYER UI
// ─────────────────────────────────────────────
function setPlayerState(playing) {
  const bar = qs('#playerBar');
  const icon = qs('#playIcon');
  bar.classList.toggle('is-playing', playing);
  icon.innerHTML = playing
    ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/>'
    : '<path d="M8 5v14l11-7z" fill="currentColor"/>';
  const st = qs('#pStatus');
  st.classList.toggle('stopped', !playing);
  if (playing) setStatus(lang==='ar'?'يبث الآن':'Now Playing');
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
  updatePlayingCards();
}

function setTitle(t) { qs('#pTitle').textContent = t; }
function setStatus(t) { qs('#pStatusTxt').textContent = t; }
function showPlayer() { qs('#playerBar').classList.add('visible'); }

// toggles the .playing class in place — much cheaper than rebuilding the whole grid
function updatePlayingCards() {
  document.querySelectorAll('#radioGrid .station-card').forEach(c =>
    c.classList.toggle('playing', c.dataset.id === currentId));
}

// ─────────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────────
function renderTags() {
  const cats = [...new Set(stations.map(s => lang==='ar'?s.cat:s.cat_en))];
  let h = `<div class="tag ${activeCat==='all'?'active':''}" onclick="filterCat('all')">${lang==='ar'?'✦ الكل':'✦ All'} <span class="tag-n">${stations.length}</span></div>`;
  cats.forEach(c => {
    const arCat = stations.find(s=>(lang==='ar'?s.cat:s.cat_en)===c)?.cat || c;
    const n = stations.filter(s=>(lang==='ar'?s.cat:s.cat_en)===c).length;
    h += `<div class="tag ${activeCat===c?'active':''}" data-cat="${arCat}" onclick="filterCat('${c.replace(/'/g,"\\'")}')">${c} <span class="tag-n">${n}</span></div>`;
  });
  qs('#tagsContainer').innerHTML = h;
}

function renderStats() {
  const hist  = safeJSON('qr_hist', []);
  const cats  = [...new Set(stations.map(s=>s.cat))].length;
  const pills = [
    {n:stations.length, l:lang==='ar'?'إذاعة':'Stations'},
    {n:favorites.length,l:lang==='ar'?'مفضلة':'Favorites'},
    {n:cats,            l:lang==='ar'?'أقسام':'Categories'},
    {n:hist.length,     l:lang==='ar'?'تشغيلاتك 📊':'Your Plays 📊', click:'onclick="openHistoryModal()"', title:lang==='ar'?'اضغط لعرض السجل':'Show history'},
  ];
  if (deadIds.size) pills.push({n:deadIds.size, l:lang==='ar'?'معطلة 🔧':'Broken 🔧', click:'onclick="resetDead()"', title:lang==='ar'?'محطات معطلة مخفية — اضغط لإعادة فحصها':'Hidden broken stations — click to recheck'});
  qs('#statsRow').innerHTML = pills
    .map(x=>`<div class="stat-pill ${x.click?'stat-clickable':''}" ${x.click||''} ${x.title?`title="${x.title}"`:''} style="${x.click?'cursor:pointer':''}"><div class="stat-n">${x.n}</div><div class="stat-l">${x.l}</div></div>`).join('');
}

function renderGrid() {
  const grid = qs('#radioGrid');
  const q = qs('#searchInput').value.toLowerCase().trim();
  let list = stations.filter(s => {
    const hay = `${s.name} ${s.name_en} ${s.cat} ${s.cat_en}`.toLowerCase();
    const cat = lang==='ar'?s.cat:s.cat_en;
    if (deadIds.has(s.id) && s.id !== currentId) return false; // hide broken stations
    return hay.includes(q) && (activeCat==='all'||cat===activeCat) && (showOnlyFav?favorites.includes(s.id):true);
  });

  filteredIds = list.map(s=>s.id);

  if (!list.length) {
    grid.innerHTML = `<div class="empty"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><div>${lang==='ar'?'لا توجد نتائج':'No results'}</div></div>`;
    return;
  }

  grid.innerHTML = list.map(s => {
    const fav  = favorites.includes(s.id);
    const play = currentId === s.id;
    return `
    <div class="station-card ${play?'playing':''}" data-id="${s.id}" onclick="playStation('${s.id}')">
      <div class="card-art">${artSVG(s.cat)}</div>
      <div class="cat-badge">${lang==='ar'?s.cat:s.cat_en}</div>
      <div class="station-name">${lang==='ar'?s.name:s.name_en}</div>
      <div class="card-btns" onclick="event.stopPropagation()">
        <button class="btn-mini fav ${fav?'active':''}" onclick="toggleFav('${s.id}')" title="${lang==='ar'?'مفضلة':'Favorite'}">
          <svg viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/></svg>
        </button>
        <button class="btn-mini play-mini" onclick="playStation('${s.id}')" title="${lang==='ar'?'تشغيل':'Play'}">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');

  renderQuickFavs();
}

function renderQuickFavs() {
  const inner = qs('#quickFavsInner');
  const wrap  = qs('#quickFavsWrap');
  const favs  = favorites.map(id=>stations.find(s=>s.id===id)).filter(Boolean);
  if (!favs.length) { wrap.style.display='none'; return; }
  wrap.style.display='block';
  inner.innerHTML = favs.map(s=>`
    <div class="quick-pill" onclick="playStation('${s.id}')">
      <span class="qdot"></span>
      <span>${lang==='ar'?s.name:s.name_en}</span>
    </div>`).join('');
}

// ─────────────────────────────────────────────
// CONTROLS
// ─────────────────────────────────────────────
function setupEvents() {
  let searchT; // debounce: rebuild the grid once typing pauses, not per keystroke
  qs('#searchInput').addEventListener('input', e => {
    qs('#searchClearBtn').style.display = e.target.value ? 'flex' : 'none';
    clearTimeout(searchT);
    searchT = setTimeout(renderGrid, 150);
  });
  qs('#searchClearBtn').addEventListener('click', () => { qs('#searchInput').value=''; qs('#searchClearBtn').style.display='none'; renderGrid(); qs('#searchInput').focus(); });
  qs('#themeBtn').addEventListener('click', toggleTheme);
  qs('#langBtn').addEventListener('click', toggleLang);
  qs('#favBtn').addEventListener('click', toggleFavFilter);
  qs('#focusBtn').addEventListener('click', toggleFocus);
  qs('#scheduleBtn').addEventListener('click', openScheduleModal);
  qs('#bigBtn').addEventListener('click', toggleBig);

  qs('#playBtn').addEventListener('click', togglePlay);
  qs('#prevBtn').addEventListener('click', () => playNext(-1));
  qs('#nextBtn').addEventListener('click', () => playNext(1));
  qs('#playerFavBtn')?.addEventListener('click', () => { if (currentId) toggleFav(currentId); });
  qs('#shuffleBtn').addEventListener('click', () => { shuffleOn=!shuffleOn; qs('#shuffleBtn').classList.toggle('active',shuffleOn); if(shuffleOn) shufflePlay(); });
  qs('#reportBtn').addEventListener('click', reportStation);
  qs('#closePlayerBtn').addEventListener('click', closePlayer);
  qs('#sleepBtn').addEventListener('click', () => { qs('#sleepPanel').classList.toggle('open'); });
  qs('#shareBtn').addEventListener('click', smartShare);
  qs('#volBtn').addEventListener('click', toggleMute);
  qs('#volSlider').addEventListener('input', e => { vol=parseFloat(e.target.value); audio.volume=vol; localStorage.setItem('qr_vol',vol); updateVolIcon(); });
  // mlClose uses event delegation since content can be re-created
  document.addEventListener('click', e => {
    if (e.target.id === 'mlClose' || e.target.closest('#mlClose')) {
      closeMiniLive();
      return;
    }
    if (e.target.id === 'mlFullscreen') {
      const f = qs('#mlVideo') || qs('#mlFrame') || qs('#mlContent iframe');
      if (!f) return;
      if (f.requestFullscreen) f.requestFullscreen();
      else if (f.webkitRequestFullscreen) f.webkitRequestFullscreen();
      else if (f.mozRequestFullScreen) f.mozRequestFullScreen();
    }
    if (e.target.id === 'mlOpenYT') {
      const box = qs('#miniLive');
      const s = currentId ? stations.find(x=>x.id===currentId) : null;
      if (!s) return;
      const ytLink = s.yt || (s.url.includes('channel=')
        ? 'https://www.youtube.com/channel/' + s.url.split('channel=')[1]
        : s.url);
      window.open(ytLink, '_blank', 'noopener');
    }
  });

  // Sleep opts
  qs('#sleepPanel').querySelectorAll('.sleep-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      qs('#sleepPanel').querySelectorAll('.sleep-opt').forEach(o=>o.classList.remove('active'));
      const min = parseInt(opt.dataset.min);
      if (min === 0) {
        clearTimeout(sleepTimer); sleepEnd=0;
        qs('#sleepBadge').classList.remove('visible');
        showToast(lang==='ar'?'تم إلغاء المؤقت':'Timer cancelled');
      } else {
        opt.classList.add('active');
        clearTimeout(sleepTimer);
        sleepEnd = Date.now() + min*60000;
        sleepTimer = setTimeout(() => { audio.pause(); qs('#sleepBadge').classList.remove('visible'); showToast(lang==='ar'?'تم إيقاف التشغيل':'Playback stopped'); }, min*60000);
        updateSleepBadge();
        showToast((lang==='ar'?'سيتوقف بعد ':'Stops in ')+min+(lang==='ar'?' دقيقة':' min'));
      }
      setTimeout(()=>qs('#sleepPanel').classList.remove('open'), 300);
    });
  });

  initMiniInteract();
  window.addEventListener('beforeunload', saveScene);
}

function toggleMute() { audio.volume = audio.volume>0 ? 0 : vol; qs('#volSlider').value=audio.volume; updateVolIcon(); }
function updateVolIcon() {
  const v = audio.volume;
  qs('#volIcon').innerHTML = v===0
    ? '<path d="M16.5 12c0-1.77-.77-3.29-2-4.25v2.59l1.97 1.97A4.5 4.5 0 0 0 16.5 12zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="currentColor"/>'
    : v<0.5
    ? '<path d="M18.5 12c0-1.77-.77-3.29-2-4.25v8.5c1.23-.96 2-2.48 2-4.25zM5 9v6h4l5 5V4L9 9H5zm11-.17v.17c0 2.48-1 4.72-2.6 6.33l1.42 1.42A8.981 8.981 0 0 0 17 12c0-2.94-1.42-5.53-3.6-7.16l-1.42 1.42A6.992 6.992 0 0 1 16 11.83z" fill="currentColor"/>'
    : '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.25v8.5c1.23-.96 2-2.48 2-4.25zM14 3.23v2.06c3.39.49 6 3.39 6 6.71s-2.61 6.22-6 6.71v2.06c4.45-.5 8-4.27 8-8.77s-3.55-8.27-8-8.77z" fill="currentColor"/>';
}

function smartShare() {
  if (!currentId) return;
  const url = `${location.origin}${location.pathname}?s=${currentId}`;
  const s = stations.find(x=>x.id===currentId);
  if (navigator.share) { navigator.share({title:s?.name||'Quran Radio',url}).catch(()=>{}); return; }
  navigator.clipboard.writeText(url).then(()=>showToast(lang==='ar'?'تم نسخ الرابط!':'Link copied!'));
}

function updateSleepBadge() {
  if (!sleepEnd) return;
  const rem = Math.max(0, Math.round((sleepEnd - Date.now()) / 60000));
  const badge = qs('#sleepBadge');
  if (rem > 0) { badge.textContent = '⏱ '+rem+'د'; badge.classList.add('visible'); }
  else { badge.classList.remove('visible'); sleepEnd=0; }
}

// ─── CLOSE PLAYER ────────────────────────────
function closePlayer() {
  savePlayHistory();
  stopAudio();
  isPlaying=false; currentId=null; playStart=0;
  // Exit focus mode and clear slideshow
  if (document.body.classList.contains('focus-mode')) {
    document.body.classList.remove('focus-mode');
    localStorage.setItem('qr_focus','0');
    qs('#focusBtn').classList.remove('active');
    stopSlideshowTimer();
    const fbox = qs('#focusSlideshow');
    if (fbox) fbox.style.display = '';
    slideshowImgs.forEach(img => img.classList.remove('active'));
  }
  qs('#playerBar').classList.remove('visible');
  setTitle(lang==='ar'?'اختر إذاعة للبدء':'Choose a station');
  setPlayerState(false);
}

// ─── REPORT STATION ──────────────────────────
function reportStation() {
  if (!currentId) { showToast(lang==='ar'?'اختر محطة أولاً':'Select a station first'); return; }
  const s = stations.find(x=>x.id===currentId);
  if (!s) return;
  const name = lang==='ar'?s.name:s.name_en;
  // Build the full message
  const msg = `🔴 إبلاغ عن محطة غير شغّالة\n📻 المحطة: ${s.name}\n🆔 ID: ${s.id}\n🔗 الرابط: ${s.url}`;
  // Encode for Telegram URL — opens chat with message ready to send
  const tgUrl = `https://t.me/+966504667646?text=${encodeURIComponent(msg)}`;

  const b = getModal('report');
  b.querySelector('.modal-box').innerHTML = `
    <h3 class="modal-h">🔴 إبلاغ عن مشكلة</h3>
    <p class="modal-p">سيُفتح تيليجرام والرسالة جاهزة للإرسال مباشرةً.</p>
    <div class="report-station-name">📻 ${name}</div>
    <p style="font-size:.76rem;color:var(--muted);margin:4px 0 16px;direction:ltr;text-align:right">ID: ${s.id}</p>
    <div class="modal-actions" style="flex-direction:column;gap:10px">
      <a class="tg-btn" href="${tgUrl}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
        فتح تيليجرام — الرسالة جاهزة ✓
      </a>
      <button class="m-btn" id="reportCopyBtn">📋 نسخ الرسالة</button>
      <button class="m-btn" id="reportCloseBtn">إغلاق</button>
    </div>`;
  qs('#reportCopyBtn', b).addEventListener('click', () => {
    navigator.clipboard.writeText(msg).then(()=>showToast('تم النسخ ✓')).catch(()=>{});
  });
  qs('#reportCloseBtn', b).addEventListener('click', ()=>closeModal(b));
  openModal(b);
}

// ─── PLAY HISTORY ────────────────────────────
function addHistEntry(s, dur) {
  if (!s) return;
  const hist = safeJSON('qr_hist', []);
  hist.unshift({ id:s.id, name:s.name, name_en:s.name_en, dur, ts:Date.now() });
  saveJSON('qr_hist', hist.slice(0, 200));
  renderStats();
  renderSmartRow();
}

function savePlayHistory() {
  if (!currentId) return;
  const dur = playStart > 0 ? Math.round((Date.now() - playStart) / 1000) : 0;
  playStart = 0;
  if (dur < 3) return; // ignore very short
  const s = stations.find(x=>x.id===currentId);
  addHistEntry(s, dur);
}

function openHistoryModal() {
  const hist = safeJSON('qr_hist', []);
  const b = getModal('hist');

  const totalSec = hist.reduce((a,h)=>a+h.dur, 0);
  const fmtDur = s => s>=3600 ? Math.floor(s/3600)+'س '+Math.floor((s%3600)/60)+'د' : Math.floor(s/60)+'د '+Math.floor(s%60)+'ث';
  const fmtDate = ts => {
    const d = new Date(ts);
    return d.toLocaleDateString('ar-SA',{month:'short',day:'numeric'}) + ' ' + d.toLocaleTimeString('ar-SA',{hour:'2-digit',minute:'2-digit'});
  };

  const itemsHtml = hist.length ? hist.map(h=>{
    const s = stations.find(x=>x.id===h.id);
    const stationExists = !!s;
    return `
    <div class="hist-item">
      <div style="flex:1;min-width:0">
        <div class="hist-name" style="cursor:${stationExists?'pointer':'default'}" onclick="${stationExists?`closeModal(document.getElementById('qrM_hist'));playStation('${h.id}')`:''}">
          ${stationExists?'▶ ':''}${lang==='ar'?h.name:h.name_en}
        </div>
        <div class="hist-meta" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span>🕐 ${fmtDate(h.ts)}</span>
          ${stationExists ? `<span style="color:var(--gd2);font-size:.68rem;cursor:pointer" onclick="closeModal(document.getElementById('qrM_hist'));playStation('${h.id}')">تشغيل الآن</span>` : '<span style="color:var(--muted);font-size:.68rem">محطة غير متاحة</span>'}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0">
        <div class="hist-dur">${fmtDur(h.dur)}</div>
        ${stationExists ? `<button onclick="closeModal(document.getElementById('qrM_hist'));playStation('${h.id}')" style="background:linear-gradient(135deg,var(--gd1),var(--gd2));border:none;border-radius:8px;padding:4px 10px;color:#0b1f1c;font-size:.68rem;font-weight:800;cursor:pointer">▶</button>` : ''}
      </div>
    </div>`}).join('') : `<div class="hist-empty">لا يوجد سجل بعد 🎧</div>`;

  b.querySelector('.modal-box').innerHTML = `
    <h3 class="modal-h">📊 سجل التشغيل</h3>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
      <span style="font-size:.8rem;color:var(--sub)">${hist.length} تشغيل • إجمالي: <strong style="color:var(--gd2)">${fmtDur(totalSec)}</strong></span>
      <button class="m-btn" id="clearHistBtn" style="font-size:.75rem;padding:5px 10px">${lang==='ar'?'مسح السجل':'Clear History'}</button>
    </div>
    <div style="max-height:55vh;overflow-y:auto;padding-left:4px">${itemsHtml}</div>
    <div class="modal-actions"><button class="m-btn primary" id="histCloseBtn">${lang==='ar'?'إغلاق':'Close'}</button></div>`;

  qs('#histCloseBtn', b).onclick = ()=>closeModal(b);
  qs('#clearHistBtn', b).onclick = ()=>{
    if (confirm(lang==='ar'?'هل تريد مسح سجل التشغيل؟':'Clear play history?')) {
      saveJSON('qr_hist',[]);
      renderStats();
      openHistoryModal();
    }
  };
  openModal(b);
}

    // ─── FOCUS SLIDESHOW ─────────────────────────
    // Unsplash - high quality Quran photos
    const SLIDESHOW_PHOTOS = [
      { url: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=85&w=1000', label: 'المصحف الشريف' },
      { url: 'https://images.unsplash.com/photo-1576764402988-7143f9cca90a?q=85&w=1000', label: 'آيات من القرآن الكريم' },
      { url: 'https://images.unsplash.com/photo-1589462135796-2b46e4bdd7fe?q=85&w=1000', label: 'صفحات مضيئة' },
      { url: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=85&w=1000', label: 'كتاب الله' },
      { url: 'https://images.unsplash.com/photo-1596125160970-6f02eeba00d3?q=85&w=1000', label: 'القرآن الكريم' },
      { url: 'https://images.unsplash.com/photo-1580220810949-e7ddee6a4954?q=85&w=1000', label: 'تلاوة خاشعة' },
      { url: 'https://images.unsplash.com/photo-1587617425953-9075d28b8c46?q=85&w=1000', label: 'مصحف ومسواك' },
      { url: 'https://images.unsplash.com/photo-1624345690118-d303350f7445?q=85&w=1000', label: 'المصحف الذهبي' },
      { url: 'https://images.unsplash.com/photo-1586767003402-8ade266deb64?q=85&w=1000', label: 'إضاءة إيمانية' },
      { url: 'https://images.unsplash.com/photo-1575645513913-c002ea3b2e01?q=85&w=1000', label: 'اقرأ' },
      { url: 'https://images.unsplash.com/photo-1616422840391-fa670d4b2ae7?q=85&w=1000', label: 'خط عربي جميل' },
      { url: 'https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?q=85&w=1000', label: 'قارئ للقرآن' }
    ];

let slideIdx    = 0;
let slideTimer  = null;
let slideshowOn = true;
let slideshowImgs = [];
let slideOpacity   = 55; // %
let slideBright    = 85; // %

function initSlideshow() {
  const box = qs('#focusSlideshow');
  if (!box || box.__init) return;
  box.__init = true;

  // Build images
  SLIDESHOW_PHOTOS.forEach((p, i) => {
    const img = document.createElement('img');
    img.src = p.url;
    img.alt = p.label;
    img.loading = i === 0 ? 'eager' : 'lazy';
    img.onerror = () => { img.style.display='none'; }; // hide broken images
    if (i === 0) img.classList.add('active');
    box.appendChild(img);
    slideshowImgs.push(img);
  });

  applySlideshowStyle();

  // Toggle photos on/off — '' lets the stylesheet rule (focus-mode only) decide,
  // so no inline display:block survives after exiting focus mode
  qs('#slideshowToggleBtn').addEventListener('click', () => {
    slideshowOn = !slideshowOn;
    qs('#slideshowToggleBtn').classList.toggle('fcp-toggle', true);
    qs('#slideshowToggleBtn').classList.toggle('active', slideshowOn);
    box.style.display = slideshowOn ? '' : 'none';
    if (slideshowOn) startSlideshow(); else stopSlideshowTimer();
  });

  // Prev / Next
  qs('#slideshowPrevBtn').addEventListener('click', () => {
    stopSlideshowTimer();
    gotoSlide((slideIdx - 1 + SLIDESHOW_PHOTOS.length) % SLIDESHOW_PHOTOS.length);
    if (slideshowOn) startSlideshow();
  });
  qs('#slideshowNextBtn').addEventListener('click', () => {
    stopSlideshowTimer();
    gotoSlide((slideIdx + 1) % SLIDESHOW_PHOTOS.length);
    if (slideshowOn) startSlideshow();
  });

  // Opacity slider
  const opSlider = qs('#slideshowOpacity');
  const opVal    = qs('#opacityVal');
  if (opSlider) {
    opSlider.addEventListener('input', () => {
      slideOpacity = parseInt(opSlider.value);
      opVal.textContent = slideOpacity + '%';
      applySlideshowStyle();
    });
  }

  // Brightness slider
  const brSlider = qs('#slideshowBrightness');
  const brVal    = qs('#brightnessVal');
  if (brSlider) {
    brSlider.addEventListener('input', () => {
      slideBright = parseInt(brSlider.value);
      brVal.textContent = slideBright + '%';
      applySlideshowStyle();
    });
  }

  // Panel close button → exits focus mode
  qs('#focusCloseBtn')?.addEventListener('click', () => {
    if (document.body.classList.contains('focus-mode')) toggleFocus();
  });

  if (slideshowOn) startSlideshow();
}

function applySlideshowStyle() {
  const box = qs('#focusSlideshow');
  if (!box) return;
  box.style.setProperty('--slide-opacity', (slideOpacity/100).toFixed(2));
  box.style.filter = `brightness(${slideBright}%)`;
}

function gotoSlide(idx) {
  if (!slideshowImgs.length) return;
  slideshowImgs[slideIdx].classList.remove('active');
  slideIdx = idx;
  // Skip broken/hidden images
  let tries = 0;
  while (slideshowImgs[slideIdx].style.display==='none' && tries < SLIDESHOW_PHOTOS.length) {
    slideIdx = (slideIdx + 1) % SLIDESHOW_PHOTOS.length;
    tries++;
  }
  slideshowImgs[slideIdx].classList.add('active');
  const label = qs('#slideshowLabel');
  if (label) label.textContent = SLIDESHOW_PHOTOS[slideIdx].label;
}

function startSlideshow() {
  stopSlideshowTimer();
  slideTimer = setInterval(() => gotoSlide((slideIdx + 1) % SLIDESHOW_PHOTOS.length), 10000);
}
function stopSlideshowTimer() { clearInterval(slideTimer); slideTimer = null; }

// ─────────────────────────────────────────────
// THEME / LANG
// ─────────────────────────────────────────────
function applyTheme(t) { document.documentElement.setAttribute('data-theme',t); }
function applyLang(l) {
  document.documentElement.setAttribute('lang',l);
  document.documentElement.setAttribute('dir',l==='ar'?'rtl':'ltr');
  const bt = qs('.brand-title');
  if(bt) bt.textContent = l==='ar'?'راديو القرآن الكريم':'Holy Quran Radio';
  const si = qs('#searchInput');
  if(si) si.placeholder = l==='ar'?'ابحث عن قارئ أو إذاعة...':'Search reader or station...';
}
function toggleTheme() { theme=theme==='dark'?'light':'dark'; localStorage.setItem('qr_theme',theme); applyTheme(theme); }
function toggleLang()  { lang=lang==='ar'?'en':'ar'; localStorage.setItem('qr_lang',lang); applyLang(lang); renderTags(); renderStats(); renderGrid(); renderSmartRow(); }
function filterCat(c)  { activeCat=c; renderTags(); renderGrid(); }
function toggleFavFilter() { showOnlyFav=!showOnlyFav; qs('#favBtn').classList.toggle('active',showOnlyFav); renderGrid(); }
function toggleFocus() {
  document.body.classList.toggle('focus-mode');
  const on = document.body.classList.contains('focus-mode');
  localStorage.setItem('qr_focus', on?'1':'0');
  qs('#focusBtn').classList.toggle('active', on);
  if (on) {
    initSlideshow();
    if (slideshowOn) startSlideshow();
    showPlayer();
    // Auto-play Saudi radio if nothing is playing
    if (!currentId || !isPlaying) {
      playStation('sa');
    }
  } else {
    stopSlideshowTimer();
    // ← Hide slideshow background immediately
    const box = qs('#focusSlideshow');
    if (box) {
      box.style.display = ''; // clear inline display left by the toggle button
      slideshowImgs.forEach(img => img.classList.remove('active'));
    }
  }
}
function toggleBig() {
  document.body.classList.toggle('big-mode');
  const on = document.body.classList.contains('big-mode');
  localStorage.setItem('qr_big',on?'1':'0');
  qs('#bigBtn').classList.toggle('active',on);
}

    function toggleFav(id) {
      const wasFav = favorites.includes(id);
      favorites = wasFav ? favorites.filter(x => x !== id) : [...favorites, id];
      saveJSON('qr_fav', favorites);
      renderStats();
      // update the one heart in place; full rebuild only when the fav filter changes the list
      const heart = document.querySelector(`#radioGrid .station-card[data-id="${CSS.escape(id)}"] .btn-mini.fav`);
      if (heart) heart.classList.toggle('active', !wasFav);
      renderQuickFavs();
      if (showOnlyFav) renderGrid();
      if (currentId === id) {
        const btn = qs('#playerFavBtn');
        if (btn) btn.classList.toggle('active', favorites.includes(id));
      }
      if (wasFav) {
        showToast(lang === 'ar' ? 'تمت الإزالة من المفضلة 💔' : 'Removed from favorites 💔');
      } else {
        showToast(lang === 'ar' ? 'تمت الإضافة للمفضلة ❤️' : 'Added to favorites ❤️');
      }
    }

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
function showToast(msg) {
  const el = qs('#toast');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(el.__t);
  el.__t = setTimeout(()=>el.classList.remove('show'), 2800);
}

// ─────────────────────────────────────────────
// MINI YOUTUBE  ←  FIXED
// ─────────────────────────────────────────────
function toEmbed(url) {
  // Already an embed URL (channel live stream)
  if (url.includes('/embed/')) {
    return url.includes('autoplay') ? url : url + (url.includes('?')?'&':'?') + 'autoplay=1&playsinline=1';
  }
  // youtu.be short link
  let id = '';
  if (url.includes('youtu.be/')) id = url.split('youtu.be/')[1].split(/[?&]/)[0];
  else if (url.includes('watch?v=')) id = url.split('watch?v=')[1].split(/[?&]/)[0];
  else if (url.includes('/live/')) id = url.split('/live/')[1].split(/[?&]/)[0];

  if (id) return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`;
  // fallback: assume it's already embeddable
  return url + (url.includes('?')?'&':'?') + 'autoplay=1&playsinline=1';
}

let mlHls = null, mlRetry = 0;

function mlFallback(cont, s) {
  if (mlHls) { try{mlHls.destroy();}catch(e){} mlHls = null; }
  const ytLink = s.yt || s.url;
  cont.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#0b1f1c,#1a3a34);padding:20px;text-align:center;gap:14px">
      <div style="font-size:2rem">📡</div>
      <div style="color:#e8f5f2;font-size:.88rem;font-weight:700;line-height:1.5">${lang==='ar'?'تعذّر تشغيل البث المباشر حالياً':'Live stream is unavailable right now'}</div>
      <a href="${ytLink}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#b8872a,#d4a84b);color:#0b1f1c;font-weight:800;padding:10px 20px;border-radius:14px;text-decoration:none;font-size:.86rem">
        <span>📺</span> ${lang==='ar'?'المشاهدة على يوتيوب':'Watch on YouTube'}
      </a>
    </div>`;
}

// single source of truth for the embedded iframe markup
const ML_IFRAME = '<iframe id="mlFrame" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen style="width:100%;height:100%;border:0"></iframe>';

function openMiniLive(s) {
  const box  = qs('#miniLive');
  const cont = qs('#mlContent');
  if (!box) return;
  qs('#mlTitle').textContent = lang==='ar'?s.name:s.name_en;

  // ── HLS VIDEO STREAM (TV channels) ──
  if (s.video && s.url.includes('.m3u8')) {
    box.dataset.ytUrl = s.yt || s.url;
    if (mlHls) { try{mlHls.destroy();}catch(e){} mlHls = null; }
    mlRetry = 0;
    cont.innerHTML = '<video id="mlVideo" controls autoplay playsinline style="width:100%;height:100%;border:0;background:#000;object-fit:contain"></video>';
    loadHlsLib().catch(()=>{}).then(() => {
      const v = qs('#mlVideo');
      if (!v) return; // window closed or content swapped while the lib loaded
      if (window.Hls && Hls.isSupported()) {
        mlHls = new Hls({ enableWorker:true, backBufferLength:60 });
        mlHls.loadSource(s.url);
        mlHls.attachMedia(v);
        mlHls.on(Hls.Events.MANIFEST_PARSED, () => { v.play().catch(()=>{}); });
        mlHls.on(Hls.Events.ERROR, (ev, d) => {
          if (!d.fatal) return;
          mlRetry++;
          if (mlRetry > 2) { mlFallback(cont, s); return; }
          try {
            if (d.type === Hls.ErrorTypes.NETWORK_ERROR) mlHls.startLoad();
            else if (d.type === Hls.ErrorTypes.MEDIA_ERROR) mlHls.recoverMediaError();
            else mlFallback(cont, s);
          } catch(e) { mlFallback(cont, s); }
        });
      } else if (v.canPlayType('application/vnd.apple.mpegurl')) {
        v.src = s.url;
        v.play().catch(()=>{});
        v.addEventListener('error', () => mlFallback(cont, s));
      } else {
        mlFallback(cont, s);
      }
    });
    box.classList.add('visible');
    return;
  }

  // ── YOUTUBE EMBED ──
  // Store original URL for external open
  box.dataset.ytUrl = s.yt || s.url.replace('/embed/live_stream','/channel').replace('live_stream?channel=','channel/');
  box.dataset.ytRaw = s.url; // raw for YT link

  const proto = location.protocol;
  const isLocal = proto === 'file:' || proto === 'content:' || proto === 'blob:';

  if (isLocal) {
    // YouTube won't embed from local files – show open-in-browser fallback
    const ytLink = s.url.includes('channel=')
      ? 'https://www.youtube.com/channel/' + (s.url.split('channel=')[1] || '')
      : s.url;
    cont.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#0b1f1c,#1a3a34);padding:20px;text-align:center;gap:14px">
        <div style="font-size:2rem">▶️</div>
        <div style="color:#e8f5f2;font-size:.88rem;font-weight:700;line-height:1.5">${lang==='ar'?'لا يمكن تشغيل يوتيوب من الملف المحلي':'YouTube cannot embed from local files'}</div>
        <a href="${ytLink}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#b8872a,#d4a84b);color:#0b1f1c;font-weight:800;padding:10px 20px;border-radius:14px;text-decoration:none;font-size:.86rem">
          <span>📺</span> ${lang==='ar'?'فتح في يوتيوب':'Open on YouTube'}
        </a>
        <div style="color:#4a7a72;font-size:.72rem">${lang==='ar'?'أو افتح الملف من متصفح الويب للبث المضمّن':'Or open this file from a web server for embedded stream'}</div>
      </div>`;
  } else {
    // Web – use embed
    cont.innerHTML = ML_IFRAME;
    qs('#mlFrame').src = toEmbed(s.url);
  }
  box.classList.add('visible');
}
function closeMiniLive() {
  const box = qs('#miniLive');
  if (!box) return;
  // Stop HLS video if running
  if (mlHls) { try{mlHls.destroy();}catch(e){} mlHls = null; }
  const vid = box.querySelector('video');
  if (vid) { try{ vid.pause(); vid.removeAttribute('src'); vid.load(); }catch(e){} }
  // Clear iframe src safely - handle both static and dynamically created iframes
  const frame = box.querySelector('iframe');
  if (frame) { try { frame.src = 'about:blank'; frame.removeAttribute('src'); } catch(e){} }
  // Emptying the container stops any audio/video; content is recreated on next open
  const cont = qs('#mlContent');
  if (cont) cont.innerHTML = '';
  box.classList.remove('visible');
}

function initMiniInteract() {
  const box = qs('#miniLive');
  if (box.__init) return; box.__init=true;
  const title = qs('#mlTitle'), resize = qs('#mlResize');
  let drag=false, rx=0,ry=0,bx=0,by=0;
  const getXY = ()=>{ const m=box.style.transform.match(/translate3d\(([-\d.]+)px,\s*([-\d.]+)px/); return m?{x:+m[1],y:+m[2]}:{x:0,y:0}; };
  const dStart = e=>{ drag=true; const p=e.touches?e.touches[0]:e; const t=getXY(); bx=t.x;by=t.y;rx=p.clientX;ry=p.clientY; e.preventDefault(); };
  const dMove  = e=>{ if(!drag)return; const p=e.touches?e.touches[0]:e; box.style.left='0';box.style.right='auto';box.style.transform=`translate3d(${bx+p.clientX-rx}px,${by+p.clientY-ry}px,0)`; };
  const dEnd   = ()=>drag=false;
  title.addEventListener('mousedown',dStart); title.addEventListener('touchstart',dStart,{passive:false});
  window.addEventListener('mousemove',dMove); window.addEventListener('touchmove',dMove,{passive:false});
  window.addEventListener('mouseup',dEnd); window.addEventListener('touchend',dEnd);

  let res=false, rrx=0,rry=0,rW=0,rH=0;
  const rStart = e=>{ res=true; const p=e.touches?e.touches[0]:e; rrx=p.clientX;rry=p.clientY; const r=box.getBoundingClientRect(); rW=r.width;rH=r.height; e.preventDefault();e.stopPropagation(); };
  const rMove  = e=>{ if(!res)return; const p=e.touches?e.touches[0]:e; box.style.width=Math.max(220,Math.min(600,rW+p.clientX-rrx))+'px';box.style.height=Math.max(140,Math.min(450,rH+p.clientY-rry))+'px';box.style.aspectRatio='auto'; };
  const rEnd   = ()=>res=false;
  resize.addEventListener('mousedown',rStart);resize.addEventListener('touchstart',rStart,{passive:false});
  window.addEventListener('mousemove',rMove);window.addEventListener('touchmove',rMove,{passive:false});
  window.addEventListener('mouseup',rEnd);window.addEventListener('touchend',rEnd);
}

// ─────────────────────────────────────────────
// SCHEDULE
// ─────────────────────────────────────────────
function scheduleTick() {
  const hm = nowHM(), day = new Date().toLocaleDateString('en-US',{weekday:'short'});
  const sch = safeJSON('qr_schedule',[]), last = localStorage.getItem('qr_sch_last')||'';
  sch.forEach(it => {
    if (it.time!==hm) return;
    if (Array.isArray(it.days)&&it.days.length&&!it.days.map(d=>d.toLowerCase()).includes(day.toLowerCase())) return;
    const sig=`${it.stationId}@${hm}@${day}`;
    if (last===sig) return;
    localStorage.setItem('qr_sch_last',sig);
    playStation(it.stationId); showToast(lang==='ar'?'تشغيل مجدول':'Scheduled play');
  });
}

function openScheduleModal() {
  const b = getModal('sch');
  const list = stations.map(s=>`<option value="${s.id}">${lang==='ar'?s.name:s.name_en}</option>`).join('');
  const stored = safeJSON('qr_schedule',[]);
  const items = stored.length
    ? stored.map((it,i)=>{const s=stations.find(x=>x.id===it.stationId);return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)"><div><strong style="font-size:.85rem">${s?lang==='ar'?s.name:s.name_en:it.stationId}</strong> <span style="color:var(--sub);font-size:.75rem">${it.time}</span></div><button class="m-btn" data-del="${i}">${lang==='ar'?'حذف':'Delete'}</button></div>`;}).join('')
    : `<p>${lang==='ar'?'لا توجد جداول.':'No schedules yet.'}</p>`;
  b.querySelector('.modal-box').innerHTML = `
    <h3 class="modal-h">${lang==='ar'?'جدولة التشغيل':'Auto Play Schedule'}</h3>
    <div class="modal-row"><div><label class="modal-label">${lang==='ar'?'المحطة':'Station'}</label><select class="modal-select" id="schSt">${list}</select></div><div><label class="modal-label">${lang==='ar'?'الوقت':'Time'}</label><input type="time" class="modal-input" id="schTm" value="${nowHM()}"></div></div>
    <div class="modal-actions"><button class="m-btn" id="schX">${lang==='ar'?'إغلاق':'Close'}</button><button class="m-btn primary" id="schS">${lang==='ar'?'حفظ':'Save'}</button></div>
    <div style="margin-top:14px">${items}</div>`;
  qs('#schX',b).onclick=()=>closeModal(b);
  qs('#schS',b).onclick=()=>{const arr=safeJSON('qr_schedule',[]);arr.push({stationId:qs('#schSt',b).value,time:qs('#schTm',b).value,days:[]});saveJSON('qr_schedule',arr);showToast(lang==='ar'?'تم الحفظ':'Saved');openScheduleModal();};
  b.querySelectorAll('[data-del]').forEach(btn=>{btn.onclick=()=>{const arr=safeJSON('qr_schedule',[]);arr.splice(+btn.dataset.del,1);saveJSON('qr_schedule',arr);openScheduleModal();}; });
  openModal(b);
}

function openOnboarding() {
  const b = getModal('ob');
  b.querySelector('.modal-box').innerHTML = `
    <h3 class="modal-h">﴿ بِسۡمِ ٱللَّهِ ﴾  مرحباً بك</h3>
    <div class="hint-box"><strong>🔍 البحث والأقسام</strong><p style="margin:5px 0 0;font-size:.83rem;color:var(--sub)">استخدم شريط البحث والوسوم لتصفية 150+ إذاعة وقارئ.</p></div>
    <div class="hint-box"><strong>⭐ المفضلة السريعة</strong><p style="margin:5px 0 0;font-size:.83rem;color:var(--sub)">اضغط القلب لإضافة محطة للمفضلة وتثبيتها أعلى الشاشة.</p></div>
    <div class="hint-box"><strong>⏱ مؤقت النوم</strong><p style="margin:5px 0 0;font-size:.83rem;color:var(--sub)">اضغط أيقونة الساعة في المشغل لضبط وقت إيقاف تلقائي.</p></div>
    <div class="modal-actions"><button class="m-btn primary" id="obOk">${lang==='ar'?'بدء الاستخدام 🎧':'Get Started 🎧'}</button></div>`;
  qs('#obOk',b).onclick=()=>{localStorage.setItem('qr_onboard','1');closeModal(b);};
  openModal(b);
}

// ─────────────────────────────────────────────
// MODAL HELPERS
// ─────────────────────────────────────────────
function getModal(name) {
  let b = document.getElementById(`qrM_${name}`);
  if (b) return b;
  b = document.createElement('div'); b.className='modal-backdrop'; b.id=`qrM_${name}`;
  b.innerHTML='<div class="modal-box"></div>';
  b.addEventListener('click',e=>{if(e.target===b)closeModal(b);});
  document.body.appendChild(b);
  return b;
}
function openModal(b)  { b.style.display='flex'; }
function closeModal(b) { b.style.display='none'; }
function qs(sel, ctx){ return (ctx||document).querySelector(sel); }

// ─────────────────────────────────────────────
// SCENE SAVE / RESTORE
// ─────────────────────────────────────────────
function saveScene() { saveJSON('qr_scene',{currentId,isPlaying,activeCat,q:qs('#searchInput').value,sy:window.scrollY}); }
function restoreScene() {
  const p = new URLSearchParams(location.search);
  const deepId = p.get('s');
  const sc = safeJSON('qr_scene',null);
  if (sc) {
    if (sc.activeCat) activeCat=sc.activeCat;
    if (sc.q) { qs('#searchInput').value=sc.q; qs('#searchClearBtn').style.display='flex'; }
    if (sc.activeCat || sc.q) { renderTags(); renderGrid(); }
  }
  const tid = deepId || (sc && sc.currentId);
  if (tid) setTimeout(()=>{
    if (deepId || (sc && sc.isPlaying)) { playStation(tid); return; }
    // restore UI only — don't start the stream for a paused scene
    const s = stations.find(x=>x.id===tid);
    if (!s) return;
    currentId = tid;
    setTitle(lang==='ar'?s.name:s.name_en);
    setStatus(lang==='ar'?'متوقف — اضغط للتشغيل':'Paused — press play');
    qs('#playerFavBtn')?.classList.toggle('active', favorites.includes(tid));
    updateMediaSession(s);
    showPlayer(); updatePlayingCards();
  }, 150);
  if (sc) setTimeout(()=>window.scrollTo(0,sc.sy||0), 250);
}

// ─────────────────────────────────────────────
// MP3QURAN MERGE
// ─────────────────────────────────────────────
async function mergeMp3Quran() {
  try {
    let data = null;
    for (const ep of ['https://mp3quran.net/api/v3/radios?language=ar','https://www.mp3quran.net/api/v3/radios?language=ar']) {
      try { const r=await fetch(ep,{cache:'no-store'}); if(r.ok){data=await r.json();if(data)break;} } catch(e){}
    }
    if (!data||!Array.isArray(data.radios)) return;
    const ex = new Set(stations.map(s=>String(s.id)));
    data.radios.forEach(r=>{
      const url=(r.url||'').trim(); if(!url)return;
      const rid=`mp3_${r.id}`; if(ex.has(rid))return;
      stations.push({id:rid,name:r.name||`إذاعة ${r.id}`,name_en:r.name||`Radio ${r.id}`,url,cat:'إذاعات MP3Quran',cat_en:'MP3Quran Radios'});
    });
  } catch(e){}
}

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────
function trackPlay() { const st=safeJSON('qr_stats',{plays:0}); st.plays=(st.plays||0)+1; saveJSON('qr_stats',st); }

// ─────────────────────────────────────────────
// AYAH OF THE DAY
// ─────────────────────────────────────────────
const DAILY_AYAT = [
  {t:'﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾', r:'الرعد ٢٨'},
  {t:'﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾', r:'المزمل ٤'},
  {t:'﴿ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾', r:'الشرح ٦'},
  {t:'﴿ فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ ﴾', r:'البقرة ١٥٢'},
  {t:'﴿ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴾', r:'طه ١١٤'},
  {t:'﴿ وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ﴾', r:'الحديد ٤'},
  {t:'﴿ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ ﴾', r:'البقرة ١٥٣'},
  {t:'﴿ وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ ﴾', r:'الإسراء ٨٢'},
  {t:'﴿ رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ﴾', r:'طه ٢٥-٢٦'},
  {t:'﴿ وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا لَعَلَّكُمْ تُرْحَمُونَ ﴾', r:'الأعراف ٢٠٤'},
  {t:'﴿ إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ ﴾', r:'الإسراء ٩'},
  {t:'﴿ وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ ﴾', r:'القمر ١٧'},
  {t:'﴿ قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ ﴾', r:'فصلت ٤٤'},
  {t:'﴿ وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ ﴾', r:'الفرقان ٥٨'}
];
function renderAyah() {
  const d = new Date();
  const dayN = Math.floor((d - new Date(d.getFullYear(),0,0)) / 864e5);
  const a = DAILY_AYAT[dayN % DAILY_AYAT.length];
  const t = qs('#ayahText'), r = qs('#ayahRef');
  if (t) t.textContent = a.t;
  if (r) r.textContent = a.r;
}

// ─────────────────────────────────────────────
// SMART SUGGESTION + RECENTLY PLAYED
// ─────────────────────────────────────────────
function smartSuggestion() {
  const d = new Date(), h = d.getHours();
  if (d.getDay() === 5 && h >= 6 && h < 15) return {id:'156', label:lang==='ar'?'جمعة مباركة':'Blessed Friday'};
  if (h >= 4  && h < 12) return {id:'17', label:lang==='ar'?'صباحك ذكر':'Morning Adhkar'};
  if (h >= 15 && h < 20) return {id:'18', label:lang==='ar'?'مساؤك ذكر':'Evening Adhkar'};
  if (h >= 20 || h < 4)  return {id:'3',  label:lang==='ar'?'سكينة قبل النوم':'Calm for the night'};
  return {id:'6', label:lang==='ar'?'استمع الآن':'Listen now'};
}
function renderSmartRow() {
  const inner = qs('#smartInner'), wrap = qs('#smartRow');
  if (!inner || !wrap) return;
  const chips = [];
  const sug = smartSuggestion();
  const sst = stations.find(x => x.id === sug.id);
  if (sst) chips.push(`<div class="quick-pill smart-pill" onclick="playStation('${sst.id}')">✨ <span>${sug.label} — ${lang==='ar'?sst.name:sst.name_en}</span></div>`);
  // last 3 unique stations from history
  const hist = safeJSON('qr_hist', []);
  const seen = new Set();
  for (const hh of hist) {
    if (seen.size >= 3) break;
    if (seen.has(hh.id) || hh.id === sug.id) continue;
    if (!stations.find(x => x.id === hh.id)) continue;
    seen.add(hh.id);
    chips.push(`<div class="quick-pill" onclick="playStation('${hh.id}')">🕐 <span>${lang==='ar'?hh.name:hh.name_en}</span></div>`);
  }
  if (!chips.length) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  inner.innerHTML = chips.join('');
}

// ─────────────────────────────────────────────
// MEDIA SESSION (lock-screen / notification controls)
// ─────────────────────────────────────────────
const MS_ART = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b3d36"/><stop offset="1" stop-color="#0f5a50"/></linearGradient></defs><rect width="512" height="512" rx="110" fill="url(#g)"/><circle cx="256" cy="256" r="148" fill="none" stroke="#d4a84b" stroke-width="12" opacity=".55"/><g stroke="#f0c96a" stroke-width="26" stroke-linecap="round"><line x1="196" y1="216" x2="196" y2="296"/><line x1="256" y1="176" x2="256" y2="336"/><line x1="316" y1="216" x2="316" y2="296"/></g></svg>`);
function setupMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const ms = navigator.mediaSession;
  const safe = (action, fn) => { try { ms.setActionHandler(action, fn); } catch(e){} };
  safe('play',  () => { if (currentId && !isPlaying) togglePlay(); });
  safe('pause', () => { if (isPlaying) audio.pause(); });
  safe('previoustrack', () => playNext(-1));
  safe('nexttrack',     () => playNext(1));
  safe('stop', closePlayer);
}
function updateMediaSession(s) {
  if (!('mediaSession' in navigator) || !s) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title:  lang==='ar' ? s.name : s.name_en,
      artist: lang==='ar' ? 'راديو القرآن الكريم' : 'Holy Quran Radio',
      album:  lang==='ar' ? s.cat : s.cat_en,
      artwork: [{ src: MS_ART, sizes: '512x512', type: 'image/svg+xml' }]
    });
  } catch(e){}
}

// ─────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ─────────────────────────────────────────────
function setVolume(v) {
  vol = Math.round(v*100)/100;
  audio.volume = vol;
  qs('#volSlider').value = vol;
  localStorage.setItem('qr_vol', vol);
  updateVolIcon();
}
function setupKeyboard() {
  document.addEventListener('keydown', e => {
    const t = e.target;
    if (t && (/^(input|select|textarea)$/i.test(t.tagName) || t.isContentEditable)) {
      if (e.key === 'Escape') t.blur();
      return;
    }
    switch (e.key) {
      case ' ': case 'k': e.preventDefault(); togglePlay(); break;
      case 'ArrowLeft':  playNext(lang==='ar' ? 1 : -1); break;
      case 'ArrowRight': playNext(lang==='ar' ? -1 : 1); break;
      case 'ArrowUp':   e.preventDefault(); setVolume(Math.min(1, vol + 0.1)); break;
      case 'ArrowDown': e.preventDefault(); setVolume(Math.max(0, vol - 0.1)); break;
      case 'm': case 'M': toggleMute(); break;
      case 'f': case 'F': if (currentId) toggleFav(currentId); break;
      case 's': case 'S': shufflePlay(); break;
      case '/': e.preventDefault(); qs('#searchInput').focus(); break;
      case 'Escape':
        document.querySelectorAll('.modal-backdrop').forEach(b => b.style.display = 'none');
        qs('#sleepPanel').classList.remove('open');
        break;
    }
  });
}

// ─────────────────────────────────────────────
// SCROLL UX (compact header + back-to-top)
// ─────────────────────────────────────────────
function setupScrollUX() {
  const header = qs('.app-header');
  const topBtn = qs('#scrollTopBtn');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const y = window.scrollY;
    topBtn.classList.toggle('show', y > 600);
    // position-only hysteresis — no direction checks. The two thresholds are far
    // apart, so finger/wheel wiggles and the header's own height change can
    // never flip the state back and forth (that oscillation was the jitter).
    if (y > 280) header.classList.add('compact');
    else if (y < 140) header.classList.remove('compact');
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─────────────────────────────────────────────
// NOW PLAYING MODAL
// ─────────────────────────────────────────────
function openNowPlayingModal() {
  if (!currentId) return;
  const s = stations.find(x => x.id === currentId);
  if (!s) return;
  const fav = favorites.includes(s.id);
  const b = getModal('np');
  b.querySelector('.modal-box').innerHTML = `
    <h3 class="modal-h" style="text-align:center">${lang==='ar'?'🎧 يُبث الآن':'🎧 Now Playing'}</h3>
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;padding:6px 0 4px">
      <div class="card-art" style="width:110px;height:110px">${artSVG(s.cat)}</div>
      <div class="cat-badge">${lang==='ar'?s.cat:s.cat_en}</div>
      <div style="font-weight:800;font-size:1.08rem;line-height:1.5">${lang==='ar'?s.name:s.name_en}</div>
    </div>
    <div class="modal-actions" style="justify-content:center;flex-wrap:wrap">
      <button class="m-btn" id="npFav">${fav ? (lang==='ar'?'💔 إزالة من المفضلة':'💔 Unfavorite') : (lang==='ar'?'❤️ أضف للمفضلة':'❤️ Favorite')}</button>
      <button class="m-btn" id="npShare">🔗 ${lang==='ar'?'مشاركة':'Share'}</button>
      <button class="m-btn primary" id="npClose">${lang==='ar'?'إغلاق':'Close'}</button>
    </div>`;
  qs('#npFav', b).onclick = () => { toggleFav(s.id); closeModal(b); };
  qs('#npShare', b).onclick = smartShare;
  qs('#npClose', b).onclick = () => closeModal(b);
  openModal(b);
}

// ─────────────────────────────────────────────
// STATION HEALTH (auto-detect broken stations & hide them)
// ─────────────────────────────────────────────
const HEALTH_TTL = 12 * 3600 * 1000; // re-check every 12 hours
const deadIds = new Set();
(function loadDeadList(){
  const m = safeJSON('qr_dead', {});
  const now = Date.now();
  let changed = false;
  for (const id in m) {
    if (now - m[id] < HEALTH_TTL) deadIds.add(id);
    else { delete m[id]; changed = true; } // expired — give the station another chance
  }
  if (changed) saveJSON('qr_dead', m);
})();

function markDead(id, rerender) {
  if (deadIds.has(id)) return;
  const m = safeJSON('qr_dead', {}); m[id] = Date.now(); saveJSON('qr_dead', m);
  deadIds.add(id);
  if (rerender !== false) { renderStats(); renderGrid(); }
}
function markAlive(id, rerender) {
  if (!deadIds.has(id)) return;
  const m = safeJSON('qr_dead', {}); delete m[id]; saveJSON('qr_dead', m);
  deadIds.delete(id);
  if (rerender !== false) { renderStats(); renderGrid(); }
}
function resetDead() {
  saveJSON('qr_dead', {}); saveJSON('qr_health', {});
  deadIds.clear();
  renderStats(); renderGrid();
  showToast(lang==='ar' ? 'تمت إعادة إظهار المحطات وسيُعاد فحصها' : 'Stations restored — rechecking');
  healthRan = false;
  setTimeout(checkStations, 1500);
}

// verdict: 'ok' | 'dead' | 'unknown' — only definite failures count as dead
async function probeStation(s, signal) {
  try {
    const r = await fetch(s.url, { signal, cache:'no-store' });
    try { r.body && r.body.cancel(); } catch(e){}
    return r.ok ? 'ok' : 'dead';
  } catch(e) {
    if (e.name === 'AbortError') return 'unknown'; // slow ≠ dead
    try {
      // host without CORS: opaque response still proves the server is reachable
      await fetch(s.url, { signal, mode:'no-cors', cache:'no-store' });
      return 'unknown';
    } catch(e2) {
      return e2.name === 'AbortError' ? 'unknown' : 'dead';
    }
  }
}

let healthRan = false;
function checkStations() {
  if (healthRan || !location.protocol.startsWith('http') || navigator.onLine === false) return;
  healthRan = true;
  const checked = safeJSON('qr_health', {});
  const now = Date.now();
  const queue = stations.filter(s => !s.video && !isYouTube(s.url) && (!checked[s.id] || now - checked[s.id] > HEALTH_TTL));
  if (!queue.length) return;
  let i = 0, changed = false;
  const worker = async () => {
    while (i < queue.length) {
      const s = queue[i++];
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 8000);
      const verdict = await probeStation(s, ctl.signal);
      clearTimeout(t);
      checked[s.id] = now;
      if (verdict === 'dead' && s.id !== currentId) { markDead(s.id, false); changed = true; }
      else if (verdict === 'ok' && deadIds.has(s.id)) { markAlive(s.id, false); changed = true; }
    }
  };
  Promise.all([worker(), worker(), worker(), worker()]).then(() => {
    saveJSON('qr_health', checked);
    if (changed) { renderStats(); renderGrid(); renderSmartRow(); }
  });
}

// ─────────────────────────────────────────────
// GLOBAL EXPOSE + INIT
// ─────────────────────────────────────────────
window.playStation = playStation;
window.toggleFav   = toggleFav;
window.filterCat   = filterCat;
window.openNowPlayingModal = openNowPlayingModal;
window.openHistoryModal    = openHistoryModal;
window.resetDead   = resetDead;

init();
