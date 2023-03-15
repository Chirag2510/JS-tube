const uid = 'abc123';

//uid = 'adsfsadf';
console.log(uid);

var fullName = "Chirag Patel";
var address = "test";
var email = 'chiragpatel@gmail.com';
var contact = 9998083028;
var isLoggedInFromGoogle = true;
var isLoggedInFromFacebook = false;

console.log("My Full Name is: " + fullName); //better for me
console.log("My Full Name is: ",fullName);

console.log(`
    My FullName is : ${fullName}
    and living at: ${address}
    having email id is: ${email}
    Please contact me on this number: ${contact}
    Logged in from Google: ${isLoggedInFromGoogle}
    Logged in from Facebook: ${isLoggedInFromFacebook}
`);