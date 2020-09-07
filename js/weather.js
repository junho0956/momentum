const locations = 'location';
const apikey = '836e30e92638d3d3b6088f149447ce0d';
const weathers_loc = document.querySelector('.weather-loc');
const weathers_icon = document.querySelector('.weather-icon');
const weathers_temp = document.querySelector('.weather-temp');
const weathers_bottom = document.querySelector('.weather-bottom');

function succesGeo(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {latitude, longitude};
    console.log(coordObj);
    localStorage.setItem(locations, JSON.stringify(coordObj));
    getWeather();
}

function errorGeo(error){
    console.log("Cant get geo");
    console.log(error);
}

// use navigator API
function getLocation(){
    // getCurrentPosition param => success , error
    navigator.geolocation.getCurrentPosition(succesGeo, errorGeo)
}

// use weather API
function getWeather(){
    let lat_lon = localStorage.getItem(locations);
    lat_lon = JSON.parse(lat_lon);
    const lat = lat_lon.latitude;
    const lon = lat_lon.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`,{
        method : 'GET'
    })
    .then(res => {
        return res.json();
    }).then(res => {
        const temperature = res.main.temp;
        const place = res.name;

        weathers_bottom.style.display = 'grid';
        weathers_bottom.style.gridTemplateColumns = '1fr auto auto';

        weathers_loc.innerText = `${place}`;
        weathers_loc.style.color = 'white';
        weathers_loc.style.fontSize = '35px';
        weathers_loc.style.textAlign = 'right';
        weathers_loc.style.fontFamily = `Gamja Flower`;

        weathers_temp.innerText = `${temperature}℃`;
        weathers_temp.style.color = 'white';
        weathers_temp.style.fontSize = '25px';
        weathers_temp.style.textAlign = 'center';
        weathers_temp.style.fontFamily = `Gamja Flower`;
        weathers_temp.style.top = '50%';
        weathers_temp.style.transform = 'translate(0, 10%)';

        let weaIcon = res.weather[0].icon;
        weathers_icon.src = 'http://openweathermap.org/img/w/'+weaIcon+'.png';
        
    })
}

function init(){
    const loadLocation = localStorage.getItem(locations);
    if(loadLocation === null){
        getLocation();
    }
    else{
        getWeather();
    }
}

init();