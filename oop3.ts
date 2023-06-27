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


var obj = new Circle(10.7);

var area = obj.calculateArea();

console.log("Area of circle "+area)