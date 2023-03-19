//Object creation
var myPhone = {
    modelName: 'Oneplus Nord',
    osName: 'Android',
    storageGB: 128,
    ramGB: 6, 
    price: 30000,
    recommendable: true
}

//Object access
console.log(myPhone.modelName);
console.log(myPhone["modelName"]);

console.log(myPhone);

//Table format
console.table(myPhone);
