//for of

//array specific

/* [{} , {} , {}] */

/* const arr = [1 , 2 ,3 , 4, 5 ]

for (const num of arr) {
    console.log(`value is ${num}`);
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}
 */
//Maps

const map = new Map()
map.set('IN' , "India")
map.set('AUS' , "Australlia")
map.set('USA' , "America")

//console.log(map);
//unique values

for (const [key , value] of map) {
    //console.log(key , ':-' , value); 
}
//not iteratable for objects like this for of 

const myobj={
    'game1':'NFS',
    'game2' : 'NBC'
}
for (const [key, value] of myobj) {
   // console.log(key , ':-' , value); //not iteratable

}