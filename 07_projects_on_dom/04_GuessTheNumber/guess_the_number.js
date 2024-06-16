let randomnum = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

//saare elements leliye 
//now 
//arrays prevguess jo bhi submitted value hai usko display krna 
let prevGuesses = []
//number of guesses tracker
let numGuesses = 1
//playgame var allow u to play the game 
let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess =  parseInt(userinput.value)
    
    validateGuess(guess)

  })
}
function validateGuess(guess){
  //number diya hai , range se bahar and no negative number 
  if(isNaN(guess)){
    alert(`please enter a valid number`);
  }
  else if(guess < 1){
    alert(`please enter a valid number greater than 1`);
  }
  else if(guess > 100){
    alert(`please enter a valid number less than 100`);
  }
  
  else
  {
    prevGuesses.push(guess);
    if(numGuesses === 11)
    {
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${randomnum}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  //guessed value correct low high 
  if(guess === randomnum){
    displayMessage(`You Guessed it right`)
    endGame();
  }
  else if(guess<randomnum){
    displayMessage(`Number is too low`)
  }
  else{
    displayMessage(`Number is too high`)
  }
}
function displayGuess(guess){
  //seedha dom ke sth interact krega 
  //user ki value ko empty krdege and inner html ke andar guess ko add krdege and numGuess ko update and array update
  userinput.value = '';//cleanup
  guessslot.innerHTML += `${guess}`;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`
  
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //clear all input fields
    userinput.value = ''
    userinput.setAttribute('disabled' , '')
    p.classList.add('button') 
    p.innerHTML = `<h2 id= "newGame" >Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
   const newGameButton =  document.querySelector('#newGame')
   newGameButton.addEventListener('click', function(e){
      randomnum =  (parseInt(Math.random() * 100 + 1));
      prevGuesses = []
      numGuesses = 1
      guessslot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuesses}`;
      userinput.removeAttribute('diabled')
      startOver.removeChild(p)
      playGame = true;
   })
}




