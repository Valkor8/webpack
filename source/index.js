import React from 'react';
import { render } from 'react-dom';
import AppSevice from './modules/app.service.js';
import {config} from './modules/config.js';
import App from './App.js';
import './css/index.css';
import './scss/index.scss';


console.log('Config key', config.key);

const service = new AppSevice ('Hello world!');
console.log(service);


render(<App />, document.getElementById('app'));
