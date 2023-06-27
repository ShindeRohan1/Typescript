function sumarray(array) {
    var sum = 0;
    var icnt = 0;
    for (icnt = 0; icnt < array.length; icnt++) {
        sum = sum + array[icnt];
    }
    return sum;
}
var array = [23, 6, 7, 4, 5, 7];
var sum = sumarray(array);
console.log(sum);
