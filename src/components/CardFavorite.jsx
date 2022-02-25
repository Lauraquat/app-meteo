import "../assets/cardFavorite.css"

function CardFavorite({city, description, icon, temperature}){

    return(
        <div className="cardFavorite" >
            <div className="cardDetails">
                <p className="city">{city}</p>
                <p>{temperature + " °C"}</p>
                <p>{description }</p>
                <img src={"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}></img>
            </div>
        </div>
    );
}

export default CardFavorite;