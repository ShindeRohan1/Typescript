//positional parameters
console.log("first type of application");
function demo(no1, no2) {
    console.log("value of no1 is " + no1);
    console.log("value of no2 is " + no1); //function body
}
demo(9, 8);
var a = 11;
var b = 12;
demo(a, b); //function call
//default parameters
//specify the parameter
function Percentage(marks, ountOf) {
    if (ountOf === void 0) { ountOf = 500; }
    var answer = 0; //inside function so let
    answer = marks / ountOf * 100;
    return answer;
}
var per = Percentage(220);
console.log("percentage is :" + per);
per = Percentage(220, 330);
console.log("percentage is :" + per);
//default
function area(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    var answer = 0;
    answer = pi * radius * radius;
    return answer;
}
var ret = 0;
ret = area(20.3);
console.log("area is :", +ret);
function area1(radius, pi) {
    var answer = 0;
    if (pi == undefined) {
        pi = 3.14;
    }
    answer = pi * radius * radius;
    return answer;
}
var ret = 0;
ret = area1(20.3, 3.14);
area1(20.4);
area1(20.4, 7.12);
console.log("area is :", +ret);
