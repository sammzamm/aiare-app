import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './App.css';
class App extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.state = {
      email: '',
      password: '',
      redirect:false
    }
  }
  handleRedirect(){
      if(this.state.redirect){
        return <Redirect to='/myprofile'></Redirect>
      }
    }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    fetch('/api/signin', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(user => {
      const cookies = new Cookies()
      cookies.set('user', user.id)
      this.setState({
        redirect:true
      })
    })
  }
  render() {
    return (
      <div className="container text-center">
        {this.handleRedirect()}
        <h2>Welcome to</h2>
        <div id="title">
        <h1>The White Room</h1>
        </div>
        <h3>Collect seasonal snow science data, monitor layers and trends, and view other users finding and field observations. Stay alive and play hard.</h3>
        <div className="col-lg-3"></div>
        <div className="input-group col-lg-6">
          <input type="email" onChange={this.changeEmail} className="logIn" placeholder="Email" aria-describedby="basic-addon1"/>
          <br></br>
          <br></br>
          <input type="password" onChange={this.changePassword} className="logIn" placeholder="Password" aria-describedby="basic-addon1"/>
          <br></br>
          <br></br>
          <button type="button" className="btn btn-default signIn" onClick={this.handleSubmit}>Sign In</button>
          <button type="button" className="btn btn-default signUp" onClick={this.handleSubmit}>Sign Up</button>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}

export default App;
