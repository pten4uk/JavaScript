class Particle {
    constructor(params = {}) {
        this.position = new Vector(params.x, params.y);
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);

        this.forces = [];

        this.mass = params.mass;
        this.drawSpeed = params.drawSpeed ?? true;
        this.drawForces = params.drawForces ?? true;
    }
    get force() {
        return Vector.get().add(...this.forces);
    }
    draw(canvas) {
        canvas.drawCircle({
            x: this.position.x,
            y: this.position.y,
            r: (100* this.mass / Math.PI)**0.5,
            fillStyle: 'black'
        })
        if (this.drawSpeed) {
            canvas.drawLine({
                x1: this.position.x,
                y1: this.position.y,
                x2: this.position.x + this.speed.x,
                y2: this.position.y + this.speed.y,
                lineWidth: 1,
                strokeStyle: 'blue'
            })
        }
        if (this.drawForces) {
            canvas.drawLine({
                x1: this.position.x,
                y1: this.position.y,
                x2: this.position.x + this.force.x,
                y2: this.position.y + this.force.y,
                lineWidth: 1,
                strokeStyle: 'red'
            })
        }
    }
}