import { Component } from "react";
import CardFavorite from "../components/CardFavorite"
import {connect} from "react-redux"
import { Button } from "antd";
import { removeFavorite } from "../store/reducers/favoriteReducer"


class Favorites extends Component {

    constructor(props){
        super(props)
        this.state ={
            listOfFavorites: [],
            // isFavorite : true,
        }
    }

    componentDidMount = () => {
        this.setState({listOfFavorites: this.props.listOfFavorites})
        // this.setState({isFavorite: this.props.isFavorite})
    }

    handleFavorite = () =>{
        console.log("appel de suppression favoris")
        this.props.removeFavorite({city: this.state.city, description: this.state.weatherDescription, icon : this.state.weatherIcon, temperature : this.state.weatherTemp});
    //    console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.listOfFavyorites !== prevProps.listOfFavorites) {
            return(
                <>
                    {this.state.listOfFavorites.map((cardCity, index) => {
                        
                        return(
                            <>
                                <CardFavorite  key={index} city={cardCity.city} description={cardCity.description}  icon={cardCity.icon}  temperature={cardCity.temperature} />
                                <Button onClick={() => this.handleFavorite()} > Supprimer</Button>
                            
                            </>
                        )
                    })}
                </>
            )
        }
      }

   render (){
        return(
            <>
                {this.state.listOfFavorites.map((cardCity, index) => {
                    
                    return(
                        <>
                            <CardFavorite  key={index} city={cardCity.city} description={cardCity.description}  icon={cardCity.icon}  temperature={cardCity.temperature} />
                            <Button onClick={() => this.handleFavorite()} > Supprimer</Button>
                        
                        </>
                    )
                })}
            </>
        )
    }
 
}

const mapStateToProps = state => {
    return {
        listOfFavorites: state.favorites.listOfFavorites,
        isFavorite: state.favorites.isFavorite
    }
}


const mapDispatchToProps = dispatch => {
    return{
        removeFavorite: (favorite) => dispatch(removeFavorite(favorite))
    }
}
    


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);