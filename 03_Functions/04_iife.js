// IIFE (Immediately Invoked Function Expression)
// Avoid polluting the global


// Named IIFE

(function test01(){
    console.log(`DB CONNECTED`);
}) ();                          // ; is importent in iife

// Unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED ${name}`);
} ) ('Vashu')