import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
// const root = ReactDOM.createRoot(document.getElementById('root'));
import {legacy_createStore as createStore, combineReducers} from 'redux';
import { Page, RowPerPage, Loading } from './redux/store';

const rootReducers  = createStore(combineReducers({Page, RowPerPage, Loading}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  
  <Provider store={rootReducers}><App /></Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
