import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions'
import { fetchTrains } from '../actions/trainsActions'
import { changeDepartureStation, changeArriveStation, changeDepartureDate } from '../actions/searchActions'
import Home from '../components/home'
import Splash from '../components/splash'

class HomePage extends Component {

  render() {

    const { 
      auth, 
      trains, 
      search, 
      history, 
      fetchLogoutAction, 
      fetchTrainsAction,
      changeDepartureStationAction, 
      changeArriveStationAction,
      changeDepartureDateAction
    } = this.props

    if (auth.isFetching) {
      return (
        <Splash />
      )
    } else {
      return (
        <Home 
          auth={auth} 
          trains={trains} 
          search={search}
          history={history}
          changeDepartureStationAction={changeDepartureStationAction}
          changeArriveStationAction={changeArriveStationAction} 
          changeDepartureDateAction={changeDepartureDateAction}
          fetchLogoutAction={fetchLogoutAction} 
          fetchTrainsAction={fetchTrainsAction} />         
      )      
    }
  }
}

const mapStateToProps = store => {
    return {
      auth: store.auth,
      search: store.search,
      trains: store.trains
    }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLogoutAction: (history) => dispatch(fetchLogout(history)),
    changeDepartureStationAction: (code) => dispatch(changeDepartureStation(code)), 
    changeArriveStationAction: (code) => dispatch(changeArriveStation(code)), 
    changeDepartureDateAction: (date) => dispatch(changeDepartureDate(date)), 
    fetchTrainsAction: (fromCode, toCode, date) => dispatch(fetchTrains(fromCode, toCode, date)),    
  }
}
  
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage))
