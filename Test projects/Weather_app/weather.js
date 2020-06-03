class Weather {
    constructor(city) {
        this.apiKey = "78440b67772a1fab7a41505a9ab685f3";
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
        );

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
