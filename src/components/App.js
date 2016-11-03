import React from 'react';
import '../App.css';
import nio from 'niojs';
import Pie from './Pie';
import TotalSpent from './TotalSpent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionsByMales: [],
      transactionsByFemales: [],
      totalSpentByMales: '',
      totalSpentByFemales: '',
    };
  }

  componentDidMount() {
    nio.source.socketio('//brand.nioinstances.com', ['groceries'])
      .pipe(nio.pass(data => {
         if (data.shopper.gender === 'male') {
           this.setState({
            transactionsByMales: this.state.transactionsByMales.concat(data.amount)
          });
           this.setState({
            totalSpentByMales: this.sumTransactions(this.state.transactionsByMales)
          });
        } else {
           this.setState({
            transactionsByFemales: this.state.transactionsByFemales.concat(data.amount)
          });
           this.setState({
            totalSpentByFemales: this.sumTransactions(this.state.transactionsByFemales)
          });
        }
     }));
    }

  sumTransactions(array) {
    return array.reduce((a, b) => a + b);
  }

  render() {
    return (
      <div className="app-container">
        <h1>GROCERIES PURCHASED IN COLORADO</h1>
        <Pie
          maleSum={this.state.totalSpentByMales}
          femaleSum={this.state.totalSpentByFemales}
        />
        <TotalSpent
          maleSum={this.state.totalSpentByMales}
          femaleSum={this.state.totalSpentByFemales}
        />
      </div>
    );
  }
}

export default App;
