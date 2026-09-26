const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.btn-add').forEach((button) => {
  button.addEventListener('click', () => {
    const original = button.textContent;
    button.textContent = 'Agregado ✓';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
    }, 1500);
  });
});

// ---------- Quick view modal ----------

const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewModal = document.getElementById('quickViewModal');
const quickViewClose = document.getElementById('quickViewClose');
const quickViewPhoto = document.getElementById('quickViewPhoto');
const quickViewTitle = document.getElementById('quickViewTitle');
const quickViewDesc = document.getElementById('quickViewDesc');
const quickViewPrice = document.getElementById('quickViewPrice');

function openQuickView(button) {
  quickViewTitle.textContent = button.dataset.product;
  quickViewDesc.textContent = button.dataset.desc;
  quickViewPrice.textContent = button.dataset.price;
  quickViewPhoto.style.background = getComputedStyle(
    button.closest('.product-card').querySelector('.product-photo')
  ).backgroundColor;

  quickViewOverlay.hidden = false;
}

function closeQuickView() {
  quickViewOverlay.hidden = true;
}

document.querySelectorAll('.btn-quickview').forEach((button) => {
  button.addEventListener('click', () => openQuickView(button));
});

quickViewClose.addEventListener('click', closeQuickView);

quickViewOverlay.addEventListener('click', (event) => {
  if (event.target === quickViewOverlay) {
    closeQuickView();
  }
});
