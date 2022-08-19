import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const elements = galleryItems
  .map(({ preview, description, original }) => {
    return `<a class="gallery__item" href=${original}><img src=${preview} alt=${description} class='gallery__image'></a>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', elements);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
