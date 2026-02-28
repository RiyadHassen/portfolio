// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.background = 'rgba(13,13,13,0.97)';
  } else {
    nav.style.background = 'rgba(13,13,13,0.85)';
  }
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${(Array.from(
        entry.target.parentElement.querySelectorAll('.reveal')
      ).indexOf(entry.target)) * 80}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Smooth active nav link highlighting
const sections = document.querySelectorAll('section[id], #home');
const navItems = document.querySelectorAll('.nav__links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--amber)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
