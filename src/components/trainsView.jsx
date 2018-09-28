import React, { Component } from 'react';
import AlertMessage from '../components/alertMessage'
import TrainItemView from './trainItemView'

class TrainsView extends Component {
    render() {
        const { trains, err } = this.props

        if (err) {
            return (<AlertMessage err={err} />)
        } else if (trains.from) {
            return (

                <div>
                    <nav class="navbar navbar-rzd" id="j-menu">
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
                            <div className="pull-right">
                                <div className="navbar-header-logo"><img src="/images/mpass/logo_rzd.png" alt="" /></div>
                            </div>
                        </div>
                    </nav>

                    <div align="left" className="j-route">
                        <div className="trl-routeinfo-brief j-route-info route-info">
                            <div> {trains.from} —{trains.where}</div>
                            <div className="route-info-datetime clearfix">
                                <div className="pull-left route-info-datetime-item"><span className="glyphicon glyphicon-calendar"></span>{trains.date}</div>
                                <div className="pull-left route-info-datetime-item"><span className="glyphicon glyphicon-time"></span> 00:00 - 24:00</div>
                            </div>
                        </div>
                    </div>


                    <div align="left" className="j-trains-list trlist">
                        {trains.list.map((train, i) => <TrainItemView trainProp={train} key={i} />)}
                    </div>

                </div>

            )
        } else {
            return null
        }
    }
}

export default TrainsView