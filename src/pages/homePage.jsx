import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions'
import { fetchTrains, clearTrains } from '../actions/trainsActions'
import { fetchCars, clearCars } from '../actions/carsActions'
import { changeDepartureStation, changeArriveStation, changeDepartureDate } from '../actions/searchActions'
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
                    clearCarsAction={clearCarsAction} />
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
            dispatch(clearTrains())
        },
        changeDepartureStationAction: (code) => dispatch(changeDepartureStation(code)),
        changeArriveStationAction: (code) => dispatch(changeArriveStation(code)),
        changeDepartureDateAction: (date) => dispatch(changeDepartureDate(date)),
        fetchTrainsAction: (fromCode, toCode, date) => dispatch(fetchTrains(fromCode, toCode, date)),
        fetchCarsAction: (fromCode, toCode, date, tnum, history) => dispatch(fetchCars(fromCode, toCode, date, tnum, history)),
        clearCarsAction: () => dispatch(clearCars()),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
