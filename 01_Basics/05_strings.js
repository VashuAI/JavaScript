const name = "Vashu"

const lastName = "Vishwas"

// console.log(name + lastName );  

console.log(`Hello Im ${name} ${lastName}`); // Best way To write with Back Tick

const siteName = new String('vashutechsyst')

console.log(siteName.length)
console.log(siteName.toLocaleUpperCase())
console.log(siteName.charAt(0))
console.log(siteName.indexOf('u'))

const newSite = siteName.substring(0,5)
console.log(newSite);

const newSite2 = siteName.slice(-13, -5)
console.log(newSite2);


const theSite = "    vashu   "
console.log(theSite)
console.log(theSite.trim())

const url = "https://vashutech.com/tech%60vashu"
console.log(url.replace('%60', '-'))



//Convert To Array

const noArray = "Vashu - Vishwas - 23 - Sitarganj"
console.log(noArray.split('-'));
