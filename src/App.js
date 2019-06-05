import React, { useState, useEffect } from 'react';
import BigBrother from './components/BigBrother';
import LittleBrother from './components/LittleBrother';
import { createStore } from 'redux';
import todoApp from './reducers';
import './App.css';

let store = createStore(todoApp);

function App() {
  const [count, setCount] = useState(0);
  const [countHim, setCountHim] = useState(0);
  const [result, setResult] = useState(0);
  const setCountNum = () => {
    setCount(count + 1);
  }
  const setCountHimNum = () => {
    setCountHim(countHim + 1);
  }

  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count + countHim} times`;
  }, [count, countHim]);

  useEffect(() => {
    setResult(count * 5);
  }, [count]);

  // 第二个参数为空数组，不监听任何状态
  useEffect(() => {
    console.log(store);
    fetch('https://api.github.com/users/chriscoyier/repos')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div style={{ borderBottom: '1px solid #ccc' }}>
          <p>You clicked me { count } times.</p>
          <p>You clicked him { countHim } times.</p>
          <p>{ count } * 5 = { result }</p>
          <button onClick={setCountNum}>
            click me
          </button>
          <button onClick={setCountHimNum}>
            click him
          </button>
        </div>
        <BigBrother />
        <LittleBrother />
      </div>
    </div>
  );
}

export default App;
