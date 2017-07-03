import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.state = {
      email: '',
      password: ''
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
      console.log(user);
    })
  }
  render() {
    return (
      <div className="container text-center">
        <h2 id='title'>Welcome to</h2>
        <h1>Crap</h1>
        <h3>Monitor your snow science data, layers and trends throughout a season as well as view other peoples findings and field observations.</h3>
        <div className="col-lg-3"></div>
        <div className="input-group col-lg-6">
          <input type="email" onChange={this.changeEmail} className="form-control" placeholder="Email" aria-describedby="basic-addon1"/>
          <input type="password" onChange={this.changePassword} className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
          <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Log In</button>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}

export default App;
