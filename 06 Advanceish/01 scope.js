//In other programming languages scope is defined using {} 
//but in javascript scope is defined using function only

//So to overcome this issue of scope we can use 'let' keyword instead of 'var'. because 'let' keyword has scope between {} only.


// console.log(firstname); //it shows as undefined when using var keyword but it shows error when using let keyword

// var firstname = "Chirag";
let firstname = "Chirag";

if (true) {
    // var lastname = "Patel";
    let lastname = "Patel";
}

console.log(lastname);  //it shows as lastname properly when using var keyword but it shows error when using let keyword
