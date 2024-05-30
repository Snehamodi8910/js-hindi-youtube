//arrays
const myArray = [0 ,1 ,2 ,3 ,4 ,5 ]
/* console.log(myArray[1]); */
const myHeroes = ["shaktiman" , "xyz"]
const myArray2 = new Array(1 ,2 ,3, 4)

//Array methods 

myArray.push(6)
myArray.push(7)
console.log(myArray);
myArray.pop()
console.log(myArray);  


//add and remove an element in the beg. 

 myArray.unshift(9) //time consuming to add in beginning 
console.log(myArray);

myArray.shift()
console.log(myArray);//remove elements from beginning
 

console.log(myArray.includes());
console.log(myArray.indexOf(3));

const newArr = myArray.join()
console.log(myArray);
console.log(typeof newArr); //string conversion  */

//slice , splice 

console.log("A" , myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B" , myArray);

const myn2 = myArray.splice(1 ,3)
console.log("C" , myArray); //original array manipulated on splice function 
console.log(myn2);
//outputs 

/* A [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B [ 0, 1, 2, 3, 4, 5 ]
C [ 0, 4, 5 ]
[ 1, 2, 3 ] */

