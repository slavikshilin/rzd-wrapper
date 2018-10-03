import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
import { fetchCars } from '../../actions/carsActions'

const CarGroupItemView = props => {
    const car = props.carProp
    const { trains, train, fetchCarsAction, history, cars, id } = props
    const isFetching = cars.isFetching && (cars.tnum === train.number) && (cars.id === id) 
    const disabled = cars.isFetching && ((cars.tnum !== train.number) || (cars.id !== id))

    return (
        <Button 
            type="primary" 
            className="btn-car-group"
            loading={isFetching}
            disabled={disabled}
            onClick={() => fetchCarsAction(trains.fromCode, trains.whereCode, train.date0, train.number, id, car.type, history)}>        
            
            {car.typeLoc}&nbsp;от&nbsp;{car.tariff} руб.&nbsp;(мест:&nbsp;{car.freeSeats})
        </Button>
    )
}

CarGroupItemView.propTypes = {
    carProp: PropTypes.any
}


const mapStateToProps = store => {
    return {
        cars: store.cars,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCarsAction: (fromCode, toCode, date, tnum, id, carType, history) => dispatch(fetchCars(fromCode, toCode, date, tnum, id, carType, history)),    
    }
  }
  
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CarGroupItemView))