// 1
setTimeout(function() {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);
}, 2000);

// 3a
let count = 1;
const interval = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, function() {
    clearInterval(interval);
});

// BONUS
// 4
let num = 120;
const timer = setInterval(() => {
    const countdown = document.querySelector(`#countdown`);
    const time = document.createElement(`p`);
    time.innerText = `${Math.floor(num / 60)}:${num % 60}`;
    if (num % 60 === 0) {
        time.innerText = `${time.innerText}0`
    } else if (num % 60 < 10) {
        time.innerText = `${Math.floor(num / 60)}:0${num % 60}`
    }
    countdown.append(time);
    if (num === 0) {
        alert(`TIME IS UP`);
        clearInterval(timer);
    }
    num--;
}, 1000);