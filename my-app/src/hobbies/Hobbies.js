import React, { Component } from 'react';

class Hobbies extends Component {
  constructor(props) {
    super(props);
  }

  
  render () {
    var children = this.props.hobbies;
    var output = children.map(function(child){
      return (
        <div>
          
          <li>{child}</li>
        </div>
      )
    })
    return (
      <div>
       <h1>HOBBIES</h1>
        <ul>
        {output}
        </ul>
      </div>
    )
  }
}
export default Hobbies;