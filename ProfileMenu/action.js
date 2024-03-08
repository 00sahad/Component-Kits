const menu = document.getElementById('menu-container');
const profile = document.getElementById('profile');

// Initial state: hide the menu
menu.style.display = 'none';

// Add click event listener to the profile element
profile.addEventListener('click', function(event) {
  // Toggle the visibility of the menu
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }

  // Stop the event from propagating to the document
  event.stopPropagation();
});

document.addEventListener('click', function() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  }
});
