// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-termos');
    const popup = document.getElementById('popup-termos');
    const closeBtn = document.querySelector('.close-popup');
  
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      popup.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', function(e) {
      if (e.target == popup) {
        popup.style.display = 'none';
      }
    });
  });
  