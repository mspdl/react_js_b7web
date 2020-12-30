import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './bootstrap.css';
import './index.css';
import { persistor, store } from './store';

// import Class01 from './classes/class_01/Class01';
// import Class02 from './classes/class_02/Class02';
// import Class03 from './classes/class_03/Class03';
// import Class04 from './classes/class_04/Class04';
// import Class05 from './classes/class_05/Class05';
// import Class06 from './classes/class_06/Class06';
import Class07 from './classes/class_07/Class07';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* {<Class01 />} */}
      {/* {<Class02 />} */}
      {/* {<Class03 />} */}
      {/* {<Class04 />} */}
      {/* {<Class05 />} */}
      {/* {<Class06 />} */}
      {<Class07 />}
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);