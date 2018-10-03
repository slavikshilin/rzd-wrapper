import React from "react"
import PropTypes from "prop-types"
import UserPopover from './userPopover'

const AuthHeader = props => {
    const { userInfo, history, fetchLogoutAction } = props

    return (
        <div className="auth-header">
            <UserPopover userInfo={userInfo} />
            &nbsp;&nbsp;
            <span className="auth-link" type="primary" onClick={() => fetchLogoutAction(history)}>Выйти</span>
        </div>
    )

}

AuthHeader.propTypes = {
    enabled: PropTypes.bool
}

export default AuthHeader  