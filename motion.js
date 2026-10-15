/* "Pause motion" control for herofound.org (WCAG 2.2.2 Pause, Stop, Hide).
   One button, fixed bottom-left on every page, that stops or restarts everything that moves on its own:
   the looping background videos, the carousel auto-advance, the diver's idle kick, and the pulsing dot.
   State lives on <html class="motion-paused"> and is announced with a "motionchange" event; the page
   scripts read the class. Starts paused when the visitor's system asks for reduced motion. The choice
   is remembered in this browser only. */
(function () {
  var root = document.documentElement;
  var KEY = 'hf-motion';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (e) { saved = null; }
  var paused = saved === 'paused' || (saved === null && reduce);

  var style = document.createElement('style');
  style.textContent = [
    '.motion-toggle{position:fixed;left:20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));z-index:900;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:10px 14px;border-radius:999px;background:rgba(20,20,32,0.92);color:#c9d2df;border:1px solid rgba(212,168,67,0.4);font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 8px 28px rgba(0,0,0,0.5);transition:color .3s ease,border-color .3s ease}',
    '.motion-toggle:hover{color:#D4A843;border-color:#D4A843}',
    '.motion-toggle:focus-visible{outline:2px solid #f0f4f8;outline-offset:3px}',
    '.motion-toggle svg{width:14px;height:14px;flex:none}',
    '.motion-toggle .motion-toggle-play,.motion-paused .motion-toggle .motion-toggle-pause{display:none}',
    '.motion-paused .motion-toggle .motion-toggle-play{display:block}',
    '.motion-paused .foundation-badge::before{animation:none}',
    '@media (prefers-reduced-motion: reduce){.foundation-badge::before{animation:none}}',
    '@media (max-width: 768px){.motion-toggle{left:16px;padding:9px 12px}}'
  ].join('\n');
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'motion-toggle';
  btn.innerHTML =
    '<svg class="motion-toggle-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>' +
    '<svg class="motion-toggle-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>' +
    '<span class="motion-toggle-text"></span>';
  var text = btn.querySelector('.motion-toggle-text');

  function videos() { return Array.prototype.slice.call(document.querySelectorAll('video')); }

  function apply() {
    root.classList.toggle('motion-paused', paused);
    text.textContent = paused ? 'Play motion' : 'Pause motion';
    btn.setAttribute('aria-label', paused ? 'Play background motion' : 'Pause background motion');
    videos().forEach(function (v) {
      if (paused) { v.pause(); }
      else { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    });
    try { root.dispatchEvent(new CustomEvent('motionchange', { detail: { paused: paused } })); } catch (e) {}
  }

  btn.addEventListener('click', function () {
    paused = !paused;
    try { window.localStorage.setItem(KEY, paused ? 'paused' : 'playing'); } catch (e) {}
    apply();
  });

  // A video that finishes loading later would autoplay; keep it still while paused.
  document.addEventListener('play', function (e) {
    if (paused && e.target && e.target.tagName === 'VIDEO') e.target.pause();
  }, true);

  function mount() {
    document.body.appendChild(btn);
    apply();
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
