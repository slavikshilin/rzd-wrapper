import React from "react";
import PropTypes from "prop-types";

const TrainItemTimeView = props => {
    const { localDate, localTime, timeDeltaString, date, time } = props

    if (timeDeltaString) {
        return (
            <div className="col-xs-5">
                <div>
                    <div className="trl-train-datetime-item">
                        <span className="text-muted text-normal text-small">Местное время:</span>&nbsp;{localDate}&nbsp;
                        <span className="text-red">{localTime}<span className="text-muted text-normal text-small">&nbsp;({timeDeltaString})</span></span>
                    </div>
                </div>
                <div>
                    <div className="trl-train-datetime-item">
                        <span className="text-muted text-normal text-small">Московское время:</span>&nbsp;
                        {date} {time}<span className="text-muted text-normal text-small"></span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-xs-5">
                <div>
                    <div className="trl-train-datetime-item">
                        <span className="text-muted text-normal text-small">Московское время:</span>&nbsp;
                        {date} {time}<span className="text-muted text-normal text-small"></span>
                    </div>
                </div>
            </div>
        )
    }
}

TrainItemTimeView.propTypes = {
    localDate: PropTypes.string,
    localTime: PropTypes.string,
    timeDeltaString: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,        
};

export default TrainItemTimeView;  