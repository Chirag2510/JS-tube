//Arrow function and Callback function

//Normal function 
// function isEven(element) {
//     // if (element % 2 === 0){
//     //     return true;
//     // }
//     // return false;
    
//     //element % 2 === 0;        //If we not use return keyword then it shows the result as 'undefined'
//     return element % 2 === 0;
// }

//Arrow function 
var isEven = (element) => {
    return element % 2 === 0;
}

//console.log(isEven(2));

//'every' method 
//Used to iterate through array and performing some action - We can avoid to use loops if we use this method
//It takes callback function as argument to perform the action on each element. This callback funtion will be arrow function.

//Arroay function - Easy to remember method
// () => {} - When we use {} then there should be return keyword used
// () => () - When we use () then it's not required to use return keyword 
//First () will take the argument of function and second () will take the action of function

//Checks untill any element is not Even. If all elements are even then it returns true otherwise returns false
//var result = [2,3,6,8].every(isEven);

// var result = [2,4,6,8].every((e) => {
//     return e % 2 === 0;
// });

// var result = [2,3,6,8].every((e) => (e % 2 === 0));        
var result = [2,3,6,8].every((e) => e % 2 === 0);        

console.log(result);