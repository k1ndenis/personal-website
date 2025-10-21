const searchInput = document.getElementById('search-input');
const allCards = document.querySelectorAll('.row .card');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    allCards.forEach(card => {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const author = card.querySelector('.card-text')?.textContent.toLowerCase() || '';

      if (title.includes(query) || author.includes(query)) {
        card.parentElement.style.display = '';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  });
}