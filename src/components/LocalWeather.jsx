import React, {Component} from "react";
import CardHour from "./CardHour";
import CardFavorite from "./CardFavorite";
import {EnvironmentOutlined} from '@ant-design/icons';
import weatherRepository from "../repository/weatherRepository";

class LocalWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentWeather: null,
            weatherByHour: null,
            latitude: 0,
            longitude : 0,
           
        };
    }

    async componentDidMount() {

        navigator.geolocation.getCurrentPosition (async (position) => {
    
                let lat =  position.coords.latitude;
                let long = position.coords.longitude;
    
                const cityWeather = await weatherRepository.getWeather(lat, long); 
                this.setState({currentWeather:cityWeather, latitude : lat , longitude : long});

                const cityWeatherByHour = await weatherRepository.getWeatherByHour(lat, long);
                this.setState({weatherByHour:cityWeatherByHour, latitude: lat, longitude: long});
            //  console.log(cityWeatherByHour.hourly[0].temp);
             console.log(cityWeatherByHour.hourly);
            //  console.log(cityWeatherByHour);

            });
      }

    render(){
        return(
            <div>
                <div>
                    {this.state.currentWeather &&(
                    <div>
                        <h3><EnvironmentOutlined />{" "+ this.state.currentWeather.name}</h3>
                        <br />
                        <img src={"http://openweathermap.org/img/wn/"+ this.state.currentWeather.weather[0].icon +"@2x.png"}></img>
                        <h1>{this.state.currentWeather.main.temp + " °C"}</h1>
                        <p>{this.state.currentWeather.weather[0].description}</p>
                    </div>
                    )}  
                </div>

                <div>
                {this.state.weatherByHour &&(
                    <div>
                        <main style={{display:"flex", justifyContent:"center"}}>
                            {this.state.weatherByHour.hourly.length < 24 &&(
                                    <div>
                                        {this.state.weatherByHour.map((hour) => {
                                        return <CardHour key={hour.hourly.dt} temp={hour.hourly.temp}/>
                                    })}
                                </div>
                            )}
                        </main>
                    </div>
                    )}  
                </div>
 

            </div>


/*             <main style={{display:"flex", justifyContent:"center"}}>
                {this.state.listOfWeather.length > 0 &&(
                    <div>
                        {this.state.listOfWeather.map((weather) => {
                            return <CardHour key={weather.weather.id} temps={weather.description} icon={weather.icon} />
                        })}
                    </div>
                )}
             </main>*/
        );
    }
}

export default LocalWeather;