import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions'
import { fetchTrains } from '../actions/trainsActions'
import Home from '../components/home'
import Splash from '../components/splash'

class HomePage extends Component {

  render() {

    const { page, trains, history, fetchLogoutAction, fetchTrainsAction } = this.props

    if (page.isFetching) {
      return (
        <Splash />
      )
    } else {
      return (
        <Home page={page} trains={trains} history={history} fetchLogoutAction={fetchLogoutAction} fetchTrainsAction={fetchTrainsAction} />         
      )      
    }
  }
}

const mapStateToProps = store => {
    return {
      page: store.page,
      trains: store.trains
    }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLogoutAction: (history) => dispatch(fetchLogout(history)),
    fetchTrainsAction: (fromCode, toCode, date) => dispatch(fetchTrains(fromCode, toCode, date)),    
  }
}
  
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage))
