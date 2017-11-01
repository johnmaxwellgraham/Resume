import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    var children = this.props.work;
    var output = children.map(function(child){
      return (
        <div>
          <br/>
          Company - {child.company} <br />
          Position - {child.position} <br />
          Website - {child.website} <br />
          Start Date - {child.startDate} <br />
          End Date - {child.endDate} <br />
        </div>
      )
    })
    return (
      <div>
        <h1>EMPLOYMENT</h1>
        {output}
      </div>
    )
  }
}
export default Work;