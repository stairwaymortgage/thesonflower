/* ═══════════════════════════════════════════════
   THESONFLOWER.COM — MAIN JS
   All interactive logic lives here.
═══════════════════════════════════════════════ */

// Mobile menu toggle
function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var btn  = document.getElementById('hamburger');
  if (menu) menu.classList.toggle('open');
  if (btn)  btn.classList.toggle('open');
}

// Waitlist modal
function openModal() {
  var el = document.getElementById('modalOverlay');
  if (el) el.classList.add('open');
}
function closeModal() {
  var el = document.getElementById('modalOverlay');
  if (el) el.classList.remove('open');
}

// Blog filter buttons (blog index page)
document.addEventListener('DOMContentLoaded', function() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
});
