function fibonacci(Number) {
    var num1 = 1;
    var num2 = 2;
    console.log(num1);
    console.log(num2);
    var sum = num1 + num2;
    while (sum <= Number) {
        console.log(sum);
        num1 = num2;
        num2 = sum;
        sum = num1 + num2;
    }
}
fibonacci(21);
