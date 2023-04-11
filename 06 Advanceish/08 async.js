//Read about Event loop and concurrency model from MDN

//Event loop is used for getting the concurrency in execution 
//Event loop - It uses the queue to maintain the messages and whenever get any new message then start to process it

// while(queue.getnextmessage()){
//     queue.processnextmessage();
// }

const tom = () => {
    return console.log("I am one");
};

const jerry = () => {
    //This will not stop the execution but it allows to move forward
    setTimeout(() => {
        return console.log("Wooooohooooo");
    }, 3000);
    return console.log("I am two");
};

const cat = () => {
    return console.log("I am three");
};

tom();
jerry();    
cat();