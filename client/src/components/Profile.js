import React from 'react';
import { render } from 'react-dom';

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
        <div key={index} className="col-lg-6">
        <div className="well">
          <form>
            <div className="form-group">
            <div className="row" key={index}>
              <h3>{item.location}</h3>
              <p>{item.sub_region}</p>
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
          <a href="/observationsform" role="button" className="btn btn-secondary align-middle">Add New Trip</a>
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
