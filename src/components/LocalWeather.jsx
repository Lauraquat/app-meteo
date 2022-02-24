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
           
        };
    }

    async componentDidMount() {

        navigator.geolocation.getCurrentPosition (async (position) => {
    
            let lat =  position.coords.latitude;
            let long = position.coords.longitude;

            const cityWeather = await weatherService.getWeather(lat, long); 
            this.setState({currentWeather:cityWeather, latitude : lat , longitude : long});

            const cityWeatherByHour = await weatherService.getWeatherByHour(lat, long);
            this.setState({weatherByHour:cityWeatherByHour, latitude: lat, longitude: long});
        //  console.log(cityWeatherByHour.hourly[0].temp);
        //  console.log(cityWeatherByHour.hourly);
        //  console.log(cityWeatherByHour);


        // console.log(new Date(dt*1000));

        // const tempSansDecimal = await weatherService.getTemperature(this.state.currentWeather.main.temp)
        // console.log(tempSansDecimal);

        });
      }

    render(){
        return(
            <div className="App">
                <Header></Header>
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
                {this.state.weatherByHour.length > 0 &&(
                    <div>
                        <main style={{display:"flex", justifyContent:"center"}}>
                            <div>
                                {this.state.weatherByHour.map((hour, index) => {
                                    return <CardHour key={index} hour={hour.hour} temperature={hour.temperature} description={hour.description} icon={hour.icon}/>
                                })}
                            </div>
                        </main>
                    </div>
                    )}  
                </div>
            </div>
        );
    }
}

export default LocalWeather;