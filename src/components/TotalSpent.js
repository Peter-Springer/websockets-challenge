import React from 'react';

class TotalSpent extends React.Component {

  render() {
    return (
      <div className="total-spent-component">
        <p>Total spent by males: ${Math.round(this.props.maleSum*100)/100}</p>
        <p>Total spent by females: ${Math.round(this.props.femaleSum*100)/100}</p>
      </div>
    );
   }
}

export default TotalSpent;
