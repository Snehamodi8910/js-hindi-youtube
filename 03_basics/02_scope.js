/* var c = 300
 */
let a = 300
/* 
if(true){
    let a = 10
    const b = 20 
    console.log("INNER" , a);//INNER 10
    
/*      c = 30
} //block scope 

/* console.log(a);
console.log(b); */
/* console.log(a); */ //var ke time pe output comes as 30 

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
       // console.log(username);
    }
/*     console.log(website);
 */
/*     two()
 */}
one()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5)) //no error

function addone(num){
    return num+1 
}

console.log(addtwo(5)) //error

const addtwo = function(num){ //also called as expressions 
    return num + 2
} //yha declare krne ke sth sth variable mai store bhi kiya hua hai 



