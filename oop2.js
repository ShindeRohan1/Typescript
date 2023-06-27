var Arithmetic = /** @class */ (function () {
    function Arithmetic(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }
    Arithmetic.prototype.Addition = function () {
        return this.num1 + this.num2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.num1 - this.num2;
    };
    return Arithmetic;
}());
var task1 = new Arithmetic(11, 10);
var sum = task1.Addition();
var sub = task1.Substraction();
console.log("Addition is " + sum);
console.log("Addition is " + sub);
