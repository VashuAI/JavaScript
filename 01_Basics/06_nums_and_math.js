const age = 50
console.log(age)

const balance = new Number(200)
console.log(balance)


console.log(balance.toString().length);
console.log(balance.toFixed(2));   // This will give 200.00


const otherNumber = 120.8562

console.log(otherNumber.toPrecision(4));  // This will give 120.9  Note= use according your number !


const numLocale = 10000000
console.log(numLocale.toLocaleString('en-IN')); //This will give indian number system

console.log("*************** Maths ****************")


// ********** Maths ***************

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.6)); // Mostly Used
console.log(Math.ceil(5.3));
console.log(Math.floor(5.8));

let minMax= ['8', '9', '10', '15'] // Array

console.log(Math.max(...minMax)); // To Get max value from array
console.log(Math.min(...minMax)); // To Get min value from array


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);