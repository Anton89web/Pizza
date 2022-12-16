import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from './redux/store'
import 'normalize.css';
import './Styles/style.css';
import './Styles/animsition.css';
import './Styles/flaticon.css';
import './Styles/media.css';
import './Styles/font-awesome.css'
import './Styles/pe-icon-7-stroke.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
