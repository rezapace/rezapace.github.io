// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Language init + toggle
applyLanguage(getInitialLanguage());

const langToggle = document.getElementById('langToggle');
const langToggleMobile = document.getElementById('langToggleMobile');

const toggleLanguage = () => {
  const current = document.documentElement.lang === 'id' ? 'id' : 'en';
  const next = current === 'en' ? 'id' : 'en';
  applyLanguage(next);
};

langToggle.addEventListener('click', toggleLanguage);
langToggleMobile.addEventListener('click', toggleLanguage);

// Navbar scroll state
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal-on-scroll animation
const revealTargets = document.querySelectorAll(
  '.about-grid, .timeline-item, .skill-card, .cert-card, .contact-card'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));

// Bottom tab bar: active section highlight (mobile)
const tabbarItems = document.querySelectorAll('.tabbar-item');
const sectionIds = ['home', 'about', 'experience', 'skills', 'certifications', 'contact'];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const setActiveTab = (id) => {
  tabbarItems.forEach((item) => {
    item.classList.toggle('active', item.getAttribute('data-section') === id);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id);
      }
    });
  },
  { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));
setActiveTab('home');
