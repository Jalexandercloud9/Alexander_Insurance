// ============================================
// Home Page
// ============================================

function HomePage() {
  const hero = SiteData.hero;
  const brand = SiteData.brand;
  const services = SiteData.services;
  const trust = SiteData.trustItems;
  const mission = SiteData.mission;
  const about = SiteData.aboutPreview;
  const contactForm = SiteData.contactForm;
  const hours = SiteData.businessHours;

  // Business hours rows
  const hoursHTML = hours.map(h => `
    <div class="hours-row">
      <span class="hours-day">${h.day}</span>
      <span class="hours-time">${h.hours}</span>
    </div>
  `).join('');

  // Trust strip
  const trustHTML = trust.map(item => `
    <div class="trust-item">
      <i class="${item.icon}"></i>
      <span>${item.text}</span>
    </div>
  `).join('');

  // Service list rows
  const cardsHTML = services.map(s => `
    <a href="#services/${s.id}" class="service-row">
      <div class="service-row-icon"><i class="${s.icon}"></i></div>
      <span class="service-row-title">${s.title}</span>
      <i class="bi bi-arrow-right service-row-arrow"></i>
    </a>
  `).join('');

  // Contact form options
  const optionsHTML = contactForm.serviceOptions.map(opt =>
    `<option value="${opt}">${opt}</option>`
  ).join('');

  return `
    <!-- HERO -->
    <section class="hero" style="background-image: url('${brand.heroImage}');">
      <div class="hero-container">
        <div class="hero-inner">
          <h1 class="hero-title">${hero.title}</h1>
          <p class="hero-desc">${hero.description}</p>
          <div class="hero-actions">
            <a href="${hero.ctaPrimary.hash}" class="btn btn-gold">${hero.ctaPrimary.text}</a>
            <a href="${hero.ctaSecondary.hash}" class="btn btn-outline">${hero.ctaSecondary.text}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST STRIP -->
    <section class="trust-strip">
      <div class="trust-strip-inner">
        ${trustHTML}
      </div>
    </section>

    <!-- SERVICES OVERVIEW -->
    <section class="section">
      <div class="container text-center">
        <span class="section-label">What We Offer</span>
        <h2 class="section-title">Insurance & Financial Solutions</h2>
        <p class="section-subtitle">From life insurance and wealth building to home, auto, and commercial coverage — we protect what matters most.</p>
        <div class="service-list">
          ${cardsHTML}
        </div>
      </div>
    </section>

    <!-- MISSION -->
    <section class="mission-section">
      <div class="container">
        <span class="section-label">${mission.label}</span>
        <h2 class="section-title">${mission.title}</h2>
        <p>${mission.text}</p>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="video-section">
      <div class="container text-center">
        <span class="section-label">Financial Independence</span>
        <h2 class="section-title">See How IUL Can Change Your Future</h2>
        <p class="section-subtitle">Learn how Indexed Universal Life insurance builds tax-free wealth while protecting your family.</p>
        <div class="video-wrapper">
          <video muted loop playsinline controls preload="metadata">
            <source src="${brand.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>

    <!-- CONTACT FORM -->
    <section class="section section-alt" id="home-contact">
      <div class="container">
        <div class="contact-grid">
          <div>
            <span class="section-label">Get in Touch</span>
            <h2 class="section-title">Let's Talk About Your Future</h2>
            <p style="margin-bottom:32px;">Whether you have questions about life insurance, need a quote, or want to explore your financial options — we are here to help.</p>

            <div class="contact-block">
              <div class="contact-block-icon"><i class="bi bi-telephone"></i></div>
              <div class="contact-block-text">
                <strong>Phone</strong>
                <a href="tel:${brand.phone}">${brand.phone}</a>
              </div>
            </div>

            <div class="contact-block">
              <div class="contact-block-icon"><i class="bi bi-printer"></i></div>
              <div class="contact-block-text">
                <strong>Fax</strong>
                <span>${brand.fax}</span>
              </div>
            </div>

            <div class="contact-block">
              <div class="contact-block-icon"><i class="bi bi-envelope"></i></div>
              <div class="contact-block-text">
                <strong>Email</strong>
                <a href="mailto:${brand.email}">${brand.email}</a>
              </div>
            </div>

            <div class="contact-block">
              <div class="contact-block-icon"><i class="bi bi-geo-alt"></i></div>
              <div class="contact-block-text">
                <strong>Location</strong>
                <span>${brand.address}</span>
              </div>
            </div>

            <div class="contact-block">
              <div class="contact-block-icon"><i class="bi bi-clock"></i></div>
              <div class="contact-block-text">
                <strong>Hours</strong>
                <div class="hours-list">
                  ${hoursHTML}
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrap">
            <h2>${contactForm.title}</h2>
            <form id="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-name">Full Name</label>
                  <input type="text" id="cf-name" name="name" required placeholder="Your name">
                </div>
                <div class="form-group">
                  <label for="cf-email">Email</label>
                  <input type="email" id="cf-email" name="email" required placeholder="you@email.com">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-phone">Phone</label>
                  <input type="tel" id="cf-phone" name="phone" placeholder="(555) 000-0000">
                </div>
                <div class="form-group">
                  <label for="cf-service">Service Interest</label>
                  <select id="cf-service" name="service">
                    <option value="">Select a service...</option>
                    ${optionsHTML}
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="cf-message">Message</label>
                <textarea id="cf-message" name="message" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="cta-band">
      <div class="container">
        <h2>Ready to Secure Your Future?</h2>
        <p>Schedule a free consultation to discover how we can protect your family and build lasting wealth together.</p>
        <a href="#schedule" class="btn btn-gold">Schedule a Call</a>
      </div>
    </section>
  `;
}
