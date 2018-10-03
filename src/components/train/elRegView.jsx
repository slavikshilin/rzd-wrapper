import React from "react"
import PropTypes from "prop-types"

const ElRegView = props => {
    const enabled = props.enabled

    if (enabled) {
        return (
            <li title="Возможна электронная регистрация" className="trl-icon-er" data-id="er" style={{ cursor: "pointer" }}></li>
        )
    } else {
        return null
    }
}

ElRegView.propTypes = {
    enabled: PropTypes.bool       
}

export default ElRegView  