import React , { Component } from "react"; 

class LocalWeather extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude : 0,
        }
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude});
        })
    }
    
     componentDidMount(){
        this.getLocation()
    }


    render(){
        return(
            <div >
                    <h1>Coordinates</h1>
     
                    <p>Latitude: {this.state.latitude}</p>
                    <p>Longitude: {this.state.longitude}</p>
                  
            </div>
        )
    }
}

export default LocalWeather;