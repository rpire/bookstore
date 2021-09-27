import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Bookstore from './components/Bookstore';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Bookstore />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
