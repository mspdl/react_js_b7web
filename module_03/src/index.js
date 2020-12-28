import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './index.css';

// import Class01 from './classes/class_01/Class01';
import Class02 from './classes/class_02/Class02';

ReactDOM.render(
  <React.StrictMode>
    {/* {<Class01 />} */}
    {<Class02 />}
  </React.StrictMode>,
  document.getElementById('root')
);