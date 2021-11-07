`use strict`;

console.log(window)

document.querySelector(`#mydiv`).getAttribute(`margin`)

let offsetX;
let offsetY;

mydiv.addEventListener('dragstart', (e) => {
    console.log(mydiv.getAttribute(`style`))
    offsetX = e.offsetX;
    offsetY = e.offsetY;
})

mydiv.addEventListener('dragend', (e) => {
    mydiv.style.top = (e.pageY - offsetY) + `px`
    mydiv.style.left = (e.pageX - offsetX) + `px`
})