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
    function Circle(data) {
        this.radius = data;
        this.pi = 3.14;
    }
    Circle.prototype.calculateArea = function () {
        return this.pi * this.radius * this.radius;
    };
    return Circle;
}());
var newCircle = /** @class */ (function (_super) {
    __extends(newCircle, _super);
    function newCircle(data) {
        return _super.call(this, data) || this;
    }
    newCircle.prototype.calculateCircumferance = function () {
        var ans = 0;
        ans = 2 * this.pi * this.radius;
        return ans;
    };
    return newCircle;
}(Circle));
var obj = new newCircle(21.3);
var area = obj.calculateArea();
var circumference = obj.calculateCircumferance();
console.log(area);
console.log(circumference);
