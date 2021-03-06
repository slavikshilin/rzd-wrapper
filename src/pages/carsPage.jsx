import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions'
import { clearSearch } from '../actions/searchActions'
import { clearTrains } from '../actions/trainsActions'
import { fetchCars, clearCars } from '../actions/carsActions'
import CarsView from '../components/car/carsView'
import Splash from '../components/splash'

class CarsPage extends Component {

    render() {

        const {
            auth,
            trains,
            cars,
            search,
            history,
            fetchLogoutAction,
            fetchCarsAction
        } = this.props

        if (auth.isFetching) {
            return (
                <Splash />
            )           
        } else if (!cars.carsInfo) {
            history.push("/")
            return null
        } else {
            return (
                <CarsView
                    auth={auth}
                    trains={trains}
                    cars={cars}
                    search={search}
                    history={history}
                    fetchLogoutAction={fetchLogoutAction}
                    fetchCarsAction={fetchCarsAction} />
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
        search: store.search,
        trains: store.trains,
        cars: store.cars,
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
        fetchCarsAction: (fromCode, toCode, date, tnum, history) => dispatch(fetchCars(fromCode, toCode, date, tnum, history)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CarsPage))
