import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './bootstrap.css';
import './index.css';
import Reducers from './reducers';

// import Class01 from './classes/class_01/Class01';
// import Class02 from './classes/class_02/Class02';
// import Class03 from './classes/class_03/Class03';
import Class04 from './classes/class_04/Class04';

const store = createStore(Reducers)

ReactDOM.render(
  <Provider store={store}>
    {/* {<Class01 />} */}
    {/* {<Class02 />} */}
    {/* {<Class03 />} */}
    {<Class04 />}
  </Provider>,
  document.getElementById('root')
);