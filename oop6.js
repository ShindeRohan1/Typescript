var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Circlex = /** @class */ (function (_super) {
    __extends(Circlex, _super);
    function Circlex(Data) {
        return _super.call(this, Data) || this;
    }
    Circlex.prototype.Circumference = function () {
        return 2 * this.pi * this.radius;
    };
    return Circlex;
}(Circle));
var obj1 = new Circlex(13);
var obj2 = new Circlex(18);
var area1 = obj1.Area();
var area2 = obj2.Area();
var circ1 = obj1.Circumference();
var circ2 = obj2.Circumference();
console.log(area1);
console.log(area2);
console.log(circ1);
console.log(circ2);
