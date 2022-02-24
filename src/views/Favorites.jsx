import { Component } from "react";
import CardFavorite from "../components/CardFavorite"
import {connect} from "react-redux"
import { Button } from "antd";
import { removeFavorite } from "../store/reducers/favoriteReducer"
import Header from "../components/Header";
import '../App.css';

class Favorites extends Component {

    constructor(props){
        super(props)
        this.state ={
            listOfFavorites: [],
        }
    }

    componentDidMount = () => {
        this.setState({listOfFavorites: this.props.listOfFavorites})
    }

    handleFavorite = (index) =>{  
        this.props.removeFavorite(index);
    }

    componentDidUpdate(prevProps) {
        if (this.props.listOfFavorites !== prevProps.listOfFavorites) {
            this.setState({listOfFavorites : this.props.listOfFavorites})
            return true
        }
        return false
      }

   render (){
        return(
            <div>                
                <Header></Header>
                {this.state.listOfFavorites.map((cardCity, index) => {
                    
                    return(
                        <div>
                            <CardFavorite key={index} city={cardCity.city} description={cardCity.description} icon={cardCity.icon} temperature={cardCity.temperature}/>
                            <Button onClick={() => this.handleFavorite(index)}>Supprimer</Button>
                        </div>
                    )
                })}
            </div>
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