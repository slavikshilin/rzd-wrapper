import React, { Component } from 'react';

class TrainsView extends Component {

    
    render() {

        const { trains, err } = this.props

        return (
            <div>
                <p>Ошибка : {err}</p>
                <p>Станция отправления: {trains.from}</p>
            </div>
        );
    }
}

export default TrainsView