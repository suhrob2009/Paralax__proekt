const clouds = [...document.querySelectorAll(".header-cloud")];
const boat = document.querySelector('.header-boat');

console.log(clouds);

window.addEventListener('scroll', ()=> {

    clouds.forEach(cloud => {
        let speed = cloud.getAttribute('data-speed')
        let speedBoat = boat.getAttribute('speed')
        cloud.style.transform = `translateX(${this.scrollY * speed}px)`
        boat.style.transform = `translateX(${this.scrollY * speedBoat}px)`
    });
})

const elTitle = document.querySelector('.header-title')

const text = elTitle.innerHTML
elTitle.innerHTML = null
function str(x = 0) {
    elTitle.innerHTML = elTitle.innerHTML + text[x]
    x++

    if( x < text.length) {
        setTimeout(() => {
            str(x)
        }, 120);
    }
}

str()


console.log(window.innerHeight);
const parallaxBox = document.querySelector('.parallax-box');
const parallaxBall = [...document.querySelectorAll('.parallax-ball') ]

parallaxBox.addEventListener('mousemove', (event) => {
    // console.log(event.clientX);

    parallaxBall.forEach(balls => {
        const x = (window.innerWidth - event.pageX) / 20
        const y = (window.innerHeight - event.pageY) / 20

        balls.style.transform = `translate(${x}px, ${y}px)`
        console.log(x);
    });
})

const timerCardNums = document.querySelectorAll('.timer-card__num')

timerCardNums.addEventListener('mousemove', (e)=> {
    timerCardNums.forEach(num => {
        
    })
})