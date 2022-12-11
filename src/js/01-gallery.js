// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItem = createElement(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItem);

function createElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
             `;
    })
    .join('');
}

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
