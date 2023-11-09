import { galleryItems } from './gallery-items.js'; 

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

    image.addEventListener('click', function(event) {
        event.preventDefault(); 
        const instance = BasicLightbox.create(`<img src="${item.original}" alt="${item.description}">`);
        instance.show();
    });
  });

  console.log(galleryItems); 
});