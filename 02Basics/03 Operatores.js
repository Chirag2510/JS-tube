var listingPrice = 799;
var cellingPrice = 199;

var discountPercentage = ((listingPrice - cellingPrice)/listingPrice) * 100;

console.log("Discount Percentage is: " + discountPercentage);

var discountPercentageInRounded = Math.round(discountPercentage);

console.log(discountPercentageInRounded + "% OFF");

var result = listingPrice > cellingPrice;

console.log(result);

console.log(typeof result);

console.log(typeof listingPrice);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence