let name = 'chirag';
let surname = null; 

//Truthy value 
if (name) {
    console.log("Block 1");
}

//Falsy value
if (surname) {
    console.log("Block 2");
}

// !! - Double shots/exclaimations are used to make any truthy or falsy value to boolean true or false value 

//Similar meaning as above blocks 
//True value 
if (!!name) {
    console.log("Block 1");
}

//False value
if (!!surname) {
    console.log("Block 2");
}
