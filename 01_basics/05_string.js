/* const name = "sneha"
const repoCount = 4

/* console.log(name + repoCount + "value") */

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

console.log("hello ");

const gamename = new String('hitesh-hc')
console.log(gamename[0]);

  console.log(gamename.length);
 console.log(gamename.toUpperCase());
 console.log(gamename.charAt(2));
 console.log(gamename.indexOf('t')); 
  
 const newString = gamename.substring(0 , 4)//s[4] doesn't get included in the output
console.log(newString);

const anotherstring = gamename.slice(-8 , 4)
console.log(anotherstring); //reverse se count krega

const newstringone = "    hitesh   "
console.log(newstringone);
console.log(newstringone.trim());// removes the extra space  */
//trim start and end also exists

//replace
const url = "https://sneha.com/sneha%20modi"


console.log(url.replace('%20' , '-')) //https://sneha.com/sneha-modi

console.log(url.includes('sundar')); //false
//split needs a seperator and a limit 
console.log(gamename.split('-'));


