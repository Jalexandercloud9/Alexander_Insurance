// ============================================
// Services Page
// ============================================

function ServicesPage() {
  const services = SiteData.services;

  const sectionsHTML = services.map((s, i) => {
    const reverse = i % 2 !== 0 ? ' reverse' : '';

    const benefitsHTML = s.benefits.map(b => `
      <div class="focus-item">
        <div class="focus-check"><i class="bi bi-check2"></i></div>
        <p>${b}</p>
      </div>
    `).join('');

    const carriersHTML = s.carriers.map(c =>
      `<span class="carrier-badge">${c}</span>`
    ).join('');

    const descHTML = s.fullDesc.map(p => `<p>${p}</p>`).join('');

    const videoHTML = s.id === 'life' ? `
          <div class="video-wrapper" style="margin-top:24px;">
            <video class="lazy-video" muted loop playsinline controls preload="metadata">
              <source src="46BA8CD5-EB17-4287-B4F7-EECF3709E65B.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
    ` : '';

    return `
      <div class="service-detail${reverse}" id="service-${s.id}">
        <div>
          <h2>${s.title}</h2>
          ${descHTML}
          <div class="carrier-list">${carriersHTML}</div>
          ${videoHTML}
          <div style="margin-top:24px;">
            <a href="#schedule" class="btn btn-primary">Get a Free Quote</a>
          </div>
        </div>
        <div>
          <ul class="focus-list" style="list-style:none;">
            ${benefitsHTML}
          </ul>
        </div>
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
