import '../assets/card.css';

function CardHour({hour, temperature, description, icon}){

    return(
        <div className='cardHour'>
             
            <div className="cardHourDetails">
                <p>{hour + "h"}</p>
                <p>{description}</p>
                <p>{temperature + " °C"}</p>
                <p>{icon}</p>
            </div>
        </div>
        );
}

export default CardHour;






