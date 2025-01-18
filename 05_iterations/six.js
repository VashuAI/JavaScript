// const myArray = ["Car", "Bus", "Bike"];
// const values = myArray.forEach( (item) =>{
//    // console.log(item);
//    return item

// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {
//    return num > 4
// });

newNums = []

myNums.forEach ( (num) => {

    if (num > 4){
        newNums.push(num)
    }

})
console.log(newNums);


const books = [
    {
        title: 'Book One' , genre : 'Fiction', publish : 2000, edition: 2002
    },
    {
        title: 'Book Two' , genre : 'Non - Fiction', publish : 2001, edition: 2003
    },
    {
        title: 'Book Three' , genre : 'Science', publish : 2005, edition: 2007
    },
    {
        title: 'Book Four' , genre : 'history', publish : 2012, edition: 2018
    },
    {
        title: 'Book Five' , genre : 'Fiction', publish : 2020, edition: 20023
    }
]

let userBooks = books.filter((book) => book.genre === 'history')
userBooks = books.filter((book) => book.publish >= '2001' && book.genre === 'history')

console.log(userBooks);

