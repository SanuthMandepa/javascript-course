

function handleCostKeydown(event){
  if(event.key ==='Enter'){
    calculateTotal();
  }
}
function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  if(cost <40){
    cost = cost +10;
    console.log(cost)

  }
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}
let score = JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();
/*if(!score){
score ={
  wins:0,
  losses:0,
  ties:0
}
};*/

let isAutoPlaying = false;

let intervalId;
function autoPlay(){
  if(!isAutoPlaying){
  intervalId = setInterval(function(){
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 1000);
  isAutoPlaying = true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function playGame(playerMove){
const computerMove = pickComputerMove();
let result ='';
if (playerMove ==='scissors'){
  if (computerMove ==='scissors'){
    result ='Tie';
  }
  else if(computerMove ==='rock'){
    result = 'loss';
  }
  else{
    result = 'win';
  }
}else if(playerMove ==='paper'){
  if (computerMove ==='paper'){
    result ='Tie';
  }
  else if(computerMove ==='scissors'){
    result = 'loss';
  }
  else{
    result = 'win';
  }
}else{
  if (computerMove ==='rock'){
    result ='Tie';
  }
  else if(computerMove ==='paper'){
    result = 'loss';
  }
  else{
    result = 'win';
  }
}

if(result === 'win'){
  score.wins +=1;
}else if(result === 'loss'){
  score.losses +=1;
}else{
  score.ties +=1;
}

localStorage.setItem('score' , JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You
<img src="./${playerMove}-emoji.png" class="move-icon">
<img src="./${computerMove}-emoji.png" class="move-icon">
computer`;


  }
  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  }

  let computerMove ='';
function pickComputerMove(){
const randomNumber = Math.random();

if(randomNumber >=0 && randomNumber < 1/3){
computerMove = 'rock';
}
else if(randomNumber >=1/3 && randomNumber < 2/3){
computerMove = 'paper'
}else{
computerMove = 'scissors';
}
return computerMove;
}