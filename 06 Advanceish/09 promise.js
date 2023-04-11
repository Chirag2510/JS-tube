//Promise, Async, Await
//Promise - Gives us two values resolve and reject - resolve means everything is good, reject means something is wrong and throws an error
//Async - Whenever any method uses a Promise then we need make calling method as Asynchronus using Async keyword 
//Await - Used for method which is having some code to wait for few seconds 

const tom = () => {
    return "I am one";
};

// const jerry = () => {
//     //This will not stop the execution but it allows to move forward
//     setTimeout(() => {
//          return "I am two";
//     }, 3000);
// };

//Similar to Object we can create a Promise which takes a callback function as an argument. 
//This callback function is having two arguments as resolve and reject
const jerry = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I am two"); //It can have object,array as well not only string
        }, 3000);  
    })
};

const cat = () => {
    return "I am three";
};

//Making a method as Asynchronus using async keyword
const callMe = async () => {
    const callOne = tom();
    console.log(callOne);

    //Used await to stop the execution untill get a response
    const callTwo = await jerry();
    console.log(callTwo);

    const callThree = cat();
    console.log(callThree);

}

callMe();