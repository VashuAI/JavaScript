// Scopes in javascript

/*The scope is the current context of execution in which values and expressions are "visible"
  or can be referenced. If a variable or expression is not in the current scope, it will not 
  be available for use. Scopes can also be layered in a hierarchy, so that child scopes have 
  access to parent scopes, but not vice versa. */

  // Global scope, Module scope, Function scope, Block scope. 

// let a = 300

// if(true){
//     let a = 10
//     const b = 20

//     console.log("Inner", a) 
  
// }
// console.log(a);
function one() {
  const username = "Vashu"; // Scope of 'one' and accessible in 'two'

  function two() {
    const website = "Youtube"; // Scope of 'two', not accessible outside 'two'
    console.log(username); // Logs "Vashu"
  }

  // console.log(website); // This would throw an error because 'website' is not in scope
  two(); // Invokes 'two' which logs "Vashu"
}

// one()

// **********************************************************************************

function addone(num){
  return num + 1
}

console.log(addone(5))

const addTwo = function(num){
  return num + 3
}

addTwo(5)