let firstCard = 0;
let secondCard = 0;
let cards = [];
let sumOfCards = 0;
let isAlive = false;
let hasBlackJack = false;
let message = " ";
let displayMessageEl=document.getElementById("display-message-el");
let displayCardsEl =document.getElementById("display-cards-el") ;
let displaySumEl= document.getElementById("display-sum-el");


function generateRandomNumber(){
  return Math.floor(Math.random()*11)+1;
}

function renderGame(){

  sumOfCards = 0;

  for(counter of cards){
    sumOfCards += counter;
  }

  if(isAlive === true){
    if(sumOfCards < 21){
      message = "Do you want to draw a card? ";
    } else if(sumOfCards === 21){
      message = "You've got the Black Jack. ";
      hasBlackJack = true;
    } 
  } else if(sumOfCards>21){
    message = "You're out of the game";
    isAlive = false;
  }
}

function displayContent(){
  displayMessageEl.textContent = message;

  displayCardsEl.textContent = " ";
  for(counter of cards){
    displayCardsEl.textContent += counter + " - ";
  }

  displaySumEl.textContent = sumOfCards;
}

function startGame(){
  isAlive = true;
  firstCard = generateRandomNumber();
  secondCard = generateRandomNumber();
  cards = [firstCard , secondCard];
  renderGame();
  console.log("isAlive : "+isAlive);
  console.log("hasBlackJack : " + hasBlackJack);
  console.log(message)
  displayContent();
}

function generateNewCard(){
  let newCard = generateRandomNumber();
  cards.push(newCard);
  renderGame();
  console.log("isAlive : "+isAlive);
  console.log("hasBlackJack : " + hasBlackJack);
  console.log(message)
  displayContent();
}






