import { Component} from "react"
import {Input } from 'antd';
import { connect } from "react-redux"
import {EnvironmentOutlined} from '@ant-design/icons';
import weatherService from "../services/weatherService";
import { addFavorite} from "../store/reducers/favoriteReducer"
import {HeartOutlined, HeartFilled } from '@ant-design/icons'
import Header from "../components/Header";


import "../assets/searchStyle.css"

const {Search} = Input;

export class SearchCity extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            city : "",
            weatherDescription : null,
            weatherTemp : null,
            weatherIcon : null,
            listOfFavorites : [],
            isFavorite : false, 
        } 
    }

    handleFavorite = () =>{
        this.props.addFavorite({city: this.state.city, description: this.state.weatherDescription, icon : this.state.weatherIcon, temperature : this.state.weatherTemp});
        this.setState({isFavorite : true})
    }

    onSearch = async (city) => {
        const cityLocation = await weatherService.getLocationByCity(city);
        const latitude = cityLocation[0].lat;
        const longitude = cityLocation[0].lon; 

        const cityWeather= await weatherService.getWeather(latitude, longitude);
        const weatherDescription = cityWeather.weather[0].description;
        const weatherTemp = cityWeather.main.temp;
        const weatherIcon = cityWeather.weather[0].icon;
        this.setState({city : city,  weatherDescription : weatherDescription, weatherTemp : weatherTemp, weatherIcon : weatherIcon});

        this.setState({isFavorite : false})

        // const temperature = this.state.weatherTemp;
        const temperatureWithoutDegree = weatherService.getTempWithoutDecimal(weatherTemp);
        this.setState({weatherTemp:temperatureWithoutDegree});

    }

    
    render() {
        return(
            <div className="search">
                <Header></Header>
                <h1>Rechercher une ville</h1>
                <p>Rechercher le nom d'une ville pour connaître sa météo !</p>
                <div className="searchBar">
                    <Search placeholder="Paris" onSearch={this.onSearch}  enterButton />
                </div>
                <div >
                    {this.state.weatherDescription &&(
                        <div>
                            {this.state.isFavorite ? <HeartFilled /> :  <HeartOutlined onClick={() => this.handleFavorite()} />}
                       
                            <h3><EnvironmentOutlined />{" "+ this.state.city}</h3>
                            <img src={"http://openweathermap.org/img/wn/"+ this.state.weatherIcon +"@2x.png"}></img>
                            <h1>{this.state.weatherTemp + " °C"}</h1>
                            <p>{this.state.weatherDescription}</p>
                            
                        </div>
                    )}

                </div>
            
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addFavorite: (favorite) => dispatch(addFavorite(favorite)),
        
    }
}
    
const mapStateToProps = state => {
    return {
        listOfFavorites: state.favorites.listOfFavorites,
        isFavorite: state.favorites.isFavorite
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);

