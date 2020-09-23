import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import {CartProvider} from './CartContext';
import {AdminProvider} from './AdminContext'
import {Provider} from 'react-redux';
import allReducer from './Redux/reducers/allReducer';


const mystore = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
   <Provider store={mystore}> 
    <CartProvider>
    <AdminProvider>
    <App /> 
    </AdminProvider>
    </CartProvider>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);