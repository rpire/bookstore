import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Bookstore from './components/Bookstore';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Bookstore />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
