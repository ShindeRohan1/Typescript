var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radius = 0;
        this.pi = 3.14;
        this.radius = r;
    }
    Circle.prototype.Area = function () {
        return this.pi * this.radius * this.radius;
    };
    return Circle;
}());
var obj1 = new Circle(13);
var obj2 = new Circle(18);
var area1 = obj1.Area();
var area2 = obj2.Area();
console.log(area1);
console.log(area2);
