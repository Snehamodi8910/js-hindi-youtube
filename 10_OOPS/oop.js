//Object literal

/* const user = {
    username : "hitesh",
    loginCount : 8, 
    getUserDetails: function(){
        //console.log(`username:${this.username}`);
        console.log(this);
        //  username: 'hitesh',
        //loginCount: 8,
    }
}

const user2 = {
    username : "sneha",
    loginCount : 8, 
    getUserDetails: function(){
        //console.log(`username:${this.username}`);
        //console.log(this);
        //  username: 'hitesh',
        //loginCount: 8,
    }
} */
/* console.log(user.getUserDetails());
console.log(this);//{} */
//current context ke liye this keyword



//constructor function - new kwyword
//ek hi obj se multiple instance bana sko 
//nya context bana ta hai

function User(username , loginCount , isloggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedin = isloggedin

    
}

const userone = new User("hitesh" , 12 , true);
const user2 = new User('sneha' , 11, false)
/* console.log(userone); */
//console.log(user2);

console.log(userone.constructor);


//value overwrite hogyi after mene user 2 declare kiya 

//Band baj jaaegi 
//isiliye we use new function 
/* User { username: 'hitesh', loginCount: 12, isloggedin: true }
User { username: 'sneha', loginCount: 11, isloggedin: false } */

//WHAT IF HAM RETURN THIS nhi krte??
//implicitly define rehta hai to return this krne ki zrurt nhi

//step 1 = new keyword pe ek naya object create hota hai 
//step -2 = constructor function call hota hai
//step 3 saare arguments inject hojaate hai 
// render hojaaega 


//instance of 


