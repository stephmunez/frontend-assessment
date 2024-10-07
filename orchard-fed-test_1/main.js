import 'normalize.css';

const anchorTags = document.querySelectorAll('a');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const component1Images = document.querySelectorAll('.component1__image');

anchorTags.forEach((item) => {
  item.addEventListener('click', function (event) {
    console.log(event.target);
  });
});

component1Images.forEach((imageElement) => {
  imageElement.addEventListener('click', (e) => {
    const imgSrc = e.currentTarget.querySelector('img').src;
    modalImage.src = imgSrc;
    modal.classList.add('modal--visible');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal--visible');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('modal--visible');
  }
});
