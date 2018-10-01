import React from "react";
import PropTypes from "prop-types";
import CarGroupItemView from './carGroupItemView'
import TrainItemTimeView from './trainItemTimeView'
import ElRegView from './elRegView'
import VarPriceView from './varPriceView'

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
                        <ElRegView enabled={train.elReg} />
                        <VarPriceView enabled={train.varPrice} />
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