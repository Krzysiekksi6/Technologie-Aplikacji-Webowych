class Point {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	move(moveX: number, moveY: number): void {
		this.x += moveX;
		this.y += moveY;
	}
}

export { Point };

class Rectangle {
	private topLeft: Point;
	private topRight: Point;
	private bottomLeft: Point;
	private bottomRight: Point;

	constructor(
		topLeft: Point,
		topRight: Point,
		bottomLeft: Point,
		bottomRight: Point
	) {
		this.topLeft = topLeft;
		this.topRight = topRight;
		this.bottomLeft = bottomLeft;
		this.bottomRight = bottomRight;
	}

	move(moveX: number, moveY: number): void {
		this.topLeft.move(moveX, moveY);
		this.topRight.move(moveX, moveY);
		this.bottomLeft.move(moveX, moveY);
		this.bottomRight.move(moveX, moveY);
	}

	getArea(): number {
		const width = Math.sqrt(
			Math.pow(this.topRight.x - this.topLeft.x, 2) +
				Math.pow(this.topRight.y - this.topLeft.y, 2)
		);

        const height = Math.sqrt(
			Math.pow(this.topRight.x - this.bottomRight.x, 2) +
				Math.pow(this.topRight.y - this.bottomRight.y, 2)
		);

		return width * height;
	}
}

export { Rectangle };
