

var sum = (X:number , Y:number):number =>{          //fat arrow
    return X+Y;                                    //lamda statment
}

var sub = (X:number , Y:number):number =>  X  - Y;   //lamda expression

var add:number = sum(30,50);
var substr:number = sub(34,31)

console.log("additin is :"+add)
console.log("substraction is :"+substr)

//function in type script are considered as first class object in ts
//in ts everything is consider as object

