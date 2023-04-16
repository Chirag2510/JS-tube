const student = {
    age: 15,
    name: {
        firstName: "Chirag",
        lastName: "Patel"
    }
}

//Even we have used 'const' keyword it allows to change age value. So here object is constant but values inside it are not constant.
student.age = 20;
console.log(student);

//To make an object values as constant we need to use this 
Object.freeze(student);

student.age = 25;
console.log(student);

//But even if object is freezed it allows us to change values of insider object 
student.name.firstName = "Pratiksha";
console.log(student);