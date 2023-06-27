class Circle
{
    radius:number = 0;
    pi:number = 3.14;

    constructor(r:number) 
    {
        this.radius = r;
    }

    Area():number
    {
        return this.pi * this.radius * this.radius;
    }
}


var obj1 = new Circle(13);
var obj2 = new Circle(18);

var area1 = obj1.Area();
var area2 = obj2.Area();

console.log(area1);
console.log(area2);

