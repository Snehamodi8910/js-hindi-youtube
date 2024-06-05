//Immediately invoked function executin 

(function chai(){
    //named iife
    console.log(`DB CONNECTED   `)
} )();

( (name)  => {
    //unnamed IIFE
    console.log(`DB CONNECTED Two ${name}`)
}) ('hitesh')