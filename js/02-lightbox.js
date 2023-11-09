import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';


document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const lightbox = new SimpleLightbox('.gallery a', { /* Dodaj opcje tutaj */ });

  galleryItems.forEach(item => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    gallery.appendChild(galleryItem);
  });

  lightbox.on('show.simplelightbox', function (e) {
    // Dodaj podpisy do obrazków po otwarciu
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = e.caption;
    e.overlay.appendChild(description);

    setTimeout(function () {
      description.style.opacity = 1;
    }, 250);
  });
});

console.log(galleryItems);
