import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/getWeather';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.props.getWeather()
        this.state = {
            weather: null,
            weatherIcon: "http://openweathermap.org/img/wn/04d@2x.png",
        }
    }
    
    render() {
        return (
            <div>
                
                {this.props.weather?.temp}<br/>
                {this.props.weather?.name}<br/>
                {this.props.weather?.description}
                <img src={this.state.weatherIcon} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}


const mapDispatchToProps = disaptch => {
    return {
        getWeather: () => {
            disaptch(getWeather())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);