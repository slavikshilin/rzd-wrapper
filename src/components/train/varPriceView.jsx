import React from "react"
import PropTypes from "prop-types"

const varPriceView = props => {
    const enabled = props.enabled

    if (enabled) {
        return (
            <li title="Поезд/вагон входит в программу Динамическое ценообразование" className="trl-icon-dc" data-id="dc" style={{ cursor: "pointer" }}></li>
        )
    } else {
        return null
    }
}

varPriceView.propTypes = {
    enabled: PropTypes.bool       
}

export default varPriceView  