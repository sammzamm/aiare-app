import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';


class Footer extends React.Component{
  constructor(props){
    super(props)
}
  render(){
    return(
      <div>
      <footer>
      <div className="footer-copyright">
      <small>© 2017 CRAP, Inc. All Rights Reserved</small>
      </div>
      </footer>
      </div>
    )
  }
}

export default Footer
