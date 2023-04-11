//Pick the data or Destructure the data 
//Destructure can be done with multiple properties of javascript like array,object,maps 

//Thumbrule : Left hand side datatype and right hand side datatype should be same while destructuring the data

//Important: 
//While destructuring the data of Object, it is mandatory that you have used the exact same name that is mentioned as Keys

// var user = ["chirag", 3 , "admin"];

// var role = user[2];
// console.log(role);

// var [name, courseCount, role] = user;  //Destructing the array 
// console.log(role);

var user = {
    name: "Chirag",
    courseCount: 5,
    role: "Admin"
};

// console.log(user.courseCount);

var {name, courseCount, role} = user; //Destrucing the object
console.log(courseCount);
console.log(role);

// var {name, coursecount, role} = user; //This can't assign the Coursecount value because key name is not same as defined in object user
// console.log(coursecount);             //So, this will return as undefined