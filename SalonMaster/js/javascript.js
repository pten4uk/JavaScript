"use strict";

let blockProduct = document.querySelector(`article`);
let main = document.querySelector(`main`);

let materials = ['10A', '7Bc', 'SA NTRL', 'SA ASH', 'SPA', '4a', '5m', '5Bc', '10AA', '11A', '504M'];

for (let i = 0; i < 20; i++) {
    let article = document.createElement(`article`);
    article.innerHTML = blockProduct.innerHTML;

    let title = article.querySelector('.block-product p');
    title.innerHTML = materials[Math.floor(Math.random() * materials.length)];

    let viewQuantity = article.querySelector('.view-quantity');
    let segments = viewQuantity.querySelector('.block-segments');
    let quantity = viewQuantity.querySelector('p');
    quantity.innerHTML = `${Math.floor(Math.random() * 90)}г`
    for(let i=0; i < Math.floor(Math.random()*4); i++) {
        switch (i) {
            case 0:
                segments.innerHTML = '';
                quantity.style.color = 'red'
                break;
            case 1:
                segments.innerHTML = '<div class="block-segment"></div>';
                segments.querySelector('.block-segment').style.background = 'orange';
                quantity.style.color = 'black';
                break;
            case 2:
                segments.innerHTML = '<div class="block-segment"></div>' +
                                     '<div class="block-segment"></div>';
                segments.querySelector('.block-segment').style.background = 'green';
                quantity.style.color = 'black';
                break;
        }
    }


    main.append(article);
}
let articles = document.querySelectorAll(`article`);

function addVisibleClass(index) {
    articles[index].classList.add('visible');
}

window.onload = () => {
    document.body.style.opacity = `100%`
    let index = 0;
    let interval = setInterval(() => {
        addVisibleClass(index);
        index++;
        if (index >= articles.length) {
            clearInterval(interval);
        }
    }, 100)
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

let searchInput = document.querySelector('.search');
searchInput.addEventListener('keyup', (event) => {
    let key = event.target.value;
    let materials =  document.querySelectorAll('article');
    for (let elem of materials) {
        let p = elem.querySelector('.block-product p');
        if (!p.textContent.includes(key)) {
            elem.style.opacity = '0';
        } else {
            elem.style.opacity = '100';
        }
    }


})