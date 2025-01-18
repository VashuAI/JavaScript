// if

/*

Comparison Operators

Greater than >, Less than <, Less than or equal to <=, Greater than or equal to >=, Equal to ==, Not equal !=, 
Equal value and equal type ===, Not equal value or not equal type !== .

*/

// const amount = 140;

// if (amount > 150) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const userLoggedIn = true
const debitCard = true

const logInFromEmail = true
const logInFromGoogle = true


if (userLoggedIn && debitCard) {
      
    console.log("Allow To Buy")

}

if (logInFromEmail || logInFromGoogle) {
    console.log("User Loggedin")
}