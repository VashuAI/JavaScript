const user = {
    username : "Vashu",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMsg()

// user.username = "Mark"
// user.welcomeMsg()
// console.log(this)

// function tech(){
//     console.log(this);

// }
// tech()

// Arrow Function

// const arrowF = () => {
//     let username = "Vashu"
//     console.log(this);
// }

// arrowF()

// const addTwo = (num, num1) => {

//     return num + num1

// }

// console.log(addTwo(2, 3))

// const addTwo = (num, num1) => num + num1
// console.log(addTwo(2, 3))

// const addTwo = (num, num1) => (num + num1)
// console.log(addTwo(2, 3))


//Return Object with {}
const addTwo = (num, num1) => ({username : "Vashu"})
console.log(addTwo(2, 3))