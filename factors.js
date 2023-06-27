function DisplayFactors(number) {
    var i = 0;
    for (i = 0; i < number / 2 + 1; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(20);
