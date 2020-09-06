const widths = window.screen.width;
const heights = window.screen.height;
const container_top = heights/7;
const center = document.querySelector('.momentum_center');
const bodycss = document.querySelector('body');

function init(){
    bodycss.style.display = 'grid';
    bodycss.style.gridTemplateColumns = '1fr 1fr 1fr';
    center.style.position = 'relative';
    center.style.top = `${container_top}px`;
}

init();