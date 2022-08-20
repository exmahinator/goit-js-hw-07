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

// -----------------------------------------------------------------------------------------------------------------
//  Version 03
// const instance = basicLightbox.create(`<div id="content"></div>`, {
//   onShow: instance => {
//     document.onkeyup = event => {
//       onClose(event, instance);
//     };
//   },
//   onClose: () => (document.onkeyup = null),
// });
// -----------------------------------------------------------------------------------------------------------------

const instance = basicLightbox.create(`<img id="content" src='' width="800" height="600">`, {
  onShow: instance => {
    document.onkeyup = event => {
      onClose(event, instance);
    };
  },
  onClose: () => (document.onkeyup = null),
});

// const instance = basicLightbox.create(galleryRef.querySelector('img'), {
//     onShow: instance => {
//       document.onkeyup = event => {
//         onClose(event, instance);
//       };
//     },
//     onClose: () => (document.onkeyup = null),
//   });

function onImageClick(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }

  // -----------------------------------------------------------------------------------------------------------------
  //  Version 02
  // const instance = basicLightbox.create(
  //   `<img id="content" src=${event.target.dataset.source} width="800" height="600">`,
  //   {
  //     onShow: instance => {
  //       document.onkeyup = event => {
  //         onClose(event, instance);
  //       };
  //     },
  //     onClose: () => (document.onkeyup = null),
  //   }
  // );

  instance.element().querySelector('img').src = event.target.dataset.source;

  instance.show();

  // -----------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------
  //  Version 03
  // const modalContent = document.querySelector('#content');
  // modalContent.innerHTML = `<img src=${event.target.dataset.source} width="800" height="600">`;
  // -----------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------
  //  Version 01

  //   function onModalClose(event) {
  //     if (event.code === 'Escape') {
  //       instance.close();
  //       window.removeEventListener('keydown', onModalClose);
  //     }
  //   }

  //   window.addEventListener('keydown', onModalClose);
  // -----------------------------------------------------------------------------------------------------------------
}

//  Part for Version 02:
function onClose(event, instance) {
  if (event.code === 'Escape') {
    instance.close();
  }
  //   console.log('Clicking...', event.code);
}
