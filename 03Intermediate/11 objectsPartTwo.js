//Object with Methods 
//Use 'this' keyword to access the object values in object itself
var myPhone = {
    modelName: 'Oneplus Nord',
    osName: 'Android',
    storageGB: 128,
    ramGB: 6, 
    price: 30000,
    recommendable: true,
    purchaseList: [], 
    addPurchase: function(seriesName) {
        this.purchaseList.push(seriesName);
    },
    getPurchaseList: function() {
        return `You have purchase ${this.purchaseList.length} models of ${this.modelName}`;
    },
    showInfo: function() {
        return `The details of your phone is listed below,
            ModelName : ${this.modelName}
            OS: ${this.osName}
            Storage: ${this.storageGB} GB 
            RAM: ${this.ramGB} GB
            Price: ${this.price} $
        `;
    }
    
}

//This is not a part of myPhone Object
var purchaseList = true;

console.log(myPhone.getPurchaseList());
myPhone.addPurchase('Nord CE');
myPhone.addPurchase('Nord CE2');
console.log(myPhone.getPurchaseList());

console.log(`Purchased model names: ${myPhone.purchaseList}`)
console.log(purchaseList);

console.log(myPhone.showInfo());
