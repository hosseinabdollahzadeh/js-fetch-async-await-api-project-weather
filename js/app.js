const weather = new Weather('tehran', 'tehran');
// weather.changeLocation('shiraz', 'fars');

const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(result => {
            console.log(result);
            ui.paint(result, weather.location);
        })
        .catch(err => console.log(err.message));
}