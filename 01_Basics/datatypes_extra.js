// Primitive Date Types in Js
// 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt



// Reference (Non-primitive)
// 1.Array 2.Object 3.Functions

// Arrays

const cars = ["Car1", "Car2", "Car3"];

// Object

let myObj = {
    name : "My Name",
    age : 24,
}


// Function

const myFunction = function(){
    console.log("This Is  A Function");
}

console.log(cars)
console.log(myObj)
myFunction();





// ************ Memory **********************

// Stack (Primitive)  and Heap (Non-Primitive)

// Stack 

let name1 = "Vashu"

let anotherName = name1

anotherName = "Vashudev Vishwas"

console.log(name1);
console.log(anotherName);


// Heap

let userOne = {
    name : "User1",
    id : 20,
}

console.log(userOne)

let userTwo = userOne;

userTwo.Id = 25

console.log(userOne.Id);
console.log(userTwo.Id);