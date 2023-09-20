import { galleryItems } from './gallery-items.js';
// Change code below this line



const listEl = document.querySelector('.gallery');
const galleryImg = galleryItems
    .map(
        ({ preview, original, description }) => 
            `<li class = "gallery__item">
                <a class = "gallery__link" href = "${original}">
                    <img
                        class = "gallery__image"
                        src = "${preview}"
                        alt = "${description}"
                        data-source = "${original}"
                    />
                </a>
            </li>`
)
    .join('')  

console.log(galleryImg);   

listEl.insertAdjacentHTML('beforeend', galleryImg);

let modalWindow = null;

listEl.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target === e.currentTarget) return;

    modalWindow = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);

    modalWindow.show();

    document.addEventListener('keydown', onEscapeKeyDown);

});



function onEscapeKeyDown(e) {
    if (e.code !== 'Escape') return;

    modalWindow.close();
    document.removeEventListener('keydown', onEscapeKeyDown);
}


    
    
    


