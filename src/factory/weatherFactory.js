export default{

    getOnlyFirst24Hours(forecast){
        const twentyFourHoursforecast = forecast.slice(1, 25);
        return twentyFourHoursforecast;
    },

    getWeatherFormatted(forecasts){
        return this.getOnlyFirst24Hours(forecasts.hourly.map(forecast=>{
            return {
                
                hour: new Date(forecast.dt*1000).getHours(),
                temperature: this.getDegreesWithoutDecimal(forecast.temp),
                description: forecast.weather[0].description,
                icon: <img src={"http://openweathermap.org/img/wn/"+ forecast.weather[0].icon +"@2x.png"}></img>
            }    
        }))
    },
    
    getDegreesWithoutDecimal(temp){
        const degDecimal = temp;
        const deg = Math.trunc(degDecimal);
    
        return deg
    }
}