//if statement
/* const temp = 51
if(temp<50){
    console.log("less than 50");
}
else {
    console.log("greater than 50");
}
 */
/* 
const score = 200
if(score>100){
    const power = "fly" //var global scope
    console.log(`user power : ${power}`);
}
console.log(`user power : ${power}`);//for this power not defined  */


/* const balance = 1000
 *//* if(balance>500) console.log("test") , console.log("test2");; */

/* if(balance < 500) console.log("less than");
else if(balance <750) console.log("less than 750");
else console.log("greater than 1200"); */

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfrommail = true

if(loggedinfromgoogle || loggedinfrommail) console.log("allow");