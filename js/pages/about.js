// ============================================
// About Page
// ============================================

function AboutPage() {
  const brand = SiteData.brand;
  const about = SiteData.aboutFull;

  const bioHTML = about.bio.map(p => `<p>${p}</p>`).join('');

  const whoListHTML = about.whoIWorkWith.map(item =>
    `<li class="who-item">${item}</li>`
  ).join('');

  return `
    <!-- PAGE HERO -->
    <section class="page-hero text-center">
      <div class="container">
        <span class="section-label">${about.label}</span>
        <h1>${about.title}</h1>
        <p>${about.subtitle}</p>
      </div>
    </section>

    <!-- ABOUT CONTENT -->
    <section class="section">
      <div class="container">
        <div class="about-full">
          <div>
            <img src="${brand.profilePhoto}" alt="${brand.agent}" class="about-sidebar-photo">
          </div>
          <div class="about-content">
            <h2>My Story</h2>
            ${bioHTML}

            <h2>My Mission</h2>
            <blockquote class="about-quote">${about.missionStatement}</blockquote>

            <h2>Who I Work With</h2>
            <ul class="who-list">
              ${whoListHTML}
            </ul>

            <div style="margin-top:36px;">
              <a href="#schedule" class="btn btn-primary">Schedule a Free Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="cta-band">
      <div class="container">
        <h2>Let's Build Your Financial Future</h2>
        <p>Ready to take the first step? Schedule a call and let's discuss how to protect and grow what matters most.</p>
        <a href="#schedule" class="btn btn-gold">Schedule a Call</a>
      </div>
    </section>
  `;
}
