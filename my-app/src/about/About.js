import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
      <h1> ABOUT ME</h1>
      
      {this.props.aboutMe}
      </div>
    )
  }
}
export default About;