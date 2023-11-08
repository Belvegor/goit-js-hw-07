import { galleryItems } from './galleryItems.js';

const gallery = document.querySelector('.gallery');


function createGallery() {
  galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const image = document.createElement('img');
    image.src = item.preview;
    image.alt = item.description;

    galleryItem.appendChild(image);
    gallery.appendChild(galleryItem);

    image.addEventListener('click', () => {
      const lightbox = basicLightbox.create(`<img src="${item.original}" alt="${item.description}">`);
      lightbox.show();
    });
  });
}

createGallery();