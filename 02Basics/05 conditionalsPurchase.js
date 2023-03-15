var isLoggedIn = true;
var isEmailVerified = true;
var isCardAdded = true;

// if (isLoggedIn) {
//     console.log("Log in success");

//     if (isEmailVerified) {
//         console.log("Email is verified");

//         if (isCardAdded) {
//             console.log("Card is added so now you can make a purchase.");
//         }
//     }
// }

// if (isLoggedIn) 
// {
//     console.log("Log in success");
// }
// else if (isEmailVerified) 
// {
//     console.log("Email is verified");
// }      
// else if (isCardAdded)
// {
//     console.log("Card is added so now you can make a purchase.");
// }

if (isLoggedIn && isEmailVerified && isCardAdded) {
    console.log("You can make a purchse");
}
else{
    console.log("You can not make a purchase");
}