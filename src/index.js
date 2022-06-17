import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux/es/exports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <App/>
   </Provider>
);
reportWebVitals();
