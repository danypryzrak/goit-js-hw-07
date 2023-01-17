import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const createPicture = function () {
    const array = []
    for (const galleryItem of galleryItems) {
        
        const div =
        `<div class= "galleryItem"><a class="gallery__link" href="${galleryItem.original}">
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
        />
        </a>
        </div>`
        
        array.push(div)
        
    }

    return array
}



gallery.addEventListener("click", (event) => {
    console.log(event.target.dataset.source)
    event.preventDefault()
    const instance = basicLightbox.create(

        `<img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show()
})



gallery.insertAdjacentHTML("afterbegin", createPicture().join(''))
console.log(createPicture())