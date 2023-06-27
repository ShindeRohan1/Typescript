class Circle
{
    radius:number;
    pi:number;

    constructor(data:number)
    {
        this.radius = data;
        this.pi = 3.14;
    }

    calculateArea() :number
    {
        return this.pi * this.radius * this.radius;
    }

}

class newCircle extends Circle
{
    constructor(data:number)
    {
        super(data);
    }
    calculateCircumferance():number
    {
        let ans:number = 0;
        ans = 2 * this.pi * this.radius;
        return ans;
    }
}

var obj = new newCircle(21.3);
var area = obj.calculateArea();
var circumference = obj.calculateCircumferance();

console.log(area);
console.log(circumference);
