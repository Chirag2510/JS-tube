/*
...args or ...<anyname> - is called as Spread or Rest operator. 
Difference 
1 - Spread is used to spread the bunch of elements
2 - Rest is used to create the bunch of elements from spreaded values - Opposite of Spread
*/

//Example of Rest operator
//This can be work with any number of arguments
var returnMaxValue = Math.max(1,2,3,5,7,8);
console.log(returnMaxValue);

//Example of Spread operator
var myObj = {};

//It takes multiple objects as an argument but first argument is fix
// Object.assign(myObj,{},{},{},{})
Object.assign(myObj,{a:1,b:2,c:3},{d:4,e:5});      
console.log(myObj);


//Use of Spread operator 
function sumOne(a,b) {
    return a + b;
}

// console.log(sumOne(5,4));
// console.log(sumOne(5,4,3,2,1));     //This will consider only first two argument and other will be ignored

const myA = [5,4,7,8];
console.log(sumOne(...myA));    //Spread op

//Use of Rest operator 
function sumTwo(a,b,...args){   //Rest op
    console.log(args);          //Taking args as an array
    
    let multi = a * b;
    let sum = 0;
    
    for(let arg of args) {
        sum += arg;
    }
    
    return [multi,sum];
}

console.log(sumTwo(5,4,6,7,8));

