import React from "react";
import PropTypes from "prop-types";
import { Alert } from 'antd';

const AlertMessage = props => {
    const err = props.err;
    if (err) {
        return <div className="ant-form login-form-message">
            <Alert
                message="Ошибка"
                description={err.message}
                type="error"
                showIcon
                closable
            />
        </div>
    } else {
        return null
    }
}

AlertMessage.propTypes = {
	err: PropTypes.object
};

export default AlertMessage;  