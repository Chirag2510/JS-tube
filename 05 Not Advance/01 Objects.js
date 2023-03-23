//Functional prototype/object
var User = function (firstName, courseCount) {
    this.firstName = firstName; 
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
}

//'prototype' - Used for property injection in prototype/object
User.prototype.getFirstName = function () {
    console.log(`My first name is: ${this.firstName}`);
}

//'new' keyword is used to create an instance/object of any prototype 
var chirag = new User('Chirag',2);
// console.log(chirag);

var pratiksha = new User('Pratiksha',5);
// console.log(pratiksha);

// console.log(chirag.firstName);
chirag.getFirstName();

//better code with object chain
if (pratiksha.hasOwnProperty("firstName")) {
    pratiksha.getFirstName();
}

