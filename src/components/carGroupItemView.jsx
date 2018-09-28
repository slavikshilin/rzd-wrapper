import React from "react";
import PropTypes from "prop-types";

const CarGroupItemView = props => {
    const car = props.carProp
    return (
        <li className="trl-seats-item" style={{ cursor: "pointer" }}>{car.typeLoc}<span className="trl-seats-price">&nbsp;{car.tariff} руб.</span>&nbsp;({car.freeSeats})
	    </li>     
    )    
}

CarGroupItemView.propTypes = {
    carProp: PropTypes.any
};

export default CarGroupItemView;  