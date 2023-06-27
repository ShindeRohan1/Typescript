
function Addition(No1:number,No2:number):number
{
    let Ans:number = 0;

    Ans = No1 + No2;

    return Ans;
}



function Substraction(No1:number,No2:number):number
{
    let Ans:number = 0;

    Ans = No1 - No2;

    return Ans;
}

var a:number = 11;
var b:number = 10;
var ret:number = 0;

ret = Addition(a,b);

console.log("Addition is "+ret);

ret = Substraction(a,b);

console.log("substraction is "+ret);
