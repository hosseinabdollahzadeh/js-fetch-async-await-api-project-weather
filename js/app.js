const weather = new Weather('tehran', 'tehran');
// weather.changeLocation('shiraz', 'fars');
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(result => console.log(result))
        .catch(err => console.log(err.message));
}