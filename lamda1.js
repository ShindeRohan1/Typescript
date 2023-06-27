var sum = function (X, Y) {
    return X + Y; //lamda statment
};
var sub = function (X, Y) { return X - Y; }; //lamda expression
var add = sum(30, 50);
var substr = sub(34, 31);
console.log("additin is :" + add);
console.log("substraction is :" + substr);
//function in type script are considered as first class object in ts
//in ts everything is consider as object
