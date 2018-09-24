import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Layout, Alert } from 'antd';
import WrappedLoginForm from '../components/loginForm'
import { checkLogin, fetchLogin } from '../actions/loginActions'
import 'antd/dist/antd.css';

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

class Login extends Component {
 
  render() {
    const { page, fetchLoginAction } = this.props

    return (
      <Layout> 
        <Layout align="middle">
          <Footer style={{ fontSize: "x-large" }}>
            <AlertMessage err={page.err}/>
            Авторизация на сайте
          </Footer>
          <Content><WrappedLoginForm err={page.err} history={this.props.history} onSubmitBtn={(login, password, history) => fetchLoginAction(login, password, history)}/></Content>
          <Footer></Footer>
        </Layout>
        <Footer id="footer">© Вячеслав Шилин</Footer>
      </Layout> 
    );
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLoginAction: (login, password, history) => dispatch(checkLogin(login, password, history)),
    fetchLoginAction: (login, password, history) => dispatch(fetchLogin(login, password, history)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))