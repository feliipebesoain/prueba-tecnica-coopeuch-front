import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {reducer} from "./features/tareas";
import {asyncMiddleware} from "./middleware/async";

const store = configureStore({reducer, middleware: [asyncMiddleware]});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} data-testid='provider'>
    <App/>
  </Provider>
);

export default root;
