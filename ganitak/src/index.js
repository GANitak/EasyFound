import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//import NextLink from 'next/link';
// import Route from 'react-router-dom';

//import Realm from "realm";
import Login from './Components/Login.js'
import NavBar from './Components/NavBar.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
 
export { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';



ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
    <App />
    <NavBar />
    <Login />{/*
    <Realm />*/}
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
