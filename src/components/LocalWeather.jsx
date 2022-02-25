import React, {Component} from "react";
import CardHour from "./CardHour";
import '../assets/localWeather.css';
import {EnvironmentOutlined} from '@ant-design/icons';
import weatherService from "../services/weatherService";
import Header from "./Header";

class LocalWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentWeather: null,
            weatherByHour: [],
            latitude: 0,
            longitude : 0,
            temperatureWithoutDegree: null,
           
        };
    }

    async componentDidMount() {

        navigator.geolocation.getCurrentPosition (async (position) => {
    
            let lat =  position.coords.latitude;
            let long = position.coords.longitude;

            const cityWeather = await weatherService.getWeather(lat, long); 
            this.setState({currentWeather:cityWeather, latitude : lat , longitude : long});
            
            console.log(cityWeather);

            const cityWeatherByHour = await weatherService.getWeatherByHour(lat, long);
            this.setState({weatherByHour:cityWeatherByHour, latitude: lat, longitude: long});

            const temperature = this.state.currentWeather.temp;
            const temperatureWithoutDegree = weatherService.getTempWithoutDecimal(temperature);
            this.setState({temperatureWithoutDegree});
        });
      }

    render(){
        return(
            <div className="localWeather App">
                <Header></Header>
                <div>
                    {this.state.currentWeather &&(

                    <div className="details">
                        <div>
                            <p className="date">{this.state.currentWeather.date.fullDate}</p>
                            <p className="date">{this.state.currentWeather.date.fullHour}</p>
                        </div>

                        <h3><EnvironmentOutlined />{" "+ this.state.currentWeather.city}</h3>
                        <img src={"http://openweathermap.org/img/wn/"+ this.state.currentWeather.icon +"@2x.png"}></img>
                        <h1>{this.state.temperatureWithoutDegree + " °C"}</h1>
                        <p>{this.state.currentWeather.description}</p>
                    </div>
                    )}  
                </div>

                <div>
                {this.state.weatherByHour.length > 0 &&(
                    <div>
                        <hr></hr>
                        <h1 className="previsionnel">Prévisionnel sur 24h</h1>
                        <div>
                            {this.state.weatherByHour.map((hour, index) => {
                                return <CardHour key={index} hour={hour.hour} temperature={hour.temperature} description={hour.description} icon={hour.icon}/>
                            })}
                        </div>
                    </div>
                    )}  
                </div>
            </div>
        );
    }
}

export default LocalWeather;