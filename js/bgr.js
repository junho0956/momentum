const body = document.querySelector('body');
const img_size = 5;

function paintingImg(number){
    const img = new Image();
    img.src = `./img/${number}.jpg`;
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.zIndex = '-1';
    img.style.position = 'absolute';
    body.appendChild(img);
}

function makeNum(){
    return Math.floor(Math.random()*img_size);
}

function init(){
    const randomNumber = makeNum();
    paintingImg(randomNumber);
}

init();