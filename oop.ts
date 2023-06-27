//object oriented is a thinking process
//class is a collection of characteristics and behaviour
//class contains constructor => automatically called when object is created 
//js supports automatic garbage collection so there is no distructor in js
//when u create the object memory is allocated at that time

//class = data + function , characteristics + behivour

class Student
{   
    
    //characteristics
    Name : string;
    Marks : number;
    Age : number;
    city : string;

    constructor(n : string , m:number, a:number, c:string)                   //name of coustructor is constructor in js
    {
        console.log("Inside constructor")
        this.Name = n;
        this.Marks =m;                                                      //this keyword
        this.Age =a;
        this.city = c;



    }

    Display() : void         //no need to write var , let , function keyword in class bcoz the function and variables are oo
    {
        console.log("name of student : "+this.Name);
        console.log("marks of student : "+this.Marks);
        console.log("age of student : "+this.Age);
        console.log("city of student : "+this.city);
    }
}

var bhushanAhire  = new Student("bhushan" , 90, 24, "jalgoan");
var jayeshrao  = new Student("jayesh" , 99, 21, "jalgoan");

bhushanAhire.Display();



