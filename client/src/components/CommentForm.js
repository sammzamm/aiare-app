import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';


class CommentForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      body: ''
    }

    this.changeComment = this.changeComment.bind(this)
  }

  changeComment(event){
    this.setState({
      body: event.target.value
    })
  }

  sendData(event){
    event.preventDefault();
    fetch('/api/observations', {
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state)
    })
    .then(res => console.log("commented", res))
  }


  render(){
    return(
      <div>
      <textarea id="comments" name="comment" onChange={this.changeComment} rows="4" cols="50"></textarea>

      <button onClick={this.sendData}>Submit</button>
      </div>
    )
  }
}

export default CommentForm
