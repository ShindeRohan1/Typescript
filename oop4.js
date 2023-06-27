var Arithematic = /** @class */ (function () {
    function Arithematic(no1, no2) {
        this.Number1 = 0;
        this.Number2 = 0;
        this.Number1 = no1;
        this.Number2 = no2;
    }
    Arithematic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithematic.prototype.Substraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithematic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithematic.prototype.division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(12, 9);
var obj2 = new Arithematic(11, 10);
var add1 = obj1.Addition();
var sub1 = obj1.Substraction();
var mult1 = obj1.Multiplication();
var div1 = obj1.division();
var add2 = obj2.Addition();
var sub2 = obj2.Substraction();
var mult2 = obj2.Multiplication();
var div2 = obj2.division();
console.log("addition of obj1 is " + add1 + " substraction is " + sub1 + " multiplication is " + mult1 + " division is " + div1);
console.log("addition of obj2 is " + add2 + " substraction is " + sub2 + " multiplication is " + mult2 + " division is " + div2);
