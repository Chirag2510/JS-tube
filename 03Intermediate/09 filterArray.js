//fill - Used to change the elements from array for a particular range of position 
var testArray = [2, 4, 5, 6, 7, 8];

// console.log(testArray.fill(4));
//  console.log(testArray.fill('h',2));
// console.log(testArray.fill('empty',2,5));

//Reverse order replacement - it adds the length of array if any argument is negative
// console.log(testArray.fill('empty',-1));        
// console.log(testArray.fill('empty',-4,-1)); 


//filter - Used to Filter the array - Passing the arrow function as argument for filter condition
const myNumber = [11,22,33,44,65,66,77];

const result = myNumber.filter((num) => num > 22);

console.log(result);


var mySliceExample = ['tom','harry','abc','xyz','pqr'];

//Slice - Used to cutout the array elements - Start index, End index // Example of Cake slice
// console.log(mySliceExample.slice(1,4)); 
// console.log(mySliceExample.slice(1)); 

//Splice - Used to cut the array element and replace them with some other values if any other value is specified
// mySliceExample.splice(2,3,'zzz','yyyy');
mySliceExample.splice(2,3);

console.log(mySliceExample);