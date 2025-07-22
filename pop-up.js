window.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('newsletter-popup');
    const popupContent = popup.querySelector('.popup-content');
    const closeBtn = document.getElementById('popup-close');

    if (!sessionStorage.getItem('newsletter_shown')) {
      setTimeout(() => {
        popup.style.display = 'flex';
        sessionStorage.setItem('newsletter_shown', 'true');
      }, 3000);
    }

    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
      if (!popupContent.contains(e.target)) {
        popup.style.display = 'none';
      }
    });
  });