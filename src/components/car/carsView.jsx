import React, { Component } from 'react'
import { Layout } from 'antd'
import AlertMessage from '../alertMessage'
import AuthHeader from '../authHeader'
import { getUserInfo } from '../../core/utils/userInfo'
import TrainItemTimeView from '../train/trainItemTimeView'
import CarItemView from '../car/carItemView'

const { Content } = Layout

class CarsView extends Component {
	render() {
		const { auth, cars, history, fetchLogoutAction } = this.props
		const train = ((cars) && (cars.carsInfo)) ? cars.carsInfo[0] : []
		const carType = cars.carType

		if (train.result === 'FAIL') {
			return (<AlertMessage err={new Error(train.error)} />)
		} else if (train.cars && (train.cars.length > 0)) {
			return (

				<Layout className="main-layout">
					<AuthHeader userInfo={getUserInfo(auth)} history={history} fetchLogoutAction={fetchLogoutAction} />
					<Content>
						<div className="main-content-body">

							<div>
								<nav className="navbar navbar-rzd" id="j-menu">
									<div className="navbar-header clearfix">
										<table className="pull-left">
											<tbody>
												<tr>
													<td style={{ verticalAlign: "top" }}><span className="navbar-brand"></span>
													</td>
													<td style={{ verticalAlign: "top" }}><span className="page-heading" id="CommonTitle" data-title="">Выбор вагона</span></td>
												</tr>
											</tbody>
										</table>
									</div>
								</nav>

								<div align="left" className="trl-routeinfo-brief route-info j-route-info">
									<div className="trl-cars-title fixed-inline">Поезд {train.number}</div>
									<div className="trl-train-datetime-item clearfix">
										<div className="row">
											<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
												<div>{train.route0}</div>
											</div>
											<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 trl-train-datetime-arrow trl-train-datetime-item" style={{ padding: 0 }}>→</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
												<div>{train.route1}</div>
											</div>
										</div>

										<div className="clearfix trl-train-datetime">

											<TrainItemTimeView
												localDate={train.localDate0}
												localTime={train.localTime0}
												timeDeltaString={train.timeDeltaString0}
												date={train.date0}
												time={train.time0} />

											<TrainItemTimeView
												localDate={train.localDate1}
												localTime={train.localTime1}
												timeDeltaString={train.timeDeltaString1}
												date={train.date1}
												time={train.time1} />

										</div>

									</div>
								</div>

								<div align="left" className="j-content trlist">
									{train.cars.filter(function(car) {
											return car.type === carType
										}).map((car, i) =>	
										<CarItemView carProp={car} key={i} />
									)}
								</div>

							</div>

						</div>
					</Content>
				</Layout>

			)
		} else {
			return null
		}
	}
}

export default CarsView