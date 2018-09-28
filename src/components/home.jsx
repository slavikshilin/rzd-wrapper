import React, { Component } from 'react'
import TrainsView from './trainsView'
import { Layout, Button, DatePicker } from 'antd'
import locale from 'antd/lib/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import Complete from './complete'
import UserPopover from './userPopover'

const { Content, Footer } = Layout;
class Home extends Component {

  render() {
    const { page, trains, history, fetchLogoutAction, fetchTrainsAction } = this.props

    var trainProp = ((trains) && (trains.trainsInfo)) ? trains.trainsInfo[0] : []
    var trainErr = ((trains) && (trains.err)) ? trains.err[0] : null
    var isFetching =  ((trains) && (trains.isFetching)) ? trains.isFetching : false

    const fromCode = '2000000'
    const toCode = '2024000'
    const date = '30.10.2018'    

    var userInfo = null
    if (page.userInfo) {
      userInfo = page.userInfo
    } else if (localStorage.getItem('cks_token')) {
      userInfo = JSON.parse(localStorage.getItem('cks_token')).userInfo
    } else {
      userInfo = {}
    }

    return (
      <Layout className="main-layout">
        <div className="auth-header">
          <UserPopover userInfo={userInfo} />
          &nbsp;&nbsp;
          <span className="auth-link" type="primary" onClick={() => fetchLogoutAction(history)}>Выйти</span>
        </div>
        <Footer style={{ fontSize: "x-large" }}>
          Параметры поиска билетов
        </Footer>
        <Content>
          <div className="main-control">
            <Complete /><Complete /><DatePicker format="DD.MM.YYYY" locale={locale}/><Button type="primary" icon="search" loading={isFetching} onClick={() => fetchTrainsAction(fromCode, toCode, date)} className="btn-search">Найти</Button>
          </div>
          <div className="main-content-body">
            <TrainsView trains={trainProp} err={trainErr} />
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default Home
