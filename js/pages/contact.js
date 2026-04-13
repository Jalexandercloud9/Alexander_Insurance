// ============================================
// Contact Page
// ============================================

function ContactPage() {
  const brand = SiteData.brand;
  const contactForm = SiteData.contactForm;

  const optionsHTML = contactForm.serviceOptions.map(opt =>
    `<option value="${opt}">${opt}</option>`
  ).join('');

  return `
    <!-- PAGE HERO -->
    <section class="page-hero text-center">
      <div class="container">
        <span class="section-label">Contact Us</span>
        <h1>Get in Touch</h1>
        <p>Have a question or ready to get started? Reach out and we will get back to you promptly.</p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div>
            <h2 style="font-size:1.35rem;margin-bottom:24px;">Contact Information</h2>

            <div class="contact-block">
              <div class="contact-block-icon"><i class="bi bi-telephone"></i></div>
              <div class="contact-block-text">
                <strong>Phone</strong>
                <a href="tel:${brand.phone}">${brand.phone}</a>
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
                <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div style="margin-top:20px;">
              <a href="#schedule" class="btn btn-primary">Schedule a Call Instead</a>
            </div>
          </div>

          <div class="contact-form-wrap">
            <h2>${contactForm.title}</h2>
            <form id="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="ct-name">Full Name</label>
                  <input type="text" id="ct-name" name="name" required placeholder="Your name">
                </div>
                <div class="form-group">
                  <label for="ct-email">Email</label>
                  <input type="email" id="ct-email" name="email" required placeholder="you@email.com">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="ct-phone">Phone</label>
                  <input type="tel" id="ct-phone" name="phone" placeholder="(555) 000-0000">
                </div>
                <div class="form-group">
                  <label for="ct-service">Service Interest</label>
                  <select id="ct-service" name="service">
                    <option value="">Select a service...</option>
                    ${optionsHTML}
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="ct-message">Message</label>
                <textarea id="ct-message" name="message" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
