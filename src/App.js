import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartValues from './ChartValues';

class App extends Component {
  render() {
    return (
      <div>
        <div className = "App">
            <h1 className="App-title">Car Sale Charts</h1>
        </div>
        <div>
          <ChartValues />
        </div>
      </div> 
    );
  }
}

export default App;
