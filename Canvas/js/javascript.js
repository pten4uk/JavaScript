"use strict";

const props = {
    spaceDiametr: 80
}

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = innerWidth;
let h = canvas.height = innerHeight;

let dotsList;
canvas.style.background = 'rgba(17,17,23,1)';

document.body.append(canvas);

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = x;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
    }
}

init();
function init() {
    dotsList = [];

    const dotsCountX = w / props.spaceDiametr | 0;
    const dotsCountY = h / props.spaceDiametr | 0;
    const startX = props.spaceDiametr / 2;
    const startY = props.spaceDiametr / 2;


    let y = startY;

    for (let i; i < dotsCountX; i++) {
        let x = startX + i * props.spaceDiametr;
        dotsList.push(new Dot(x, y))
    }
}