// Filtering for Pedicraft (Footwear)
function filterFootwear(gender) {
  const cards = document.querySelectorAll('#pedicraft-products .product-card');
  cards.forEach(card => {
    if (gender === 'all' || card.dataset.gender === gender) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Filtering for Essentials
function filterEssentials(type) {
  const cards = document.querySelectorAll('#essentials-products .product-card');
  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Simple form handler (prevents page reload)
document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting Prestige Pedicraft!');
  this.reset();
});