document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectEntries = document.querySelectorAll('.project-entry');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
  
        projectEntries.forEach(entry => {
          if (filter === 'all' || entry.getAttribute('data-category') === filter) {
            entry.style.display = 'flex';
          } else {
            entry.style.display = 'none';
          }
        });
      });
    });
  });


