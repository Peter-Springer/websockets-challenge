import React from 'react';
import Chart from 'chart.js';

class Pie extends React.Component {

  doughnut(female, male) {
    var ctx = document.getElementById('chart');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['FEMALE', 'MALE'],
        datasets: [{
          label: 'amount spent on groceries',
          data: [female, male],
          backgroundColor: ['#ff925c', '#d6cdc5'],
          borderColor: ['#954b0a', '#000000'],
          borderWidth: 5
        }]
      },
    });
  }

  render() {
    return (
      <div className="doughnut-component">
        {this.doughnut(this.props.femaleSum, this.props.maleSum)}
      </div>
    );
   }
}

export default Pie;
