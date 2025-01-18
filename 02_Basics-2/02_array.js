// Arrays Part-2

const myArrayA = ["A1", "A2", "A3", "A4"]
const myArrayA2 = ["B1", "B2", "B3", "B4"]

// Join Arrays

const mainArr = myArrayA.concat(myArrayA2); //Concat array method
console.log(mainArr)

const mySpreadArr = [...myArrayA, ...myArray2]  // spread array method
console.log(mySpreadArr);


//Mixed array short in one array.

const mixArr = [1,2,[3,4,[5,6,7,[8,9,]]]]

const shorInOne = mixArr.flat(Infinity)
console.log(shorInOne);


console.log(Array.isArray("vashutechsyst"))
console.log(Array.from("vashutechsyst")) // Converet into array
console.log(Array.from({name:"vashutechsyst"}))

// OF array.............