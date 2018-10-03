import React from 'react'
import PropTypes from 'prop-types'
import SeatItemView from './seatItemView'
import ElRegView from '../train/elRegView'
import VarPriceView from '../train/varPriceView'
import CarPopover from '../carPopover';

const CarItemView = props => {
    const car = props.carProp

    return (

        <div className="trslot">
            <div className="trcontent " style={{ paddingBottom: 15, paddingLeft: 0 }}>
                <div className="car-items">
                    <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="car-item ctype-3 trl-train-info">
                                <div className="trl-cars-number">Вагон: <CarPopover car={car}/></div>
                                <div>Перевозчик: {car.carrier}</div>
                                <div>Тип: {car.typeLoc + ' ('  + car.clsType + ')'}</div>
                                <div>Стоимость: {car.tariff} - {car.tariff2} руб.</div>
                            </div>
                        </div>
                    </div>
                    <div className="trl-cars-free-seats-heading">Свободные места:</div>
                    <div className="trl-seats-cont">
                        <div className="trl-seats-box">
                            <ul className="trl-seats-list clearfix j-seats">
                                {car.seats.map((seat, i) => <SeatItemView seatProp={seat} key={i} />)}
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="trl-icons">
                    <ul className="trl-icons-list j-props clearfix">
                        <ElRegView enabled={car.elReg} />
                        <VarPriceView enabled={car.varPrice} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

CarItemView.propTypes = {
    err: PropTypes.string
}

export default CarItemView  