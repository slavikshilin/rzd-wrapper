import React from "react"
import PropTypes from "prop-types"

const SeatItemView = props => {
    const seat = props.seatProp

    return (
        <li className="trl-seats-item">{seat.label + ' (' + seat.free + ')'}</li>
    )
}

SeatItemView.propTypes = {
    seatProp: PropTypes.any
}
  
export default SeatItemView