//create promises 

/* const promise1 = new Promise(function(resolve , reject){
    //do async task 
    //DB CALLS , NETWORK CALLS 
    setTimeout(function(){
        console.log('task done');
        resolve() //by callibng resolve() we get 
        //task done
        //promise consumed
        
    }, 1000)
    //resolve or reject ne kya kiya 
})

promise1.then(function(){//connected to resolve
    console.log('promise consumed') 
})

new Promise(function(resolve, reject)  {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
        console.log("async 2 resolved");
    }) */
/* output=
 task done
promise consumed
Async task 2
async 2 resolved */


const promise3 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "chai" , email: "bbb@gmail.com"})//object leliya 
    }, 1000)
})

promise3.then(function(user){
    //console.log(user);
})


const promise4 = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "sneha" , password: "1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

promise4.then((user)=> {
   // console.log(user);
    return user.username;
}).then((username)=>{
    //chaining
    //console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    //console.log("The promise is either resolved or rejected");
})
//{ username: 'sneha', password: '1234' }
//sneha
//The promise is either resolved or rejected


const promise5 = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "js" , password: "1234"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//PROMISE KYA HAI -- future mai hone vaali ek cheez to usko async await se bhi handle kr skte

async function consume(){
    try {
        const response = await promise5
    
    } catch (error) {
        console.log(error);
    }
}

consume()

//async await can not handle catch errors 
    
async function getallusers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/')//time lagta hai request krne mai thats why await
   const data = response.json()
   //console.log(data);
   
   
   } catch (error) {
    //console.log('error ditected' . error);
   }``
}

getallusers()