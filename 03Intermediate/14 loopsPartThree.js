const names = ["Amazon","Netflix","Facebook","Whatsapp","Instagram"];

//'for of' loop - Generally used with Array
// for (const n of names) {
//     console.log(n);
// }

const symbols = {
    az: "Amazon",
    nf: "Netflix",
    fb: "Facebook",
    wa: "Whatsapp",
    ig: "Instagram"
}

//'for in' loop - Generally used with Objects 
for (const n in symbols) {
    // console.log(n);  //This will print all the keys of object
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}