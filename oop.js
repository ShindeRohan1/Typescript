//object oriented is a thinking process
//class is a collection of characteristics and behaviour
//class contains constructor => automatically called when object is created 
//js supports automatic garbage collection so there is no distructor in js
//when u create the object memory is allocated at that time
//class = data + function , characteristics + behivour
var Student = /** @class */ (function () {
    function Student(n, m, a, c) {
        console.log("Inside constructor");
        this.Name = n;
        this.Marks = m; //this keyword
        this.Age = a;
        this.city = c;
    }
    Student.prototype.Display = function () {
        console.log("name of student : " + this.Name);
        console.log("marks of student : " + this.Marks);
        console.log("age of student : " + this.Age);
        console.log("city of student : " + this.city);
    };
    return Student;
}());
var bhushanAhire = new Student("bhushan", 90, 24, "jalgoan");
var jayeshrao = new Student("jayesh", 99, 21, "jalgoan");
bhushanAhire.Display();
