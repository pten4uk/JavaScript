"use strict";

const canvas = new Canvas();
const ctx = canvas.ctx;
canvas.addToDOM();
let particles = [];
const G = 1;

for (let i = 0; i < 10; i++) {
    particles.push(new Particle({
        x: getRandomBetween(0, canvas.view.width),
        y: getRandomBetween(0, canvas.view.height),
        mass: getRandomBetween(1, 10)
    }))
}
canvas.add(...particles);

function tick() {
    requestAnimationFrame(tick);

    for (let i = 0; i < particles.length - 1; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const force = Vector.getDiff(
                particles[i].position,
                particles[j].position
            );
            const forceNumber = (G * particles[i].mass * particles[j].mass) /
                Math.max(force.length ** 2, 0.00001);
            force.mult(forceNumber);

            particles[i].forces.push(force.getNegative());
            particles[j].forces.push(force);
        }
    }
    for (let p of particles) {
        p.acceleration = new Vector(
            p.force.x / p.mass,
            p.force.y / p.mass
        )
    }
    for (let p of particles) {
        p.speed.add(p.acceleration);
        p.position.add(p.speed);
    }
    canvas.clear();
    canvas.draw();
}
tick();