import React, { Component } from 'react'
import moment from 'moment'
import TrainsView from './train/trainsView'
import { Layout, Button, DatePicker, Modal } from 'antd'
import locale from 'antd/lib/date-picker/locale/ru_RU'
import 'moment/locale/ru'
import Complete from './complete'
import AuthHeader from './authHeader'
import { getUserInfo } from '../core/utils/userInfo'

const { Content } = Layout

class Home extends Component {

    disabledDate = (current) => {
        // Can not select days before today and today
        return current && (current < moment().startOf('day'))
    }

    onChangeDate = (date, dateString) => {
        this.props.changeDepartureDateAction(dateString)
    }

    validateSearchParams = (fromCode, toCode, date) => {
        if (!fromCode.match(/^\d{7}$/g)) {
            return 'Неверно задана станция отправления'
        } else if (!toCode.match(/^\d{7}$/g)) {
            return 'Неверно задана станция прибытия'
        } else if (!date.match(/^(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d$/g)) {
            return 'Неверно задана дата отправления'
        } else {
            return null
        }
    }

    render() {
        const {
            auth,
            search,
            trains,
            cars,
            history,
            fetchLogoutAction,
            fetchTrainsAction,
            fetchCarsAction,
            changeDepartureStationAction,
            changeArriveStationAction
        } = this.props

        const trainProp = ((trains) && (trains.trainsInfo)) ? trains.trainsInfo[0] : []
        const trainErr = ((trains) && (trains.err)) ? trains.err : null
        const isFetching = trains.isFetching
        const disabled = trains.isFetching || cars.isFetching

        const fromCode = (search.fromCode) ? search.fromCode : null
        const toCode = (search.fromCode) ? search.toCode : null
        const date = (search.date) ? search.date : null
        const nonEmptySearchParams = fromCode && toCode && date
        const validateErr = nonEmptySearchParams && this.validateSearchParams(fromCode, toCode, date)
        const canSearch = nonEmptySearchParams && (!validateErr)
        const showErr = trainErr

        if (cars.err) {
            Modal.error({
                centered: true,
                title: 'Ошибка',
                content: cars.err.message,
            })
        }

        return (
            <Layout className="main-layout">
                <AuthHeader userInfo={getUserInfo(auth)} history={history} fetchLogoutAction={fetchLogoutAction} />
                <div style={{ fontSize: "x-large" }}>
                    Параметры поиска билетов
                </div>
                <Content>
                    <div className="main-control">
                        <Complete placeholder="Откуда" disabled={disabled} onChange={changeDepartureStationAction} />
                        <Complete placeholder="Куда" disabled={disabled} onChange={changeArriveStationAction} />
                        <DatePicker disabledDate={this.disabledDate} placeholder="Дата отправления" disabled={disabled} format="DD.MM.YYYY" locale={locale} onChange={this.onChangeDate} />
                        <Button type="primary" icon="search" disabled={!canSearch || cars.isFetching} loading={isFetching} onClick={() => fetchTrainsAction(fromCode, toCode, date)} className="btn-search">Найти</Button>
                    </div>
                    <div className="main-content-body">
                        <TrainsView trains={trainProp} err={showErr} fetchCarsAction={fetchCarsAction} history={history} />
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Home
