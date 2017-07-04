import React, { Component } from 'react';

class TripReport extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentWillMount(){
    fetch(`/api${this.props.location.pathname}`)
    .then(res => res.json())
    .then((trip) => {
      console.log(trip);
      this.setState(trip)
    })
  }
  render(){
    return (
      <div className="container" id="trip">
        <div className="row">
          <div className="col-lg-6" id="weather">
            <h3>Weather Forecast</h3>
            <p><strong>Wind:</strong> {this.state.forecast_wind} mph &nbsp;&nbsp;&nbsp; <strong>Gust: </strong>{this.state.forecast_gust} mph</p>
            <p><strong>Sky Visibility:</strong> {this.state.forecast_sky_visibility}</p>
            <p><strong>High Temp:</strong> {this.state.forecast_high_temp} &#176;F</p>
            <p><strong>Low Temp:</strong> {this.state.forecast_low_temp} &#176;F</p>
          </div>
          <div className="col-lg-6" id="weather">
            <h3>Actual Weather</h3>
            <p><strong>Description:</strong> {this.state.actual_weather}</p>
            <p><strong>Wind:</strong> {this.state.actual_wind}</p>
            <p><strong>Sky Visibility:</strong> {this.state.actual_sky_visibility}</p>
            <p><strong>Precipitation: </strong>{this.state.actual_precipitation}</p>
            <p><strong>High Temp:</strong> {this.state.actual_high_temp} &#176;F</p>
            <p><strong>Low Temp:</strong> {this.state.actual_low_temp} &#176;F</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TripReport
