// ============================================
// Schedule Page
// ============================================

function SchedulePage() {
  const brand = SiteData.brand;

  return `
    <!-- PAGE HERO -->
    <section class="page-hero text-center">
      <div class="container">
        <span class="section-label">Book a Consultation</span>
        <h1>Schedule a Call</h1>
        <p>Pick a time that works for you. A free, no-obligation conversation about your insurance and financial goals.</p>
      </div>
    </section>

    <!-- CALENDLY EMBED -->
    <section class="calendly-section">
      <div class="container">
        <div class="calendly-embed-wrap">
          <!-- CUSTOMIZE: Replace the URL below with your real Calendly link -->
          <iframe
            src="${brand.calendlyUrl}"
            width="100%"
            height="100%"
            frameborder="0"
            style="min-height:680px; border:none;"
            title="Schedule a call with Roland Alexander"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- FALLBACK CTA -->
    <section class="section text-center">
      <div class="container">
        <span class="section-label">Prefer to Call?</span>
        <h2 class="section-title">Reach Out Directly</h2>
        <p class="section-subtitle">If you prefer a phone call or email, we are always available.</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
          <a href="tel:${brand.phone}" class="btn btn-primary"><i class="bi bi-telephone" style="margin-right:8px;"></i>${brand.phone}</a>
          <a href="mailto:${brand.email}" class="btn btn-outline-dark"><i class="bi bi-envelope" style="margin-right:8px;"></i>Send Email</a>
        </div>
      </div>
    </section>
  `;
}
