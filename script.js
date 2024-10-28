'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`); // El - element
const score1El = document.getElementById(`score--1`); // El - element
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

   let scores, currentScore, activePlayer, playing;


const init = function(){
   // Starting conditions
   scores = [0, 0]; // Array to store the player 0 and player 1 scores
   currentScore = 0;
   activePlayer = 0;
   playing = true;

   score0El.textContent = 0;
   score1El.textContent = 0;
   current0El.textControl = 0;
   current1El.textContent = 0;

   diceEl.classList.add(`hidden`);
   player0El.classList.remove(`player--winner`);
   player1El.classList.remove(`player--winner`);
   player0El.classList.add(`player--active`);
   player1El.classList.remove(`player--active`);
};
init();

/* const resetGame = function(){
   document.getElementById(`btn--new`).addEventListener(`click`, function(){
      if(document.getElementById(`player--0`).contains(`player--active`) ? !switchPlayer() : switchPlayer());
      currentScore = 0;
      playing = true;
      if (document.getElementById(`dice`).classList.contains(`hidden`)) {
         diceEl.classList.remove(`hidden`);  
      }
      document.querySelector(`score`).textContent = 0;
   })
   resetGame();
} */

const switchPlayer = function(){
   document.getElementById(`current--${activePlayer}`).textContent = 0;
       //current0El.textContent = 0;
       currentScore = 0;
       activePlayer = activePlayer === 0 ? 1 : 0;
       player0El.classList.toggle(`player--active`);
       player1El.classList.toggle(`player--active`);
}
// Rolling dice functionality
btnRoll.addEventListener(`click`, function(){
   if (playing){
 // 1. Generating a random dice roll
 const dice = Math.trunc(Math.random() * 6) + 1;
 console.log(dice);
 

 // 2. Display dice
 diceEl.classList.remove(`hidden`);
 diceEl.src = `dice-${dice}.png`;

 // 3. Check for rolled 1: if true, switch to next player
 if(dice !== 1){
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    //current0El.textContent = currentScore; // CHANGE LATER
 } else {
    // Switch to the next player 
    switchPlayer();
 }
   }
   
});

btnHold.addEventListener(`click`, function(){
   console.log(`Hold button`);
   if (playing){
     // 1. Add current score to active player's score
   scores[activePlayer] += currentScore;
   console.log(scores[activePlayer]);
   
   // scores[1] = scores[1] + currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

   // 2. Check if the player's score is >= 100
   if (scores[activePlayer] >= 100){
      // Finish the game
      playing = false;
      diceEl.classList.add(`hidden`);
      document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
      document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`)
   } else {
     // 3. Switch to the next player
     switchPlayer();

   }
   }   
   
});

btnNew.addEventListener(`click`, init) // we do not call the init function, JavaScript will call it when the user clicks the button




