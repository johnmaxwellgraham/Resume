import React, { Component } from 'react';

class Hobby extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>{this.props.hobby}</div>
    )
  }
}
export default Hobby;