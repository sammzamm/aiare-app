import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap/lib';

class CommentForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      body: ''
    }

    this.changeComment = this.changeComment.bind(this)
  }

  changeComment(event){
    
  }
}
