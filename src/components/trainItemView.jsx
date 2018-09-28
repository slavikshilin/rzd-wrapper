import React from "react";
import PropTypes from "prop-types";

const TrainItemView = props => {
    const train = props.trainProp;

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
                                <div className="col-xs-5">
                                    <div className="trl-train-datetime-item">{train.date0}
                                    <div className="text-red">{train.time0}<span className="text-muted text-normal text-small">&nbsp;(МСК)</span></div>
                                    </div>
                                </div>
                                <div className="trl-train-datetime-arrow trl-train-datetime-item col-xs-1">→</div>
                                <div className="col-xs-6">
                                    <div className="trl-train-datetime-item">{train.localDate1}
                                    <div className="text-red">{train.localTime1}<span className="text-muted text-normal text-small">&nbsp;{train.timeDeltaString1}</span></div>
                                    </div>
                                    &nbsp;
                                    <div className="trl-train-datetime-item text-normal text-small">
                                        {train.date1} {train.time1}<span className="text-muted text-normal text-small">&nbsp;(МСК)</span></div>
                                </div>
                            </div>
                            <div className="clearfix col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div>В пути {train.timeInWay}</div>
                            </div>
                        </div>
                    </div>
                    <div className="trl-seats-cont">
                        <div className="trl-seats-box">
                            <ul className="trl-seats-list clearfix j-seats">
                                <li className="trl-seats-item" style={{ cursor: "pointer" }}>Сидячий <span className="trl-seats-price">1699 руб.</span>&nbsp; (22)
                            </li>
                                <li className="trl-seats-item" style={{ cursor: "pointer" }}>Купе <span className="trl-seats-price">4815 руб.</span>&nbsp; (70)
                            </li>
                                <li className="trl-seats-item" style={{ cursor: "pointer" }}>Плацкартный <span className="trl-seats-price">2760 руб.</span>&nbsp; (34)
                            </li>
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