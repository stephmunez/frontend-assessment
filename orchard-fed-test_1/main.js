import 'normalize.css';

const anchorTags = document.querySelectorAll('a');

anchorTags.forEach((item) => {
  item.addEventListener('click', function (event) {
    console.log(event.target);
  });
});
