import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'

const CarGroupItemView = props => {
    const car = props.carProp
    const { trains, train, fetchCarsAction, history, cars, id } = props

    return (
        <Button 
            type="primary" 
            className="btn-car-group"
            loading={cars.isFetching}
            onClick={() => fetchCarsAction(trains.fromCode, trains.whereCode, trains.date, train.number, history)}>        
            
            {car.typeLoc}&nbsp;от&nbsp;{car.tariff} руб.&nbsp;(мест:&nbsp;{car.freeSeats})
        </Button>
    )
}

CarGroupItemView.propTypes = {
    carProp: PropTypes.any
};


const mapStateToProps = store => {
    return {
        cars: store.cars,
    }
}
  
export default withRouter(connect(
  mapStateToProps
)(CarGroupItemView))