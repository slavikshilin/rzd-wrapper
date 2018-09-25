import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd';
import { fetchLogout } from '../actions/loginActions'
import HomeForm from '../components/homeForm'
import SplashForm from '../components/splashScreen'

class Home extends Component {

  render() {

    const { page, history, fetchLogoutAction } = this.props

    if (page.isFetching) {
      return (
        <Layout style={{height:"100vh"}}> 
          <SplashForm />
        </Layout>
        )
    } else {
      return (
        <Layout style={{height:"100vh"}}>
          <HomeForm page={page} history={history} fetchLogoutAction={fetchLogoutAction} />
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
    fetchLogoutAction: (history) => dispatch(fetchLogout(history)),
  }
}
  
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))
