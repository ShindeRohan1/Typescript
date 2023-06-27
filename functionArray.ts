function summation(Arr : number []):number
{
    var sum : number = 0;

    var cnt : number = 0;

    for(cnt = 0; cnt < Arr.length;cnt++)
    {
    sum = sum + Arr[cnt];
    }
    return sum;
}


var week : number[] = [10,20,30,40,50];

var Ret : number = 0;


Ret = summation(week)


console.log("sum is "+Ret);