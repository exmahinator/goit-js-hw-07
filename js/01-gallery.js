import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const elements = galleryItems
  .map(({ preview, description, original }) => {
    return `<a class="gallery__link" href=${original}><img src=${preview} alt=${description} data-source=${original} class='gallery__image'></a>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', elements);

galleryRef.addEventListener('click', onImageClick);

const instance = basicLightbox.create(`<img id="content" src='' width="800" height="600">`, {
  onShow: instance => {
    document.onkeyup = event => {
      onClose(event, instance);
    };
  },
  onClose: () => (document.onkeyup = null),
});

function onImageClick(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = event.target.dataset.source;

  instance.show();
}

//  Part for Version 02:
function onClose(event, instance) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
