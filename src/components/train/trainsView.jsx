import React, { Component } from 'react';
import AlertMessage from '../alertMessage'
import TrainItemView from './trainItemView'

class TrainsView extends Component {
    render() {
        const { trains, err, fetchCarsAction, history } = this.props

        if (err) {
            return (<AlertMessage err={err} />)
        } else if (trains.msgList && (trains.msgList.length > 0)) {
            return (<AlertMessage err={new Error(trains.msgList[0].message)} />)
        } else if (trains.list && (trains.list.length > 0)) {
            return (

                <div>
                    <nav className="navbar navbar-rzd" id="j-menu">
                        <div className="navbar-header clearfix">
                            <table className="pull-left">
                                <tbody>
                                    <tr>
                                        <td style={{ verticalAlign: "top"}}><span className="navbar-brand"></span>
                                        </td>
                                        <td style={{ verticalAlign: "top"}}><span className="page-heading" id="CommonTitle" data-title="">Выбор поезда</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </nav>

                    <div align="left" className="j-route">
                        <div className="trl-routeinfo-brief j-route-info route-info">
                            <div> {trains.from} — {trains.where}</div>
                            <div className="route-info-datetime clearfix">
                                <div className="pull-left route-info-datetime-item"><span className="glyphicon glyphicon-calendar"></span>{trains.date}</div>
                                <div className="pull-left route-info-datetime-item"><span className="glyphicon glyphicon-time"></span> 00:00 - 24:00</div>
                            </div>
                        </div>
                    </div>


                    <div align="left" className="j-trains-list trlist">
                        {trains.list.map((train, i) => <TrainItemView trains={trains} trainProp={train} key={i} fetchCarsAction={fetchCarsAction} history={history} />)}
                    </div>

                </div>

            )
        } else {
            return null
        }
    }
}

export default TrainsView