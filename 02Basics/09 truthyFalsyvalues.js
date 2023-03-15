//falsy values 
//undefined
//null
//0
//''
//Nan - Not a number 

//Example of falsy value which always returns false in if condition 
// var temp = null; 

// if (temp){
//     console.log("showing true result");
// }

//All other values are truthy 
// var temp = 'abc'; 

// if (temp){
//     console.log("showing true result");
// }

//Type Coercion example 
// var temp = '2'; 

// if (2 == temp){
//     console.log("showing true result");
// }

//Strict assignment to avoid type coercion
var temp = '2'; 

if (2 === temp){
    console.log("showing true result");
}