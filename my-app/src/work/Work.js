import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>{this.props.work}</div>
    )
  }
}
export default Work;