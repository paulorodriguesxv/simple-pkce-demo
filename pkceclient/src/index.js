import "react-app-polyfill/stable"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SecuredApp  from './SecuredApp';
import reportWebVitals from './reportWebVitals';
import { Buffer } from 'buffer'
window.Buffer = Buffer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecuredApp /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
