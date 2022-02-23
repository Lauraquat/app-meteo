import {useState} from "react"
import {Input } from 'antd';
import { connect } from "react-redux"
import {EnvironmentOutlined} from '@ant-design/icons';
import weatherRepository from "../repository/weatherRepository";
import { addFavorite } from "../store/reducers/favoriteReducer"
const Search = () => {

    const { Search } = Input;

    const [city, setCity] = useState("");
    const [weatherDescription, setWeatherDescription] = useState(null);
    const [weatherTemp, setWeatherTemp] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [listOfFavorites, setListOfFavorites] = [];

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
                        
                        <h3><EnvironmentOutlined />{" "+ city}</h3>
                        <br />
                        <img src={"http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png"}></img>
                        <h1>{weatherTemp + " °C"}</h1>
                        <p>{weatherDescription}</p>
                    </div>
                )}

            </div>
            
        </>
    )

    const mapDispatchToProps = dispatch => {
        return{
            addFavorite: (favorite) => dispatch(addFavorite(favorite))
        }
    }
    
    const mapStateToProps = state => {
        return {
            listOfFavorites: state.favorites.listOfFavorites
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
