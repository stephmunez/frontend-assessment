import 'normalize.css';

const anchorTags = document.querySelectorAll('a');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const component1Images = document.querySelectorAll('.component1__image');

const openModal = () => {
  modal.classList.add('modal--visible');
  document.body.classList.add('no-scroll');
};

const closeModal = () => {
  modal.classList.remove('modal--visible');
  document.body.classList.remove('no-scroll');
};

anchorTags.forEach((item) => {
  item.addEventListener('click', function (event) {
    console.log(event.target);
  });
});

component1Images.forEach((imageElement) => {
  imageElement.addEventListener('click', (e) => {
    const imgSrc = e.currentTarget.querySelector('img').src;
    modalImage.src = imgSrc;
    openModal();
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal--visible');
  document.body.classList.remove('no-scroll');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
