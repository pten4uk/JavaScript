"use strict";

const canvas = document.createElement('canvas');
document.body.append(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.background = `radial-gradient(white, blue)`

const ctx = canvas.getContext('2d');


const config = {

}

class Sphere {
    constructor(radius, mass, resistance) {
        this.radius = radius
        this.mass = mass
        this.resistance = resistance
    }
    draw() {
        ctx.beginPath();
        ctx.arc(300, 300, this.radius, 0, 2*Math.PI)
        ctx.fill();
        ctx.closePath();
    }
}

new Sphere(50, 2, 3).draw();

