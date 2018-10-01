import React from "react";
import PropTypes from "prop-types";
import CarGroupItemView from './carGroupItemView'
import TrainItemTimeView from './trainItemTimeView'

const TrainItemView = props => {
    const train = props.trainProp

    return (
        <div className="trslot">
            <div className="trcontent j-train j-train-slot">
                <div className="train-item j-train-select">
                    <div className="row">
                        <div className="col-lg-10 col-md-9 col-sm-9 col-xs-8">
                            <div className="trl-train-info">
                                <div className="trl-train-num">{train.number}&nbsp;
                                <span className="trl-train-name">{train.brand}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="row trl-train-info">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="trl-train-route">{train.route0} — {train.route1}</div>
                        </div>
                    </div>
                    <div className="clearfix trl-train-info">{train.carrier}</div>
                    <div className="row">
                        <div className="trl-train-trip-brief clearfix">
                            <div className="clearfix trl-train-datetime">

                                <TrainItemTimeView
                                    localDate={train.localDate0}
                                    localTime={train.localTime0}
                                    timeDeltaString={train.timeDeltaString0}
                                    date={train.date0}
                                    time={train.time0} />

                                <div className="trl-train-datetime-arrow trl-train-datetime-item col-xs-2">→</div>

                                <TrainItemTimeView
                                    localDate={train.localDate1}
                                    localTime={train.localTime1}
                                    timeDeltaString={train.timeDeltaString1}
                                    date={train.date1}
                                    time={train.time1} />

                            </div>
                            <div className="clearfix col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div>В пути {train.timeInWay}</div>
                            </div>
                        </div>
                    </div>
                    <div className="trl-seats-cont">
                        <div className="trl-seats-box">

                            <ul className="trl-seats-list clearfix j-seats">
                                {train.cars.map((car, i) => <CarGroupItemView carProp={car} key={i} />)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="trl-icons">
                    <ul className="trl-icons-list clearfix j-props">
                        <li title="Возможна электронная регистрация" className="trl-icon-er" data-id="er" style={{ cursor: "pointer" }}></li>
                        <li title="Поезд/вагон входит в программу Динамическое ценообразование" className="trl-icon-dc" data-id="dc" style={{ cursor: "pointer" }}></li>
                        <li title="На нашем сайте можно оплатить перевозку электронной, бытовой видео- и аудиотехники, спортивного и туристического инвентаря сверх установленной нормы (36 кг). Для перевозки другой категории ручной клади сверх установленной нормы (36 кг) необходимо приобрести дополнительный билет или оформить перевозку в багажном купе." className="trl-icon-addHandLuggage" data-id="addHandLuggage" style={{ cursor: "pointer" }}></li>
                        <li title="Перевозка в специализированном купе для багажа - не более трех мест на каждый электронный билет. Вес одного места не более 75 кг. Общий вес трех мест не более 200 кг." className="trl-icon-addCompLuggage" data-id="addCompLuggage" style={{ cursor: "pointer" }}></li>
                        <li title="" className="trl-icon-saleDepth89" data-id="saleDepth89" style={{ cursor: "pointer", display: "none" }}></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

TrainItemView.propTypes = {
    err: PropTypes.string
};

export default TrainItemView;  