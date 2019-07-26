import React, { Component } from 'react';
import Hook from './components/Hook';
import './App.css';

class App extends Component {
  testSentry = () => {
    this.asdfghjkl();
  }
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <Hook />
        <button
          onClick={this.testSentry}
          style={{ padding: '2px 5px', background: '#abcdef', marginTop: 50 }}
        >
          sentry test
        </button>
      </div>
    );
  }
}

export default App;
