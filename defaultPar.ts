
//default parameters
                                 //specify the parameter
function Percentage(marks:number , ountOf=500):number   //if you not give second parameter when you call the function
  //then it will consider it as default 500
{
let answer:number = 0;             //inside function so let
answer = marks/ountOf * 100
return answer
}

var per:number = Percentage(220);

console.log("percentage is :"+per);
per = Percentage(220,330);

console.log("percentage is :"+per);

//default parameter should be at the end