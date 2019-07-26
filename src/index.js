import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sentry.init({
  dsn: "http://5df8ad27739d4a5bb08ae6c3435d8ab6@39.100.150.76:9000/3",
  environment: 'production',
  release: 'hello-react@1.0.1',
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
