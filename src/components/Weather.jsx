import React, {Component} from "react";
import Card from "../components/Card";
import weatherRepository from "../repository/weatherRepository";

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentWeather: null,
            latitude: 0,
            longitude : 0,
        };
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude});
        })
    }



    // on a prit l'url de constant vers repository et on doit le redescendre dans constant



    async componentDidMount(){
        this.getLocation()
        const cityWeather = await weatherRepository.getAllWeatherWithFetch( this.state.latitude, this.state.longitude) //si on appelle avec axios, il faut enlever les commentaire dans weatherRepository et appeler la fonction correspondante
        this.setState({currentWeather:cityWeather});

    }

    render(){
        return(
            <div>
                {this.state.currentWeather &&(
                <div>
                    {this.state.currentWeather.name + ' => '}
                    {this.state.currentWeather.weather[0].description}
{/*                     {this.state.currentWeather.weather[0].icon}
 */}                
                    <p>Latitude: {this.state.latitude}</p>
                    <p>Longitude: {this.state.longitude}</p>
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

export default Weather;