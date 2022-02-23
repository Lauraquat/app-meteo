import React, {Component} from "react";
import Card from "./Card";
import {EnvironmentOutlined} from '@ant-design/icons';
import weatherRepository from "../repository/weatherRepository";

class LocalWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentWeather: null,
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
             
            });
      }

    render(){
        return(
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

/*             <main style={{display:"flex", justifyContent:"center"}}>
                {this.state.listOfWeather.length > 0 &&(
                    <div>
                        {this.state.listOfWeather.map((weather) => {
                            return <Card key={weather.weather.id} temps={weather.description} icon={weather.icon} />
                        })}
                    </div>
                )}
             </main>*/
        );
    }
}

export default LocalWeather;