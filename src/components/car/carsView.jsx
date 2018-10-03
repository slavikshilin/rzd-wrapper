import React, { Component } from 'react'
import { Layout } from 'antd'
import AlertMessage from '../alertMessage'
import AuthHeader from '../authHeader'
import { getUserInfo } from '../../core/utils/userInfo'

const { Content } = Layout

class CarsView extends Component {
  render() {
    const { auth, cars, history, fetchLogoutAction } = this.props
    const carsProp = ((cars) && (cars.carsInfo)) ? cars.carsInfo[0] : []

    if (carsProp.msgList && (carsProp.msgList.length > 0)) {
      return (<AlertMessage err={new Error(carsProp.msgList[0].message)} />)
    } else if (carsProp.cars && (carsProp.cars.length > 0)) {
      return (

        <Layout className="main-layout">
          <AuthHeader userInfo={getUserInfo(auth)} history={history} fetchLogoutAction={fetchLogoutAction} />
          <Content>
            <div className="main-content-body">

              <div>
                <nav className="navbar navbar-rzd" id="j-menu">
                  <div className="navbar-header clearfix">
                    <table className="pull-left">
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: "top" }}><span className="navbar-brand"></span>
                          </td>
                          <td style={{ verticalAlign: "top" }}><span className="page-heading" id="CommonTitle" data-title="">Выбор вагона</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </nav>

                <div className="trl-routeinfo-brief route-info j-route-info">
                  <div className="trl-cars-title fixed-inline">Поезд {carsProp.number2}</div>
                  <div className="trl-train-datetime-item clearfix">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <div>Москва Яр</div>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 trl-train-datetime-arrow trl-train-datetime-item" style={{ padding: 0}}>→</div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div>Владивост</div>
                      </div>
                    </div>
                    <div className="row datetime-info">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 datetime-flex-block">
                        <div>
                          <div className="fixed-inline">31.10.2018</div>
                          <div className="fixed-inline text-nowrap text-red">00:35<span className="text-muted text-small text-normal">(МСК)</span></div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 datetime-flex-block">
                        <div>
                          <div className="fixed-inline">02.11.2018</div>
                          <div className="fixed-inline text-nowrap text-red">02:16 <span className="text-muted text-small text-normal">(МСК+3)</span></div>
                        </div>
                        <div className="secondary">
                          <div className="fixed-inline">01.11.2018</div>
                          <div className="fixed-inline text-nowrap">23:16	<span className="text-muted text-small text-normal">(МСК)</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

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