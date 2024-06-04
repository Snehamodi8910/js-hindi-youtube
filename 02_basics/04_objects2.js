/* /* const tinderUser = new Object()
 */

const tinderuser = {}

tinderuser.id = "123"
tinderuser.name = "samay"
tinderuser.isLoggedIn = false

/* console.log(tinderuser); */

const regularuser ={
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sneha",
            lastname:"modi"
        }
    }
}

/*console.log(regularuser.fullname.userfullname.firstname); //sneha
 */

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "a" , 4:"b"}

/* const obj3 = {obj1 , obj2} */

const obj3 = Object.assign({} , obj1 , obj2)
/* console.log(obj3);
 */

const users = [
    {
        id:1,
        email:"sneha@gmail.com"

    },
    {
        id:1,
        email:"sneha@gmail.com"

    },
    {
        id:1,
        email:"sneha@gmail.com"

    },
]   
users[1].email
console.log(tinderuser);

 console.log(Object.keys(tinderuser));//data type array  
 console.log(Object.entries(tinderuser));//data type array 
 console.log(Object.values(tinderuser));//data type array

 console.log(tinderuser.hasOwnProperty('name'));//true

 /* output yet
{ id: '123', name: 'samay', isLoggedIn: false }
[ 'id', 'name', 'isLoggedIn' ]
[ [ 'id', '123' ], [ 'name', 'samay' ], [ 'isLoggedIn', false ] ]
[ '123', 'samay', false ]
true 
*/