//Dates

let myDate = new Date()
console.log(myDate); //2024-05-30T21:20:01.258Z

//coversions

console.log(myDate.toString()); //
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
//Thu May 30 2024 21:22:33 GMT+0000 (Coordinated Universal Time)
//Thu May 30 2024
//5/30/2024

console.log(typeof myDate);

let myCreatedDate = new Date(2024 , 4 , 30 , 5 , 3) //months start from 0 
console.log(myCreatedDate.toLocaleString()); //5/30/2024, 5:03:00 AM

let myCreatedDate2 = new Date("2024-01-14")
console.log(myCreatedDate2.toLocaleString()); //dd-mm--yy mai 1 se start hota hai month
//in indai we gen follow mm-dd-yy

/* let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime())
// to convert in seconds 

console.log(Math.floor(Date.now()/1000)); //problem - decimal values
//Math.floor */

let newdate = new Date()
console.log(newdate.getDay());
//getmonth()+1 

console.log(`the day is ${newdate.getDay()} and the time is ${newdate.getTime()} ms and the timezone is ${newdate.getTimezoneOffset()}`);

//Imp
newdate.toLocaleString('default' , {
    weekday: "long",
    
})