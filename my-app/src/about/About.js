import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>{this.props.aboutMe}</div>
    )
  }
}
export default About;