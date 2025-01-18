// Arrays
// In JavaScript, arrays aren't primitives
// JavaScript arrays are resizable and can contain a mix of different data types

const myArray = [0, 1, 2, 3, 4]

const myArray2 = new Array(1, 2, 3, 4, 5, 6)

console.log(myArray[2])
console.log(myArray.length)
//console.log(myArray2)

// Array Methods

myArray.push(5)  // Add Item in array
// myArray.pop()   // Delete item from last in array

// myArray.unshift(6) // Add item at first in array
// myArray.shift() // Remove item at first in array

// console.log(myArray.includes(2));
// console.log(myArray.indexOf(2));

const newArray = myArray.join()

console.log(myArray)
console.log(newArray)
console.log(typeof newArray)

// Slice and Splice

console.log("A ", myArray);

// Slice

const myArr = myArray.slice(1,3)
console.log(myArr);

console.log("B ", myArray);

//Splice   Note: Splice manipulate orginal array

const myArr2 = myArray.splice(0,3)
console.log("C ", myArray);
console.log(myArr2);