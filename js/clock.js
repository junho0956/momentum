const clockContainer = document.querySelector(".clock-js"),
nowTime = clockContainer.querySelector('h1');

function setTime(){
    const Clock = new Date();
    const hours = Clock.getHours();
    const minutes = Clock.getMinutes();
    const seconds = Clock.getSeconds();

    nowTime.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
    
    nowTime.style.marginBottom = '0';
    nowTime.style.color = 'white';
    nowTime.style.fontSize = `${(window.screen.height)/8}px`;
    nowTime.style.textAlign = 'center';
}

function init(){
    setTime();
    setInterval(setTime, 1000);
}

init();