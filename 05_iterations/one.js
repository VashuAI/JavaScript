// For loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("This is five")
  }
  //console.log(element)
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`)
  for (let v = 0; v <= 10; v++) {
   // console.log(`Inner loop value : ${v} and Inner loop value: ${i}`)
   // console.log(i + '*' + v + ' = ' + i*v);
  }
}

let myArray = ["Car", "Bus", "Bike"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// Keywords In Loop

// Brack and Continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Value of i is 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Found`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}
