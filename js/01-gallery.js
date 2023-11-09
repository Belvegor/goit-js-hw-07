import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';

document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');

  galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = '#';

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.setAttribute('data-source', item.original);
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    gallery.appendChild(galleryItem);

    // Po kliknięciu na obraz z galerii
    image.addEventListener('click', function(event) {
      event.preventDefault(); // Zapobieganie domyślnej akcji linku

      const instance = basicLightbox.create(`
        <img src="${item.original}" alt="${item.description}" width="800" height="600">
      `);

      instance.show();
    });
  });

  console.log(galleryItems);
});