const APU_KEY = "241051bf13976dd3ddf8b8d9f247255e"
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(poisition) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError() {
    console.log("Can\'t access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoors);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function inint(){
    loadCoords();
}

init();