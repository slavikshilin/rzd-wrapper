import React from "react";
import PropTypes from "prop-types";
import { Button } from 'antd'

const CarGroupItemView = props => {
    const car = props.carProp
    const { trains, train, fetchCarsAction, history } = props
    return (
        <Button 
            type="primary" 
            className="btn-car-group"
            onClick={() => fetchCarsAction(trains.fromCode, trains.whereCode, trains.date, train.number, history)}>        
            
            {car.typeLoc}&nbsp;от&nbsp;{car.tariff} руб.&nbsp;(мест:&nbsp;{car.freeSeats})
        </Button>
    )
}

CarGroupItemView.propTypes = {
    carProp: PropTypes.any
};

export default CarGroupItemView;  