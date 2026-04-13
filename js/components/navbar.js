// ============================================
// Navbar Component
// ============================================

const Navbar = (function () {
  function render() {
    const currentHash = window.location.hash || '#home';
    const nav = SiteData.nav;
    const brand = SiteData.brand;

    const linksHTML = nav.map(item => {
      const isActive = currentHash === item.hash ? ' active' : '';
      const ctaClass = item.cta ? ' nav-cta' : '';
      return `<li><a href="${item.hash}" class="${ctaClass}${isActive}">${item.label}</a></li>`;
    }).join('');

    document.getElementById('navbar').innerHTML = `
      <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="nav-inner">
          <a href="#home" class="nav-logo" aria-label="Alexander Insurance Group — Home">
            <img src="${brand.logo}" alt="Alexander Insurance Group" class="nav-logo-img">
            <div class="nav-logo-text">
              <span class="nav-logo-name">Alexander Insurance Group</span>
              <span class="nav-logo-sub">Founded by Roland Alexander</span>
            </div>
          </a>

          <ul class="nav-links">
            ${linksHTML}
          </ul>

          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    `;

    // Mobile toggle
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
        const spans = toggle.querySelectorAll('span');
        if (open) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
      });

      // Close menu on link click
      links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        });
      });
    }
  }

  return { render };
})();
