/**
 * Portfolio — Timo Baware Meres
 * Main interactions: loader, cursor, navbar, scroll reveal, dynamic content
 */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initActiveNav();
  renderSkills();
  renderProjects();
  setYear();
});

/* ----- Loader ----- */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });

  setTimeout(() => loader.classList.add('hidden'), 3000);
}

/* ----- Custom Cursor ----- */
function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = document.querySelectorAll('a, button, .skill-card, .project-card, .contact-card, .social-icon');
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

/* ----- Navbar ----- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menu.classList.toggle('hidden', !isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.querySelector('i').className = isOpen
      ? 'fa-solid fa-xmark text-slate-300'
      : 'fa-solid fa-bars text-slate-300';
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('i').className = 'fa-solid fa-bars text-slate-300';
    });
  });
}

/* ----- Scroll Reveal ----- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ----- Active Nav Link ----- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ----- Render Skills ----- */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid || typeof SKILLS === 'undefined') return;

  grid.innerHTML = SKILLS.map(
    (skill, i) => `
    <div class="skill-card reveal" style="transition-delay: ${(i % 4) * 0.05}s">
      <i class="${skill.icon}" style="color: ${skill.color}"></i>
      <span>${skill.name}</span>
    </div>
  `
  ).join('');

  grid.querySelectorAll('.reveal').forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  });
}

const COLAB_ICON = `<svg class="colab-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="#F9AB00" d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path fill="#E37400" d="M12 2v20l10-5V7L12 2z"/><path fill="#fff" opacity=".9" d="M7 9.5h6v1.5H9v1h3.5v1.5H7V9.5zm5 5H7V13h5v1.5z"/></svg>`;

const RAILWAY_ICON = `<svg class="railway-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="2.5" rx="1.25" fill="currentColor"/><rect x="3" y="10.75" width="18" height="2.5" rx="1.25" fill="currentColor"/><rect x="3" y="16.5" width="18" height="2.5" rx="1.25" fill="currentColor"/></svg>`;

function renderCodeButton(project) {
  const url = project.codeLink || '#';
  const label = project.codeLabel || 'GitHub';
  const isPlaceholder = !project.codeLink;
  const type = project.codeType || 'github';

  if (type === 'colab') {
    return `
      <a href="${url}" ${isPlaceholder ? '' : 'target="_blank" rel="noopener noreferrer"'} class="project-btn project-btn--colab" aria-label="${label} for ${project.title}${isPlaceholder ? ' (placeholder)' : ''}">
        ${COLAB_ICON}
        ${label}
      </a>`;
  }

  if (type === 'railway') {
    return `
      <a href="${url}" ${isPlaceholder ? '' : 'target="_blank" rel="noopener noreferrer"'} class="project-btn project-btn--railway" aria-label="${label} for ${project.title}${isPlaceholder ? ' (placeholder)' : ''}">
        ${RAILWAY_ICON}
        ${label}
      </a>`;
  }

  if (type === 'youtube') {
    return `
      <a href="${url}" ${isPlaceholder ? '' : 'target="_blank" rel="noopener noreferrer"'} class="project-btn project-btn--youtube" aria-label="${label} for ${project.title}${isPlaceholder ? ' (placeholder)' : ''}">
        <i class="fa-brands fa-youtube"></i>
        ${label}
      </a>`;
  }

  return `
    <a href="${url}" ${isPlaceholder ? '' : 'target="_blank" rel="noopener noreferrer"'} class="project-btn project-btn--github" aria-label="${label} for ${project.title}${isPlaceholder ? ' (placeholder)' : ''}">
      <i class="fa-brands fa-github"></i>
      ${label}
    </a>`;
}

function renderGithubButton(project) {
  if (!project.githubLink) return '';
  return `
    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn--github" aria-label="GitHub for ${project.title}">
      <i class="fa-brands fa-github"></i>
      GitHub
    </a>`;
}

/* ----- Render Projects ----- */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map(
    (project, i) => `
    <article class="project-card reveal ${i % 2 === 1 ? 'reveal-delay-1' : ''}">
      <div class="project-image ${project.image ? 'project-image--has-img' : ''}">
        ${
          project.image
            ? `<img src="${project.image}" alt="${project.imageAlt || project.title}" class="project-img" loading="lazy" />`
            : `<i class="${project.icon}"></i>
               <span>Project Image Placeholder</span>`
        }
      </div>
      <div class="p-6">
        <h3 class="font-display text-lg font-semibold text-white mb-2">${project.title}</h3>
        <div class="flex flex-wrap gap-2 mb-3">
          ${project.tech.map((t) => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <p class="text-slate-400 text-sm leading-relaxed mb-5">${project.description}</p>
        <div class="flex flex-wrap gap-3">
          ${renderCodeButton(project)}
          ${renderGithubButton(project)}
        </div>
      </div>
    </article>
  `
  ).join('');

  grid.querySelectorAll('.reveal').forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  });

  if (window.matchMedia('(pointer: fine)').matches) {
    const ring = document.getElementById('cursor-ring');
    grid.querySelectorAll('.project-card, .project-btn').forEach((el) => {
      el.addEventListener('mouseenter', () => ring?.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring?.classList.remove('hover'));
    });
  }
}

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
