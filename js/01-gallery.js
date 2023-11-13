import { galleryItems } from './gallery-items.js';


document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
  let currentInstance = null;

  function openLightbox(originalUrl, description) {
    const instance = basicLightbox.create(`
      <img src="${originalUrl}" alt="${description}" width="800" height="600">
    `);

    instance.show();
    return instance;
  }

  function closeLightbox(instance) {
    instance.close();
  }

  // ZMIANA: Dodanie event listenera do div.gallery
  gallery.addEventListener('click', function (event) {
    event.preventDefault();

    const target = event.target;
    // ZMIANA: Sprawdzenie, czy kliknięty element ma klasę gallery__image
    if (target.classList.contains('gallery__image')) {
      const previewUrl = target.src;
      const originalUrl = target.dataset.source;
      const description = target.alt;

      currentInstance = openLightbox(originalUrl, description);
      document.addEventListener('keydown', handleKeyPress);
    }
  });

  function handleKeyPress(event) {
    if (event.key === 'Escape' && currentInstance !== null) {
      closeLightbox(currentInstance);
      document.removeEventListener('keydown', handleKeyPress);
      currentInstance = null;
    }
  }

  // Renderowanie galerii
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
  });

  console.log(galleryItems);
});