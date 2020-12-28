import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import Class01 from './classes/class_01/Class01';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    {<Class01 />}
  </React.StrictMode>,
  document.getElementById('root')
);