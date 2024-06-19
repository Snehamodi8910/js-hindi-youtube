//generate a random color
//random-hex

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervalId 
  const startchangingcolor = function(){
    function change(){
      document.body.style.backgroundColor = randomColor()
    }
    if(!intervalId){
      intervalId = setInterval(change , 1000) //check the edge cases 
    }
    
    
  }
  document.querySelector("#start").addEventListener('click' , startchangingcolor)
  
  
  
  const stopchangingcolor = function()
  {
    clearInterval(intervalId)
    intervalId = null //better wauy to cleanup 
  }
  document.querySelector("#stop").addEventListener('click' , stopchangingcolor)
  
  