import React, { Component } from 'react';
import Hook from './components/Hook';
import './App.css';

class App extends Component {
  testSentry = () => {
    const obj = JSON.parse({});
    return obj;
  }
  qqww = () => {
    this.callYourFun();
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
        <button
          onClick={this.qqww}
          style={{ padding: '2px 5px', background: '#abcdef', marginTop: 50 }}
        >
          call fun
        </button>
      </div>
    );
  }
}

export default App;
