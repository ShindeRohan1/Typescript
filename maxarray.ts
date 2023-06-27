function MaxArray(arr):number
{
    var max:number = 0;
    var count:number = 0;

    for(count = 0;count < arr.length;count++)
    {
        if(max < arr[count])
        {
            max = arr[count]
        }
    }
    return max;
}

var arr = [23,89,6,29,56,45,77,32]
var maximum:number = MaxArray(arr)
console.log(maximum)