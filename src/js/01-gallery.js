// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
        <img
        src="${preview}" 
        alt="${description}"
        data-source="${original}"
        class="gallery__image">
    </a>
    `,
  ''
);

galleryContainer.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
