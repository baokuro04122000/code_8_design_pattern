"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square {
    constructor(edge) {
        this.edge = edge;
    }
    getArea() {
        return this.edge * this.edge;
    }
}
