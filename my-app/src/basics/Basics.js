import React, { Component } from 'react';

class Basics extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        {this.props.basics.name} <br />
        {this.props.basics.position} <br />
        {this.props.basics.email} <br />
        {this.props.basics.phone} <br />
      </div>
    )
  }
}
export default Basics;