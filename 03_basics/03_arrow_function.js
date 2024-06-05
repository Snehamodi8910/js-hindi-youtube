//arrow function and this keyword
//this keyword 

/* const user ={
    username : "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);//value hardcode nhi ki thi 
        console.log(this);
    }
}  
 */
/*   user.welcomemessage()

user.username =  "sam" //yha value change krdi 
user.welcomemessage()  */
/* hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomemessage: [Function: welcomemessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomemessage: [Function: welcomemessage]
} */

/* console.log(this);//{}
 *///this refers to {}


/*  function chai(){
    let username = "sneha"
    console.log(this); //function ke andar agar hm this ko print krte hai to bohot saari values aati hai 
 }
 chai() */

/*  function chai(){
    let username = "sneha"
    console.log(this.username); //function ke andar agar hm this ko print krte hai to bohot saari values aati hai 
 }
 chai()  //undefined

 const chai = function(){
    let udername = "sneha"
    console.log(this.username);
 }
 chai() //undefined 

const chai = () => {
    let udername = "sneha"
    console.log(this.username);
}
chai()
*/

/* 
const addTwo = (num1 , num2)  => {
    return num1 +num2
}
 */

//implicit return 

const addTwo = (num1 , num2)  =>  ( num1 +num2)


 console.log(addTwo(2 , 8)); 

 //arrow function and this keyword
//this keyword 

/* const user ={
    username : "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);//value hardcode nhi ki thi 
        console.log(this);
    }
}  
 */
/*   user.welcomemessage()

user.username =  "sam" //yha value change krdi 
user.welcomemessage()  */
/* hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomemessage: [Function: welcomemessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomemessage: [Function: welcomemessage]
} */

/* console.log(this);//{}
 *///this refers to {}


/*  function chai(){
    let username = "sneha"
    console.log(this); //function ke andar agar hm this ko print krte hai to bohot saari values aati hai 
 }
 chai() */

/*  function chai(){
    let username = "sneha"
    console.log(this.username); //function ke andar agar hm this ko print krte hai to bohot saari values aati hai 
 }
 chai()  //undefined

 const chai = function(){
    let udername = "sneha"
    console.log(this.username);
 }
 chai() //undefined 

const chai = () => {
    let udername = "sneha"
    console.log(this.username);
}
chai()
*/

/* 
const addTwo = (num1 , num2)  => {
    return num1 +num2
}
 */

//implicit return 

/* const addTwo = (num1 , num2)  =>  ( num1 +num2)
 */



