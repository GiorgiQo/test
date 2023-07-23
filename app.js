document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navigation a');
  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        // const headerOffset = 70; // Adjust this value if you have a fixed header
  
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      });
    });
  });

  