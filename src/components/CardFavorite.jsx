function CardFavorite({city, description, icon, temperature}){

    return(
        <div>
            <h3>{city}</h3>
            <h4>
                <b>{description }</b>
                <img src={"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}></img>
                <b>{temperature + " °C"}  </b>

            </h4>
        </div>
    );
}

export default CardFavorite;