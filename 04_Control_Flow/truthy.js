// Falsy amd Truthy Value
// Falsy Value null, 0, -0, Bigint on, "", undefined, NaN, document.all.
//


const userEmail = []

if (userEmail) {
    console.log("Got The User Mail");
} else {
    console.log("Don't Have Email")
}

if(userEmail.length === 0){
    console.log("Array Is empty")
}


// Nullish Coalescing Operator (??): null undefine

let val1;

//val1 = 5 ?? 10  // Give 5
// val1 = null ?? 10 // gives 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);



// Terniary Operator

// condition ?  true : false

const iceTeaPrice = 50
iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More then 80")