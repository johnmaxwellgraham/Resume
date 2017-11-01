import React, { Component } from 'react';
import './about/About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
      <h1 className= "title"> ABOUT ME</h1>
      <br /><br />
      {this.props.aboutMe}
      </div>
    )
  }
}
export default About;