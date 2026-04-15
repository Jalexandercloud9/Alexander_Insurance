// ============================================
// Footer Component
// ============================================

const Footer = (function () {
  function render() {
    const brand = SiteData.brand;
    const footer = SiteData.footer;

    const quickLinksHTML = footer.quickLinks.map(link =>
      `<li><a href="${link.hash}">${link.label}</a></li>`
    ).join('');

    document.getElementById('footer-root').innerHTML = `
      <footer>
        <div class="footer-grid">
          <div>
            <div class="footer-brand-row">
              <img src="${brand.logo}" alt="${brand.name}" class="footer-brand-logo">
              <span class="footer-brand-name">${brand.name}</span>
            </div>
            <p class="footer-tagline">${footer.tagline}</p>
          </div>

          <div>
            <p class="footer-heading">Quick Links</p>
            <ul class="footer-links">
              ${quickLinksHTML}
            </ul>
          </div>

          <div>
            <p class="footer-heading">Contact</p>
            <div class="footer-contact-line">
              <i class="bi bi-telephone"></i>
              <a href="tel:${brand.phone}">${brand.phone}</a>
            </div>
            <div class="footer-contact-line">
              <i class="bi bi-envelope"></i>
              <a href="mailto:${brand.email}">${brand.email}</a>
            </div>
            <div class="footer-contact-line">
              <i class="bi bi-geo-alt"></i>
              <span>${brand.address}</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-inner">
            <span>&copy; ${new Date().getFullYear()} ${brand.name}. All rights reserved.</span>
            <span>${brand.tagline}</span>
          </div>
        </div>

        <div class="footer-legal">
          ${footer.legal}
        </div>
      </footer>
    `;
  }

  return { render };
})();
