import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import CommentForm from './CommentForm';
import Footer from './Footer';


class AllObservations extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      observations: []
    }
    }
    componentWillMount(){
      fetch(`/api/observations`, {
        credentials:'include'
      })
      .then(res => res.json())
      .then(observations => {
        console.log(observations);
        this.setState({
          observations:observations
        })
      })
    }
    render(){
      var listItems = this.state.observations.map(function(item, index){
        return (
          <div key={index}>
          <h2>All Posts</h2>
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

                <h4 className="inWell">Identified Potential Objective Hazards</h4>

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
                <div className="col-sm-3 inWell">
                <h5 className={item.weak_layers}>Weak Layers</h5>
                <h5 className={item.depth_hoar}>Depth Hoar</h5>
                <h5 className={item.surface_hoar}>Surface Hoar</h5>
                <h5 className={item.hoar_frost}>Frost Hoar</h5>
                <h5 className={item.graupel}>Graupel</h5>
                <h5 className={item.facets}>Facets</h5>
                </div>
                <div className="col-sm-3 inWell">
                <h5 className={item.woomphing}>Woomphing</h5>
                <h5 className={item.shooting_cracks}>Shooting Cracks</h5>
                <h5 className={item.convex_roller}>Convex Roller</h5>
                <h5 className={item.concave_roller}>Concave Roller</h5>
                </div>
                </div>

                <br></br>

                <div className="myOwnHR">
                <hr></hr>
                </div>

                <div className="col-sm-12">
                <h3 className="inWell">Snowpack</h3>
                <h5 className="inWell">{item.snowpack}</h5>
                </div>

                <h5 className="inWell"></h5>
                <h5 className="inWell"></h5>
                <h5 className="inWell"></h5>
                <h5 className="inWell"></h5>
                <h5 className="inWell"></h5>
                <h5 className="inWell"></h5>

              </div>
              </div>
            </form>
          </div>
           <CommentForm />
          </div>
        )
      })
      return (
        <div className="container">
          {listItems}
        </div>
      )
    }

}

export default AllObservations
