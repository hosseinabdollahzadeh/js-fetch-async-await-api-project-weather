class Storage {
    constructor() {
        this.city;
        this.state;
        this.countryCode;
        this.defaultCity = 'تهران';
        this.defaultState = 'تهران';
        this.defaultCountryCode = 'IR';
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('state') === null) {
            this.state = this.defaultState;
        } else {
            this.state = localStorage.getItem('state');
        }

        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountryCode;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            state: this.state,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, state, countryCode = 'IR') {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
        localStorage.setItem('countryCode', countryCode);
    }
}