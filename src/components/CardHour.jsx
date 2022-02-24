function CardHour({hour, temperature, description, icon}){

    return(
        <div>
            <h3><b>{"Prévisionnel à " + hour + "h"}</b></h3>
            <p>{temperature + " °C"}</p> <p>{description}</p> <p>{icon}</p>
        </div>
    );
}

export default CardHour;






