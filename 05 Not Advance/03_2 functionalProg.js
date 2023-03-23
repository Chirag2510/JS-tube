/*
Functional Programming Concept 
1. Keep your data and function independent
2. Avoid changing state of variables, instead declare others
3. Functions are treated as first class. It means accept function/reference as a variable, argument and also as return value 
*/

//1 - Keep your data and function independent
let count = 456;

//dependent 
function sayHello() {
    count = count + 45;
    return count;
}

//Independent 
function sayHello(count) {
    count = count + 45;
    return count;
}

//2 - Avoid changing the state of variable, instead declare others
var hello = 'Hello';
var hello = 'Hey there';
var hello = 'Hey there, everyone';

var hello = 'Hello';
var helloWed = 'Hey there';
var helloSat = 'Hey there, everyone';

//3. Functions are treated as first class. It means accept function/reference as a variable, argument and also as return value 
/*
var sayHello = function(){...}

function sayHello(function (){...}) {
    return function () {...}
}
*/
