function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var a = 11;
var b = 10;
var ret = 0;
ret = Addition(a, b);
console.log("Addition is " + ret);
ret = Substraction(a, b);
console.log("substraction is " + ret);
