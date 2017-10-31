import React, { Component } from 'react';

class Hobbies extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        HOBBIES
        <ul>
        <li>{this.props.hobbies[0]}</li>
        <li>{this.props.hobbies[1]}</li>
        <li>{this.props.hobbies[2]}</li>
        </ul>
      </div>
    )
  }
}
export default Hobbies;