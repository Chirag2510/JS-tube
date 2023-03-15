// sayHello();

// function sayHello(){
//     console.log("Hello");
// }


//Global object works on every line of js code 

if ( 2 === "2") {
    console.log("This is true");
}

var myName = "chirag";

if (myName === myName) {
    console.log("this is again true");
}

//window only works in browser it can't work with node but there is always 
//one global object but its name is different in js
if (myName === window.myName) {
    console.log("this is again true");
}