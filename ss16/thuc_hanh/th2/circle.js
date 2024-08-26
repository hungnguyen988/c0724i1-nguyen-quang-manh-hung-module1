class circle {
    constructor() {
        this.radius = 10;
        this.color = "red";
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        let result = 3.14 * this.radius * this.radius;
        return result;
    }
}

let circle1 = new circle();
alert(circle1.getArea());
alert(circle1.getRadius());
let radius = 30;
circle1.setRadius(radius);
alert(circle1.getRadius());
alert(circle1.getArea());
