const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "rubby"
}

/* for (const key in obj) {
    //console.log(`${key} shortcut is for ${obj[key]}`);   
    } */

 const programming = ["js" , "rb" , "cp"]
    for (const key in programming) {
       //console.log(key); //0 1 2 output 
          //console.log(programming[key]);  
        }


const map = new Map()
map.set('IN' , "India")
map.set('AUS' , "Australlia")
map.set('USA' , "America")

for (const key in map) {
   //console.log(key);//no output as map is not iterable
   //console.log(map[key]); //no iteration
}

