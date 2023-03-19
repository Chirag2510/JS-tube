//for, while, do...while loops
//let - Used when you want to declare any variable for particular scope because after completing a scope variable will be removed from memory
//const - When you want to declare any variable as constant thoughtout the code. It's value can't be changed.
//var - It's value can be changed anywhere and also it can be used out of scope as well.

const states = [
    "Gujarat",
    "Maharastra",
    "Keral",
    1947,
    "Tamil Nadu",
    "Delhi"
];

// for(let i = 0; i < states.length; i++) {

//     // if (typeof states[i] !== 'string') continue;
//     if (typeof states[i] !== 'string') break;
//     console.log(states[i]);
// }

//This will gives us a not defined error because scope of i is only under for loop. 
//So we can't access it outside of loop but if we declare it with 'var' then it allows to access it.
// console.log(i); 

let i = 0;

// while ( i < states.length) {
//     console.log(states[i]);
//     i++;
// }

do {
    console.log(states[i]);
    i++;
} while (i < states.length)


