function Maximum(no1, no2, no3) {
    if (no1 > no2 && no1 > no3) {
        return no1;
    }
    else if (no2 > no1 && no2 > no3) {
        return no2;
    }
    else if (no3 > no1 && no3 > no2) {
        return no3;
    }
}
var ret = Maximum(23, 89, 6);
console.log("Maximum number is " + ret);
