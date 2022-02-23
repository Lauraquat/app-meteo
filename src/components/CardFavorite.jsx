function CardFavorite({city, description, icon, temperature}){

    return(
        <div>
            <h3>{city}</h3>
            <h4>
                <b>{description + " " + icon}</b>
                <b>{temperature}</b>

            </h4>
        </div>
    );
}

export default CardFavorite;