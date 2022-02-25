import '../assets/card.css';

function CardHour({hour, temperature, description, icon}){

    return(
        <div className='cardHour'>  
            <div className="cardHourDetails">
                <div className='hour'>{hour + "h"}</div>
                <div>{description}</div>
                <div>{temperature + " °C"}</div>
                <div>{icon}</div>
            </div>
        </div>
        );
}

export default CardHour;






