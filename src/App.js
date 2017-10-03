import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="atlas-content">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
            </div>
            <h1>One application to end all applications</h1>
            <h2 className="App-title">The future of hiring is coming</h2>
          </div>
          <div className="atlas-footer">
            AtlasCV &#169;
          </div>
        </header>
      </div>
    );
  }
}

export default App;
