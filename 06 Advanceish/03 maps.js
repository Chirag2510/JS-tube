var myMaps = new Map();

//Adding a keys and values 
myMaps.set(1,"Chirag");
myMaps.set(2,"Patel");
myMaps.set(3,"Pratiksha");
myMaps.set(4,"Bhatt");

console.log(myMaps);

//The classic way to iterate through Map is forOf loop because it gives the key first and then value 
//whereas in forEach loop it return value first and then key

//Keys
// for(let key of myMaps.keys()){
//     console.log(`Key is ${key}`);
// }

// //Values
// for(let value of myMaps.values()){
//     console.log(`Value is ${value}`);
// }

// //Keys and Values both - key,value
// for(let [key, value] of myMaps){
//     console.log(`Key is ${key} and Value is ${value}`);
// }

//Important
myMaps.forEach( (value) => console.log(`Value is ${value}`) );   //Here it returns the values 

//Value, key
myMaps.forEach( (v, k) => console.log(`Key is ${k} and value is ${v}`));

myMaps.delete(2);
console.log(myMaps);