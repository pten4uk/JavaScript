"use strict";

const canvas = document.createElement('canvas');
document.body.append(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.background = `radial-gradient(white, blue)`

const ctx = canvas.getContext('2d');
let spheresArray = [];

const config = {

}

class Sphere {
    constructor(x, y, radius, mass) {
        this.x = x
        this.y = y
        this.radius = radius
        this.mass = mass
        this.speed = 0
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill();
        ctx.closePath();
    }
    update() {
        for (let sphere of spheresArray) {
            for (let otherSphere of spheresArray) {
                if (sphere !== otherSphere) {
                    let dx = sphere.x - otherSphere.x;
                    let dy = sphere.y - otherSphere.y;
                    let distance = (dx**2 + dy**2)**0.5;
                    sphere.speed += otherSphere.mass / distance;
                    sphere.x += sphere.speed;
                    sphere.y += sphere.speed;

                }
            }
        }
    }
}

function init() {
    for (let i = 0; i < 2; i++) {
        spheresArray.push(new Sphere(Math.random() * 300 + 300, Math.random() * 300 + 300, 50, 3))
    }
}
init();


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let sphere of spheresArray) {
        sphere.draw()
        sphere.update();
    }
    requestAnimationFrame(animate);
}
animate();

