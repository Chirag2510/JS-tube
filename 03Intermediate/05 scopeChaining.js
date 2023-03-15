//{} defines the scope but {} used with if..else or switch..case is not truely considered as scope, 
//{} used with functions considered as scope.

//Scope chaining means
// child can access parent and grandparent property,
// parent can access only grandparent property not of child,
// grandparent can't access child and parent property, 
// but these all individually can access their own property. Untill they own have propety they can't access the parent property. 
// it always find for the first adjacent parent's property

var myName = "Chirag";      //Grand parent 

console.log('The line is 13 ', myName);

function getName(){                             //Parent
    // var myName = 'MR C';
    console.log('The line is 17 ', myName);

    getNameTwo();
    function getNameTwo() {   
        // var myName = 'MR CP'                          //Child
        console.log("The line is 22 ", myName);
    }
}

getName();



