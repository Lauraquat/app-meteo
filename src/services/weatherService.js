import weatherRepository from "../repository/weatherRepository";
import weatherFactory from "../factory/weatherFactory";


const weatherService={
    async getWeather(latitude, longitude){
        const weather = await weatherRepository.fetchWeather(latitude, longitude);
        return weatherFactory.getFormattedLocalWeather(weather);
    },
    
    getTempWithoutDecimal(temperature){
        const degreesWithoutDecimal = weatherFactory.getDegreesWithoutDecimal(temperature);
        return degreesWithoutDecimal;
    },

    async getWeatherByHour(latitude, longitude){
        const rawForecast = await weatherRepository.fetchWeatherByHour(latitude, longitude);        
        const forecast = weatherFactory.getWeatherFormatted(rawForecast);
        return forecast;
    },

    getLocationByCity(city){
        return weatherRepository.fetchLocationByCity(city);
    }    
}

export default weatherService