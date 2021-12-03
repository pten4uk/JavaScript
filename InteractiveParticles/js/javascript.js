"use strict";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = innerWidth;
let h = canvas.height = innerHeight;
let particleArray = [];
let moveX = 20;
let moveY = 50;

document.body.append(canvas);
canvas.style.background = 'radial-gradient(blue, black)'

const mouse = {
    x: null,
    y: null,
    radius: 150
}

canvas.addEventListener('mousemove', event => {
    mouse.x = event.x;
    mouse.y = event.y;
})

ctx.fillStyle = 'white'
ctx.font = '90px Verdana';
ctx.textBaseline = 'top'
ctx.fillText('Мастер', 0, 0);

const textCoords = ctx.getImageData(0,0,ctx.measureText('Мастер').width, 200);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.dencity = Math.random() * 30 + 1;
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = (dx**2 + dy**2)**0.5;

        let fDirectionX = dx / distance;
        let fDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = fDirectionX * force * this.dencity;
        let directionY = fDirectionY * force * this.dencity;

        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx/60;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy/60;
            }
        }
    }
}

function init() {
    particleArray = [];
    for (let x = 0; x < textCoords.width; x++) {
        for (let y = 0; y < textCoords.height; y++) {
            if (textCoords.data[y * 4 * textCoords.width + x * 4 + 3] > 128) {
                let posX = x + moveX;
                let posY = y + moveY;
                particleArray.push(new Particle(posX * 5, posY * 5))
            }
        }
    }
}
init();

function animate() {
    ctx.clearRect(0, 0, w, h);
    particleArray.forEach(elem => {
        elem.draw();
        elem.update();
    });
    requestAnimationFrame(animate);
}
animate();