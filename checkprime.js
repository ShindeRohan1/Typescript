function CheckPrime(number) {
    var count;
    for (count = 2; count <= number / 2 + 1; count++) {
        if (number % count == 0) {
            return false;
        }
    }
    return true;
}
var bool = CheckPrime(10);
if (bool == true) {
    console.log("number is prime");
}
else {
    console.log("number is not prime");
}
