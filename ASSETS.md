# Asset Placeholders — Alexander Insurance Group

All placeholder areas are clearly marked with comments in the HTML files.
Drop your files into the paths below and uncomment the relevant HTML blocks.

## Logo
- **File:** `assets/images/logo.png` (or `.svg`)
- **Used in:** Every page navbar and footer
- **Swap:** Replace the `<div class="nav-logo-placeholder">` block with:
  ```html
  <img src="assets/images/logo.png" alt="Alexander Insurance Group" class="nav-logo-img" />
  ```

## Profile Photo (Roland Alexander)
- **File:** `assets/images/roland-alexander.jpg`
- **Used in:** `index.html` hero, `index.html` about preview, `about.html` sidebar
- **Swap:** Replace `<div class="hero-photo-placeholder">` / `<div class="about-photo-placeholder">` / `<div class="about-sidebar-placeholder">` with:
  ```html
  <img src="assets/images/roland-alexander.jpg" alt="Roland Alexander" class="hero-photo" />
  ```

## Video (Life Insurance / Financial Strategy)
- **File:** `assets/video/life-insurance-intro.mp4`
- **Used in:** `index.html` video section, `services.html` video section
- **Optional poster image:** `assets/images/video-poster.jpg`
- **Swap:** Replace `<div class="video-placeholder">` with:
  ```html
  <video controls poster="assets/images/video-poster.jpg">
    <source src="assets/video/life-insurance-intro.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  ```

## Calendly (Schedule Page)
- **File:** No file needed — just your Calendly URL
- **Used in:** `schedule.html`
- **Steps:**
  1. Log in at calendly.com
  2. Copy your event scheduling URL (e.g. `https://calendly.com/your-name/free-review`)
  3. In `schedule.html`, uncomment the `<div class="calendly-inline-widget">` block
  4. Replace `YOUR-CALENDLY-URL` with your actual link
  5. Remove the placeholder `<div class="calendly-embed-wrap">` block

## Google Maps (Contact Page)
- **Used in:** `contact.html`
- **Steps:**
  1. Go to Google Maps, search your address
  2. Click Share → Embed a map → Copy HTML
  3. Replace the map placeholder `<div>` in `contact.html` with the `<iframe>` embed code
