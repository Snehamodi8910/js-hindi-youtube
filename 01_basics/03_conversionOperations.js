let score = true

 console.log(typeof score);//string
console.log(typeof (score));//string 

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number output NaN
console.log(valueInNumber)
 
//"33" => 33
//"33abc" => NaN
//true = 1 ; false=> 0


let isLoggedIn = "hitesh"

let booleanisLoggedIn = Boolean(isLoggedIn) 
console.log(booleanisLoggedIn); 

/* 1=>true , 0=>false
    ""=>false
    "hitesh" => true */


let some = 33
let stringNumber = String(some)
console.log(stringNumber);  //prints 33 
console.log(typeof stringNumber); //string