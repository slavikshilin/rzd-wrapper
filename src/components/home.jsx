import React, { Component } from 'react'
import Mailto from './react-mailto'
import { Layout, Popover } from 'antd'
import Complete from './complete'

const { Content, Footer } = Layout;
class Home extends Component {

  render() {
    const { page, history, fetchLogoutAction } = this.props

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
          <div>
            <Complete /> <Complete />
          </div>

        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default Home
