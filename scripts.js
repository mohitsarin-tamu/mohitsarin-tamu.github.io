document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectEntries = document.querySelectorAll('.project-entry');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      projectEntries.forEach(entry => {
        const categories = entry.getAttribute('data-category').toLowerCase().split(' ');
        if (filter === 'all' || categories.includes(filter.toLowerCase())) {
          entry.style.display = 'flex';
        } else {
          entry.style.display = 'none';
        }
      });
    });
  });

  // Show all on initial load
  projectEntries.forEach(entry => {
    entry.style.display = 'flex';
  });
});
