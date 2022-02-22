import {API_BASE_URL, ROUTES} from "./services/constants";

const weatherRepository={
    async getAllWeatherWithFetch(){
        try{
            const httpCall = await fetch(API_BASE_URL + ROUTES.WEATHER);
            const listOfWeather = await httpCall.json();
            return listOfWeather;
        }catch(err){
            console.log("error : ", err)
        }
    },
};

export default weatherRepository