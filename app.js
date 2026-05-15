/**
 * CATÁLOGO E-LEARNING — COTO CICSA
 * app.js · Edición 2026
 *
 * Módulos:
 *  - initTheme        → modo oscuro
 *  - initCursor       → cursor emoji personalizado (solo desktop)
 *  - initParallax     → efecto 3D en cards (solo desktop)
 *  - initConfetti     → confetti al primer click
 *  - initModal        → modal de detalle de curso
 *  - initSearch       → buscador + highlight
 *  - initCatnav       → scroll horizontal + flechas + active
 *  - initNavActive    → topnav active link
 *  - initAnimations   → fade-in + contadores animados
 *  - initScroll       → progress bar + back-to-top
 *  - initSmoothScroll → scroll suave universal (Safari fix)
 *  - initCatnavTooltips → tooltips con cantidad de cursos
 */

'use strict';

/* ─── Detección de entorno ─────────────────────────────────── */
const IS_TOUCH  = window.matchMedia('(hover: none)').matches;
const IS_MOBILE = () => window.innerWidth < 1024;


/* ============================================================
   initTheme — modo oscuro con persistencia y sistema
============================================================ */
function initTheme() {
  const toggle   = document.getElementById('darkToggle');
  const icon     = document.getElementById('darkIcon');
  const root     = document.documentElement;

  function setTheme(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    toggle?.setAttribute('aria-checked', String(dark));
    if (icon) icon.textContent = dark ? '🌙' : '☀️';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (_) {}
  }

  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved === 'dark' || (!saved && prefersDark));

  const handleToggle = () => setTheme(root.getAttribute('data-theme') !== 'dark');
  toggle?.addEventListener('click', handleToggle);
  toggle?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggle(); }
  });
}


/* ============================================================
   initCursor — emoji de categoría al hover (solo desktop)
============================================================ */
function initCursor() {
  if (IS_TOUCH) return;

  const dot = document.getElementById('cursorDot');
  if (!dot) return;

  const catEmojis = {
    cajas: '🛒', frescos1: '🥩', frescos2: '🧀',
    elaborados: '🍞', 'seg-higiene': '🦺', salon: '🏪',
    mantenimiento: '🔧', medico: '🩺', calidad: '✅',
    'coto-digital': '💻', 'seg-info': '🔒', flota: '🚚',
    'no-alimentos': '🛍️', administracion: '📋', rrhh: '👥',
    gestion: '📈', atencion: '🤝', 'adm-finanzas': '💳',
    seguridad: '🛡️', zonae: '⭐'
  };

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
  }, { passive: true });

  // Event delegation sobre el contenedor de cursos
  const coursesSection = document.querySelector('.courses-section');
  if (!coursesSection) return;

  coursesSection.addEventListener('mouseenter', e => {
    const card = e.target.closest('.course-card');
    if (!card) return;
    const catId = card.closest('.category-block')?.id;
    dot.textContent = catEmojis[catId] || '📚';
    dot.classList.add('visible');
  }, true);

  coursesSection.addEventListener('mouseleave', e => {
    if (e.target.closest('.course-card')) dot.classList.remove('visible');
  }, true);
}


/* ============================================================
   initParallax — efecto 3D en cards (solo desktop, con RAF)
============================================================ */
function initParallax() {
  if (IS_TOUCH) return;

  const coursesSection = document.querySelector('.courses-section');
  if (!coursesSection) return;

  let rafId = null;
  let currentCard = null;
  let pendingX = 0, pendingY = 0;

  function applyParallax() {
    if (!currentCard) return;
    const img = currentCard.querySelector('.course-cover-img');
    currentCard.style.transform =
      `perspective(800px) rotateY(${pendingX * 6}deg) rotateX(${-pendingY * 6}deg) translateY(-3px)`;
    if (img) img.style.transform = `scale(1.06) translate(${pendingX * 6}px, ${pendingY * 6}px)`;
    rafId = null;
  }

  coursesSection.addEventListener('mousemove', e => {
    if (IS_MOBILE()) return;
    const card = e.target.closest('.course-card');
    if (!card) return;
    currentCard = card;
    const rect = card.getBoundingClientRect();
    pendingX = (e.clientX - rect.left) / rect.width  - 0.5;
    pendingY = (e.clientY - rect.top)  / rect.height - 0.5;
    if (!rafId) rafId = requestAnimationFrame(applyParallax);
  }, { passive: true });

  coursesSection.addEventListener('mouseleave', e => {
    const card = e.target.closest('.course-card');
    if (!card) return;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    const img = card.querySelector('.course-cover-img');
    card.style.transform = '';
    if (img) img.style.transform = '';
    currentCard = null;
  }, true);
}


/* ============================================================
   initConfetti — confetti al primer click en cualquier card
============================================================ */
function initConfetti() {
  let shown = false;
  try { shown = localStorage.getItem('confettiShown') === 'true'; } catch (_) {}
  if (shown) return;

  const colors = ['#F02850','#097bb3','#F0BE00','#00C88C','#8228C8','#F0A032'];

  function launch(x, y) {
    shown = true;
    try { localStorage.setItem('confettiShown', 'true'); } catch (_) {}
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.cssText = [
        `left:${x + (Math.random() - 0.5) * 120}px`,
        `top:${y - 20}px`,
        `background:${colors[Math.floor(Math.random() * colors.length)]}`,
        `border-radius:${Math.random() > 0.5 ? '50%' : '2px'}`,
        `width:${Math.random() * 8 + 4}px`,
        `height:${Math.random() * 8 + 4}px`,
        `animation-duration:${Math.random() * 0.8 + 0.8}s`,
        `animation-delay:${Math.random() * 0.3}s`,
      ].join(';');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 2000);
    }
  }

  // Event delegation: un solo listener en el documento
  document.addEventListener('click', e => {
    if (shown) return;
    if (e.target.closest('.course-card')) launch(e.clientX, e.clientY);
  });
}


/* ============================================================
   initModal — modal de detalle con accesibilidad
============================================================ */
function initModal() {
  const overlay     = document.getElementById('courseModal');
  const modalImg    = document.getElementById('modalImg');
  const modalCat    = document.getElementById('modalCat');
  const modalTitle  = document.getElementById('modalTitle');
  const modalBajada = document.getElementById('modalBajada');
  const modalMeta   = document.getElementById('modalMeta');
  const modalPers   = document.getElementById('modalPersonas');
  const modalDesc   = document.getElementById('modalDesc');
  const modalBody   = document.getElementById('modalBody');
  const btnClose    = document.getElementById('modalClose');
  const btnBack     = document.getElementById('modalCloseBtn');
  const waBtn       = document.getElementById('modalWaBtn');

  if (!overlay) return;

  let lastFocused = null;

  function open(card) {
    const img     = card.querySelector('.course-cover-img');
    const title   = card.querySelector('.course-title');
    const bajada  = card.querySelector('.course-bajada');
    const meta    = card.querySelector('.course-meta');
    const pers    = card.querySelector('.course-personas');
    const desc    = card.querySelector('.course-desc');
    const chip    = card.querySelector('.course-cat-chip');
    const color   = card.style.getPropertyValue('--cat-main')
                  || chip?.querySelector('.course-cat-chip-dot')?.style.background
                  || '#097bb3';

    if (img)    { modalImg.src = img.src; modalImg.alt = title?.textContent || ''; }
    if (chip)   modalCat.innerHTML = chip.innerHTML;
    if (title)  modalTitle.textContent = title.textContent;
    if (bajada) modalBajada.textContent = bajada.textContent;
    if (meta)   modalMeta.innerHTML = meta.innerHTML;
    if (pers)   modalPers.innerHTML = pers.innerHTML;
    if (desc)   modalDesc.textContent = desc.textContent;

    modalBody.style.setProperty('--modal-color', color);

    if (waBtn && title) {
      const name = title.textContent?.trim() || 'este curso';
      const msg  = encodeURIComponent(`Hola, me interesa realizar este curso e-learning: "${name}". ¿Me podés dar más información?`);
      waBtn.href = `https://wa.me/5491170819432?text=${msg}`;
    }

    lastFocused = document.activeElement;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    btnClose?.focus();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocused?.focus();
  }

  // Event delegation: un listener en el contenedor de cursos
  document.querySelector('.courses-section')?.addEventListener('click', e => {
    if (e.target.closest('a')) return; // no abrir si es link interno
    const card = e.target.closest('.course-card');
    if (card) open(card);
  });

  btnClose?.addEventListener('click', close);
  btnBack?.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
}


/* ============================================================
   initSearch — buscador con highlight y contador
============================================================ */
function initSearch() {
  const input      = document.getElementById('navSearch');
  const categories = document.querySelectorAll('.category-block');
  const countEl    = document.getElementById('searchCountNum');
  const noResults  = document.querySelector('.no-results');

  if (!input) return;

  // Snapshot de textos originales para restore del highlight
  const FIELDS = ['.course-title', '.course-bajada', '.course-personas'];
  const originals = new Map();
  document.querySelectorAll('.course-card').forEach(card => {
    const snap = {};
    FIELDS.forEach(sel => {
      const el = card.querySelector(sel);
      if (el) snap[sel] = el.innerHTML;
    });
    originals.set(card, snap);
  });

  function normalize(str) {
    return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function highlightText(html, query) {
    if (!query) return html;
    const esc   = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${esc})`, 'gi');
    return html.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  function applyHighlight(q) {
    document.querySelectorAll('.course-card').forEach(card => {
      const snap = originals.get(card);
      if (!snap) return;
      FIELDS.forEach(sel => {
        const el = card.querySelector(sel);
        if (el && snap[sel]) el.innerHTML = q ? highlightText(snap[sel], q) : snap[sel];
      });
    });
  }

  function applyFilters() {
    const q = normalize(input.value);
    let total = 0;

    categories.forEach(block => {
      let visible = 0;
      block.querySelectorAll('.course-card').forEach(card => {
        const show = !q || normalize(card.textContent).includes(q);
        card.classList.toggle('hidden', !show);
        if (show) visible++;
      });
      block.classList.toggle('hidden', visible === 0);
      total += visible;
    });

    // Actualizar contador con micro-animación
    if (countEl) {
      countEl.classList.add('bump');
      setTimeout(() => { countEl.textContent = total; countEl.classList.remove('bump'); }, 150);
    }
    if (noResults) noResults.classList.toggle('visible', total === 0);

    applyHighlight(input.value.trim());
  }

  input.addEventListener('input', applyFilters);

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyFilters();
      const first = document.querySelector('.course-card:not(.hidden)');
      if (first) {
        const offset = 68 + 56 + 8;
        window.scrollTo({ top: first.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        first.style.transition = 'box-shadow 0.3s';
        first.style.boxShadow  = '0 0 0 3px rgba(9,123,179,0.4)';
        setTimeout(() => { first.style.boxShadow = ''; }, 1200);
      }
    }
    if (e.key === 'Escape') {
      input.value = '';
      applyFilters();
      input.blur();
    }
  });
}


/* ============================================================
   initCatnav — scroll horizontal + flechas + active section
============================================================ */
function initCatnav() {
  const scroll   = document.getElementById('catnav-scroll');
  const btnLeft  = document.getElementById('catnav-left');
  const btnRight = document.getElementById('catnav-right');

  if (!scroll) return;

  /* Flechas */
  function updateArrows() {
    const atStart = scroll.scrollLeft <= 4;
    const atEnd   = scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 4;
    btnLeft?.classList.toggle('hidden', atStart);
    btnRight?.classList.toggle('hidden', atEnd);
  }

  scroll.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();

  btnLeft?.addEventListener('click',  () => scroll.scrollBy({ left: -220, behavior: 'smooth' }));
  btnRight?.addEventListener('click', () => scroll.scrollBy({ left:  220, behavior: 'smooth' }));

  /* Drag to scroll (solo desktop) */
  if (!IS_TOUCH) {
    let isDown = false, startX = 0, startScrollLeft = 0;
    scroll.addEventListener('mousedown', e => {
      isDown = true;
      scroll.style.cursor = 'grabbing';
      startX = e.pageX - scroll.offsetLeft;
      startScrollLeft = scroll.scrollLeft;
    });
    scroll.addEventListener('mouseleave', () => { isDown = false; scroll.style.cursor = ''; });
    scroll.addEventListener('mouseup',    () => { isDown = false; scroll.style.cursor = ''; });
    scroll.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      scroll.scrollLeft = startScrollLeft - (e.pageX - scroll.offsetLeft - startX) * 1.2;
    }, { passive: false });
  }

  /* Active link al scrollear */
  const catLinks    = scroll.querySelectorAll('a[href^="#"]');
  const catSections = document.querySelectorAll('.category-block[id]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      catLinks.forEach(a => a.classList.remove('active'));
      const active = scroll.querySelector(`a[href="#${entry.target.id}"]`);
      if (!active) return;
      active.classList.add('active');
      // Solo centrar el link en catnav si el usuario NO acaba de hacer click
      // (evita interferencia con initSmoothScroll)
      if (!isScrollingToSection) {
        const linkLeft    = active.offsetLeft;
        const linkWidth   = active.offsetWidth;
        const scrollWidth = scroll.clientWidth;
        scroll.scrollLeft = linkLeft - scrollWidth / 2 + linkWidth / 2;
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  catSections.forEach(s => observer.observe(s));
}


/* ============================================================
   initNavActive — topnav active link al scrollear
============================================================ */
function initNavActive() {
  const links = document.querySelectorAll('.topnav-menu a[href^="#"]');
  // Solo observar las secciones que tienen link en el topnav (no todos los [id] del DOM)
  const sections = Array.from(links)
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.topnav-menu a[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    });
  }, { rootMargin: '-20% 0px -75% 0px' });

  sections.forEach(s => observer.observe(s));
}


/* ============================================================
   initAnimations — fade-in de secciones + contadores del hero
============================================================ */
function initAnimations() {
  /* Fade-in de secciones */
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationDelay = (i * 0.04) + 's';
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.anim-fadein').forEach(el => fadeObserver.observe(el));

  /* Contadores animados del hero */
  function animateCounter(el) {
    const target   = parseInt(el.dataset.count, 10);
    const sep      = el.dataset.separator || '';
    const prefix   = el.dataset.prefix || '';
    const duration = 1800;
    const start    = performance.now();

    function fmt(n) {
      return sep
        ? prefix + Math.floor(n).toLocaleString('de-DE')
        : prefix + String(Math.floor(n));
    }

    function step(now) {
      const p    = Math.min((now - start) / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = fmt(target * ease);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.stat-counter').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.hero-stats-panel').forEach(el => counterObserver.observe(el));
}


/* ============================================================
   initScroll — progress bar + back-to-top
============================================================ */
function initScroll() {
  const bar     = document.getElementById('scroll-progress');
  const backTop = document.getElementById('backTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    if (bar)     bar.style.width = (scrolled / total * 100) + '%';
    if (backTop) backTop.classList.toggle('visible', scrolled > 600);
  }, { passive: true });

  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ============================================================
   initSmoothScroll — scroll suave universal (Safari fix)
============================================================ */
// Flag global: evita que el catObserver haga scroll mientras
// el usuario ya está scrolleando hacia una sección por click
let isScrollingToSection = false;

function initSmoothScroll() {
  const OFFSET = 68 + 56; // --nav-h + --catnav-h

  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    // Solo anclas internas reales (no "#" suelto ni links externos)
    if (!href || href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    isScrollingToSection = true;
    const top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
    // Liberar el flag después de que termine el scroll (~700ms)
    setTimeout(() => { isScrollingToSection = false; }, 700);
  });
}


/* ============================================================
   initCatnavTooltips — tooltips con cantidad de cursos
============================================================ */
function initCatnavTooltips() {
  const counts = {
    cajas:7, frescos1:8, frescos2:3, elaborados:1, 'seg-higiene':2,
    salon:5, mantenimiento:6, medico:1, calidad:4, 'coto-digital':5,
    'seg-info':1, flota:1, 'no-alimentos':7, administracion:9,
    rrhh:8, gestion:4, atencion:1, 'adm-finanzas':3, seguridad:4, zonae:4
  };
  document.querySelectorAll('#catnav-scroll a[href^="#"]').forEach(a => {
    const id = a.getAttribute('href').slice(1);
    if (counts[id]) a.title = `${counts[id]} cursos`;
  });
}


/* ============================================================
   INICIALIZACIÓN
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCursor();
  initParallax();
  initConfetti();
  initModal();
  initSearch();
  initCatnav();
  initNavActive();
  initAnimations();
  initScroll();
  initSmoothScroll();
  initCatnavTooltips();
});
