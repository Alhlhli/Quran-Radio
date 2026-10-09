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
let retryTimer   = null;
let connectWatch = null;
let stallTimer   = null;   // grace period before restarting after a buffering gap
let healthyWatch = null;   // delay before we trust a stream and reset the retry budget
let liveMarked   = false;  // true once the current source actually delivered data
let streamState  = 'stopped';
let connectTries = 0;
let installPrompt = null;

// ─────────────────────────────────────────────
// STREAM STATE MACHINE
// connecting → live → (stalled → live) → error (manual reconnect available)
// ─────────────────────────────────────────────
const STREAM_TEXT = {
  connecting:{ar:'جاري الاتصال…',            en:'Connecting…'},
  live:      {ar:'يبث الآن',                 en:'Now playing'},
  paused:    {ar:'متوقف — اضغط للتشغيل',      en:'Paused — press play'},
  stalled:   {ar:'انقطع البث — جارٍ إعادة المحاولة…', en:'Stream interrupted — retrying…'},
  error:     {ar:'تعذّر تشغيل المحطة',        en:'Station failed to play'},
  stopped:   {ar:'جاهز',                     en:'Ready'}
};
function streamText(state) {
  const base = (STREAM_TEXT[state] || STREAM_TEXT.stopped)[lang === 'ar' ? 'ar' : 'en'];
  if (state === 'live') {
    const s = currentId ? stations.find(x => x.id === currentId) : null;
    if (s && (s.video || isYouTube(s.url))) return lang === 'ar' ? '🔴 بث مباشر' : '🔴 Live';
  }
  return base;
}
function setStreamState(state, customText) {
  streamState = state;
  // the retry budget is only re-armed once a source really delivered data
  liveMarked = state === 'live';
  const st = qs('#pStatus');
  if (st) {
    st.classList.remove('st-connecting','st-live','st-paused','st-stalled','st-error','st-stopped');
    st.classList.add('st-' + state);
    st.classList.toggle('stopped', state !== 'live');
  }
  setStatus(customText || streamText(state));
  const rb = qs('#reconnectBtn');
  if (rb) rb.hidden = !(state === 'error' || state === 'stalled');
  const bar = qs('#playerBar');
  if (bar) {
    bar.classList.toggle('is-error', state === 'error');
    bar.classList.toggle('is-loading', state === 'connecting' || state === 'stalled');
  }
  armConnectWatchdog();
}
// If the browser reports nothing for 15 s the stream is almost certainly dead —
// restart it once instead of leaving the user staring at "connecting".
function armConnectWatchdog() {
  clearTimeout(connectWatch);
  if (streamState !== 'connecting' || !currentId) return;
  connectWatch = setTimeout(() => {
    if (streamState !== 'connecting' || !currentId) return;
    connectTries++;
    if (connectTries > 3) {
      // autoplay policy or a silent stream — hand control back to the user
      setStreamState('error', lang==='ar' ? 'تعذّر بدء البث تلقائياً — اضغط إعادة الاتصال' : 'Could not start the stream — tap Reconnect');
      return;
    }
    retryPlayback();
  }, 15000);
}
function clearStreamTimers() {
  clearTimeout(retryTimer); retryTimer = null;
  clearTimeout(connectWatch); connectWatch = null;
  clearTimeout(stallTimer); stallTimer = null;
  clearTimeout(healthyWatch); healthyWatch = null;
  connectTries = 0;
}
// play() rejects when autoplay is blocked or the source died — surface it
function safePlay(p) {
  if (!p || !p.catch) return p;
  return p.catch(err => {
    if (err && err.name === 'NotAllowedError') {
      connectTries = 3;
      if (currentId && streamState !== 'error') {
        setStreamState('paused', lang==='ar' ? 'اضغط زر التشغيل لبدء البث' : 'Press play to start');
      }
      return;
    }
    if (currentId && streamState === 'connecting') restartWithBackoff('play');
  });
}
// one controlled restart of the current station (used by watchdog + reconnect button)
function retryPlayback() {
  if (!currentId) return;
  const s = stations.find(x => x.id === currentId);
  if (!s) return;
  if (s.video || isYouTube(s.url)) { openMiniLive(s); setStreamState('live'); return; }
  setStreamState('connecting');
  stopAudio();
  audio = new Audio();
  audio.volume = vol;
  audio.playsInline = true;
  attachAudioEvents();
  loadStation(currentId);
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function safeJSON(k, fb){ try{ return JSON.parse(localStorage.getItem(k)||JSON.stringify(fb)); } catch(e){ return fb; } }
function saveJSON(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
function nowHM(){ const d=new Date(); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
function isYouTube(url){ return url && (url.includes('youtu') || url.includes('embed')); }
function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[ch]));
}
function stationName(s) { return lang === 'ar' ? s.name : s.name_en; }
function stationCat(s) { return lang === 'ar' ? s.cat : s.cat_en; }

const DEFAULT_UI_PREFS = Object.freeze({
  fontScale: 100,
  animations: true,
  stickyHeader: true,
  pattern: true,
  ayah: true,
  suggestions: true
});
let uiPrefs = {...DEFAULT_UI_PREFS, ...safeJSON('qr_ui_prefs', {})};

function saveUiPreferences() {
  saveJSON('qr_ui_prefs', uiPrefs);
}

function applyUiPreferences() {
  const fontScale = Math.min(120, Math.max(90, Number(uiPrefs.fontScale) || 100));
  uiPrefs.fontScale = fontScale;
  document.documentElement.style.setProperty('--ui-scale', `${fontScale}%`);
  document.body.classList.toggle('reduce-motion', !uiPrefs.animations);
  document.body.classList.toggle('header-static', !uiPrefs.stickyHeader);
  document.body.classList.toggle('no-pattern', !uiPrefs.pattern);
  document.body.classList.toggle('hide-ayah', !uiPrefs.ayah);
  document.documentElement.style.scrollBehavior = uiPrefs.animations ? '' : 'auto';
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
async function init() {
  applyTheme(theme);
  applyLang(lang);
  applyUiPreferences();
  applyCalmMode();
  audio.volume = vol;
  audio.playsInline = true;
  document.getElementById('volSlider').value = vol;
  renderAyah();
  renderTags(); renderStats(); renderGrid(); renderSmartRow();
  // دمج إذاعات MP3Quran في الخلفية حتى لا يتأخر تجهيز الواجهة وزر التشغيل
  mergeMp3Quran().then(() => { renderTags(); renderStats(); renderGrid(); renderSmartRow(); });
  setupEvents();
  setupKeyboard();
  setupScrollUX();
  setupMediaSession();
  setupInstallPrompt();
  setupConnectionStatus();
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
  restoreScene();
  attachAudioEvents();
  setInterval(scheduleTick, 30000);
  setInterval(updateSleepBadge, 10000);
  setTimeout(checkStations, 5000); // background health scan for broken stations
  if (localStorage.getItem('qr_big') === '1'){ document.body.classList.add('big-mode'); qs('#bigBtn').classList.add('active'); }
  if (!localStorage.getItem('qr_onboard')) setTimeout(openOnboarding, 500);
}

function attachAudioEvents() {
  audio.addEventListener('play',   onAudioPlay);
  audio.addEventListener('pause',  onAudioPause);
  audio.addEventListener('ended',  onAudioEnded);
  audio.addEventListener('error',  onAudioError);
  audio.addEventListener('waiting',  onStreamWait);
  audio.addEventListener('stalled',  onStreamWait);
  audio.addEventListener('canplay',  onStreamReady);
  audio.addEventListener('playing',  onStreamPlaying);
  audio.addEventListener('loadstart', onStreamLoadStart);
}

function onStreamLoadStart() {
  if (switchingSrc || !currentId) return;
  const s = stations.find(x => x.id === currentId);
  if (s && (s.video || isYouTube(s.url))) return;
  if (streamState !== 'live') setStreamState('connecting');
}
function onStreamReady() {
  if (switchingSrc || !currentId) return;
  if (!audio.paused) markLive();
}
// The element is genuinely holding data: cancel pending restarts, show "live",
// and only restore the retry budget once the stream has stayed healthy for a while.
// (Not doing this on the bare 'play' event is what kept failed attempts from
// ever reaching retry 2/3 — a broken source fires 'play' right before 'error'.)
function markLive() {
  if (liveMarked) return;
  liveMarked = true;
  clearTimeout(retryTimer); retryTimer = null;
  clearTimeout(connectWatch); connectWatch = null;
  clearTimeout(stallTimer); stallTimer = null;
  connectTries = 0;
  if (currentId) markAlive(currentId);
  isPlaying = true;
  setPlayerState(true);
  setStreamState('live');
  clearTimeout(healthyWatch);
  healthyWatch = setTimeout(() => {
    healthyWatch = null;
    if (currentId && streamState === 'live') retryCount = 0; // stable — budget restored
  }, 8000);
}
function onStreamPlaying() {
  if (switchingSrc || !currentId) return;
  const s = stations.find(x => x.id === currentId);
  if (s && (s.video || isYouTube(s.url))) return;
  markLive();
}
// buffering gap: show "interrupted", give the stream a moment, then restart it
function onStreamWait() {
  if (switchingSrc || !currentId || audio.paused || streamState === 'connecting') return;
  const s = stations.find(x => x.id === currentId);
  if (s && (s.video || isYouTube(s.url))) return;
  if (streamState === 'live') {
    setStreamState('stalled');
    clearTimeout(stallTimer);
    stallTimer = setTimeout(() => {
      stallTimer = null;
      if (streamState !== 'stalled' || !currentId) return;
      if (audio.readyState >= 3 && !audio.paused) markLive();
      else restartWithBackoff('stall');
    }, 5000);
  }
}
// exponential back-off: 2s, 4s, 8s — then give up and offer a manual reconnect
function restartWithBackoff(reason) {
  if (!currentId || retryTimer || streamState === 'error') return;
  retryCount++;
  if (retryCount > 3) { failPlayback(); return; }
  clearTimeout(healthyWatch); healthyWatch = null;
  const delay = 2000 * Math.pow(2, retryCount - 1);
  setStreamState('stalled', lang === 'ar'
    ? `انقطع البث — إعادة المحاولة ${retryCount}/3 بعد ${Math.round(delay/1000)} ثانية…`
    : `Stream interrupted — retry ${retryCount}/3 in ${Math.round(delay/1000)}s…`);
  retryTimer = setTimeout(() => {
    retryTimer = null;
    if (!currentId) return;
    const s = stations.find(x => x.id === currentId);
    if (!s || s.video || isYouTube(s.url)) return;
    setStreamState('connecting');
    stopAudio();
    audio = new Audio();
    audio.volume = vol;
    audio.playsInline = true;
    attachAudioEvents();
    loadStation(currentId);
  }, delay);
}
function failPlayback() {
  retryCount = 0;
  clearStreamTimers();
  clearTimeout(healthyWatch); healthyWatch = null;
  liveMarked = false;
  isPlaying = false;
  stopAudio();            // silence the dying element, suppress its late 'error'
  setPlayerState(false);
  setStreamState('error');
  if (currentId) {
    markDead(currentId);
    showToast(lang === 'ar' ? 'تعذّر تشغيل المحطة — استخدم زر إعادة الاتصال 🔧' : 'Station failed — use Reconnect 🔧');
  }
}

function onAudioPlay()  {
  isPlaying = true;
  switchingSrc = false;
  if (!playStart) playStart = Date.now();
  setPlayerState(true);
  // A broken source fires 'play' moments before it errors out — declaring
  // "live" here used to wipe the retry budget and loop forever at attempt 1.
  if (audio.readyState >= 2) markLive();
  else setStreamState('connecting');
}
function onAudioPause() { isPlaying=false; savePlayHistory(); setPlayerState(false); if (switchingSrc) return; if (!currentId) setStreamState('stopped'); else if (streamState !== 'error') setStreamState('paused'); }
function onAudioEnded() {
  isPlaying=false; savePlayHistory(); setPlayerState(false); setStreamState('stopped');
  if (shuffleOn) { shufflePlay(); return; }
  playNext(1);
}
function onAudioError(e) {
  // Ignore errors if we deliberately stopped or are mid-switch (no currentId or src cleared)
  if (switchingSrc || !currentId || !audio.src) return;
  // audio errors can never belong to a video/YouTube station (they play in the mini window)
  const cur = stations.find(x=>x.id===currentId);
  if (cur && (cur.video || isYouTube(cur.url))) return;
  restartWithBackoff('error');
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
    clearStreamTimers();
    playStart = Date.now(); // track even YouTube views
    setTitle(lang==='ar'?s.name:s.name_en);
    setStreamState('live');
    showPlayer(); updatePlayingCards();
    addHistEntry(s, 0); // record immediately for YouTube
    openMiniLive(s);
    saveScene();
    return;
  }

  closeMiniLive();
  currentId = id;
  playStart = 0; // will be set when audio.play fires
  connectTries = 0;
  setTitle(lang==='ar'?s.name:s.name_en);
  setStreamState('connecting');
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
    audio.src = url; safePlay(audio.play());
    return;
  }
  loadHlsLib().then(() => {
    if (currentId !== id) return; // user switched stations while the lib loaded
    switchingSrc = false;
    if (!Hls.isSupported()) { audio.src = url; safePlay(audio.play()); return; }
    hls = new Hls({ enableWorker:true, lowLatencyMode:true, backBufferLength:90, maxBufferLength:30, maxMaxBufferLength:60 });
    hls.loadSource(url);
    hls.attachMedia(audio);
    hls.on(Hls.Events.MANIFEST_PARSED, () => { safePlay(audio.play()); });
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
    audio.src = url; safePlay(audio.play()); // Safari native HLS, or surface the error
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
    setStreamState('live');
    return;
  }
  if (streamState === 'error') { reconnect(); return; }
  if (isPlaying) { audio.pause(); }
  else { connectTries = 0; setStreamState('connecting'); safePlay(audio.play()); }
}

// manual reconnect (player button + shortcut)
function reconnect() {
  if (!currentId) return;
  retryCount = 0;
  clearStreamTimers();
  showToast(lang==='ar' ? 'جارٍ إعادة الاتصال بالبث…' : 'Reconnecting to the stream…');
  retryPlayback();
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
  document.body.classList.toggle('is-playing', playing);
  icon.innerHTML = playing
    ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/>'
    : '<path d="M8 5v14l11-7z" fill="currentColor"/>';
  const st = qs('#pStatus');
  st.classList.toggle('stopped', !playing);
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
  let h = `<button type="button" class="tag ${activeCat==='all'?'active':''}" data-filter-cat="all">${lang==='ar'?'✦ الكل':'✦ All'} <span class="tag-n">${stations.length}</span></button>`;
  cats.forEach(c => {
    const arCat = stations.find(s=>(lang==='ar'?s.cat:s.cat_en)===c)?.cat || c;
    const n = stations.filter(s=>(lang==='ar'?s.cat:s.cat_en)===c).length;
    h += `<button type="button" class="tag ${activeCat===arCat?'active':''}" data-filter-cat="${esc(arCat)}" data-cat="${esc(arCat)}">${esc(c)} <span class="tag-n">${n}</span></button>`;
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
    .map(x=>`<div class="stat-pill ${x.click?'stat-clickable':''}" ${x.click||''} ${x.title?`title="${esc(x.title)}"`:''} style="${x.click?'cursor:pointer':''}"><div class="stat-n">${x.n}</div><div class="stat-l">${esc(x.l)}</div></div>`).join('');
}

function renderGrid() {
  const grid = qs('#radioGrid');
  const q = qs('#searchInput').value.toLowerCase().trim();
  let list = stations.filter(s => {
    const hay = `${s.name} ${s.name_en} ${s.cat} ${s.cat_en}`.toLowerCase();
    const cat = s.cat;
    if (deadIds.has(s.id) && s.id !== currentId) return false; // hide broken stations
    return hay.includes(q) && (activeCat==='all'||cat===activeCat) && (showOnlyFav?favorites.includes(s.id):true);
  });

  filteredIds = list.map(s=>s.id);
  updateLibraryTools(list.length, Boolean(q));

  if (!list.length) {
    grid.innerHTML = `<div class="empty"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><div>${lang==='ar'?'لا توجد نتائج مطابقة':'No matching stations'}</div><button type="button" class="reset-filters empty-reset" onclick="resetLibraryFilters()">${lang==='ar'?'عرض كل الإذاعات':'Show all stations'}</button></div>`;
    return;
  }

  grid.innerHTML = list.map(s => {
    const fav  = favorites.includes(s.id);
    const play = currentId === s.id;
    return `
    <div class="station-card ${play?'playing':''}" data-id="${s.id}" role="button" tabindex="0" aria-label="${esc((lang==='ar'?'تشغيل ':'Play ')+stationName(s))}" onclick="playStation('${s.id}')" onkeydown="activateCard(event, '${s.id}')">
      <div class="card-art">${artSVG(s.cat)}</div>
      <div class="cat-badge">${esc(stationCat(s))}</div>
      <div class="station-name">${esc(stationName(s))}</div>
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

function updateLibraryTools(count, hasQuery) {
  const result = qs('#resultCount');
  const reset = qs('#resetFiltersBtn');
  if (result) result.textContent = lang === 'ar'
    ? `${count} إذاعة`
    : `${count} ${count === 1 ? 'station' : 'stations'}`;
  if (reset) reset.hidden = !(hasQuery || activeCat !== 'all' || showOnlyFav);
}

function resetLibraryFilters() {
  activeCat = 'all';
  showOnlyFav = false;
  const search = qs('#searchInput');
  search.value = '';
  qs('#searchClearBtn').style.display = 'none';
  qs('#favBtn').classList.remove('active');
  renderTags();
  renderGrid();
  search.focus();
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
      <span>${esc(stationName(s))}</span>
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
  qs('#tagsContainer').addEventListener('click', e => {
    const tag = e.target.closest('[data-filter-cat]');
    if (tag) filterCat(tag.dataset.filterCat);
  });
  qs('#resetFiltersBtn').addEventListener('click', resetLibraryFilters);
  qs('#settingsBtn').addEventListener('click', openSettingsModal);
  qs('#themeBtn').addEventListener('click', toggleTheme);
  qs('#langBtn').addEventListener('click', toggleLang);
  qs('#favBtn').addEventListener('click', toggleFavFilter);
  qs('#focusBtn').addEventListener('click', toggleFocus);
  qs('#calmBtn').addEventListener('click', toggleCalm);
  qs('#helpBtn').addEventListener('click', openShortcutsModal);
  qs('#scheduleBtn').addEventListener('click', openScheduleModal);
  qs('#bigBtn').addEventListener('click', toggleBig);
  qs('#reconnectBtn').addEventListener('click', reconnect);

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
      const s = currentId ? stations.find(x=>x.id===currentId) : null;
      if (!s) return;
      window.open(ytWatchLink(s), '_blank', 'noopener');
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

function activateCard(event, id) {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  playStation(id);
}

function setupInstallPrompt() {
  const btn = qs('#installBtn');
  if (!btn) return;
  const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (standalone) { btn.hidden = true; return; }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    btn.hidden = false;
  });
  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    btn.hidden = true;
    showToast(lang==='ar'?'تم تثبيت التطبيق بنجاح ✓':'App installed successfully ✓');
  });

  // iOS Safari never fires beforeinstallprompt — explain the share-sheet flow instead
  if (isIOS && !installPrompt) {
    btn.hidden = false;
    btn.dataset.manual = '1';
  }

  btn.addEventListener('click', async () => {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice.catch(()=>null);
      installPrompt = null;
      btn.hidden = true;
      return;
    }
    // No ready install prompt (e.g. the browser hasn't fired beforeinstallprompt yet,
    // or iOS) — always show the helpful explanation instead of doing nothing.
    openInstallHelp();
  });
}

function openInstallHelp() {
  const b = getModal('install');
  const ar = lang === 'ar';
  b.querySelector('.modal-box').innerHTML = `
    <h3 class="modal-h">${ar?'📲 تثبيت التطبيق':'📲 Install the app'}</h3>
    <p class="modal-p">${ar?'ثبّته على شاشة هاتفك ليفتح بسرعة ويكمل البث في الخلفية.':'Add it to your home screen for fast launch and background playback.'}</p>
    <div class="hint-box"><strong>${ar?'على iPhone / iPad':'On iPhone / iPad'}</strong>
      <p style="margin:5px 0 0;font-size:.83rem;color:var(--sub)">${ar?'اضغط زر المشاركة في سفّاري ثم «إضافة إلى الشاشة الرئيسية».':'Tap Share in Safari, then “Add to Home Screen”.'}</p></div>
    <div class="hint-box"><strong>${ar?'على أندرويد':'On Android'}</strong>
      <p style="margin:5px 0 0;font-size:.83rem;color:var(--sub)">${ar?'القائمة ⋮ ثم «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».':'Menu ⋮ then “Install app” / “Add to Home screen”.'}</p></div>
    <div class="modal-actions"><button class="m-btn primary" id="installHelpClose">${ar?'تم':'Got it'}</button></div>`;
  qs('#installHelpClose', b).onclick = () => closeModal(b);
  openModal(b);
}

function setupConnectionStatus() {
  const notify = online => {
    document.body.classList.toggle('is-offline', !online);
    showToast(online
      ? (lang==='ar'?'عاد الاتصال بالإنترنت':'Back online')
      : (lang==='ar'?'لا يوجد اتصال — البث يحتاج إلى الإنترنت':'You are offline — streaming needs internet'));
  };
  window.addEventListener('online',  () => notify(true));
  window.addEventListener('offline', () => notify(false));
  document.body.classList.toggle('is-offline', !navigator.onLine);
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
  clearStreamTimers();
  retryCount = 0;
  setTitle(lang==='ar'?'اختر إذاعة للبدء':'Choose a station');
  setPlayerState(false);
  setStreamState('stopped');
  if ('mediaSession' in navigator) { try { navigator.mediaSession.metadata = null; navigator.mediaSession.playbackState = 'paused'; } catch(e){} }
  saveScene();
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
// أربعة ثيمات — كل ثيم له لوحة ألوان كاملة في style.css
const THEMES = [
  { id:'dark',  ar:'زمردي',  en:'Emerald', swatch:'#0f5a50', accent:'#d4a84b' },
  { id:'light', ar:'فاتح',   en:'Light',   swatch:'#dde8e4', accent:'#c9922e' },
  { id:'navy',  ar:'كحلي',   en:'Navy',    swatch:'#0e3f63', accent:'#d9ae52' },
  { id:'royal', ar:'بنفسجي', en:'Royal',   swatch:'#411a63', accent:'#e0b45f' }
];
const THEME_META = { dark:'#0b1f1c', light:'#f0f4f2', navy:'#07131f', royal:'#150c22' };
function themeDef(id){ return THEMES.find(x => x.id === id) || THEMES[0]; }
function themeName(id){ const t = themeDef(id); return lang === 'ar' ? t.ar : t.en; }
function applyTheme(t) {
  const def = themeDef(t);
  theme = def.id;
  document.documentElement.setAttribute('data-theme', def.id);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_META[def.id] || '#0b1f1c');
  updateThemeBtn();
}
function updateThemeBtn() {
  const btn = qs('#themeBtn');
  if (!btn) return;
  const ar = lang === 'ar';
  const label = ar
    ? `الثيم الحالي: ${themeName(theme)} — اضغط للتبديل`
    : `Current theme: ${themeName(theme)} — click to cycle`;
  btn.title = label;
  btn.setAttribute('aria-label', label);
  btn.setAttribute('data-theme-current', theme);
  const ind = btn.querySelector('.theme-ind');
  if (ind) ind.style.background = themeDef(theme).swatch;
}
function toggleTheme() {
  const i = THEMES.findIndex(x => x.id === theme);
  const next = THEMES[(i + 1 + THEMES.length) % THEMES.length];
  localStorage.setItem('qr_theme', next.id);
  applyTheme(next.id);
  showToast(lang === 'ar' ? `🎨 الثيم: ${next.ar}` : `🎨 Theme: ${next.en}`);
}
function applyLang(l) {
  document.documentElement.setAttribute('lang',l);
  document.documentElement.setAttribute('dir',l==='ar'?'rtl':'ltr');
  const bt = qs('.brand-title');
  if(bt) bt.textContent = l==='ar'?'راديو القرآن الكريم':'Holy Quran Radio';
  const sub = qs('.brand-sub');
  if (sub) sub.textContent = l === 'ar' ? 'HOLY QURAN RADIO' : 'RADIO FOR QURAN RECITATIONS';
  const ayah = qs('.brand-ayah');
  if (ayah) ayah.textContent = l === 'ar' ? '﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾' : 'Listen with calm and focus';
  const si = qs('#searchInput');
  if(si) si.placeholder = l==='ar'?'ابحث عن قارئ أو إذاعة...':'Search reader or station...';
  const libraryKicker = qs('#libraryKicker');
  const libraryTitle = qs('#libraryTitle');
  const libraryDescription = qs('#libraryDescription');
  const resetFiltersLabel = qs('#resetFiltersLabel');
  const skipLink = qs('.skip-link');
  const settingsBtn = qs('#settingsBtn');
  if (libraryKicker) libraryKicker.textContent = l==='ar'?'مكتبة البث المباشر':'LIVE RADIO LIBRARY';
  if (libraryTitle) libraryTitle.textContent = l==='ar'?'اختر تلاوتك':'Choose your recitation';
  if (libraryDescription) libraryDescription.textContent = l==='ar'
    ? 'استكشف الإذاعات حسب القارئ أو نوع التلاوة، وابدأ الاستماع بنقرة واحدة.'
    : 'Browse by reciter or recitation type, then start listening in one click.';
  if (resetFiltersLabel) resetFiltersLabel.textContent = l==='ar'?'إعادة الضبط':'Reset filters';
  if (skipLink) skipLink.textContent = l==='ar'?'تخطَّ إلى قائمة الإذاعات':'Skip to station list';
  if (settingsBtn) {
    const label = l==='ar'?'الإعدادات الشاملة':'Comprehensive settings';
    settingsBtn.title = label;
    settingsBtn.setAttribute('aria-label', label);
  }
  if (!currentId) setTitle(l==='ar'?'اختر إذاعة للبدء':'Choose a station');
  updateThemeBtn();
}
function setLanguage(nextLang) {
  lang = nextLang === 'en' ? 'en' : 'ar';
  localStorage.setItem('qr_lang',lang);
  applyLang(lang);
  const s = currentId ? stations.find(x=>x.id===currentId) : null;
  if (s) {
    setTitle(stationName(s));
    setStreamState(isPlaying ? 'live' : 'paused');
    updateMediaSession(s);
  }
  renderTags(); renderStats(); renderGrid(); renderSmartRow();
}
function toggleLang() { setLanguage(lang==='ar'?'en':'ar'); }
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

// ─────────────────────────────────────────────
// CALM LISTENING MODE (dark, quiet, dimmed while listening)
// ─────────────────────────────────────────────
let calmOn = localStorage.getItem('qr_calm') === '1';

function applyCalmMode() {
  document.body.classList.toggle('calm-mode', calmOn);
  const b = qs('#calmBtn');
  if (b) {
    b.classList.toggle('active', calmOn);
    b.setAttribute('aria-pressed', String(calmOn));
  }
}
function toggleCalm() {
  calmOn = !calmOn;
  localStorage.setItem('qr_calm', calmOn ? '1' : '0');
  applyCalmMode();
  showToast(calmOn
    ? (lang==='ar' ? 'وضع الاستماع الهادئ مُفعّل — خلفية داكنة وسطوع منخفض 🌙' : 'Calm listening mode on 🌙')
    : (lang==='ar' ? 'وضع الاستماع الهادئ مُعطّل' : 'Calm listening mode off'));
}

// ─────────────────────────────────────────────
// KEYBOARD SHORTCUTS HELP
// ─────────────────────────────────────────────
const SHORTCUTS = [
  { k:'Space', ar:'تشغيل / إيقاف البث',            en:'Play / pause' },
  { k:'↑ ↓',   ar:'رفع / خفض الصوت',               en:'Volume up / down' },
  { k:'→ ←',   ar:'المحطة التالية / السابقة',        en:'Next / previous station' },
  { k:'M',     ar:'كتم الصوت',                      en:'Mute' },
  { k:'F',     ar:'المفضلة',                        en:'Toggle favorite' },
  { k:'S',     ar:'تشغيل عشوائي',                   en:'Shuffle' },
  { k:'C',     ar:'وضع الاستماع الهادئ',             en:'Calm listening mode' },
  { k:'T',     ar:'التنقل بين الثيمات الأربعة',        en:'Cycle the 4 themes' },
  { k:'/',     ar:'الانتقال إلى حقل البحث',          en:'Focus the search box' },
  { k:'?',     ar:'عرض هذه القائمة',                 en:'Show this list' },
  { k:'Esc',   ar:'إغلاق النوافذ',                   en:'Close dialogs' }
];
function openShortcutsModal() {
  const b = getModal('keys');
  const ar = lang === 'ar';
  b.querySelector('.modal-box').innerHTML = `
    <h3 class="modal-h">${ar?'⌨️ اختصارات لوحة المفاتيح':'⌨️ Keyboard shortcuts'}</h3>
    <p class="modal-p">${ar?'تعمل الاختصارات تلقائياً ما لم تكن تكتب داخل حقل إدخال.':'Shortcuts are ignored while you type in a field.'}</p>
    <div class="shortcut-list">
      ${SHORTCUTS.map(s=>`<div class="shortcut-row"><span class="shortcut-desc">${ar?s.ar:s.en}</span><kbd class="shortcut-key">${esc(s.k)}</kbd></div>`).join('')}
    </div>
    <div class="modal-actions"><button class="m-btn primary" id="keysClose">${ar?'فهمت':'Got it'}</button></div>`;
  qs('#keysClose', b).onclick = () => closeModal(b);
  openModal(b);
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
// MINI YOUTUBE / LIVE VIDEO
// ─────────────────────────────────────────────
// Turns any YouTube link into something the embedded player can actually play.
// Returns null when the link has no embeddable equivalent (handles, legacy
// channel pages…) — the caller then offers "open on YouTube" instead of a
// dead iframe.
const YT_Q = 'autoplay=1&playsinline=1&rel=0&modestbranding=1';

function appendQ(url, q) { return url + (url.includes('?') ? '&' : '?') + q; }

function parseYouTube(raw) {
  if (!raw) return null;
  let u;
  try { u = new URL(raw, location.href); } catch(e) { return null; }
  const host = u.hostname.replace(/^www\./, '');
  const seg = u.pathname.split('/').filter(Boolean);

  if (host === 'youtu.be') return seg[0] ? { type:'video', id:seg[0] } : null;
  if (host !== 'youtube.com' && host !== 'youtube-nocookie.com' && !host.endsWith('.youtube.com')) {
    return /youtu/.test(raw) ? { type:'unknown' } : null;
  }

  const v = u.searchParams.get('v');
  if (v) return { type:'video', id:v };
  const list = u.searchParams.get('list');
  if (list && (!seg[0] || seg[0] === 'playlist')) return { type:'playlist', id:list };
  const chParam = u.searchParams.get('channel');
  if (seg[0] === 'embed' && seg[1] === 'live_stream') {
    return chParam ? { type:'channel', id:chParam } : { type:'unknown' };
  }
  if (chParam) return { type:'channel', id:chParam };
  if (['embed','shorts','live','v'].includes(seg[0]) && seg[1] && seg[1] !== 'live_stream') {
    return { type:'video', id:seg[1] };
  }
  if (seg[0] === 'channel' && seg[1]) return { type:'channel', id:seg[1] };
  if (seg[0] === 'playlist') return list ? { type:'playlist', id:list } : { type:'unknown' };
  if (seg[0] && seg[0][0] === '@') return { type:'handle', id:seg[0] };
  if (['c','user'].includes(seg[0]) && seg[1]) return { type:'slug', id:seg[1] };
  return { type:'unknown' };
}

function toEmbed(url) {
  if (!url) return null;
  if (url.includes('/embed/') && !url.includes('live_stream')) return appendQ(url, YT_Q);
  const info = parseYouTube(url);
  if (!info) return null;
  if (info.type === 'video')  return `https://www.youtube-nocookie.com/embed/${info.id}?${YT_Q}`;
  if (info.type === 'playlist') return `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(info.id)}&${YT_Q}`;
  if (info.type === 'channel') {
    // UC… channel → its UU… uploads playlist; embeds the live stream while live
    if (/^UC[\w-]{22}$/.test(info.id)) {
      return `https://www.youtube-nocookie.com/embed/videoseries?list=UU${info.id.slice(2)}&${YT_Q}`;
    }
    if (/^UU[\w-]{22}$/.test(info.id)) {
      return `https://www.youtube-nocookie.com/embed/videoseries?list=${info.id}&${YT_Q}`;
    }
  }
  return null;
}

// human-facing link for the "open on YouTube" button
function ytWatchLink(s) {
  if (!s) return '';
  if (s.yt) return s.yt;
  const info = parseYouTube(s.url);
  if (info && info.type === 'video') return `https://www.youtube.com/watch?v=${info.id}`;
  if (s.url.includes('channel=')) return 'https://www.youtube.com/channel/' + s.url.split('channel=')[1].split('&')[0];
  return s.url;
}

let mlHls = null, mlRetry = 0;

function mlLoadingHTML() {
  return `<div class="ml-loading"><span class="ml-spin"></span><span>${lang==='ar'?'جارٍ الاتصال بالبث المباشر…':'Connecting to the live stream…'}</span></div>`;
}

function mlFallback(cont, s, msg) {
  if (mlHls) { try{mlHls.destroy();}catch(e){} mlHls = null; }
  const ytLink = ytWatchLink(s);
  const info = s && s.yt ? parseYouTube(s.yt) : null;
  const embeddable = Boolean(info && ['video','playlist','channel'].includes(info.type));
  cont.innerHTML = `
    <div class="ml-fallback">
      <div class="ml-fallback-ico">📡</div>
      <div class="ml-fallback-msg">${esc(msg || (lang==='ar'?'تعذّر تشغيل البث المباشر حالياً':'Live stream is unavailable right now'))}</div>
      <div class="ml-fallback-actions">
        <button type="button" class="ml-fb-btn primary" id="mlRetryBtn">🔄 ${lang==='ar'?'إعادة المحاولة':'Retry'}</button>
        ${embeddable ? `<button type="button" class="ml-fb-btn" id="mlYtBtn">📺 ${lang==='ar'?'البث عبر يوتيوب':'Play via YouTube'}</button>` : ''}
        <a class="ml-fb-btn" href="${esc(ytLink)}" target="_blank" rel="noopener">↗ ${lang==='ar'?'فتح في يوتيوب':'Open on YouTube'}</a>
      </div>
    </div>`;
  const retry = qs('#mlRetryBtn', cont);
  if (retry) retry.onclick = () => openMiniLive(s);
  const ytBtn = qs('#mlYtBtn', cont);
  if (ytBtn) ytBtn.onclick = () => mountYouTube(cont, s, s.yt);
}

// injects the iframe, shows a spinner, and gives up gracefully if nothing loads
function wireMiniFrame(cont, s, src) {
  const frame = qs('#mlFrame', cont);
  if (!frame) return;
  let loaded = false;
  const done = () => { loaded = true; const l = cont.querySelector('.ml-loading'); if (l) l.remove(); };
  frame.addEventListener('load', done);
  frame.src = src;
  setTimeout(() => {
    if (loaded || !cont.contains(frame)) return;
    done();
    mlFallback(cont, s, lang==='ar'
      ? 'استغرق البث وقتاً طويلاً — أعد المحاولة أو افتحه في يوتيوب'
      : 'The stream took too long — retry or open it on YouTube');
  }, 18000);
}

function mountYouTube(cont, s, url) {
  const embed = toEmbed(url);
  if (!embed) {
    mlFallback(cont, s, lang==='ar'
      ? 'هذا الرابط لا يُعرض داخل الصفحة — افتحه في نافذة يوتيوب'
      : 'This link cannot be embedded — open it on YouTube');
    return;
  }
  cont.innerHTML = ML_IFRAME + mlLoadingHTML();
  wireMiniFrame(cont, s, embed);
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
    mlFallback(cont, s, lang==='ar'
      ? 'لا يمكن تشغيل يوتيوب من الملف المحلي — افتحه في المتصفح'
      : 'YouTube cannot embed from a local file — open it in the browser');
  } else if (toEmbed(s.url)) {
    mountYouTube(cont, s, s.url);
  } else if (s.yt && toEmbed(s.yt)) {
    // the station URL is not embeddable but it has a YouTube channel/live link
    mountYouTube(cont, s, s.yt);
  } else {
    // handle / legacy channel links have no embed equivalent
    mlFallback(cont, s, lang==='ar'
      ? 'رابط يوتيوب غير قابل للتشغيل المضمّن'
      : 'This YouTube link cannot be embedded');
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

// ─────────────────────────────────────────────
// COMPREHENSIVE SETTINGS
// ─────────────────────────────────────────────
function settingsSwitch(key, icon, title, description, enabled) {
  return `<div class="settings-item">
    <span class="settings-item-icon" aria-hidden="true">${icon}</span>
    <span class="settings-item-copy"><strong>${title}</strong><small>${description}</small></span>
    <button type="button" class="settings-switch ${enabled?'on':''}" role="switch" aria-checked="${enabled}" data-pref="${key}" aria-label="${title}"><span></span></button>
  </div>`;
}

function openSettingsModal() {
  const b = getModal('settings');
  const box = b.querySelector('.modal-box');
  box.className = 'modal-box settings-modal-box';
  const ar = lang === 'ar';
  const isBig = document.body.classList.contains('big-mode');
  const isFocus = document.body.classList.contains('focus-mode');
  const volumePercent = Math.round(audio.volume * 100);

  box.innerHTML = `
    <div class="settings-title-row">
      <div><span class="settings-eyebrow">${ar?'تخصيص التجربة':'CUSTOMIZE EXPERIENCE'}</span><h3 class="modal-h">${ar?'الإعدادات الشاملة':'Comprehensive settings'}</h3></div>
      <button type="button" class="settings-close" id="settingsClose" aria-label="${ar?'إغلاق':'Close'}">×</button>
    </div>
    <p class="modal-p">${ar?'تحكّم في مظهر الصفحة وطريقة عرض المحتوى والاستماع من مكان واحد.':'Control page appearance, content display, and listening from one place.'}</p>

    <div class="settings-section">
      <h4>${ar?'المظهر واللغة':'Appearance & language'}</h4>
      <div class="settings-control-row settings-theme-row">
        <span>${ar?'السمة':'Theme'}</span>
        <div class="theme-swatches" role="radiogroup" aria-label="${ar?'اختر السمة':'Choose theme'}">
          ${THEMES.map(t => `<button type="button" role="radio" class="theme-swatch ${theme===t.id?'active':''}"
              data-theme-choice="${t.id}" aria-checked="${theme===t.id}" title="${ar?t.ar:t.en}">
              <span class="theme-dot" style="--dot:${t.swatch};--dot-ac:${t.accent}"></span>
              <span class="theme-name">${ar?t.ar:t.en}</span>
            </button>`).join('')}
        </div>
      </div>
      <div class="settings-control-row">
        <span>${ar?'اللغة':'Language'}</span>
        <div class="settings-segments">
          <button type="button" data-lang-choice="ar" class="${lang==='ar'?'active':''}">العربية</button>
          <button type="button" data-lang-choice="en" class="${lang==='en'?'active':''}">English</button>
        </div>
      </div>
      <div class="settings-control-row">
        <span>${ar?'حجم البطاقات':'Card size'}</span>
        <div class="settings-segments">
          <button type="button" data-size-choice="normal" class="${!isBig?'active':''}">${ar?'عادي':'Normal'}</button>
          <button type="button" data-size-choice="large" class="${isBig?'active':''}">${ar?'كبير':'Large'}</button>
        </div>
      </div>
      <label class="settings-slider-row" for="settingsFontScale">
        <span><strong>${ar?'حجم النص':'Text size'}</strong><small id="settingsFontValue">${uiPrefs.fontScale}%</small></span>
        <input type="range" id="settingsFontScale" min="90" max="120" step="5" value="${uiPrefs.fontScale}">
      </label>
    </div>

    <div class="settings-section">
      <h4>${ar?'عرض الصفحة':'Page display'}</h4>
      <div class="settings-list">
        ${settingsSwitch('stickyHeader','⌃',ar?'تثبيت الترويسة':'Sticky header',ar?'يبقى البحث والأقسام ظاهرين أثناء التمرير':'Keep search and categories visible while scrolling',uiPrefs.stickyHeader)}
        ${settingsSwitch('ayah','۞',ar?'آية اليوم':'Daily verse',ar?'إظهار بطاقة الآية أعلى الصفحة':'Show the verse card at the top of the page',uiPrefs.ayah)}
        ${settingsSwitch('suggestions','✦',ar?'الاقتراحات الذكية':'Smart suggestions',ar?'عرض اقتراحات مناسبة للوقت وآخر الاستماعات':'Show time-based and recently played suggestions',uiPrefs.suggestions)}
        ${settingsSwitch('pattern','◇',ar?'زخرفة الخلفية':'Background pattern',ar?'إظهار النمط الهندسي الإسلامي في الخلفية':'Show the Islamic geometric background pattern',uiPrefs.pattern)}
        ${settingsSwitch('calm','🌙',ar?'وضع الاستماع الهادئ':'Calm listening mode',ar?'خلفية داكنة، إخفاء العناصر الثانوية، وخفض السطوع أثناء الاستماع':'Dark backdrop, fewer elements, and lower brightness while listening',calmOn)}
        ${settingsSwitch('animations','◌',ar?'الحركات والمؤثرات':'Motion & effects',ar?'تشغيل انتقالات الواجهة والمؤثرات البصرية':'Enable interface transitions and visual effects',uiPrefs.animations)}
        ${settingsSwitch('focusMode','◎',ar?'وضع التركيز':'Focus mode',ar?'واجهة هادئة مخصصة للاستماع':'A calm listening-focused view',isFocus)}
      </div>
    </div>

    <div class="settings-section">
      <h4>${ar?'الصوت':'Audio'}</h4>
      <label class="settings-slider-row" for="settingsVolume">
        <span><strong>${ar?'مستوى الصوت':'Volume'}</strong><small id="settingsVolumeValue">${volumePercent}%</small></span>
        <input type="range" id="settingsVolume" min="0" max="100" step="1" value="${volumePercent}">
      </label>
    </div>

    <div class="settings-footer">
      <button type="button" class="m-btn settings-reset" id="settingsReset">${ar?'استعادة الإعدادات الافتراضية':'Restore defaults'}</button>
      <button type="button" class="m-btn primary" id="settingsDone">${ar?'تم':'Done'}</button>
    </div>

    <div class="settings-credit">
      <span class="settings-credit-ico" aria-hidden="true">✦</span>
      <span>${ar?'تطوير وبرمجة':'Developed by'}</span>
      <a href="https://alhlhli.github.io/" target="_blank" rel="noopener noreferrer">${ar?'عامر الحلحلي':'Amer Al-Halhli'}</a>
    </div>`;

  qs('#settingsClose',b).onclick = () => closeModal(b);
  qs('#settingsDone',b).onclick = () => closeModal(b);

  b.querySelectorAll('[data-theme-choice]').forEach(btn => {
    btn.onclick = () => {
      theme = btn.dataset.themeChoice;
      localStorage.setItem('qr_theme', theme);
      applyTheme(theme);
      openSettingsModal();
    };
  });
  b.querySelectorAll('[data-lang-choice]').forEach(btn => {
    btn.onclick = () => { setLanguage(btn.dataset.langChoice); openSettingsModal(); };
  });
  b.querySelectorAll('[data-size-choice]').forEach(btn => {
    btn.onclick = () => {
      const large = btn.dataset.sizeChoice === 'large';
      document.body.classList.toggle('big-mode', large);
      localStorage.setItem('qr_big', large?'1':'0');
      qs('#bigBtn').classList.toggle('active', large);
      openSettingsModal();
    };
  });
  b.querySelectorAll('[data-pref]').forEach(btn => {
    btn.onclick = () => {
      const key = btn.dataset.pref;
      if (key === 'focusMode') {
        toggleFocus();
      } else if (key === 'calm') {
        toggleCalm();
      } else {
        uiPrefs[key] = !uiPrefs[key];
        saveUiPreferences();
        applyUiPreferences();
        if (key === 'suggestions') renderSmartRow();
      }
      openSettingsModal();
    };
  });

  qs('#settingsFontScale',b).oninput = e => {
    uiPrefs.fontScale = Number(e.target.value);
    qs('#settingsFontValue',b).textContent = `${uiPrefs.fontScale}%`;
    saveUiPreferences();
    applyUiPreferences();
  };
  qs('#settingsVolume',b).oninput = e => {
    vol = Number(e.target.value) / 100;
    audio.volume = vol;
    qs('#volSlider').value = vol;
    qs('#settingsVolumeValue',b).textContent = `${e.target.value}%`;
    localStorage.setItem('qr_vol', vol);
    updateVolIcon();
  };
  qs('#settingsReset',b).onclick = () => {
    uiPrefs = {...DEFAULT_UI_PREFS};
    theme = 'dark';
    vol = 1;
    calmOn = false;
    localStorage.setItem('qr_calm', '0');
    applyCalmMode();
    localStorage.setItem('qr_theme', theme);
    localStorage.setItem('qr_big', '0');
    localStorage.setItem('qr_vol', vol);
    saveUiPreferences();
    if (document.body.classList.contains('focus-mode')) toggleFocus();
    document.body.classList.remove('big-mode');
    qs('#bigBtn').classList.remove('active');
    audio.volume = vol;
    qs('#volSlider').value = vol;
    applyTheme(theme);
    applyUiPreferences();
    setLanguage('ar');
    showToast('تمت استعادة الإعدادات الافتراضية');
    openSettingsModal();
  };
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
function saveScene() {
  saveJSON('qr_scene',{
    currentId,
    isPlaying: Boolean(currentId && isPlaying),
    activeCat,
    q: qs('#searchInput').value,
    sy: window.scrollY
  });
}
function restoreScene() {
  const p = new URLSearchParams(location.search);
  const deepId = p.get('s');
  const sc = safeJSON('qr_scene',null);
  // PWA launch shortcuts (manifest.shortcuts)
  const wantFav = p.get('fav') === '1', wantCalm = p.get('calm') === '1', wantSearch = p.get('search') === '1';
  if (wantFav || wantCalm || wantSearch) setTimeout(() => {
    if (wantCalm && !calmOn) toggleCalm();
    if (wantFav && !showOnlyFav) toggleFavFilter();
    if (wantSearch) qs('#searchInput').focus();
  }, 450);
  if (sc) {
    if (sc.activeCat) {
      const savedCat = stations.find(s => s.cat === sc.activeCat || s.cat_en === sc.activeCat);
      activeCat = sc.activeCat === 'all' ? 'all' : (savedCat ? savedCat.cat : 'all');
    }
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
    setStreamState('paused');
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
      try {
        const ctl = new AbortController();
        const to = setTimeout(() => ctl.abort(), 6000);
        try { const r = await fetch(ep,{cache:'no-store', signal:ctl.signal}); if(r.ok){data=await r.json();if(data)break;} } finally { clearTimeout(to); }
      } catch(e){}
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
  if (!uiPrefs.suggestions) { wrap.style.display = 'none'; return; }
  const chips = [];
  const sug = smartSuggestion();
  const sst = stations.find(x => x.id === sug.id);
  if (sst) chips.push(`<div class="quick-pill smart-pill" onclick="playStation('${sst.id}')">✨ <span>${esc(sug.label)} — ${esc(stationName(sst))}</span></div>`);
  // last 3 unique stations from history
  const hist = safeJSON('qr_hist', []);
  const seen = new Set();
  for (const hh of hist) {
    if (seen.size >= 3) break;
    if (seen.has(hh.id) || hh.id === sug.id) continue;
    if (!stations.find(x => x.id === hh.id)) continue;
    seen.add(hh.id);
    chips.push(`<div class="quick-pill" onclick="playStation('${hh.id}')">🕐 <span>${esc(lang==='ar'?hh.name:hh.name_en)}</span></div>`);
  }
  if (!chips.length) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  inner.innerHTML = chips.join('');
}

// ─────────────────────────────────────────────
// MEDIA SESSION (lock-screen / notification controls)
// ─────────────────────────────────────────────
const MS_ART = [
  { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
  { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
  { src: 'icon.svg',     sizes: 'any',     type: 'image/svg+xml' }
];
function setupMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const ms = navigator.mediaSession;
  const safe = (action, fn) => { try { ms.setActionHandler(action, fn); } catch(e){} };
  safe('play',  () => { if (currentId && !isPlaying) togglePlay(); });
  safe('pause', () => {
    if (!isPlaying) return;
    const cs = currentId ? stations.find(x=>x.id===currentId) : null;
    if (cs && (cs.video || isYouTube(cs.url))) return; // video lives in the mini player
    audio.pause();
  });
  safe('stop', closePlayer);
  safe('previoustrack', () => playNext(-1));
  safe('nexttrack',     () => playNext(1));
  safe('toggleplayback', () => { if (currentId) togglePlay(); });
  try { ms.metadata = null; } catch(e){}
  ms.playbackState = 'paused';
}
function updateMediaSession(s) {
  if (!('mediaSession' in navigator) || !s) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title:  lang==='ar' ? s.name : s.name_en,
      artist: lang==='ar' ? 'راديو القرآن الكريم' : 'Holy Quran Radio',
      album:  lang==='ar' ? s.cat : s.cat_en,
      artwork: MS_ART
    });
  } catch(e){}
}

// ─────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ─────────────────────────────────────────────
function setVolume(v, feedback) {
  vol = Math.round(v*100)/100;
  audio.volume = vol;
  qs('#volSlider').value = vol;
  localStorage.setItem('qr_vol', vol);
  updateVolIcon();
  if (feedback) showToast((vol === 0 ? '🔇 ' : '🔊 ') + Math.round(vol * 100) + '%');
}
function isTypingTarget(t) {
  if (!t) return false;
  const tag = (t.tagName || '').toUpperCase();
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || t.isContentEditable === true;
}
function isActionTarget(t) {
  if (!t || !t.tagName) return false;
  const tag = t.tagName.toUpperCase();
  if (tag === 'BUTTON' || tag === 'A' || tag === 'SUMMARY') return true;
  return typeof t.getAttribute === 'function' && t.getAttribute('role') === 'button';
}
function isRangeTarget(t) {
  return Boolean(t) && String(t.tagName).toUpperCase() === 'INPUT' && String(t.type).toLowerCase() === 'range';
}
function setupKeyboard() {
  document.addEventListener('keydown', e => {
    // never hijack browser/OS shortcuts
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;

    if (e.key === 'Escape') {
      if (isTypingTarget(t)) { t.blur(); return; }
      document.querySelectorAll('.modal-backdrop').forEach(b => b.style.display = 'none');
      const sp = qs('#sleepPanel'); if (sp) sp.classList.remove('open');
      return;
    }
    // typing inside a field (search, forms) — space/arrows must behave normally
    if (isTypingTarget(t)) return;

    const onAction = isActionTarget(t);   // space/letters belong to the focused control
    const onRange  = isRangeTarget(t);    // arrows belong to the focused slider

    switch (e.key) {
      case ' ': case 'Spacebar':
        if (onAction || onRange) return;
        e.preventDefault(); togglePlay(); break;
      case 'k': case 'K':
        if (onAction || onRange) return;
        e.preventDefault(); togglePlay(); break;
      case 'ArrowLeft':
        if (onRange) return;
        e.preventDefault(); playNext(lang==='ar' ? 1 : -1); break;
      case 'ArrowRight':
        if (onRange) return;
        e.preventDefault(); playNext(lang==='ar' ? -1 : 1); break;
      case 'ArrowUp':
        if (onRange) return;
        e.preventDefault(); setVolume(Math.min(1, vol + 0.1), true); break;
      case 'ArrowDown':
        if (onRange) return;
        e.preventDefault(); setVolume(Math.max(0, vol - 0.1), true); break;
      case 'm': case 'M': if (onAction || onRange) return; toggleMute(); break;
      case 'f': case 'F': if (onAction || onRange) return; if (currentId) toggleFav(currentId); break;
      case 's': case 'S': if (onAction || onRange) return; shufflePlay(); break;
      case 'c': case 'C': if (onAction || onRange) return; toggleCalm(); break;
      case 't': case 'T': if (onAction || onRange) return; toggleTheme(); break;
      case '/': e.preventDefault(); qs('#searchInput').focus(); break;
      case '?': e.preventDefault(); openShortcutsModal(); break;
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
  // لا تنافس البث على الشبكة: أجّل الفحص حتى يتوقف الاتصال/البث
  if (streamState === 'connecting' || streamState === 'live' || streamState === 'stalled') { setTimeout(checkStations, 10000); return; }
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
  Promise.all([worker(), worker()]).then(() => {
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
