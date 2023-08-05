const box = document.querySelector('.box-body');
const presentElement = document.querySelector('.container');
const birthdayImage = document.querySelector('.img');
const birthdayImageTwo = document.querySelector('.img2');
const canvas = document.querySelector('#confetti');

let timerSound = new Audio('sounds/Mkrk bday sounds2.mp3');
let presentrSound = new Audio('sounds/Mkrk bday sounds with voice.mp3');

const jsConfetti = new JSConfetti();

box.addEventListener('click', () => {
    jsConfetti.addConfetti()
    .then(() => jsConfetti.addConfetti({
        emojis: ['💲', '💸', '💰', '💪', '📈', '📊'],
     }))
    //  .then(() => jsConfetti.addConfetti())
    //  .then(() => jsConfetti.addConfetti({
    //     emojis: ['💲', '💸', '💰', '💪', '📈', '📊'],
    //  }))
     
})


box.addEventListener('click', () => {
    presentrSound.play();
    document.querySelector('strong').innerText = `Happy Birthday! 
Makarik!`;
    document.querySelector('strong').style.color = "#3ac267"
})

let toggle = true;
birthdayImage.addEventListener('click', () => {
    
    toggle = !toggle;

    if(toggle){
    birthdayImage.src = "pic/BigEddie2.png";
    } else {
        birthdayImage.src = "pic/Mkrkf.jpg";
    }
    
})

// --------------- Timer -----------------

const timee = document.querySelector('.watch .time');
// startbtn = document.getElementsByClassName('start');
// resetbtn = document.getElementsByClassName('reset');

let seconds = 10;
let interval = null;

// quick math

function timer () {
    seconds--;

    let secs = seconds % 60;
    
    // if (secs < 10) secs = '0' - secs;
    if (secs == 0) {
        stop();
        watch.style.display = 'none';
        presentElement.style.display = 'block'
        // youSuck();
    }
    
    timee.innerText = `${secs}`;
}


const startBtn = document.querySelector('.btn');
const watch = document.querySelector('.watch');
startBtn.addEventListener('click', start);
startBtn.addEventListener('click', hideButton);
// startTst.addEventListener('click', reset);
// stopTimer.addEventListener('click', reset);


function hideButton(){
    timerSound.play();
    startBtn.style.display = 'none';
    watch.style.display = 'block'
}


// start
function start () {
    document.querySelector('.time').style.display = 'block';
    seconds = 10;
    timee.innerText = '10';
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

//  stop
function stop () {
    clearInterval(interval);
    interval = null;
}