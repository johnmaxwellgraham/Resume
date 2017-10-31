import React, { Component } from 'react';

class Hobbies extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>{this.props.hobbies}</div>
    )
  }
}
export default Hobbies;