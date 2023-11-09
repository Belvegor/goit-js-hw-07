import { galleryItems } from './gallery-items.js';


document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
  let currentInstance = null;

  function openLightbox(item) {
    const instance = basicLightbox.create(`
      <img src="${item.original}" alt="${item.description}" width="800" height="600">
    `);

    instance.show();
    return instance;
  }

  function closeLightbox(instance) {
    instance.close();
  }

  galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = '#';

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    gallery.appendChild(galleryItem);

    image.addEventListener('click', function(event) {
      event.preventDefault();
      currentInstance = openLightbox(item);
      document.addEventListener('keydown', handleKeyPress);
    });
  });

  function handleKeyPress(event) {
    if (event.key === 'Escape' && currentInstance !== null) {
      closeLightbox(currentInstance);
      document.removeEventListener('keydown', handleKeyPress);
      currentInstance = null;
    }
  }

  console.log(galleryItems);
});