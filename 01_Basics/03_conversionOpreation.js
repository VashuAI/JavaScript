// Conversion in JavaScript


let score = "20aa"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

//"20" => 20
//"20aa" => NaN

let isLoggedIn = ""
let booleanTsLoggedIn = Boolean(isLoggedIn)
console.log(booleanTsLoggedIn);

// 1 => true; 0 => false
// "" => false
//"String" => True


let someNumber = 50
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// Operations In JavaScript

let value = 3
let negValue = -value
console.log(negValue)


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3); // Reminder


let str1 = "Hello";
let str2 = " World"
let str3 = str1 + str2
console.log(str3);