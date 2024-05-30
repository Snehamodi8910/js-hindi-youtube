const marvel = ["thor" , "Ironman"]
const dc = ["superman" , "batman"]

/* marvel.push(dc); //takes array as data 
//[ 'thor', 'Ironman', [ 'superman', 'batman' ] ]
console.log(marvel); */

/* const allheroes = marvel.concat(dc)
//concat works on new array
console.log(allheroes); */

/* const allheroes = [...marvel, ...dc] //ek-ek element individual hogya hai 
console.log(allheroes); */

/* const another_array = [1 ,2 ,3, [4, 5,6],7, [6 ,7 [4 ,5]]]
const real = another_array.flat(Infinity);
console.log(real);
 */


console.log(Array.isArray("Hitesh")); //false

console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"})); //interesting empty array

let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2  , score3));