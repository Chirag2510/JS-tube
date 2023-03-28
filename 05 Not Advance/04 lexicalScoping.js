//Lexical scoping - JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. 
//It determines the function's parent scope by looking at where the function was created instead of where it was invoked.

//Simple - Lexical scoping is also called as Static scoping. It means that every property defined in any scope can only be accesible in
//that particular scope if you want to directly access them.

function init() {
    var firstName = 'Chirag';
    function sayFirstName () {
        console.log(`First name is: ${firstName}`);
    };

    sayFirstName();
}

init();

//This will gives an error that firstName is not defined 
//because it's scope is only in init function so we can't use it out of that function directly
// console.log(firstName);

/*
Executable context - sayFirstName()
            ^
            |
            |
Executable context - init()
            ^
            |
            |
global executable context 
*/