const myArray = ["Car", "Bus", "Bike"];
// myArray.forEach( function (items){
//     console.log(items)
// } )

// myArray.forEach( (val) => {
//     console.log(val);
// })

// function printme(items){
//     console.log(items);
// }

//myArray.forEach(printme)

// myArray.forEach( (item, index, arr) => {
//  console.log(item, index, arr);

// })

const code = [
  {
    languageName: "JavaScript",
    fileName: "js",
  },
  {
    languageName: "C++",
    fileName: "cpp",
  },
  {
    languageName: "Java",
    fileName: "Java",
  }
]

code.forEach( (items) => {
    console.log(items.languageName);
} )
