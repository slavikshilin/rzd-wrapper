import React from "react"
import PropTypes from "prop-types"
import { Popover } from 'antd'
import renderHTML from '../core/utils/convert'

const CarPopover = props => {
    const { clsName, cnumber } = props.car

    const content = (
        renderHTML(clsName)
    )

    return (
        <Popover placement="topLeft" content={content} title="Описание класса обслуживания">
            <span className="auth-link auth-link-logged">
                {cnumber}
            </span>        
        </Popover>
    )
}

CarPopover.propTypes = {
    car: PropTypes.object
}

export default CarPopover  