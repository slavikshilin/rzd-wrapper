import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd';
import AlertMessage from '../components/alertMessage'
import Splash from '../components/splash'
import WrappedLogin from '../components/login'
import { fetchLogin } from '../actions/authActions'

const { Content, Footer } = Layout;

class LoginPage extends Component {
 
  render() {
    localStorage.clear()
    const { page, fetchLoginAction, history } = this.props

    if (page.isFetching) {
      return (
        <Splash />
      )
    } else {
      return (
        <Layout align="middle">
          <Footer style={{ fontSize: "x-large" }}>
            <AlertMessage err={page.err}/>
            Авторизация на сайте
          </Footer>
          <Content><WrappedLogin err={page.err} history={history} onSubmitBtn={(login, password, history) => fetchLoginAction(login, password, history)}/></Content>
          <Footer></Footer>
        </Layout>
      )      
    }
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLoginAction: (login, password, history) => dispatch(fetchLogin(login, password, history)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage))