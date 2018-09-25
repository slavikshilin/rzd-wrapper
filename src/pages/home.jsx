import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/loginActions'
import HomeForm from '../components/homeForm'
import SplashForm from '../components/splashScreen'
import 'antd/dist/antd.css';

class Home extends Component {

  render() {

    const { page, history, fetchLogoutAction } = this.props

    if (page.isFetching) {
      return (
        <SplashForm />
        )
    } else {
      return (
        <HomeForm page={page} history={history} fetchLogoutAction={fetchLogoutAction} />
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
