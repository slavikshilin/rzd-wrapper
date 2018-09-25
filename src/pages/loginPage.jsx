import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Layout, Alert } from 'antd';
import Splash from '../components/splash'
import WrappedLogin from '../components/login'
import { fetchLogin } from '../actions/authActions'

const { Content, Footer } = Layout;

function onClose(e) {
  console.log(e, 'I was closed.');
};

function AlertMessage(props) {
  const err = props.err;
  if (err) {
    return <div className="ant-form login-form-message">
            <Alert
              message="Ошибка"
              description={err.message}
              type="error"
              showIcon
              onClose={onClose}
            />
          </div> 
  } else {
    return null
  } 
}

class LoginPage extends Component {
 
  render() {
    localStorage.clear()
    const { page, fetchLoginAction, history } = this.props

    if (page.isFetching) {
      return (
        <Layout style={{height:"100vh"}}> 
          <Splash />
        </Layout>
        )
    } else {
      return (
        <Layout style={{height:"100vh"}}> 
        <Layout align="middle">
          <Footer style={{ fontSize: "x-large" }}>
            <AlertMessage err={page.err}/>
            Авторизация на сайте
          </Footer>
          <Content><WrappedLogin err={page.err} history={history} onSubmitBtn={(login, password, history) => fetchLoginAction(login, password, history)}/></Content>
          <Footer></Footer>
        </Layout>
        <Footer id="footer">© Вячеслав Шилин</Footer>
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