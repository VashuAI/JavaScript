// Objects literals

const mySym = Symbol("key1")

const myObj = {
    name: "ABC",
    age : 19,
    location: "Sitarganj",
    email: "abc@mail.com",
    [mySym]: "My-Key" // add Symbol in object
}

// console.log(myObj.email)
// console.log(myObj["email"])
// console.log(myObj["email"])

// Print Symbol
console.log(myObj[mySym])

//Change Value in Object
myObj.age = 20

// Lock or freeze object

// Object.freeze(myObj)
// myObj.age = 50 // Not Gonna change !

console.log(myObj);


myObj.greeting = function(){
    console.log("Hello Developer !")
}
myObj.greeting2 = function(){
    console.log(`Hello Developer !, ${this.name}`);
}

console.log(myObj.greeting());
console.log(myObj.greeting2());
