function Area(radius:number):number
{
    var ar:number = 0;
    ar = 3.14 * radius*radius
    return ar
}

var area:number = Area(5)

console.log("Area of circle is "+area)