import React, { Component } from 'react'
import Mailto from './react-mailto'
import TrainsView from './trainsView'
import { Layout, Popover, Button, DatePicker } from 'antd'
import locale from 'antd/lib/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import Complete from './complete'

const { Content, Footer } = Layout;
class Home extends Component {

  render() {
    const { page, trains, history, fetchLogoutAction, fetchTrainsAction } = this.props

    var trainProp = ((trains) && (trains.trainsInfo)) ? trains.trainsInfo[0] : []
    var trainErr = ((trains) && (trains.err)) ? trains.err[0] : []

    const fromCode = '2000000'
    const toCode = '2024000'
    const date = '30.09.2018'    

    var userInfo = null
    if (page.userInfo) {
      userInfo = page.userInfo
    } else if (localStorage.getItem('cks_token')) {
      userInfo = JSON.parse(localStorage.getItem('cks_token')).userInfo
    } else {
      userInfo = {}
    }

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
      <Layout className="main-layout">
        <div className="auth-header">
          <Popover placement="bottomRight" content={content} title="Данные пользователя">
            <span className="auth-link auth-link-logged">
              {userInfo.cn}
            </span>
          </Popover>
          &nbsp;&nbsp;
          <span className="auth-link" type="primary" onClick={() => fetchLogoutAction(history)}>Выйти</span>
        </div>
        <Footer style={{ fontSize: "x-large" }}>
          Параметры поиска билетов
        </Footer>
        <Content>
          <div className="main-control">
            <Complete /><Complete /><DatePicker format="DD.MM.YYYY" locale={locale}/><Button type="primary" icon="search" loading={false} onClick={() => fetchTrainsAction(fromCode, toCode, date)} className="btn-search">Найти</Button>
          </div>
          <div>
            <TrainsView trains={trainProp} err={trainErr} />
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default Home
