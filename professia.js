document.addEventListener('DOMContentLoaded', function () {
  const categoryFilter = document.getElementById('categoryFilter');
  const subjectFilter = document.getElementById('subjectFilter');
  const cards = document.querySelectorAll('.card');

  function filterCards() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const selectedSubject = subjectFilter.value.toLowerCase();

    cards.forEach(card => {
      const category = card.getAttribute('data-category').toLowerCase();
      const subject = card.getAttribute('data-subjects').toLowerCase();

      const matchesCategory = selectedCategory === 'all' || category.includes(selectedCategory);
      const matchesSubject = selectedSubject === 'all' || subject.includes(selectedSubject);

      if (matchesCategory && matchesSubject) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  categoryFilter.addEventListener('change', filterCards);
  subjectFilter.addEventListener('change', filterCards);

  // Мобильді мәзір батырмасы
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});
