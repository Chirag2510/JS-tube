var states = ["Gujarat", "Rajasthan", "Maharastra", "Assam"];

// console.log(states);

var state = new Array("Madhyapradesh","Delhi","Himachalpradesh");

// console.log(state);

var values = ["Chirag","Patel","Madhubhai",true,3];

// console.log(values);

//Operations on array 
//1 - Pop  - Removes the last element from array 
//2 - Shift - Removes the first element from array - Shift all values towards left
//3 - Unshift - Add a new value at first position in array - Shift all values towards right 
//4 - length - Gives the length of array - Total no of elements 
//5 - indexOf - Gives the index of any element of array - Position of element 
//6 - Array.from - Converts any values to array 

states.pop();
console.log(states);

states.shift();
console.log(states);

states.unshift("Keral","Tamilnadu");
console.log(states);

values[values.length] = 'xyz';

values[0] = 'Testing';
console.log(values);

console.log(states.length);
console.log(states.indexOf("Gujarat")); 
console.log(states.indexOf("adsasdf"));

console.log(Array.from("chirag"));
console.log(Array.from("123456"));