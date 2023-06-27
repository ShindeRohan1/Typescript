
class Arithmetic
{
    num1:number;
    num2:number;

    constructor(n1:number , n2:number)
    {
        this.num1 = n1;
        this.num2 = n2;
    }

    Addition():number
    {
        return this.num1 + this.num2
    }

    Substraction():number
    {
        return this.num1 - this.num2
    }

}

var task1 = new Arithmetic(11,10);

var sum = task1.Addition();
var  sub = task1.Substraction();

console.log("Addition is "+sum);
console.log("Addition is "+sub);