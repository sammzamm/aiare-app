import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import {DropdownButton, MenuItem} from 'react-bootstrap/lib';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

class SignUp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      hashed_password: '',
      city: '',
      state: 'Choose State',
      profile_pic: '../avitar.png',
    }

    this.changeUser = this.changeUser.bind(this);
    this.changeState = this.changeState.bind(this);
    this.sendUserData = this.sendUserData.bind(this);
  }

  changeUser(event){
    this.setState({
      first_name: event.target.value,
      last_name: event.target.value,
      email: event.target.value,
      city: event.target.value,
      profile_pic: event.target.value
    })
  }

  changeState(event){
    this.setState({
      aspect: event
    })
  }

  sendUserData(event){
    event.preventDefault();
    fetch('api/users', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state)
    })
    .then(res => console.log('user data sent', res));
  }

  render(){
    return(
    <div>
    <div className="well">
    <form>
    <div className="container">

    <label><b>First Name</b></label>
    <input onChange={this.changeUser} type="text" placeholder="First Name" name="firstName" required/>

    <label><b>Last Name</b></label>
    <input onChange={this.changeUser} type="text" placeholder="Last Name" name="lastName" required/>

    <label><b>City</b></label>
    <input onChange={this.changeUser} type="text" placeholder="City" name="city" required/>

    <div className="container">
     <DropdownButton onSelect={this.changeState} bsSize="default" title={this.state.state} id="dropdown-size-large">
       <MenuItem eventKey="AK">Alaska</MenuItem>
       <MenuItem eventKey="AL">Alabama</MenuItem>
       <MenuItem eventKey="AR">Arkansas</MenuItem>
       <MenuItem eventKey="AZ">Arizona</MenuItem>
       <MenuItem eventKey="CA">California</MenuItem>
       <MenuItem eventKey="CO">Colorado</MenuItem>
       <MenuItem eventKey="CT">Connecticut</MenuItem>
       <MenuItem eventKey="DC">District of Columbia</MenuItem>
       <MenuItem eventKey="DE">Delaware</MenuItem>
       <MenuItem eventKey="FL">Florida</MenuItem>
       <MenuItem eventKey="GA">Georgia</MenuItem>
       <MenuItem eventKey="HI">Hawaii</MenuItem>
       <MenuItem eventKey="IA">Iowa</MenuItem>
       <MenuItem eventKey="ID">Idaho</MenuItem>
       <MenuItem eventKey="IL">Illinois</MenuItem>
       <MenuItem eventKey="IN">Indiana</MenuItem>
       <MenuItem eventKey="KS">Kansas</MenuItem>
       <MenuItem eventKey="KY">Kentucky</MenuItem>
       <MenuItem eventKey="LA">Louisiana</MenuItem>
       <MenuItem eventKey="MA">Massachusetts</MenuItem>
       <MenuItem eventKey="MD">Maryland</MenuItem>
       <MenuItem eventKey="ME">Maine</MenuItem>
       <MenuItem eventKey="MI">Michigan</MenuItem>
       <MenuItem eventKey="MN">Minnesota</MenuItem>
       <MenuItem eventKey="MO">Missouri</MenuItem>
       <MenuItem eventKey="MS">Mississippi</MenuItem>
       <MenuItem eventKey="MT">Montana</MenuItem>
       <MenuItem eventKey="NC">North Carolina</MenuItem>
       <MenuItem eventKey="ND">North Dakota</MenuItem>
       <MenuItem eventKey="NE">Nebraska</MenuItem>
       <MenuItem eventKey="NH">New Hampshire</MenuItem>
       <MenuItem eventKey="NJ">New Jersey</MenuItem>
       <MenuItem eventKey="NM">New Mexico</MenuItem>
       <MenuItem eventKey="NV">Nevada</MenuItem>
       <MenuItem eventKey="NY">New York</MenuItem>
       <MenuItem eventKey="OH">Ohio</MenuItem>
       <MenuItem eventKey="OK">Oklahoma</MenuItem>
       <MenuItem eventKey="OR">Oregon</MenuItem>
       <MenuItem eventKey="PA">Pennsylvania</MenuItem>
       <MenuItem eventKey="PR">Puerto Rico</MenuItem>
       <MenuItem eventKey="RI">Rhode Island</MenuItem>
       <MenuItem eventKey="SC">South Carolina</MenuItem>
       <MenuItem eventKey="SD">South Dakota</MenuItem>
       <MenuItem eventKey="TN">Tennessee</MenuItem>
       <MenuItem eventKey="TX">Texas</MenuItem>
       <MenuItem eventKey="UT">Utah</MenuItem>
       <MenuItem eventKey="VA">Virginia</MenuItem>
       <MenuItem eventKey="VT">Vermont</MenuItem>
       <MenuItem eventKey="WA">Washington</MenuItem>
       <MenuItem eventKey="WI">Wisconsin</MenuItem>
       <MenuItem eventKey="WV">West Virginia</MenuItem>
       <MenuItem eventKey="WY">Wyoming</MenuItem>
     </DropdownButton>
   </div>

    <label><b>Email</b></label>
    <input onChange={this.changeUser} type="text" placeholder="Enter Email" name="email" required/>

    <label><b>Password</b></label>
    <input onChange={this.changeUser} type="password" placeholder="Enter Password" name="psw" required/>

    <div className="clearfix">
      <button onClick={this.sendUserData}>Sign Up!</button>
    </div>
  </div>
</form>
</div>
      <Footer />
      </div>
    )
  }
}

export default SignUp
