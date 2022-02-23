import {API_BASE_URL} from "../services/constants";


const weatherRepository={
    
    async fetchWeather(latitude, longitude){
        try{
            const httpCall = await fetch(API_BASE_URL + `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=948e813768aeb72b481a26eb8ab85d65&lang=fr&units=metric`);
            // const httpCall = await fetch(`${API_BASE_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=948e813768aeb72b481a26eb8ab85d65&lang=fr&units=metric`);
            return await httpCall.json();
        }catch(err){
            console.log("error : ", err)
        }
    },

    async fetchLocationByCity(city){
        try{
            const httpCall = await fetch(API_BASE_URL + `/geo/1.0/direct?q=${city}&limit=1&appid=948e813768aeb72b481a26eb8ab85d65&lang=fr`); 
            return await httpCall.json();
         
        }catch(err){
            console.log("error : ", err)
        }
    },

    async fetchWeatherByHour(latitude, longitude){
        try{
            const httpCall = await fetch(API_BASE_URL + `/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=948e813768aeb72b481a26eb8ab85d65&lang=fr&units=metric`);
            return await httpCall.json();
        }catch(err){
            console.log("error : ", err)
        }
    }
};

export default weatherRepository