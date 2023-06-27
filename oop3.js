var Circle = /** @class */ (function () {
    function Circle(data) {
        this.radius = data;
        this.pi = 3.14;
    }
    Circle.prototype.calculateArea = function () {
        return this.pi * this.radius * this.radius;
    };
    return Circle;
}());
var obj = new Circle(10.7);
var area = obj.calculateArea();
console.log("Area of circle " + area);
