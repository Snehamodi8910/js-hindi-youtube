//ek package me band krna code ko
/* 
console.log("h");
console.log("i");
console.log("h");
console.log("i"); */

/* function saymyname(){
    console.log("h");
    console.log("i");
    console.log("h");
    console.log("i");
}

 */
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

/* 
function add(x , y){
    /* let res = x + y
    return res //ab 8 print hoga 
   // return x+y
} 
/* 
const res = add(3 , 5)
* console.log("result is" , res);  */// result is undefined
/*
function loginuser(username = "sam"){//default value dedi
    if(username === undefined){
        console.log("enter the username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginuser()); 
*/

function calculateprice(val1 , val2 , ...num1){
    return num1
}
console.log(calculateprice(200 , 400 , 500 , 2000) );//jab bahut saari values pass kr rhe hai to rest operator ...
//[ 200, 400, 500 ] before val1 val2
//after val1 val2 [ 500, 2000 ]

const user={
    username : "hitesh",
    prices: "199"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
/* handleObject(user)
 */
handleObject({
    username: "sam",
    price: 399
})


const mynewArray = [200 , 400 , 100 , 600]

function returnsecondvalue (getarray){
    return getarray[2]
}
console.log(returnsecondvalue(mynewArray));//400

console.log(returnsecondvalue([200 , 400 , 600 , 800]));
 
