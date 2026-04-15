// ============================================
// Alexander Insurance Group — SPA Router
// ============================================

const App = (function () {
  const routes = {
    '#home': HomePage,
    '#services': ServicesPage,
    '#schedule': SchedulePage,
  };

  function navigate(hash) {
    const target = hash || '#home';
    const page = routes[target];
    if (!page) return navigate('#home');

    const content = document.getElementById('page-content');
    content.innerHTML = page();

    // Re-render navbar to update active state
    Navbar.render();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Init page-specific behavior
    initPageScripts(target);
  }

  function initPageScripts(hash) {
    // Contact form handler
    if (hash === '#contact' || hash === '#home') {
      const form = document.getElementById('contact-form');
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]');
          const original = btn.textContent;
          btn.disabled = true;
          btn.textContent = 'Sending...';
          setTimeout(() => {
            btn.textContent = 'Message Sent!';
            btn.classList.add('btn-gold');
            form.reset();
            setTimeout(() => {
              btn.disabled = false;
              btn.textContent = original;
              btn.classList.remove('btn-gold');
            }, 3000);
          }, 1000);
        });
      }
    }

    // Video: only play when visible on screen
    const video = document.querySelector('.video-wrapper video');
    if (video) {
      video.pause();
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        }, { threshold: 0.35 });
        observer.observe(video);
      } else {
        // Fallback: play immediately
        video.play().catch(() => {});
      }
    }
  }

  function init() {
    // Render navbar and footer once
    Navbar.render();
    Footer.render();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      const nav = navbar.querySelector('.navbar');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      navigate(window.location.hash);
    });

    // Initial route
    navigate(window.location.hash || '#home');
  }

  // Boot
  document.addEventListener('DOMContentLoaded', init);

  return { navigate };
})();
