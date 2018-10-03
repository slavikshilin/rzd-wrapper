import React from 'react'
import { AutoComplete } from 'antd'
import { getStations } from "../core/api/apiMethods"

function onSelect(value, option) {
    console.log('onSelect', value)
}

const defaultCities = [
    {
        value: 2000000, text: 'МОСКВА'
    },
    {
        value: 2004000, text: 'САНКТ-ПЕТЕРБУРГ'
    },
    {
        value: 2060500, text: 'КАЗАНЬ'
    },
    {
        value: 2060001, text: 'НИЖНИЙ НОВГОРОД'
    }
]

class AntdComplete extends React.Component {

    state = {
        dataSource: defaultCities,
        dataCash: defaultCities
    }

    handleSearch = (value) => {

        value = value.toUpperCase()

        const curThis = this

        if (value.length === 0) {
            curThis.setState({
                dataSource: defaultCities,
                dataCash: defaultCities
            })
        }

        if (value.length <= 2) {
            return
        }

        // Есть ли элемент в кеше
        if (this.state.dataCash.findIndex(function (el, index, array) {
            return el.text.startsWith(value)
        })
            && (this.state.dataCash.filter(function (el) {
                return el.text.startsWith(value)
            }).length > 10)
            && (this.state.dataCash !== defaultCities)) {
            let dataSourceF = this.state.dataCash.filter(function (el) {
                return el.text.startsWith(value)
            }).slice(0, 10)
            curThis.setState({
                dataSource: dataSourceF
            })
        } else {

            getStations(value)
                .then(function (stationResponseItems) {
                    return stationResponseItems.json()
                }, function (ex) {
                    console.log("parsing failed", ex)
                })
                .then(function (stationResponseItems) {
                    console.log('getStations complete')

                    if (Array.isArray(stationResponseItems.data)) {
                        var dataSourcel = stationResponseItems.data.sort(function (k, i) {
                            var t, s
                            t = k.S + k.L * k.L
                            s = i.S + i.L * i.L
                            return s < t ? -1 : (s > t ? 1 : 0)
                        }).map(function (el) {
                            return { value: el.c, text: el.n }
                        })

                        let dataSourceF = dataSourcel.filter(function (el) {
                            return el.text.startsWith(value)
                        }).slice(0, 10)

                        curThis.setState({
                            dataCash: dataSourcel,
                            dataSource: dataSourceF
                        })
                    } else {
                        curThis.setState({
                            dataSource: [],
                            dataCash: []
                        })
                    }

                }, function (ex) {
                    console.log("parsing failed", ex)
                })
        }
    }

    render() {
        const { placeholder, disabled, onChange } = this.props
        const { dataSource } = this.state

        return (
            <AutoComplete
                className="ant-select-dropdown-menu-all"
                dataSource={dataSource}
                onSelect={onSelect}
                onChange={onChange}
                onSearch={this.handleSearch}
                placeholder={placeholder}
                disabled={disabled}
            />
        )
    }
}

export default AntdComplete 