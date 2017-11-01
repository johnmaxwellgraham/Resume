import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    var children = this.props.education;
    var output = children.map(function(child){
      return (
        <div>
          <br/>
          School - {child.school} <br />
          Subject - {child.subject} <br />
          Start - {child.startDate} <br />
          Completion - {child.endDate} <br />
        </div>
      )
    })
    return (
      <div>
        <br />
        <h1>EDUCATION</h1>      
        {output}
      </div>
    )
  }
}
export default Education;