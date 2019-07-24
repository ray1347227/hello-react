import React, { Component } from 'react';
import Hook from './components/Hook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <Hook />
        <button
          style={{ padding: '2px 5px', background: '#abcdef', marginTop: 50 }}
        >
          sentry test
        </button>
      </div>
    );
  }
}

export default App;
