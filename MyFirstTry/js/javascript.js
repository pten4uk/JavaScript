`use strict`;

let urls = [
    `photos/1.jpg`, 
    `photos/2.jpg`, 
    `photos/3.jpg`, 
    `photos/4.jpg`, 
    `photos/5.jpeg`
]

let left = document.querySelector(`.pointer.left-pointer`);
let right = document.querySelector(`.pointer.right-pointer`);
let photo = document.querySelector(`.photo-space`);
let counter = 0;


left.addEventListener(`click`, () => {
    counter -= 1;
    if (counter < 0) counter = urls.length -1;
    photo.style.backgroundImage = `url(${urls[counter]})`;
    console.log(photo.clientWidth);
    console.log(counter)
});

right.addEventListener(`click`, () => {
    counter += 1;
    if (counter >= urls.length) counter = 0;
    photo.style.backgroundImage = `url(${urls[counter]})`;
    console.log(counter) 
});