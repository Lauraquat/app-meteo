import "../assets/cardFavorite.css"

function CardFavorite({city, description, icon, temperature}){

    return(
            <div className="cardFavorite" >
        <div className="cardDetails">
            <h4>
            <b >{city}  </b>
                <p>{description }</p>
                <p>{temperature + " °C"}  </p>
                <img src={"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}></img>

            </h4>
            </div>
        </div>
    );
}

export default CardFavorite;