import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import './stylesheet/common.css';
import './stylesheet/home.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();