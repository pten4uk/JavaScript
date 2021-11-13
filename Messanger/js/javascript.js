`use strict`;

let catalogElem = document.querySelector(`.list-item.dropdown`);

let dropDown = catalogElem.querySelector(`.nav-dropdown`);

catalogElem.addEventListener(`mouseenter`, () => {
    dropDown.classList.add(`active`)
})

catalogElem.addEventListener(`mouseleave`, () => {
    dropDown.classList.remove(`active`)
})