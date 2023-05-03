"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(moveX, moveY) {
        this.x += moveX;
        this.y += moveY;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    move(moveX, moveY) {
        this.topLeft.move(moveX, moveY);
        this.topRight.move(moveX, moveY);
        this.bottomLeft.move(moveX, moveY);
        this.bottomRight.move(moveX, moveY);
    }
    getArea() {
        const width = Math.sqrt(Math.pow(this.topRight.x - this.topLeft.x, 2) +
            Math.pow(this.topRight.y - this.topLeft.y, 2));
        const height = Math.sqrt(Math.pow(this.topRight.x - this.bottomRight.x, 2) +
            Math.pow(this.topRight.y - this.bottomRight.y, 2));
        return width * height;
    }
}
exports.Rectangle = Rectangle;
