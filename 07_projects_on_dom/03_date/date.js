const clock = document.getElementById('clock')



//method set interval method
//koi method dedo and contious time ke liye chalta rehta hai

setInterval(function(){
let date = new Date()
//console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
} , 1000);