

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and current val : ${currval} `);
    
    return acc + currval
}, 0 )
console.log(myTotal);

const myTotal2 = myNums.reduce( (acc, currval) => acc+currval,0)
console.log(myTotal2);


// Cart
 const cart = [
    {
        itemName : "Js",
        price : 2000,
    },
    {
        itemName : "Python",
        price : 2900,
    },
    {
        itemName : "Java",
        price : 3000,
    }
 ]

 const myTotalCartValue = cart.reduce((acc, item) => acc + item.price, 0)

console.log(myTotalCartValue);
