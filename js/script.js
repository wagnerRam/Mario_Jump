const mario = document.querySelector('.mario');
const pipe = document.querySelector(' .pipe');
const cloud = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval (() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition<= 100 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        cloud.style.animation = 'none';       
         
        mario.src = './images/game-over.png'
        mario.style.width = '65px'
        mario.style.marginLeft = '50px'


        
    }s
}, 10);

document.addEventListener('keydown', jump);
