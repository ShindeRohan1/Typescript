function secmax(array:number[]):number
{
    var max1 :number = 0;
    var max2 :number = 0;
    var i : number = 0;

    for(i = 0; i < array.length;i++)
    {
        if(max1 < array[i])
        {
            max1 = array[i];
        }
    }
    
    for(i = 0; i < array.length;i++)
    {
        if(max2 < array[i] && array[i] < max1)
        {
            max2 = array[i]
        }
    }

    return max2;
}

var array : number[] = [23,89,6,29,56,45,77,32];

var res : number = secmax(array);

console.log("second maximum is ",res);

