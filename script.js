let randomNumber = Math.floor(Math.random() * 6) + 1;
let diceNum = 'dice' + randomNumber;
let generateImageNum = 'images/' + diceNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src', generateImageNum);

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let diceNum1 =  'dice' + randomNumber1;
let generateImageNum1 = 'images/' + diceNum1 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', generateImageNum1);

if(randomNumber > randomNumber1) {
     document.querySelectorAll('h1')[0].innerHTML = 'Player 1 is the winner!';
} else if ( randomNumber < randomNumber1) {
     document.querySelectorAll('h1')[0].innerHTML = 'Player 2 is the winner!';
} else {
     document.querySelectorAll('h1')[0].innerHTML = 'DRAW!';
}