import React from 'react';
import './App.css';
import { getMetrics } from './getMetrics'
import Button from './Button';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      metrics: {
      }
    }
  }

  componentDidMount() {
    this.retrieveMetrics();
  }

  clearState = () => {
    this.setState({ metrics: {} });
  }

  retrieveMetrics = () => {
    getMetrics().then((metrics) => {
      this.setState({ metrics })
    });
  }

  render() {
    return (
      <div className="App">
        <Button height="50px" buttonColor="red" hoverColor="blue" onClick={this.clearState} >Click me to clear metrics</Button>
        <Button height="50px" buttonColor="green" hoverColor="blue" onClick={this.retrieveMetrics} >Click me to retrieve metrics</Button>
          <ul>
          {Object.entries(this.state.metrics).map((metric, index) =><li key={index}>{`${metric[0]} : ${metric[1]}`}</li>)}
          </ul>
       </div>
       );
      }
    }

export default App;
