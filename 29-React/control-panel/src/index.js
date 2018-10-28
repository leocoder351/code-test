import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ControlPanel from './props/ControlPanel';
// import ControlPanel from './flux/views/ControlPanel.js';
// import ControlPanel from './redux-basic/views/ControlPanel.js';
// import ControlPanel from './redux-smart-dumb/views/ControlPanel.js';
import ControlPanel from './redux-with-context/views/ControlPanel.js';
import Provider from './redux-with-context/Provider.js';
import store from './redux-with-context/Store.js';

console.log(222);
console.log(store);
console.log(Provider)

ReactDOM.render(
  // <ControlPanel />, 
  <Provider store={store}>
    <ControlPanel />
  </Provider>,
  document.getElementById('root')
);
