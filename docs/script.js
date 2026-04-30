/* ============================================================
   Digital Money Transformation — script.js
   Pure vanilla JS. No dependencies.
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Navigation Toggle ──────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('is-open', !expanded);
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
      }
    });
  }

  /* ── Active Section Highlight in Nav ───────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navAnchorLinks.length) {
    const observerOptions = {
      rootMargin: '-60px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navAnchorLinks.forEach(function (a) {
            a.classList.remove('is-active');
            if (a.getAttribute('href') === '#' + entry.target.id) {
              a.classList.add('is-active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ── Fade-in on scroll ──────────────────────────────────── */
  const fadeEls = document.querySelectorAll('.card, .strategy-note, .faq-item');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    // Add CSS animation class
    fadeEls.forEach(function (el) {
      el.classList.add('fade-ready');
    });

    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Inject animation CSS dynamically so it only applies when JS runs
    const style = document.createElement('style');
    style.textContent =
      '.fade-ready { opacity: 0; transform: translateY(16px); transition: opacity 0.45s ease, transform 0.45s ease; }' +
      '.fade-ready.fade-in { opacity: 1; transform: none; }';
    document.head.appendChild(style);

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  /* ── Smooth scroll for in-page anchors ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping
        history.pushState(null, '', '#' + targetId);
      }
    });
  });

})();
