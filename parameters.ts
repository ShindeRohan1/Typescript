//positional parameters
console.log("first type of application");
function demo(no1:number , no2:number):void  //positionl parameters
{
    console.log("value of no1 is "+no1);
    console.log("value of no2 is "+no1);                     //function body
}
demo(9,8);
var a:number = 11;
var b:number = 12;
demo(a,b);  //function call



//default parameters
                                   //specify the parameter
function Percentage(marks:number , ountOf=500):number   //if you not give second parameter when you call the function
                                                        //then it will consider it as default 500
{
    let answer:number = 0;             //inside function so let
    answer = marks/ountOf * 100
    return answer
}

var per:number = Percentage(220);

console.log("percentage is :"+per);
per = Percentage(220,330);

console.log("percentage is :"+per);


//default
function area(radius:number , pi=3.14):number
{
    let answer:number = 0;
    answer = pi*radius*radius;
    return answer;
}

var ret:number = 0;
ret = area(20.3);
console.log("area is :",+ret);


function area1(radius:number , pi?:number):number  //optionl parameter ? indicate the option parameter
{
    let answer:number = 0;
    if(pi == undefined)
    {
        pi = 3.14                //initialise the parameter inside function body 

    }
    answer = pi*radius*radius;
    return answer;
}

var ret:number = 0;
ret = area1(20.3,3.14);
area1(20.4)
area1(20.4,7.12)
console.log("area is :",+ret);
