import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root1.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
root3.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
root2.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
root4.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
root5.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>

);
reportWebVitals();
