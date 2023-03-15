//Global context - get the data by each line. In most cases it's window object 
//Execution context - it uses whenever any execution related code is there like 
//              console log and function calling


// var tip = 2; //Global context is collecting the data 

// //Global context 
// function myName(){
//     console.log("Chirag"); 
// }

// myName(); //Execution context is used

//Execution context have 5 features but main 3 are 
//Variable object 
//Scope chain
//this

//Very important two rules to remember
//1 - Function declarations are scanned and made available - Means you can declare it anywhere in code and use from anywhere
//2 - Variable declarations are scanned and made undefined - Means you can't use variable before declaration till then it is undefined 

//Variable Object examples
//Rule 1
// tipper("5");
// function tipper(a) {
//     var bill = parseInt(a);
//     console.log(`your bill is ${bill + 5}`);
// }

// tipper(5);
//tipper("5");

//Rule 2
// bigTipper(200);

// var bigTipper = function (a) {
//     var bill = parseInt(a);
//     console.log(`your bill is ${bill + 15}`); 
// }

//bigTipper(200);

//Rule 2
console.log(myName);    //undefined 
var myName = 'chirag';  //if we comment this then it shows variable not defined so here undefied and not found are different things 

function sayName(){
    var myName = 'MR H';
    console.log(myName);
}

sayName();

console.log(myName);



