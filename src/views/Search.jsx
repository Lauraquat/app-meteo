import LocalWeather from "../components/LocalWeather";
import {useState} from "react"
import {Input } from 'antd';
import weatherRepository from "../repository/weatherRepository";

const Search = () => {

    const { Search } = Input;

    const [city, setCity] = useState("");
    const [weatherDescription, setWeatherDescription] = useState(null);

    const onSearch = async (city) => {
        setCity(city)
        const cityLocation = await weatherRepository.getLocationByCity(city);
        const latitude = cityLocation[0].lat;
        const longitude = cityLocation[0].lon;

        const cityWeather= await weatherRepository.getWeather(latitude, longitude)
        
        setWeatherDescription(cityWeather.weather[0].description)
    }

    return(
        <>
            <LocalWeather></LocalWeather>

            <Search placeholder="Saisir une ville" onSearch={onSearch}  enterButton />
            
            <div>

                {weatherDescription &&(
                    <div>

                        {city + ' => '}

                        {weatherDescription}

                    </div>
                )}

            </div>

        </>
    )
}

export default Search;
