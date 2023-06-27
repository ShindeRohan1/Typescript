function sumarray(array : number[])
{
    var sum : number = 0;
    var icnt :number = 0;

    for(icnt = 0; icnt < array.length;icnt++)
    {
        sum = sum + array[icnt]
    }


    return sum;
}

var array : number[] = [23,6,7,4,5,7];

var sum : number = sumarray(array)

console.log(sum);