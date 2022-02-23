import { Component } from "react";
import CardFavorite from "../components/CardFavorite"
import {connect} from "react-redux"


class Favorites extends Component {

    constructor(props){
        super(props)
        this.state ={
            listOfFavorites: []
        }
    }

    componentDidMount = () => {
        this.setState({listOfFavorites: this.props.listOfFavorites})
    }

   render (){
        return(
            <>
                {this.state.listOfFavorites.map((cardCity) => {
                    return <CardFavorite  key={cardCity.city} city={cardCity.city} description={cardCity.description}  icon={cardCity.icon}  temperature={cardCity.temperature} />
                })}
            </>
        )
    }
 
}

const mapStateToProps = state => {
    return {
        listOfFavorites: state.favorites.listOfFavorites
    }
}

export default connect(mapStateToProps)(Favorites);