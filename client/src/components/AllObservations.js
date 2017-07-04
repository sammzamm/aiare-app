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
          <div>
          <h2>All Posts</h2>
          <div className="well">
            <form>
              <div className="form-group">
              <div className="row" key={index}>
                <h3 className="inWell">{item.location} - {item.sub_region} - {item.date_of_outing}</h3>
                <hr></hr>
                <h5 className="inWell">Aspect: {item.aspect} of {item.sub_region}.</h5>
                <h5 className="inWell">Elevation: {item.elevation}</h5>
                <h5 className="inWell">Slope Angle: {item.slope_angle} Degrees</h5>
                <h5 className="inWell">Identified Potential Objective Hazards:</h5>
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
