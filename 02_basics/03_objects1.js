//singleton  - constructor se banta hai 
//literals se declare krte hai to singleton nhi banta

//object literals - way to declare objects
/* Object.create //constructore method
 */

//symbol

const mySm = Symbol("key1")
const JsUser = {
    name: "Hitesh",
     //yha key and value dono define kr skte hai  ; by default string ki tarah leta hai  
    age: 18,
/*     "full name": "HItesh Modi" //can not access by . method now
 */    
   /*  mySm: "mykey1",  */// can't do this not used as symbol but data type - sring 
    [mySm]: "mykey1",//here data type - symbol
    location: "jaipur",
    email: "xyz@gmail.com",
    isLoggedIn: false
 }

/* console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser[mySm]) // [Symbol(key1)]: 'mykey1'
 

myArray = ["h" , "i"]
 myArry[1] this is how u access */
  

JsUser.email = "hiteshxyz.@gmail.com"
/* Object.freeze(JsUser)
 */JsUser.email = "snehamodi@gmail.com"

console.log(JsUser);  

 JsUser.greeting = function(){
  console.log("Hello userr");
 }
 JsUser.greeting2= function(){
  console.log(`Hello userr , ${this.name}`);
 }
 console.log(JsUser.greeting);//anonymous fn
 console.log(JsUser.greeting()) //Hello jsuser
 console.log(JsUser.greeting2())
