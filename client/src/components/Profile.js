import React from 'react';
import { render } from 'react-dom';
import TripReport from './TripReport';

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      first_name: '',
      last_name: '',
      email: '',
      city: '',
      state: '',
      profile_pic: '../images/avitar.png',
      observational_data:[]
    }
  }
  componentWillMount() {
      fetch(`/api/myprofile`, {
         credentials:'include'
      })
      .then(res => res.json())
      .then(user => {
        this.setState({
          first_name:user.first_name,
          last_name:user.last_name,
          email:user.email,
          city:user.city,
          state:user.state,
          profile_pic:user.profile_pic,
          observational_data:user.trips
        })
      })
   }
  render(){
    var listItems = this.state.observational_data.map(function(item, index){
      return (
        <div key={index}>
        <div className="well">
          <form>
            <div className="form-group">
            <div className="row" >
              <h3 className="inWell">{item.location} - {item.sub_region} - {item.date_of_outing}</h3>
              <hr></hr>
              <h5 className="inWell">Aspect: {item.aspect} of {item.sub_region}.</h5>
              <h5 className="inWell">Elevation: {item.elevation}</h5>
              <h5 className="inWell">Slope Angle: {item.slope_angle} Degrees</h5>
              <hr></hr>

              <h3 className="inWell">Identified Potential Objective Hazards</h3>

              <br></br>
              <div className="inWell">
              <div className="col-sm-3 inWell">
              <h5 className={item.leeward}>Leeward</h5>
              <h5 className={item.crossloading}>Crossloading</h5>
              <h5 className={item.loose_dry}>Loose Dry</h5>
              <h5 className={item.loose_wet}>Loose Wet</h5>
              <h5 className={item.wet_slab}>Wet SLab</h5>
              <h5 className={item.storm_slab}>Storm Slab</h5>
              </div>
              <div className="col-sm-3 inWell">
              <h5 className={item.wind_slab}>Wind Slab</h5>
              <h5 className={item.persistant_slab}>Persistant Slab</h5>
              <h5 className={item.deep_slab}>Deep SLab</h5>
              <h5 className={item.cornice}>Cornice</h5>
              <h5 className={item.fresh_snow}>Fresh Snow</h5>
              <h5 className={item.warming}>Warming</h5>
              </div>
              <div className="col-sm-3 inWell true">
              <h5 className={item.weak_layers}>Weak Layers</h5>
              <h5 className={item.depth_hoar}>Depth Hoar</h5>
              <h5 className={item.surface_hoar}>Surface Hoar</h5>
              <h5 className={item.hoar_frost}>Frost Hoar</h5>
              <h5 className={item.graupel}>Graupel</h5>
              <h5 className={item.facets}>Facets</h5>
              </div>
              <div className="col-sm-3 inWell true">
              <h5 className={item.woomphing}>Woomphing</h5>
              <h5 className={item.shooting_cracks}>Shooting Cracks</h5>
              <h5 className={item.convex_roller}>Convex Roller</h5>
              <h5 className={item.concave_roller}>Concave Roller</h5>
              </div>
              </div>

              <br></br>

              <div className="col-sm-12">
              <hr></hr>
              </div>

              <div className="col-sm-12">
              <h3 className="inWell">Snowpack</h3>
              <h5 className="inWell">&#9900;  {item.snowpack}</h5>
              <h5 className="inWell">&#9900;  Current snowpack is {item.snowpack_in_feet} feet and {item.snowpack_in_inches} inches.</h5>
              </div>

              <div className="col-sm-12">
              <hr></hr>
              </div>

              <div className="col-sm-12 inWell">
              <h3>Compression Test</h3>
              <h6>(Must cut out back for accurate test results)</h6>
              </div>

              <div className="col-sm-2 inWell true">
              <h5 className={item.pit_slide_wrist}>From Wrist</h5>
              </div>
              <div className="col-sm-2 inWell true">
              <h5 className={item.pit_slide_elbow}>From Elbow</h5>
              </div>
              <div className="col-sm-2 inWell true">
              <h5 className={item.pit_slide_shoulder}>From Shoulder</h5>
              </div>
              <div className="col-sm-2 inWell true">
              <h5 className={item.pit_slide_body_weight}>From Body Weight</h5>
              </div>
              <div className="col-sm-2 inWell true">
              <h5 className={item.pit_slide_jump}>From a Jump</h5>
              </div>

              <div className="col-sm-12">
              <hr></hr>
              </div>

              <div className="col-sm-12">
              <img className="pitPhoto" src={item.pit_photo} alt="Pit Photo"></img>
              </div>
              <div className="col-sm-12">
              <h3 className="inWell">Pit Layers</h3>
              <div  id="tripReport" className="col-sm-12">
              <TripReport locationParent={index+1} />
              </div>
              </div>

              <div className="col-sm-12">
              <hr></hr>
              </div>

              <div className="col-sm-12 inWell">
              <h3>Weather</h3>
              <div className="col-sm-6">
              <h4 className="underline">Forecasted</h4>
              <br></br>
              <h5>Low: {item.forecast_low_temp}</h5>
              <h5>High: {item.forecast_high_temp}</h5>
              <h5>Sky Visibility: {item.forecast_sky_visibility}</h5>
              <h5>Precipitation: {item.forecast_precipitation}</h5>
              <h5>Wind: {item.forecast_wind}</h5>
              <h5>Gusts: {item.forecast_gust}</h5>
              </div>
              <div className="col-sm-6">
              <h4 className="underline">Actual</h4>
              <br></br>
              <h5>Low: {item.actual_low_temp}</h5>
              <h5>High: {item.actual_high_temp}</h5>
              <h5>Precipitation: {item.forecast_precipitation}</h5>
              <h5>Weather: {item.actual_weather}</h5>
              <h5>Wind: {item.actual_wind}</h5>
              </div>
              </div>

              <div className="col-sm-12">
              <hr></hr>
              </div>

              <div className="col-sm-12">
              <h3 className="inWell">Approach</h3>
              </div>

              <div className="col-sm-12">
              <hr></hr>
              </div>

            </div>
            </div>
          </form>
        </div>
        </div>
      )
    })
    return (
      <div className="container" id="profile">
        <div className="col-lg-3"><img className="profilePic" src={this.state.profile_pic}></img></div>
        <div className="col-lg-7" id="profileInfo">
          <h1>{this.state.first_name} {this.state.last_name}</h1>
          <h5>{this.state.email} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.city}, {this.state.state} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.observational_data.length} trips</h5>
        </div>
        <div className="col-lg-2">
          <a href="/observationsform" role="button" className="btn btn-secondary align-middle inWell">Add New Trip</a>
        </div>
        <br/><br/>
      <div className="col-lg-12"><h3>My Trips</h3></div>

        <div className="col-lg-12" id="myTrips">
          <div className="row">
            {listItems}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
