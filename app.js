const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let hitPosition;
let clicked = true;

let result = 0;
let currentTime = timeLeft.textContent;
let timerOne = setInterval(countDown, 1000);


function randomSquare(){

    clicked = true;
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id;
    //console.log(hitPosition)

    randomPosition = null;
    
}

square.forEach(id => {
    id.addEventListener('mouseup', (e) => {
        console.log(e.target)

        if(id.id === hitPosition && clicked == true) {
                result = result +1;
                score.textContent = result;
                clicked = false;
                hitPosition = null; 
                return;  
        } else {  
            return;
        }
    })  
})

function moveMole() {
timerId = null;
timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId)
        clearInterval(timerOne)
        alert('GAME OVER ! Score final :' + result)
        reset();
    }
}


function timerReset (){
    currentTime = 60;
    timeLeft.textContent = currentTime;
    setInterval(countDown, 1000)
} 

function reset () {
    result = 0;
    score.textContent = result;
    moveMole()
    timerReset();
}


