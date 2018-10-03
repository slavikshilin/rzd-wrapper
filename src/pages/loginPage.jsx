import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import AlertMessage from '../components/alertMessage'
import WrappedLogin from '../components/login'
import { fetchLogin } from '../actions/authActions'
import { clearLocalStorage } from '../core/utils/userInfo'

const { Content, Footer } = Layout

class LoginPage extends Component {

    render() {
        clearLocalStorage()
        const { auth, fetchLoginAction, history } = this.props

        return (
            <Layout align="middle">
                <Footer style={{ fontSize: "x-large" }}>
                    <AlertMessage err={auth.err} />
                    Авторизация на сайте
                </Footer>
                <Content><WrappedLogin isFetching={auth.isFetching} err={auth.err} history={history} onSubmitBtn={(login, password, history) => fetchLoginAction(login, password, history)} /></Content>
                <Footer></Footer>
            </Layout>
        )
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLoginAction: (login, password, history) => dispatch(fetchLogin(login, password, history))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage))