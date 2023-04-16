let str = 'Hi there I am using yahoo and yahoo is not a good browser';
let newStr;

newStr = str.replace("yahoo","Yahoo");      //Replace from only first place 

console.log(newStr);

newStr = str.replaceAll("yahoo","Yahoo");   //Replace from all places
console.log(newStr);


// function checkValue(value=0) {           //Set default value
//     console.log("Value is: ",value);
// }

function checkValue(value) {
    value ??= 0;                    //if value is null then set it as 0
    console.log("Value is: ",value);
}

checkValue();
checkValue(20);