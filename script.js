/* ============================================================
   ALEX MORGAN — PORTFOLIO SCRIPTS
   script.js
   ============================================================ */


/* ══════════════════════════════════════════════════════════
   1. THEME TOGGLE  (Dark ↔ Light)
══════════════════════════════════════════════════════════ */

const themeToggleBtn = document.getElementById('themeToggle');
const htmlEl         = document.documentElement;
const themeIcon      = themeToggleBtn.querySelector('i');

/**
 * Apply a theme and persist it to localStorage.
 * @param {boolean} isDark - true for dark mode, false for light mode
 */
function setTheme(isDark) {
  if (isDark) {
    htmlEl.classList.add('dark');
    htmlEl.classList.remove('light');
    themeIcon.className = 'fas fa-sun';
  } else {
    htmlEl.classList.add('light');
    htmlEl.classList.remove('dark');
    themeIcon.className = 'fas fa-moon';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Toggle on button click
themeToggleBtn.addEventListener('click', () => {
  setTheme(!htmlEl.classList.contains('dark'));
});

// Apply saved preference on page load (default: dark)
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme !== 'light');


/* ══════════════════════════════════════════════════════════
   2. NAVBAR — frosted glass on scroll
══════════════════════════════════════════════════════════ */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});


/* ══════════════════════════════════════════════════════════
   3. MOBILE MENU TOGGLE
══════════════════════════════════════════════════════════ */

const mobileMenu = document.getElementById('mobileMenu');

/**
 * Toggle the mobile navigation overlay.
 * Called via inline onclick in the HTML hamburger button.
 */
function toggleMenu() {
  mobileMenu.classList.toggle('open');
}

// Expose to global scope (called from HTML)
window.toggleMenu = toggleMenu;


/* ══════════════════════════════════════════════════════════
   4. TYPING ANIMATION (Hero Section)
══════════════════════════════════════════════════════════ */

const typingWords = [
  'actionable insights',
  'predictive models',
  'compelling stories',
  'real-world impact',
  'intelligent systems',
];

let wordIndex    = 0;   // index of current word
let charIndex    = 0;   // current character position
let isDeleting   = false;

const typedWordEl = document.getElementById('typedWord');

/**
 * Recursive typing function.
 * Types out each word, pauses, then deletes it before moving to the next.
 */
function typeNextChar() {
  const currentWord = typingWords[wordIndex];

  if (!isDeleting) {
    // Typing forward
    typedWordEl.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      // Word complete — pause before deleting
      isDeleting = true;
      setTimeout(typeNextChar, 1600);
      return;
    }
  } else {
    // Deleting backward
    typedWordEl.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex  = (wordIndex + 1) % typingWords.length;
    }
  }

  const delay = isDeleting ? 40 : 80;
  setTimeout(typeNextChar, delay);
}

// Kick off typing animation
typeNextChar();


/* ══════════════════════════════════════════════════════════
   5. SCROLL REVEAL — IntersectionObserver
══════════════════════════════════════════════════════════ */

const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  {
    threshold:   0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach((el) => revealObserver.observe(el));


/* ══════════════════════════════════════════════════════════
   6. CONTACT FORM — Simulated Submit
══════════════════════════════════════════════════════════ */

/**
 * Handle contact form submission.
 * Shows a success message for 4 seconds.
 * Called via inline onclick in the HTML button.
 * @param {Event} e
 */
function handleFormSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById('formMsg');
  successMsg.style.display = 'block';
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 4000);
}

// Expose to global scope (called from HTML)
window.handleFormSubmit = handleFormSubmit;


/* ══════════════════════════════════════════════════════════
   7. SMOOTH SCROLL — all internal anchor links
══════════════════════════════════════════════════════════ */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
