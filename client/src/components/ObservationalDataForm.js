import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {render} from 'react-dom';
// import cookie from 'react-cookie';

class ObservationalDataForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: ''
    }

    this.changeName = this.changeName.bind(this)
    this.sendName = this.sendName.bind(this)
  }
  changeName(event){
    this.setState({
      name: event.target.value
    })
  }
  sendName(event){
    event.preventDefault();
    fetch('/api/comments',{
      method:"POST",
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
        <h1>Lisa is the best</h1>
         <input id="email" onChange={this.changeName} name="email" type="email" className="validate"/>
         <button onClick={this.sendName}>Submit</button>
      </div>
    );
  }
}

export default ObservationalDataForm
