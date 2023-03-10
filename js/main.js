'use strict'
//variables
const clue = document.querySelector('.js-clue');
const tries = document.querySelector('.js-tries');
const numberUser = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const main = document.querySelector('.js-main');
const numberRandom = getRandomNumber(100);
console.log(numberRandom);
let count = 1;


//funciones
function writeMsj (msj) {
    clue.innerHTML = msj;
}

function playNumber() {
const numberPlay = parseInt(numberUser.value);
     
    if (!numberPlay) {
        writeMsj ("Tienes que escribir un número para jugar");
    } else if  (numberPlay < 1 || numberPlay > 100 ) {
        writeMsj ("El número debe estar entre 1 y 100");
        countTries();
    } else if (numberPlay === numberRandom) {
        writeMsj("Has ganado campeona!!!");
    } else if (numberPlay > numberRandom) {
        writeMsj ("Demasiado alto");
        countTries();
    }else if  (numberPlay < numberRandom) {
        writeMsj ("Demasiado bajo");
        countTries();
    } 
}

function countTries() {
    tries.innerHTML = `Número de intentos:${count++}`;
}

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}


function handleClickButton (event) {
    event.preventDefault();
    playNumber();
}

//eventos

button.addEventListener ('click', handleClickButton);