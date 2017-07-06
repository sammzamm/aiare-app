import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap/lib';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';
// import cookie from 'react-cookie';

class ObservationalDataForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      redirect:false,
      date_of_outing: '',
      location: '',
      sub_region: '',
      aspect: 'Choose Aspect',
      leeward: false,
      crossloading: false,
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
      depth_hoar: false,
      surface_hoar: false,
      hoar_frost: false,
      graupel: false,
      facets: false,
      woomphing: false,
      shooting_cracks: false,
      convex_roller: false,
      concave_roller: false,
      layers: [{},{},{},{},{},{},{},{},{},{},{},{}],
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

    this.changeLocation = this.changeLocation.bind(this);
    this.changeSubRegion = this.changeSubRegion.bind(this);
    this.changeAspect = this.changeAspect.bind(this);
    this.changeElevation = this.changeElevation.bind(this);
    this.changeSlopeAngle = this.changeSlopeAngle.bind(this);
    this.changeSnowpack = this.changeSnowpack.bind(this);
    this.changeSnowpackInFeet = this.changeSnowpackInFeet.bind(this);
    this.changeSnowpackInInches = this.changeSnowpackInInches.bind(this);
    this.changePitSlide = this.changePitSlide.bind(this);
    this.changePitPhoto = this.changePitPhoto.bind(this);
    this.changeForecastLow = this.changeForecastLow.bind(this);
    this.changeForecastHigh = this.changeForecastHigh.bind(this);
    this.changeForecastSkyVis = this.changeForecastSkyVis.bind(this);
    this.changeForecastPrecip = this.changeForecastPrecip.bind(this);
    this.changeForecastWind = this.changeForecastWind.bind(this);
    this.changeForecastGust = this.changeForecastGust.bind(this);
    this.changeActualHigh = this.changeActualHigh.bind(this);
    this.changeActualLow = this.changeActualLow.bind(this);
    this.changeActualSkyVis = this.changeActualSkyVis.bind(this);
    this.changeActualPrecip = this.changeActualPrecip.bind(this);
    this.changeActualWeather = this.changeActualWeather.bind(this);
    this.changeActualWind = this.changeActualWind.bind(this);
    this.changeBackup = this.changeBackup.bind(this);
    this.changeIdeal = this.changeIdeal.bind(this);
    this.changeTripReport = this.changeTripReport.bind(this);
    this.changeTripPhoto = this.changeTripPhoto.bind(this);
    this.changeTripReport = this.changeTripReport.bind(this);
    this.changeLayer = this.changeLayer.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeLooseDry = this.changeLooseDry.bind(this);
    this.changeLooseWet = this.changeLooseWet.bind(this);
    this.changeWetSlab = this.changeWetSlab.bind(this);
    this.changeStormSlab = this.changeStormSlab.bind(this);
    this.changeWindSlab = this.changeWindSlab.bind(this);
    this.changePersistantSlab = this.changePersistantSlab.bind(this);
    this.changeDeepSlab = this.changeDeepSlab.bind(this);
    this.changeCornice = this.changeCornice.bind(this);
    this.changeFreshSnow = this.changeFreshSnow.bind(this);
    this.changeWarming = this.changeWarming.bind(this);
    this.changeWeakLayers = this.changeWeakLayers.bind(this);
    this.changeLeeward = this.changeLeeward.bind(this);
    this.changeCrossloading = this.changeCrossloading.bind(this);
    this.changeDepthHoar = this.changeDepthHoar.bind(this);
    this.changeSurfaceHoar = this.changeSurfaceHoar.bind(this);
    this.changeHoarFrost = this.changeHoarFrost.bind(this);
    this.changeGraupel = this.changeGraupel.bind(this);
    this.changeFacets = this.changeFacets.bind(this);
    this.changeWoomphing = this.changeWoomphing.bind(this);
    this.changeShootingCracks = this.changeShootingCracks.bind(this);
    this.changeConvexRoller = this.changeConvexRoller.bind(this);
    this.changeConcaveRoller = this.changeConcaveRoller.bind(this);

    this.sendData = this.sendData.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);

  }
  handleRedirect(){
    if(this.state.redirect){
        return <Redirect to='/allobservations'></Redirect>;
      }
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
  changeLooseDry(event){
    this.setState({
      loose_dry:event.target.checked
    })
  }
  changeLooseWet(event){
    this.setState({
      loose_wet:event.target.checked
    })
  }
  changeWetSlab(event){
    this.setState({
      wet_slab:event.target.checked
    })
  }
  changeStormSlab(event){
    this.setState({
      storm_slab:event.target.checked
    })
  }
  changeWindSlab(event){
    this.setState({
      wind_slab:event.target.checked
    })
  }
  changePersistantSlab(event){
    this.setState({
      persistant_slab:event.target.checked
    })
  }
  changeDeepSlab(event){
    this.setState({
      deep_slab:event.target.checked
    })
  }
  changeCornice(event){
    this.setState({
      cornice:event.target.checked
    })
  }
  changeFreshSnow(event){
    this.setState({
      fresh_snow:event.target.checked
    })
  }
  changeWarming(event){
    this.setState({
      warming:event.target.checked
    })
  }
  changeWeakLayers(event){
    this.setState({
      weak_layers:event.target.checked
    })
  }
  changeLeeward(event){
    this.setState({
      leeward:event.target.checked
    })
  }
  changeCrossloading(event){
    this.setState({
      crossloading:event.target.checked
    })
  }
  changeDepthHoar(event){
    this.setState({
      depth_hoar:event.target.checked
    })
  }
  changeSurfaceHoar(event){
    this.setState({
      surface_hoar:event.target.checked
    })
  }
  changeHoarFrost(event){
    this.setState({
      hoar_frost:event.target.checked
    })
  }
  changeGraupel(event){
    this.setState({
      graupel:event.target.checked
    })
  }
  changeFacets(event){
    this.setState({
      facets:event.target.checked
    })
  }
  changeWoomphing(event){
    this.setState({
      woomphing:event.target.checked
    })
  }
  changeShootingCracks(event){
    this.setState({
      shooting_cracks:event.target.checked
    })
  }
  changeConvexRoller(event){
    this.setState({
      convex_roller:event.target.checked
    })
  }
  changeConcaveRoller(event){
    this.setState({
      concave_roller:event.target.checked
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
    if(event.target.value == "Shoulder"){
      this.setState({
        pit_slide_wrist: false,
        pit_slide_elbow: false,
        pit_slide_shoulder: true,
        pit_slide_body_weight: false,
        pit_slide_jump: false
      })
    }
    if(event.target.value == "Elbow"){
      this.setState({
        pit_slide_wrist: false,
        pit_slide_elbow: true,
        pit_slide_shoulder: false,
        pit_slide_body_weight: false,
        pit_slide_jump: false
      })
    }
    if(event.target.value == "Wrist"){
      this.setState({
        pit_slide_wrist: true,
        pit_slide_elbow: false,
        pit_slide_shoulder: false,
        pit_slide_body_weight: false,
        pit_slide_jump: false
      })
    }
    if(event.target.value == "Body Weight"){
      this.setState({
        pit_slide_wrist: false,
        pit_slide_elbow: false,
        pit_slide_shoulder: false,
        pit_slide_body_weight: true,
        pit_slide_jump: false
      })
    }
    if(event.target.value == "Jump"){
      this.setState({
        pit_slide_wrist: false,
        pit_slide_elbow: false,
        pit_slide_shoulder: false,
        pit_slide_body_weight: false,
        pit_slide_jump: true
      })
    }
  }

  changePitPhoto(event){
    this.setState({
      pit_photo: event.target.value
    })
  }
  ///////////////////////////////////////////////////////////////
changeForecastLow(event){
  this.setState({
    forecast_low_temp: event.target.value
  })
}
changeForecastHigh(event){
  this.setState({
    forecast_high_temp: event.target.value
  })
}
changeForecastSkyVis(event){
  this.setState({
    forecast_sky_visibility: event.target.value
  })
}
changeForecastPrecip(event){
  this.setState({
    forecast_precipitation: event.target.value
  })
}
changeForecastWind(event){
  this.setState({
    forecast_wind: event.target.value
  })
}
changeForecastGust(event){
  this.setState({
    forecast_gust: event.target.value
  })
}
  ///////////////////////////////////////////////////////////////
  changeActualLow(event){
    this.setState({
      actual_low_temp: event.target.value,
    })
  }
  changeActualHigh(event){
    this.setState({
      actual_high_temp: event.target.value,
    })
  }
  changeActualSkyVis(event){
    this.setState({
      actual_sky_visibility: event.target.value,
    })
  }
  changeActualPrecip(event){
    this.setState({
      actual_precipitation: event.target.value,
    })
  }
  changeActualWeather(event){
    this.setState({
      actual_weather: event.target.value,
    })
  }
  changeActualWind(event){
    this.setState({
      actual_wind: event.target.value,
    })
  }

  ///////////////////////////////////////////////////////////////
  changeIdeal(event){
    this.setState({
      ideal_approach: event.target.value,
    })
  }
  changeBackup(event){
    this.setState({
      backup_approach: event.target.value
    })
  }
  ///////////////////////////////////////////////////////////////
  changeTripReport(event){
    this.setState({
      trip_report: event.target.value,
    })
  }
  changeTripPhoto(event){
    this.setState({
      route_photo: event.target.value
    })
  }
///////////////////////////////////////////////////////////////


  changeLayer(event){
    if(event.target.placeholder == 'Depth in Feet'){
      let layers = this.state.layers;
      layers[event.target.id].ft = event.target.value;
      this.setState({
        layers:layers
      })
    }
    if(event.target.placeholder == 'Depth in Inches'){
      let layers = this.state.layers;
      layers[event.target.id].in = event.target.value;
      this.setState({
        layers:layers
      })
    }
    if(event.target.placeholder == 'Type of Layer'){
      let layers = this.state.layers;
      layers[event.target.id].type = event.target.value;
      this.setState({
        layers:layers
      })
    }
  }

  changeDate(event){
    this.setState({
      date_of_outing: event.target.value
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
      .then(res => {console.log('blah', res)})
      .then((response) => {
        this.setState({
          redirect:true
          })
      })
  }

  render() {
    return (
      <div>
        {this.handleRedirect()}
  <div className="container">
    <h2>Observational Data</h2>
    <form>
      <div className="well">
        <div className="col-sm-12">
          <h3 className="inWell">Location</h3>
          <div className="col-sm-6">
          <label htmlFor="date" className="col-sm-8 col-form-label inWell loc">Date</label>
            <label htmlFor="location" className="col-sm-8 col-form-label inWell loc">Location</label>
            <label htmlFor="subRegion" className="col-sm-8 col-form-label inWell loc">Sub Region</label>
            <label htmlFor="elevation" className="col-sm-8 col-form-label inWell loc">Elevation</label>
            <label htmlFor="slopeAngle" className="col-sm-8 col-form-label inWell loc">Slope Angle</label>
          </div>

          <div className="col-sm-6">
          <input id="date" onChange={this.changeDate} name="date" type="text" className="validate form-controll location" placeholder="00-00-0000" />
          <br></br>
            <input id="location" onChange={this.changeLocation} name="location" type="text" className="validate form-controll location" placeholder="Location" />
            <br></br>
            <input id='subRegion' onChange={this.changeSubRegion} name="subRegion" type="text" className="validate location" placeholder="Sub Region" />
            <br></br>
            <input id="elevation" placeholder="Elevation" onChange={this.changeElevation} name="elevation" type="number" min="0" max="29029" className="validate location" />
            <br></br>
            <input id="slopeAngle" placeholder="Slope Angle" onChange={this.changeSlopeAngle} name="slopeAngle" type="number" min="25" max="75" className="validate location" />
          </div>
        </div>

        <div className="col-sm-12">
          <hr></hr>
        </div>

        <h3 className="inWell">Aspect</h3>
        <div className="col-sm-6">
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

        <div className="col-sm-3">
          <input id="leeward" className="snowType" onChange={this.changeLeeward} name="leeward" type="checkbox" className="validate" />
          <label className="inWell" htmlFor="leeward">Leeward</label>
          <input id="crossloading" className="snowType" onChange={this.changeCrossloading} name="crossloading" type="checkbox" className="validate" />
          <label className="inWell" htmlFor="crossloading">Crossloading</label>
        </div>

        <br></br>
        <div className="col-sm-12">
          <hr></hr>
        </div>

        <h3 className="inWell">Objective Hazards</h3>
        <div className="col-sm-3">
          <div>
            <input id="looseDry" className="snowType" onChange={this.changeLooseDry} name="looseDry" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="looseDry">Loose Dry</label>
          </div>

          <div>
            <input id="looseWet" className="snowType" onChange={this.changeLooseWet} name="looseWet" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="looseWet">Loose Wet</label>
          </div>

          <div>
            <input id="wetSlab" className="snowType" onChange={this.changeWetSlab} name="wetSlab" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="wetSlab">Wet Slab</label>
          </div>

          <div>
            <input id="stormSlab" className="snowType" onChange={this.changeStormSlab} name="stormSlab" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="stormSlab">Storm Slab</label>
          </div>

          <div>
            <input id="windSlab" className="snowType" onChange={this.changeWindSlab} name="windSlab" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="windSlab">Wind Slab</label>
          </div>
        </div>

        <div className="col-sm-3">
          <div>
            <input id="persistantSlab" className="snowType" onChange={this.changePersistantSlab} name="persistantSlab" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="persistantSlab">Persistant Slab</label>
          </div>

          <div>
            <input id="deepSlab" className="snowType" onChange={this.changeDeepSlab} name="deepSlab" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="deepSlab">Deep Slab</label>
          </div>

          <div>
            <input id="cornice" className="snowType" onChange={this.changeCornice} name="cornice" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="cornice">Cornice</label>
          </div>

          <div>
            <input id="freshSnow" className="snowType" onChange={this.changeFreshSnow} name="freshSnow" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="freshSnow">Fresh Snow</label>
          </div>

          <div>
            <input id="woomphing" className="snowType" onChange={this.changeWoomphing} name="woomphing" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="woomphing">Woomphing</label>
          </div>
        </div>

        <div className="col-sm-3">
          <div>
            <input id="weakLayers" className="snowType" onChange={this.changeWeakLayers} name="weakLayers" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="weakLayers">Weak Layers</label>
          </div>

          <div>
            <input id="depth_hoar" className="snowType" onChange={this.changeDepthHoar} name="depth_hoar" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="depth_hoar">Depth Hoar</label>
          </div>

          <div>
            <input id="surface_hoar" className="snowType" onChange={this.changeSurfaceHoar} name="surface_hoar" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="surface_hoar">Surface Hoar</label>
          </div>

          <div>
            <input id="hoar_frost" className="snowType" onChange={this.changeHoarFrost} name="hoar_frost" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="hoar_frost">Hoar Frost</label>
          </div>

          <div>
            <input id="graupel" className="snowType" onChange={this.changeGraupel} name="graupel" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="graupel">Graupel</label>
          </div>
        </div>

        <div className="col-sm-3">
          <div>
            <input id="facets" className="snowType" onChange={this.changeFacets} name="facets" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="facets">Facets</label>
          </div>

          <div>
            <input id="warming" className="snowType" onChange={this.changeWarming} name="warming" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="warming">Warming</label>
          </div>

          <div>
            <input id="shooting_cracks" className="snowType" onChange={this.changeShootingCracks} name="shooting_cracks" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="shooting_cracks">Shooting Cracks</label>
          </div>

          <div>
            <input id="convex_roller" className="snowType" onChange={this.changeConvexRoller} name="convex_roller" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="convex_roller">Convex Roller</label>
          </div>

          <div>
            <input id="concave_roller" className="snowType" onChange={this.changeConcaveRoller} name="concave_roller" type="checkbox" className="validate" />
            <label className="inWell" htmlFor="concave_roller">Concave Roller</label>
          </div>
        </div>

        <br></br>
        <div className="col-sm-12">
          <hr></hr>
        </div>

      <div className="col-sm-12">
      <h3 className="inWell">Pit Layers</h3>

         <div className="col-sm-3">
         <label className="inWell layerMarg" htmlFor="layer_1">Bottom Layer:</label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_2">2nd Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_3">3rd Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_4">4th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_5">5th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_6">6th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_7">7th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_8">8th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_9">9th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_10">10th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_11">11th Layer: </label>
         <br></br>
         <label className="inWell layerMarg" htmlFor="layer_12">12th Layer: </label>
         </div>

         <div className="col-sm-3">

          <input className="layerChart" id="0" onChange={this.changeLayer} name="layer_1" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="1" onChange={this.changeLayer} name="layer_2" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="2" onChange={this.changeLayer} name="layer_3" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="3" onChange={this.changeLayer} name="layer_4" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="4" onChange={this.changeLayer} name="layer_5" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="5" onChange={this.changeLayer} name="layer_6" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="6" onChange={this.changeLayer} name="layer_7" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="7" onChange={this.changeLayer} name="layer_8" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="8" onChange={this.changeLayer} name="layer_9" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="9" onChange={this.changeLayer} name="layer_10" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="10" onChange={this.changeLayer} name="layer_11" type="text" className="validate" placeholder="Type of Layer" />
          <input className="layerChart" id="11" onChange={this.changeLayer} name="layer_12" type="text" className="validate" placeholder="Type of  Layer" />
         </div>
         <div className="col-sm-3">
         <input className="layerChart" id="0" onChange={this.changeLayer} name="layer_1" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="1" onChange={this.changeLayer} name="layer_2" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="2" onChange={this.changeLayer} name="layer_3" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="3" onChange={this.changeLayer} name="layer_4" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="4" onChange={this.changeLayer} name="layer_5" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="5" onChange={this.changeLayer} name="layer_6" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="6" onChange={this.changeLayer} name="layer_7" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="7" onChange={this.changeLayer} name="layer_8" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="8" onChange={this.changeLayer} name="layer_9" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="9" onChange={this.changeLayer} name="layer_10" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="10" onChange={this.changeLayer} name="layer_11" type="number" className="validate" placeholder="Depth in Feet" />
         <input className="layerChart" id="11" onChange={this.changeLayer} name="layer_12" type="number" className="validate" placeholder="Depth in Feet" />
         </div>
         <div className="col-sm-3">

         <input className="layerChart" id="0" onChange={this.changeLayer} name="layer_1" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="1" onChange={this.changeLayer} name="layer_2" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="2" onChange={this.changeLayer} name="layer_3" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="3" onChange={this.changeLayer} name="layer_4" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="4" onChange={this.changeLayer} name="layer_5" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="5" onChange={this.changeLayer} name="layer_6" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="6" onChange={this.changeLayer} name="layer_7" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="7" onChange={this.changeLayer} name="layer_8" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="8" onChange={this.changeLayer} name="layer_9" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="9" onChange={this.changeLayer} name="layer_10" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="10" onChange={this.changeLayer} name="layer_11" type="number" className="validate" placeholder="Depth in Inches" />
         <input className="layerChart" id="11" onChange={this.changeLayer} name="layer_12" type="number" className="validate" placeholder="Depth in Inches" />

         </div>
      </div>

        <br></br>
        <div className="col-sm-12">
          <hr></hr>
        </div>

        <div className="col-sm-12">
          <h3 className="inWell">Snowpack Notes</h3>
          <textarea id="snowpack" onChange={this.changeSnowpack} name="snowpack" type="text" className="validate textBox"></textarea>
        </div>

        <div className="col-sm-12">
          <hr></hr>
        </div>

        <div className="col-sm-12">
          <h3 className="inWell">Avy Pit</h3>

          <div className="col-sm-6">
            <h4 className="inWell underline">Pit Depth</h4>
            <input id="pitDepthFeet" onChange={this.changeSlopeAngle} name="pitDepthFeet" placeholder="Feet" type="number" min="0" max="10" className="validate" />
            <input id="pitDepthInches" placeholder="Inches" onChange={this.changeSlopeAngle} name="pitDepthInches" type="number" min="0" max="11" className="validate" />
            <br></br>
            <h5 className="inWell">Pit Photo</h5>
            <input id="pitPhoto" placeholder="Pit Photo URL" onChange={this.changePitPhoto} name="pitPhoto" type="text" className="validate" />
            <br></br>
            <br></br>
          </div>

          <h4 className="inWell underline">Compression Test</h4>

          <div className="col-sm-2"></div>

          <div className="col-sm-2">
            <input id="wrist" value="Wrist" onChange={this.changePitSlide} name="trigger" type="radio" className="validate" />
            <label className="inWell" htmlFor="wrist">Wrist</label>
            <br></br>
            <input id="elbow" value="Elbow" onChange={this.changePitSlide} name="trigger" type="radio" className="validate" />
            <label className="inWell" htmlFor="elbow">Elbow</label>
            <br></br>
            <input id="shoulder" value="Shoulder" onChange={this.changePitSlide} name="trigger" type="radio" className="validate" />
            <label className="inWell" htmlFor="shoulder">Shoulder</label>
            <br></br>
            <input id="bodyWeight" value="Body Weight" onChange={this.changePitSlide} name="trigger" type="radio" className="validate" />
            <label className="inWell" htmlFor="weighted">Body Weight</label>
            <br></br>
            <input id="jump" value="Jump" onChange={this.changePitSlide} name="trigger" type="radio" className="validate" />
            <label className="inWell" htmlFor="jump">Jump</label>
          </div>
        </div>



        <div className="col-sm-12">
          <hr></hr>
        </div>

        <div className="col-sm-12">
          <h3 className="inWell">Weather</h3>
          <div className="col-sm-6">
            <h4 className="inWell underline left">Forecast</h4>
            <input id="forecastLow" onChange={this.changeForecastLow} name="forecastLow" placeholder="Forecasted Low in &#8457;" type="number" min="-50" max="90" className="validate" />
            <input id="forecastHigh" onChange={this.changeForecastHigh} name="forecastHigh" placeholder="Forecasted High in &#8457;" type="number" min="-50" max="90" className="validate" />
            <input id="forecastedSkyVis" onChange={this.changeForecastSkyVis} name="forecastedSkyVis" placeholder="Forecasted Sky Visibility" type="text" className="validate" />
            <input id="forecastedPrecip" onChange={this.changeForecastPrecip} name="forecastedPrecip" placeholder="Forecasted Preciptation" type="text" className="validate" />
            <input id="forecastedWind" onChange={this.changeForecastWind} name="forecastedWind" placeholder="Forecasted Wind in MPH" type="number" min="0" max="100" className="validate" />
            <input id="forecastedGust" onChange={this.changeForecastGust} name="forecastedGust" placeholder="Forecasted Gusts in MPH" type="number" min="0" max="100" className="validate" />
          </div>

          <div className="col-sm-6">
            <h4 className="inWell underline left">Actual</h4>
            <input id="actualLow" placeholder="Actual Low in &#8457;" onChange={this.changeActualLow} name="actualLow" type="number" min="0" max="100" className="validate" />
            <input id="actualHigh" placeholder="Actual High in &#8457;" onChange={this.changeActualHigh} name="actualHigh" type="number" min="0" max="100" className="validate" />
            <input id="actualSkyVis" onChange={this.changeActualSkyVis} name="actualSkyVis" placeholder="Actual Sky Visibility" type="text" className="validate" />
            <input id="actualPrecip" onChange={this.changeActualPrecip} name="actualPrecip" placeholder="Actual Precipitation" type="text" className="validate" />
            <input id="actualWind" onChange={this.changeActualWind} name="actualWind" placeholder="Actual Wind" type="text" className="validate" />
            <textarea id="actualWeather" onChange={this.changeActualWeather} name="actualWeather" placeholder="Actual Weather" type="text" rows="4" cols="50" className="validate textCenter"></textarea>
          </div>
        </div>

        <div className="col-sm-12">
          <hr></hr>
        </div>

        <div className="col-sm-12">
          <h3 className="inWell">Approach</h3>

          <div className="col-sm-6">
            <h4 className="inWell underline">Ideal</h4>
            <textarea id="idealApproach" onChange={this.changeApproach} name="idealApproach" placeholder="Ideal Approach" type="text" rows="4" cols="50" className="validate textCenter"></textarea>
          </div>
          <div className="col-sm-6">
            <h4 className="inWell underline">Backup</h4>
            <textarea id="backupApproach" onChange={this.changeApproach} name="backupApproach" placeholder="Backup Approach" type="text" rows="4" cols="50" className="validate textCenter"></textarea>
          </div>
        </div>

        <div className="col-sm-12">
          <hr></hr>
        </div>

        <div className="col-sm-12">
          <h3 className="inWell">Trip Report</h3>
          <textarea id="tripReport" onChange={this.changeTripReport} name="tripReport" placeholder="Trip Report" type="text" rows="8" cols="200" className="validate"></textarea>
          <br></br>
          <input id="routePhoto" onChange={this.changeTripReport} name="routePhoto" placeholder="Add Route Photo" type="text" className="validate" />
        </div>

        <div className="col-sm-12">
          <hr></hr>
        </div>

        <br></br>

        <button className="btn-default btn" onClick={this.sendData}>Submit</button>
      </div>
    </form>
  </div>
  <Footer />
</div>
    );
  }
}

export default ObservationalDataForm
