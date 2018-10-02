import React, { Component } from 'react';
import { Layout } from 'antd'
import AlertMessage from '../alertMessage'
import UserPopover from '../userPopover'

const { Content } = Layout;

class CarsView extends Component {
    render() {
        const { auth, cars, history, fetchLogoutAction } = this.props
        const carsProp = ((cars) && (cars.carsInfo)) ? cars.carsInfo[0] : []

        var userInfo = null
        if (auth.userInfo) {
          userInfo = auth.userInfo
        } else if (localStorage.getItem('cks_token')) {
          userInfo = JSON.parse(localStorage.getItem('cks_token')).userInfo
        } else {
          userInfo = {}
        }        

        if (carsProp.msgList && (carsProp.msgList.length > 0)) {
            return (<AlertMessage err={new Error(carsProp.msgList[0].message)} />)
        } else if (carsProp.cars && (carsProp.cars.length > 0)) {
            return (

                <Layout className="main-layout">
                <div className="auth-header">
                  <UserPopover userInfo={userInfo} />
                  &nbsp;&nbsp;
                  <span className="auth-link" type="primary" onClick={() => fetchLogoutAction(history)}>Выйти</span>
                </div>
                <Content>
                  <div className="main-content-body">
                    Список вагонов
                  </div>
                </Content>
              </Layout>

            )
        } else {
          return null
        }
    }
}

export default CarsView