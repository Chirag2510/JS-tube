//Closure - Means we can access the properties out of scope. We can pass the reference of properties and then use them out of scope.

/*
function init() {
    var firstName = 'Chirag';
    function sayFirstName () {
        console.log(`First name is: ${firstName}`);
    };

    return sayFirstName;
}

var returnFunction = init();

// console.log(returnFunction);
returnFunction();
*/

function ofAddition(x) {
    return function ofAdd(y) {
        return x + y;
    }
}

var result = ofAddition(5);

console.log(result(10));

console.log(ofAddition(20)(10)); //This is called as curring 
//ofAddition()()() 