import React from "react"
import PropTypes from "prop-types"
import { Popover } from 'antd'
import Mailto from './react-mailto'

const UserPopover = props => {
    const userInfo = props.userInfo

    const content = (
        <div>
          <p>Фамилия: {userInfo.sn}</p>
          <p>Имя: {userInfo.givenname}</p>
          <p>Отчество: {userInfo.displayname}</p>
          <p>Дата рождения: {userInfo.title}</p>
          <p>Телефон: {userInfo.telephonenumber}</p>
          <p>Email: &nbsp;
            <Mailto email={userInfo.mail} >
              {userInfo.mail}
            </Mailto>
          </p>
        </div>
      )

    return (
        <Popover placement="bottomRight" content={content} title="Данные пользователя">
            <span className="auth-link auth-link-logged">
                {userInfo.cn}
            </span>
        </Popover>
    )
}

UserPopover.propTypes = {
    userInfo: PropTypes.any
}

export default UserPopover  