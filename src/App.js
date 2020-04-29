import React from 'react';
import './App.css';
import { getMetrics } from './getMetrics'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      metrics: {
      }
    }
  }

  componentDidMount() {
    getMetrics().then((metrics) => {
      this.setState({ metrics })
    });
  }
  render() {
    return (
      <div className="App">
        <header>Website metrics</header>
        <h1>
          <ul>
            {Object.entries(this.state.metrics).map(metric =><li>{`${metric[0]} : ${metric[1]}`}</li>)}
          </ul>
        </h1>
       </div>
       );
      }
    }

export default App;
