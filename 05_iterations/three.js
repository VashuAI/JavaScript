// For of

// [{}, {}, {}] objects in array
 
const arr = [1, 2, 3, 4]

for (const num of arr) {
    // console.log(num);
    
}

const hello = "Hello Vashu"

for (const say of hello) {
    //console.log(say);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")

// console.log(map);
for (const [key, value ]of map) {
    
  // console.log(key, ':', value);
}


const myObj = {
    Game1 : "NFS",
    Game2 : "COD",
    Game3 : "CODM"
    
}


for (const [key , value] of myObj) {
    console.log(key, ':', value);
}