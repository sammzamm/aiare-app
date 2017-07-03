import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap/lib';
import Avitar from './Avitar';
import Footer from './Footer';
// import cookie from 'react-cookie';

class ObservationalDataForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      dateTime: '',
      location: '',
      sub_region: '',
      aspect: 'Choose Aspect',
      elevation: 0,
      slope_angle: 0,
      loose_dry: false,
      loose_wet: false,
      wet_slab: false,
      storm_slab: false,
      wind_slab: false,
      persistant_slab: false,
      deep_slab: false,
      cornice: false,
      fresh_snow: false,
      warming: false,
      weak_layers: false,
      snowpack: '',
      snowpack_in_feet: 0,
      snowpack_in_inches: 0,
      pit_slide_wrist: false,
      pit_slide_elbow: false,
      pit_slide_shoulder: false,
      pit_slide_body_weight: false,
      pit_slide_jump: false,
      pit_photo: '',
      forecast_low_temp: 0,
      forecast_high_temp: 0,
      forecast_sky_visibility: '',
      forecast_precipitation: '',
      forecast_wind: 0,
      forecast_gust: 0,
      actual_low_temp: 0,
      actual_high_temp: 0,
      actual_sky_visibility: '',
      actual_precipitation: '',
      actual_weather: '',
      actual_wind: '',
      ideal_approach: '',
      backup_approach: '',
      trip_report: '',
      route_photo: ''
    }

    this.changeLocation = this.changeLocation.bind(this)
    this.changeSubRegion = this.changeSubRegion.bind(this)
    this.changeAspect = this.changeAspect.bind(this)
    this.changeElevation = this.changeElevation.bind(this)
    this.changeSlopeAngle = this.changeSlopeAngle.bind(this)
    this.changeSnowType = this.changeSnowType.bind(this)
    this.changeSnowpack = this.changeSnowpack.bind(this)
    this.changeSnowpackInFeet = this.changeSnowpackInFeet.bind(this)
    this.changeSnowpackInInches = this.changeSnowpackInInches.bind(this)
    this.changePitSlide = this.changePitSlide.bind(this)
    this.changePitPhoto = this.changePitPhoto.bind(this)
    this.changeForecast = this.changeForecast.bind(this)
    this.changeActual = this.changeActual.bind(this)
    this.changeApproach = this.changeApproach.bind(this)
    this.changeTripReport = this.changeTripReport.bind(this)


    this.sendData = this.sendData.bind(this)

  }

  changeLocation(event){
    this.setState({
      location: event.target.value
    })
  }

  changeSubRegion(event){
    this.setState({
      sub_region: event.target.value
    })
  }

  changeAspect(event){
    console.log(event);
    this.setState({
      aspect: event
    })
  }

  changeElevation(event){
    this.setState({
      elevation: event.target.value
    })
  }

  changeSlopeAngle(event){
    this.setState({
      slope_angle: event.target.value
    })
  }

  changeSnowType(event){
    this.setState({
      loose_dry: event.target.value,
      loose_wet: event.target.value,
      wet_slab: event.target.value,
      storm_slab: event.target.value,
      wind_slab: event.target.value,
      persistant_slab: event.target.value,
      deep_slab: event.target.value,
      cornice: event.target.value,
      fresh_snow: event.target.value,
      warming: event.target.value,
      weak_layers: event.target.value
    })
  }

  changeSnowpack(event){
    this.setState({
      snowpack: event.target.value
    })
  }

  changeSnowpackInFeet(event){
    this.setState({
      snowpack_in_feet: event.target.value
    })
  }

  changeSnowpackInInches(event){
    this.setState({
      snowpack_in_inches: event.target.value
    })
  }

  changePitSlide(event){
    this.setState({
      pit_slide_wrist: event.target.value,
      pit_slide_elbow: event.target.value,
      pit_slide_shoulder: event.target.value,
      pit_slide_body_weight: event.target.value,
      pit_slide_jump: event.target.value
    })
  }

  changePitPhoto(event){
    this.setState({
      pit_photo: event.target.value
    })
  }

  changeForecast(event){
    this.setState({
      forecast_low_temp: event.target.value,
      forecast_high_temp: event.target.value,
      forecast_sky_visibility: event.target.value,
      forecast_precipitation: event.target.value,
      forecast_wind: event.target.value,
      forecast_gust: event.target.value
    })
  }

  changeActual(event){
    this.setState({
      actual_low_temp: event.target.value,
      actual_high_temp: event.target.value,
      actual_sky_visibility: event.target.value,
      actual_precipitation: event.target.value,
      actual_weather: event.target.value,
      actual_wind: event.target.value
    })
  }

  changeApproach(event){
    this.setState({
      ideal_approach: event.target.value,
      backup_approach: event.target.value
    })
  }

  changeTripReport(event){
    this.setState({
      trip_report: event.target.value,
      route_photo: event.target.value
    })
  }


  sendData(event){
    event.preventDefault();
    fetch('/api/observations',{
      method: "POST",
      headers: {
       'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state)
      })
      .then(res => console.log('blah', res));
  }

  render() {
    return (
      <div>
      <Avitar />
      <div className="container">
      <h2>Observational Data</h2>
      <form>
      <div className="well">
        <div className="col-sm-10">

        <label for="location" className="col-sm-8 col-form-label inWell">Location</label>
         <input id="location" onChange={this.changeLocation} name="location" type="text" className="validate form-controll" placeholder="Location"/>
         </div>

         <br></br>
         <label for="subRegion" className="col-sm-8 col-form-label inWell">Sub Region</label>
         <input id='subRegion' onChange={this.changeSubRegion}
         name="subRegion" type="text" className="validate" placeholder="Sub Region"/>
         <br></br>
         <label for="elevation" className="col-sm-8 col-form-label inWell">Elevation</label>
        <input id="elevation" placeholder="Elevation" onChange={this.changeElevation} name="elevation" type="number" min="0" max="29029" className="validate"/>
        <br></br>
        <label for="slopeAngle" className="col-sm-8 col-form-label inWell">Slope Angle</label>
        <input id="slopeAngle" placeholder="Slope Angle" onChange={this.changeSlopeAngle} name="slopeAngle" type="number" min="25" max="75" className="validate"/>
        <br></br>
        <hr></hr>

        <div className="container">
         <DropdownButton onSelect={this.changeAspect} bsSize="default" title={this.state.aspect} id="dropdown-size-large">
           <MenuItem eventKey="North">North</MenuItem>
           <MenuItem eventKey="North/East">North/East</MenuItem>
           <MenuItem eventKey="East">East</MenuItem>
           <MenuItem eventKey="South/East">South/East</MenuItem>
           <MenuItem eventKey="South">South</MenuItem>
           <MenuItem eventKey="South/West">South/West</MenuItem>
           <MenuItem eventKey="West">West</MenuItem>
           <MenuItem eventKey="North/West">North/West</MenuItem>
         </DropdownButton>
       </div>

        <h3 className="inWell">Type of Snow</h3>
        <input id="looseDry" className="snowType" onChange={this.changeSnowType} name="looseDry" type="checkbox" className="validate"/>
        <label for="looseDry">Loose Dry</label>

        <input id="looseWet" className="snowType" onChange={this.changeSnowType} name="looseWet" type="checkbox" className="validate"/>
        <label for="looseWet">Loose Wet</label>

        <input id="wetSlab" className="snowType" onChange={this.changeSnowType} name="wetSlab" type="checkbox" className="validate"/>
        <label for="wetSlab">Wet Slab</label>

        <input id="stormSlab" className="snowType" onChange={this.changeSnowType} name="stormSlab" type="checkbox" className="validate"/>
        <label for="stormSlab">Storm Slab</label>

        <input id="windSlab" className="snowType" onChange={this.changeSnowType} name="windSlab" type="checkbox" className="validate"/>
        <label for="windSlab">Wind Slab</label>
        <br></br>
        <input id="persistantSlab" className="snowType" onChange={this.changeSnowType} name="persistantSlab" type="checkbox" className="validate"/>
        <label for="persistantSlab">Persistant Slab</label>

        <input id="deepSlab" className="snowType" onChange={this.changeSnowType} name="deepSlab" type="checkbox" className="validate"/>
        <label for="deepSlab">Deep Slab</label>

        <input id="cornice" className="snowType" onChange={this.changeSnowType} name="cornice" type="checkbox" className="validate"/>
        <label for="cornice">Cornice</label>

        <input id="freshSnow" className="snowType" onChange={this.changeSnowType} name="freshSnow" type="checkbox" className="validate"/>
        <label for="freshSnow">Fresh Snow</label>

        <input id="warming" className="snowType" onChange={this.changeSnowType} name="warming" type="checkbox" className="validate"/>
        <label for="warming">Warming</label>

        <input id="weakLayers" className="snowType" onChange={this.changeSnowType} name="weakLayers" type="checkbox" className="validate"/>
        <label for="weakLayers">Weak Layers</label>


        <h3 className="inWell">Snowpack</h3><textarea id="snowpack" rows="4" cols="50" onChange={this.changeSnowpack} name="snowpack" type="text" className="validate"></textarea>
        <br></br>

        <h3 className="inWell">Pit Depth</h3><input id="pitDepthFeet" onChange={this.changeSlopeAngle} name="pitDepthFeet"
        placeholder="Feet" type="number" min="0" max="10" className="validate"/>
        <input id="pitDepthInches" placeholder="Inches" onChange={this.changeSlopeAngle} name="pitDepthInches" type="number" min="0" max="11" className="validate"/>
        <br></br>

        <h3 className="inWell">Pit trigger</h3>
        <br></br>
        <form>
        <input id="wrist" value="Wrist" className="pitTrigger" onChange={this.changePitSlide} name="trigger" type="radio" className="validate"/> Wrist
        <br></br>
        <input id="elbow" value="Elbow" className="pitTrigger" onChange={this.changePitSlide} name="trigger" type="radio" className="validate"/> Elbow
        <br></br>
        <input id="shoulder" value="Shoulder" className="pitTrigger" onChange={this.changePitSlide} name="trigger" type="radio" className="validate"/> Shoulder
        <br></br>
        <input id="bodyWeight" value="Body Weight" className="pitTrigger" onChange={this.changePitSlide} name="trigger" type="radio" className="validate"/> Body Weight
        <br></br>
        <input id="jump" value="Jump" className="pitTrigger" onChange={this.changePitSlide} name="trigger" type="radio" className="validate"/> Jump
        </form>
        <br></br>
        <br></br>

        <input id="pitPhoto" placeholder="Pit Photo URL" onChange={this.changePitPhoto} name="pitPhoto" type="text" className="validate"/>
        <br></br>

        <h3 className="inWell">Weather</h3>
        <h4 className="inWell left">Forecast</h4>
        <input id="forecastLow" onChange={this.changeForecast} name="forecastLow"
        placeholder="Forecasted Low in &#8457;" type="number" min="-50" max="90" className="validate"/>
        <input id="forecastHigh" onChange={this.changeForecast} name="forecastHigh"
        placeholder="Forecasted High in &#8457;" type="number" min="-50" max="90" className="validate"/>
        <input id="forecastedSkyVis" onChange={this.changeForecast} name="forecastedSkyVis"
        placeholder="Forecasted Sky Visibility" type="text"  className="validate"/>
        <br></br>
        <input id="forecastedPrecip" onChange={this.changeForecast} name="forecastedPrecip"
        placeholder="Forecasted Preciptation" type="text"  className="validate"/>
        <input id="forecastedWind" onChange={this.changeForecast} name="forecastedWind"
        placeholder="Forecasted Wind in MPH" type="number" min="0" max="100" className="validate"/>
        <input id="forecastedGust" onChange={this.changeForecast} name="forecastedGust"
        placeholder="Forecasted Gusts in MPH" type="number" min="0" max="100" className="validate"/>

        <h4 className="inWell left">Actual Weather</h4>
        <input id="actualLow" placeholder="Actual Low in &#8457;" onChange={this.changeActual} name="actualLow" type="number" min="0" max="100" className="validate"/>
        <input id="actualHigh" placeholder="Actual High in &#8457;" onChange={this.changeActual} name="actualHigh" type="number" min="0" max="100" className="validate"/>
        <input id="actualSkyVis" onChange={this.changeActual} name="actualSkyVis"
        placeholder="Actual Sky Visibility" type="text"  className="validate"/>
        <br></br>
        <input id="actualPrecip" onChange={this.changeActual} name="actualPrecip"
        placeholder="Actual Precipitation" type="text"  className="validate"/>
        <input id="actualWind" onChange={this.changeActual} name="actualWind"
        placeholder="Actual Wind" type="text"  className="validate"/>
        <br></br>
        <textarea id="actualWeather" onChange={this.changeActual} name="actualWeather" placeholder="Actual Weather" type="text" rows="4" cols="50"
        className="validate"></textarea>

        <h3 className="inWell">Approach</h3>
        <textarea id="idealApproach" onChange={this.changeApproach} name="idealApproach"
        placeholder="Ideal Approach" type="text" rows="4" cols="50" className="validate"></textarea>
        <textarea id="backupApproach" onChange={this.changeApproach} name="backupApproach"
        placeholder="Backup Approach" type="text" rows="4" cols="50" className="validate"></textarea>

        <h3 className="inWell">Trip Report</h3>
        <textarea id="tripReport" onChange={this.changeTripReport} name="tripReport" placeholder="Trip Report" type="text" rows="8" cols="150"
        className="validate"></textarea>
        <br></br>
        <input id="routePhoto" onChange={this.changeTripReport} name="routePhoto"
        placeholder="Add Route Photo" type="text"  className="validate"/>

         <br></br>
         <br></br>
         <button className="btn-default" onClick={this.sendData}>Submit</button>
      </div>
      </form>
      </div>
      <Footer />
      </div>
    );
  }
}

export default ObservationalDataForm
