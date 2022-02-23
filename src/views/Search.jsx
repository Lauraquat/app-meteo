import {useState} from "react"
import {Input } from 'antd';
import weatherRepository from "../repository/weatherRepository";

const Search = () => {

    const { Search } = Input;

    const [city, setCity] = useState("");
    const [weatherDescription, setWeatherDescription] = useState(null);
    const [weatherTemp, setWeatherTemp] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);

    const onSearch = async (city) => {
        setCity(city)
        const cityLocation = await weatherRepository.getLocationByCity(city);
        const latitude = cityLocation[0].lat;
        const longitude = cityLocation[0].lon;

        const cityWeather= await weatherRepository.getWeather(latitude, longitude)
        
        setWeatherDescription(cityWeather.weather[0].description)
        setWeatherTemp(cityWeather.main.temp)
        setWeatherIcon(cityWeather.weather[0].icon)
    }

    

    return(
        <>

            <Search placeholder="Saisir une ville" onSearch={onSearch}  enterButton />
            
            <div>

                {weatherDescription &&(
                    <div>
                        {city + ' => '}
                        {weatherDescription}
                        {weatherTemp + " °C"}
                        <img src={"http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png"}></img>
                    </div>
                )}

            </div>
            
        </>
    )
}

export default Search;
