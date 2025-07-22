const cards = document.querySelectorAll('.card');
const modal = document.getElementById('cardModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const details = card.querySelector('.card-details');
    const imgSrc = details.querySelector('.modal-img-src').src;
    const title = details.querySelector('.modal-title').textContent;
    const contentHTML = details.querySelector('.modal-content').innerHTML;

    modalImage.src = imgSrc;
    modalTitle.textContent = title;
    modalText.innerHTML = contentHTML;

    modal.classList.add('active');
  });
});

function closeModalWithAnimation() {
  modal.classList.add('closing');
  setTimeout(() => {
    modal.classList.remove('active', 'closing');
  }, 300);
}

closeModal.addEventListener('click', closeModalWithAnimation);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModalWithAnimation();
});
