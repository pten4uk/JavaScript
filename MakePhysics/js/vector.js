class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    static get(x = 0, y = 0) {
        return new Vector(x, y);
    }
    static getDiff(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y)
    }
    static negative(vector) {
        return new Vector(-vector.x, -vector.y);
    }
    add(...vectors) {
        for (let vector of vectors) {
            this.x += vector.x;
            this.y += vector.y;
        }
        return this;
    }
    get length() {
        return (this.x**2 + this.y**2)**0.5
    }
    mult(n) {
        this.x *= n;
        this.y *= n;
    }
    getNegative() {
        return Vector.negative(this);
    }
}