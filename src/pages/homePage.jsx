import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions'
import { fetchTrains, clearTrains } from '../actions/trainsActions'
import { fetchCars, clearCars } from '../actions/carsActions'
import { changeDepartureStation, changeArriveStation, changeDepartureDate, clearSearch } from '../actions/searchActions'
import Home from '../components/home'
import Splash from '../components/splash'

class HomePage extends Component {

    render() {

        const {
            auth,
            trains,
            cars,
            search,
            history,
            fetchLogoutAction,
            fetchTrainsAction,
            fetchCarsAction,
            clearCarsAction,
            clearSearchAction,
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
                    cars={cars}
                    search={search}
                    history={history}
                    changeDepartureStationAction={changeDepartureStationAction}
                    changeArriveStationAction={changeArriveStationAction}
                    changeDepartureDateAction={changeDepartureDateAction}
                    fetchLogoutAction={fetchLogoutAction}
                    fetchTrainsAction={fetchTrainsAction}
                    fetchCarsAction={fetchCarsAction}
                    clearCarsAction={clearCarsAction}
                    clearSearchAction={clearSearchAction} />
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
        search: store.search,
        trains: store.trains,
        cars: store.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogoutAction: (history) => {
            dispatch(fetchLogout(history))
            dispatch(clearSearch())
            dispatch(clearTrains())
            dispatch(clearCars())
        },
        changeDepartureStationAction: (station) => dispatch(changeDepartureStation(station)),
        changeArriveStationAction: (station) => dispatch(changeArriveStation(station)),
        changeDepartureDateAction: (date) => dispatch(changeDepartureDate(date)),
        fetchTrainsAction: (fromCode, toCode, date) => dispatch(fetchTrains(fromCode, toCode, date)),
        fetchCarsAction: (fromCode, toCode, date, tnum, history) => dispatch(fetchCars(fromCode, toCode, date, tnum, history)),
        clearCarsAction: () => dispatch(clearCars()),
        clearSearchAction: () => dispatch(clearSearch()), 
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
