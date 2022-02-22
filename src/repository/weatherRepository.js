import {API_BASE_URL, ROUTES} from "../services/constants";

const weatherRepository={
    async getAllWeatherWithFetch(latitude, longitude){
        try{
            const httpCall = await fetch(API_BASE_URL + `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=948e813768aeb72b481a26eb8ab85d65&lang=fr`);
            console.log("latitude : " + latitude + " longitude " + longitude)
            const listOfWeather = await httpCall.json();
            return listOfWeather;
        }catch(err){
            console.log("error : ", err)
        }
    },
};

export default weatherRepository