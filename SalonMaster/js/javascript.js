"use strict";

let blockProduct = document.querySelector(`article`);
let main = document.querySelector(`main`);

for (let i = 0; i < 10; i++) {
    let article = document.createElement(`article`);
    article.innerHTML = blockProduct.innerHTML;
    main.append(article);
}

window.onload = () => {
    document.body.style.opacity = `100%`
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            console.log('DOWN')
            break
        case 'ArrowUp':
            event.preventDefault();
            console.log('UP')
            break
    }
})