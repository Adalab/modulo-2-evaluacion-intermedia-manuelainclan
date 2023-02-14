'use strict'
//variables
const clue = document.querySelector('.js-clue');
const tries = document.querySelector('.js-tries');
const numberUser = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const main = document.querySelector('.js-main');
const numberRandom = getRandomNumber(100);
console.log(numberRandom);


//funciones

function playNumber() {
let numberPlay = numberUser.value;
    if (numberPlay.parseInt === numberRandom.parseInt) {
        clue.innerHTML = "Has ganado campeona!!!";
    }
    if (numberPlay > numberRandom) {
        clue.innerHTML = "Demasiado alto";
    }
    if (numberPlay < numberRandom) {
        clue.innerHTML = "Demasiado bajo";
    }
    if (numberPlay < 1 || numberPlay > 100 ) {
        clue.innerHTML = "El número debe estar entre 1 y 100";
    }

}

function countTries() {
    tries.innerHTML = 'Número de intentos: ' + handleClickButton.detail;

  
}

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}


function handleClickButton (event) {
    event.preventDefault();
    playNumber();
    countTries();
    console.log(event);
}


//eventos

button.addEventListener ('click', handleClickButton);