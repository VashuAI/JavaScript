// Functions in javascript

// function myFunction(){
//     console.log("V")
//     console.log("A")
//     console.log("S")
//     console.log("H")
//     console.log("U")
// }

// myFunction()

// function add(num1, num2){
//    console.log(num1 + num2);
// }

// const result = add(5,7)

function add(num1, num2) {
  // let result = num1 + num2
  // return result
  return num1 + num2;
}

const result = add(5, 7);

// console.log("Result:", result);

function userLoggedInMsg(username) {
  if (!username) {
    return "Please Enter A User Name";
  } else {
    return `${username} just logged in !`;
  }
}

// console.log(userLoggedInMsg());

function calculateCartPrice(...num1){    // ... this is rest opperater
    return num1
}

// console.log(calculateCartPrice(200,300,400))

const user = {
    username : "Vashu",
    price : 200
}

function handleOnject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`)
}

handleOnject(user)

const myNewArray = [100, 200, 300, 400]

function returnSecondvalue(getArray){
    return getArray[2]
}

console.log(returnSecondvalue(myNewArray));