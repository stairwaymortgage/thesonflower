/* ═══════════════════════════════════════════════
   THESONFLOWER.COM — SHARED COMPONENTS
   Edit the NAV or FOOTER here and every page updates.
═══════════════════════════════════════════════ */

const LOGO_SVG = `
<svg width="56" height="56" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <g fill="#F2A800">
    <ellipse cx="32" cy="10" rx="4" ry="9"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(30 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(60 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(90 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(120 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(150 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(180 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(210 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(240 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(270 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(300 32 32)"/>
    <ellipse cx="32" cy="10" rx="4" ry="9" transform="rotate(330 32 32)"/>
  </g>
  <circle cx="32" cy="32" r="11" fill="#2C1654"/>
  <circle cx="32" cy="32" r="8" fill="#1A0A2E"/>
  <circle cx="32" cy="32" r="1.5" fill="#F2A800"/>
</svg>`;

const NAV_HTML = `
<div class="announce-bar" id="announceBar">
  <div class="announce-text"><strong>Not yet published.</strong> The series is almost ready — join the waitlist for early access and discounted launch pricing.</div>
  <a class="announce-cta" href="/quiz">Join the waitlist →</a>
  <button class="announce-close" onclick="document.getElementById('announceBar').style.display='none'">×</button>
</div>
<nav class="nav">
  <a class="nav-logo" href="/">
    ${LOGO_SVG}
    <div><div class="logo-title">The SonFlower</div><div class="logo-sub">and the Bear</div></div>
  </a>
  <div class="nav-links">
    <div class="nav-dropdown">
      <div class="nav-dropdown-trigger">The Books <span class="nav-dropdown-arrow">▾</span></div>
      <div class="nav-dropdown-menu">
        <a class="dropdown-item" href="/nine-doors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
            <g fill="#F2A800">
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5"/>
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(45 12 12)"/>
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(90 12 12)"/>
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(135 12 12)"/>
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(180 12 12)"/>
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(225 12 12)"/>
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(270 12 12)"/>
              <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(315 12 12)"/>
            </g>
            <circle cx="12" cy="12" r="3.5" fill="#2C1654"/>
          </svg>
          <div><div class="di-title">The Nine Doors</div><div class="di-sub">The airport book</div></div>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="/series">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
            <rect x="4" y="5" width="3.5" height="14" rx="0.5" fill="#F2A800"/>
            <rect x="9" y="7" width="3.5" height="12" rx="0.5" fill="#9B7FD4"/>
            <rect x="14" y="4" width="3.5" height="15" rx="0.5" fill="#F2A800"/>
            <rect x="4.5" y="8" width="2.5" height="0.5" fill="#1A0A2E"/>
            <rect x="14.5" y="7" width="2.5" height="0.5" fill="#1A0A2E"/>
          </svg>
          <div><div class="di-title">The Series</div><div class="di-sub">13-book spiritual epic</div></div>
        </a>
      </div>
    </div>
    <a class="nav-link" href="/community">Community</a>
    <a class="nav-link" href="/blog">Blog</a>
    <a class="nav-link" href="/about">About</a>
    <a class="nav-link-donate" href="/donate">Donate</a>
  </div>
  <a class="nav-cta" href="/quiz">Find your door →</a>
  <button class="hamburger" id="hamburger" onclick="toggleMobileMenu()" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a class="mobile-link" href="/">Home</a>
  <div class="mobile-divider"></div>
  <div class="mobile-section-label">The Books</div>
  <a class="mobile-link indent" href="/nine-doors">The Nine Doors</a>
  <a class="mobile-link indent" href="/series">The Series</a>
  <div class="mobile-divider"></div>
  <a class="mobile-link" href="/community">Community</a>
  <a class="mobile-link" href="/blog">Blog</a>
  <a class="mobile-link" href="/about">About</a>
  <a class="mobile-link" href="/donate">Donate</a>
  <a class="mobile-link" href="/contact">Contact</a>
  <div style="padding:1.25rem 1.5rem;">
    <a class="mobile-cta" href="/quiz">Find your door →</a>
  </div>
</div>
<div class="strip"></div>`;

const BANNER_HTML = `
<div class="hero-banner" role="img" aria-label="The SonFlower and the Bear hero banner"></div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-logo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
      <g fill="#F2A800">
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5"/>
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(45 12 12)"/>
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(135 12 12)"/>
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(180 12 12)"/>
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(225 12 12)"/>
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(270 12 12)"/>
        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" transform="rotate(315 12 12)"/>
      </g>
      <circle cx="12" cy="12" r="3.5" fill="#2C1654"/>
    </svg> thesonflower.com</div>
    <div class="footer-links">
      <a class="footer-link" href="/series">The Series</a>
      <a class="footer-link" href="/nine-doors">The Nine Doors</a>
      <a class="footer-link" href="/community">Community</a>
      <a class="footer-link" href="/blog">Blog</a>
      <a class="footer-link" href="/about">About</a>
      <a class="footer-link" href="/donate">Donate</a>
      <a class="footer-link" href="/contact">Contact</a>
    </div>
    <div class="footer-copy">© 2026 James Blackburn · Fort Lauderdale, Florida · thesonflower.com</div>
  </div>
</footer>`;

const MODAL_HTML = `
<div class="modal-overlay" id="modalOverlay" onclick="if(event.target===this)closeModal()">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">×</button>
    <div class="modal-cherry"></div>
    <div class="modal-eyebrow">Coming soon</div>
    <h2 class="modal-title">Be first through<br>the <span>door.</span></h2>
    <p class="modal-body">The series isn't published yet — but it's almost ready. Join the waitlist and we'll reach out the moment it's available.</p>
    <div class="modal-perks">
      <div class="modal-perk"><div class="perk-dot"></div>First notification when the books drop</div>
      <div class="modal-perk"><div class="perk-dot"></div>Discounted launch pricing — waitlist only</div>
      <div class="modal-perk"><div class="perk-dot"></div>Early access to the Golden Thread community</div>
      <div class="modal-perk"><div class="perk-dot"></div>Behind-the-scenes updates from Jim</div>
    </div>
    <input class="modal-input" type="email" placeholder="Your email address"/>
    <button class="modal-submit">Join the waitlist →</button>
    <div class="modal-note">No spam. No toll booths. Unsubscribe any time.</div>
  </div>
</div>`;

// Inject nav and footer into placeholders
document.addEventListener('DOMContentLoaded', function() {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;

  const bannerEl = document.getElementById('banner-placeholder');
  if (bannerEl) bannerEl.innerHTML = BANNER_HTML;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  const modalEl = document.getElementById('modal-placeholder');
  if (modalEl) modalEl.innerHTML = MODAL_HTML;
});
