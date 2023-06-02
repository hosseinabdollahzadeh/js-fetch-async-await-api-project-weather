const weather = new Weather('tehran', 'tehran');

const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', changeLocation);

function changeLocation() {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const countryCode = document.getElementById('countryCode').value;

    weather.changeLocation(city, state, countryCode);

    getWeather();

    $('#locationModal').modal('hide');
}

function getWeather() {
    weather.getWeather()
        .then(result => {
            console.log(result);
            ui.paint(result, weather.location);
        })
        .catch(err => console.log(err.message));
}