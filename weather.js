const COORDS = 'coords';

function handleGeoSucces(poisition) {
    console.log(poisition);
}

function handleGeoError() {
    console.log("Can\'t access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function inint(){
    loadCoords();
}

init();