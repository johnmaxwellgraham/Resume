import React, { Component } from 'react';

class Basics extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>{this.props.basics}</div>
    )
  }
}
export default Basics;