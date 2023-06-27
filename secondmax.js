function secmax(array) {
    var max1 = 0;
    var max2 = 0;
    var i = 0;
    for (i = 0; i < array.length; i++) {
        if (max1 < array[i]) {
            max1 = array[i];
        }
    }
    for (i = 0; i < array.length; i++) {
        if (max2 < array[i] && array[i] < max1) {
            max2 = array[i];
        }
    }
    return max2;
}
var array = [23, 89, 6, 29, 56, 45, 77, 32];
var res = secmax(array);
console.log("second maximum is ", res);
