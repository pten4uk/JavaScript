class Canvas {
    constructor() {
        this.view = document.createElement('canvas')
        this.view.style.background = `radial-gradient(white, blue)`

        this.ctx = this.view.getContext('2d')
        this.container = []

        this.resize()
        window.addEventListener('resize', () => this.resize())
    }
    clear() {
        this.ctx.clearRect(0, 0, this.view.width, this.view.height)
    }
    draw() {
        for (let elem of this.container) {
            elem.draw(this);
        }
    }
    drawCircle(param) {
        this.ctx.beginPath();
        this.ctx.arc(param.x, param.y, param.r, 0, 2*Math.PI);

        if (param.fillStyle) {
            this.ctx.fillStyle = param.fillStyle;
            this.ctx.fill();
        }
        if (param.strokeStyle) {
            this.ctx.strokeStyle = param.strokeStyle;
            this.ctx.stroke();
        }
    }
    drawLine(param) {
        this.ctx.beginPath();
        this.ctx.moveTo(param.x1, param.y1);
        this.ctx.lineTo(param.x2, param.y2);
        this.ctx.lineWidth = param.lineWidth;

        if (param.strokeStyle) {
            this.ctx.strokeStyle = param.strokeStyle;
            this.ctx.stroke();
        }
    }
    addToDOM() {
        document.body.append(canvas.view);
    }
    resize() {
        this.view.width = window.innerWidth;
        this.view.height = window.innerHeight;
    }
    add(...items) {
        for (let item of items) {
            if (!this.container.includes(item)) {
                this.container.push(item)
            }
        }
    }
    remove(...items) {
        for (let item of items) {
            if (this.container.includes(item)) {
                let index = this.container.indexOf(item);
                this.ctx.splice(index, 1);
            }
        }
    }
}