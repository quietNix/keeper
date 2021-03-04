import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {createLogger} from "redux-logger"
import thunkMiddleware from "redux-thunk";    //waits and seees if any reducer returns function instead of object
import { BrowserRouter } from "react-router-dom";
import App from './components/app';
import {  requestAuthReducer } from "./components/reducers";



const logger = createLogger();
const store = createStore(requestAuthReducer, applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
