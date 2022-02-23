import { Component} from "react"
import {Input } from 'antd';
import { connect } from "react-redux"
import {EnvironmentOutlined} from '@ant-design/icons';
import weatherService from "../services/weatherService";
import { addFavorite } from "../store/reducers/favoriteReducer"


const {Search} = Input;

export class SearchCity extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            city : "",
            weatherDescription : null,
            weatherTemp : null,
            weatherIcon : null,
            listOfFavorites : []
            
        } 
    }

    onSearch = async (city) => {
        const cityLocation = await weatherService.getLocationByCity(city);
        const latitude = cityLocation[0].lat;
        const longitude = cityLocation[0].lon; 

        const cityWeather= await weatherService.getWeather(latitude, longitude);
        const weatherDescription = cityWeather.weather[0].description;
        const weatherTemp = cityWeather.main.temp;
        const weatherIcon = cityWeather.weather[0].icon;

        this.setState({city : city,  weatherDescription : weatherDescription, weatherTemp : weatherTemp, weatherIcon : weatherIcon });
    }

    
    render() {
        return(
            <>
                <Search placeholder="Saisir une ville" onSearch={this.onSearch}  enterButton />
            
                <div>
                    {this.state.weatherDescription &&(
                        <div>
                        
                            <h3><EnvironmentOutlined />{" "+ this.state.city}</h3>
                            <br />
                            <img src={"http://openweathermap.org/img/wn/"+ this.state.weatherIcon +"@2x.png"}></img>
                            <h1>{this.state.weatherTemp + " °C"}</h1>
                            <p>{this.state.weatherDescription}</p>
                            
                        </div>
                    )}

                </div>
            
            </>
        )
    }
}

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


 export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);
// export default Search;
