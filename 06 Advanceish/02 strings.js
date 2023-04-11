//Avoid to use single quote and double quote in javascript instead of that always use back tics
//We can avoid to use escape character by using back tics 

//Template Literals use back-ticks (``) rather than the quotes ("") to define a string 
//Template literals provide an easy way to interpolate variables and expressions into strings.
//The method is called string interpolation -->  ${...}

// var name = 'Chira\'g';
// var name = "Chira\"g";

// var name =  `Chira'g`;
// var name =  `Chira"g`;       //Use of template literals

var name = `Chirag`;
var fullName = `${name} Patel`;     //String interpolation

console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("?"));
console.log(fullName.includes("Patel"));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

