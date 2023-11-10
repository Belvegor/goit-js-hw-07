import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'https://belvegor.github.io/goit-js-hw-07/js/simple-lightbox.min.js';

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

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

  const lightbox = new SimpleLightbox('.gallery a', {
    /* Dodaj opcje tutaj */
  });

  lightbox.on('show.simplelightbox', function (e) {
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = e.currentTarget.querySelector('img').alt;
    e.overlay.appendChild(description);

    setTimeout(function () {
      description.style.opacity = 1;
    }, 250);
  });
});

console.log(galleryItems);