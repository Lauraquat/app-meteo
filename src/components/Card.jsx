function Card({description, icon}){

    return(
        <div>
            <h3>VILLE</h3>
            <h4>
                <b>{description + " " + icon}</b>
            </h4>
        </div>
    );
}

export default Card;