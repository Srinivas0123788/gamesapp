import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import MyRouter from './components/Myrouter.js';
import Reebookstore from "./reduxstore/store"
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Reebookstore}>
    <MyRouter />
 
 </Provider>
);
reportWebVitals();
 

