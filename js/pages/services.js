// ============================================
// Services Page
// ============================================

function ServicesPage() {
  const services = SiteData.services;

  const sectionsHTML = services.map((s, i) => {
    const benefitsHTML = s.benefits.map(b => `
      <div class="benefit-item">
        <i class="bi bi-check-circle"></i>
        <span>${b}</span>
      </div>
    `).join('');

    const carriersHTML = s.carriers.map(c =>
      `<span class="carrier-badge">${c}</span>`
    ).join('');

    const videoHTML = s.id === 'life' ? `
      <div class="video-wrapper" style="margin-top:16px;">
        <video class="lazy-video" muted loop playsinline controls preload="metadata">
          <source src="46BA8CD5-EB17-4287-B4F7-EECF3709E65B.mov" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    ` : '';

    return `
      <div class="service-section" id="service-${s.id}">
        <h2>${s.title}</h2>
        <p class="service-desc">${s.shortDesc}</p>
        <div class="carrier-list">${carriersHTML}</div>
        ${videoHTML}
        <div class="benefits-grid">
          ${benefitsHTML}
        </div>
        <a href="#schedule" class="btn btn-primary">Get a Free Quote</a>
      </div>
    `;
  }).join('');

  return `
    <!-- PAGE HERO -->
    <section class="page-hero text-center">
      <div class="container">
        <span class="section-label">Our Services</span>
        <h1>Insurance & Financial Solutions</h1>
        <p>Comprehensive coverage designed to protect your family, your assets, and your future.</p>
      </div>
    </section>

    <!-- SERVICE DETAILS -->
    <section class="section">
      <div class="container">
        ${sectionsHTML}
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="cta-band">
      <div class="container">
        <h2>Find the Right Coverage for You</h2>
        <p>Schedule a free consultation and let us build a protection plan tailored to your needs.</p>
        <a href="#schedule" class="btn btn-gold">Schedule a Call</a>
      </div>
    </section>
  `;
}
