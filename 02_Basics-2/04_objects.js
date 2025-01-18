// Object in javascript

const target = { a: 1, b: 2 };
const source = { f: 8, c: 5 };

const obj = Object.assign({},target, source);  // use an object {}

const obj1 = {...target, ...source}

// console.log(obj);
// console.log(obj1);


const users = [
    {
        id: 1,
        email : "mail@gmail.com",

    },
    {
        id: 2,
        email : "mail1@gmail.com",

    },
    {
        id: 3,
        email : "mail2@gmail.com"

    }
]

// console.log(users[0].email)

const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// console.log(person.hasOwnProperty('lastName'));


// ++++++++ destructuring object ++++++++

const course = {
    coursename : "JavaScript",
    price : "999",
    courseInstructure: "Hitesh"
}

// Destructuring

const {courseInstructure} = course
console.log(courseInstructure);



// {
//     "coursename" : "JavaScript",
//    " price ": "999",
//    "courseInstructure" : "Hitesh" 
// }