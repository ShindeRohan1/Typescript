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

class Circlex extends Circle
{
    constructor(Data:number)
    {
        super(Data);
    }

    Circumference():number
    {
        return 2 * this.pi * this.radius;
    }
}


var obj1 = new Circlex(13);
var obj2 = new Circlex(18);

var area1 = obj1.Area();
var area2 = obj2.Area();

var circ1 = obj1.Circumference()
var circ2 = obj2.Circumference()

console.log(area1);
console.log(area2);


console.log(circ1);
console.log(circ2);