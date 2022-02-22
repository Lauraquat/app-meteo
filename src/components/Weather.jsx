import React, {Component} from "react";
import Card from "../components/Card";
import weatherRepository from "../weatherRepository";

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentWeather: null,
        };
    }

    async componentDidMount(){
        const cityWeather = await weatherRepository.getAllWeatherWithFetch() //si on appelle avec axios, il faut enlever les commentaire dans weatherRepository et appeler la fonction correspondante
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