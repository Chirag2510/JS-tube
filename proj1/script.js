//Remember this for querySelector
//Use . to define classname
//Use # to define id 
//If not used anything then it indicates the tag name

// var counter = document.querySelector(".counter");
// var follower = document.querySelector(".followers");

//setTimeout - Used to perform some task after given time
//setInterval - Used to perform some task within given time 

// let count = 1;

// setInterval( () => {
//     if (count <= 1000) {
//         counter.innerHTML = count;
//         count++;
//     }
// }, 1)

// setTimeout ( () => {
//     follower.innerHTML = "Follower on Instagram";
// },7000)


var counter = document.getElementsByClassName("counter");
var follower = document.getElementsByClassName("followers");


let count = 1;

setInterval( () => {
    if (count <= 1000) {
        counter[0].innerHTML = count;
        count++;
    }
}, 1)

setTimeout ( () => {
    follower[0].innerHTML = "Follower on Instagram";
},7000)