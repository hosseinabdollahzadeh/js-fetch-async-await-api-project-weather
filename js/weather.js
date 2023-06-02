class Weather {
    constructor(city, state, country = 'IR') {
        this.apiKey = '0ba3179c077058bbdcff056f04b0f24c';
        this.city = city;
        this.state = state;
        this.countryCode = country;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.countryCode}&appid=${this.apiKey}`);
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw Error(response.status);
        }
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}