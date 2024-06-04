//ek package me band krna code ko
/* 
console.log("h");
console.log("i");
console.log("h");
console.log("i"); */

function saymyname(){
    console.log("h");
    console.log("i");
    console.log("h");
    console.log("i");
}


/* saymyname //reference
saymyname()//execution */

/* function add(x , y){
    let res = x + y
    return res
} */
/* add()  */
//NAN

/* as no arguments given */

/* add(3 , "4") //string leliya
add(3 , null) //3 */


function add(x , y){
    /* let res = x + y
    return res //ab 8 print hoga */
    return x+y
} 

const res = add(3 , 5)
/* console.log("result is" , res);  */// result is undefined

function loginuser(username = "sam"){//default value dedi
    if(username === undefined){
        console.log("enter the username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginuser());

 
