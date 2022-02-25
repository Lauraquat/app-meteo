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
    },

    getFormattedLocalWeather(weather){
        const city = weather.name;
        const temp = weather.main.temp;
        const description = weather.weather[0].description;
        const icon = weather.weather[0].icon;
        const dt = weather.dt;

        return {
            "city": city,
            "temp": temp,
            "description": description,
            "icon": icon,
            "date": this.getCompleteDate(dt)
        }
    },

    getCompleteDate(dt){
        const days = ["lundi", "mardi","mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        const day = days[new Date(dt*1000).getDay()-1];
        const numberDay = new Date(dt*1000).getDate();
        const month = months[new Date(dt*1000).getMonth()];
        const year = new Date(dt*1000).getFullYear();
        const hour = new Date(dt*1000).getHours();
        const minutes = new Date(dt*1000).getMinutes();
        const fullHour = `${hour}:${minutes}`;
        const fullDate = `${day} ${numberDay} ${month} ${year}`
        const ObjDate = {
            "fullHour": fullHour,
            "fullDate": fullDate
        }
        return ObjDate;

    }
}