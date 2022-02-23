import weatherRepository from "../repository/weatherRepository";


const weatherService={
    getWeather(latitude, longitude){
        return weatherRepository.fetchWeather(latitude, longitude);
    },

    getWeatherByHour(latitude, longitude){
        //truncate fetchWeatherbyHour + mise en style "h+1..."
        return weatherRepository.fetchWeatherByHour(latitude, longitude);
    },

    getLocationByCity(city){
        return weatherRepository.fetchLocationByCity(city);
    }
}

export default weatherService