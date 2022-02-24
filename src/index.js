import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
//import './index.css';
import App from './App';
import Home from "./views/Home";
import SearchCity from "./views/Search";
import Favorites from "./views/Favorites";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}> 
    <Routes>
      <Route path="/" element={<App /> } />
        <Route path="/home" element={<Home />}/>
        <Route path="/search" element={<SearchCity />}/>
        <Route path="/favorite" element={<Favorites />}/>
      
    </Routes>
  </Provider> 
  </BrowserRouter>
  </React.StrictMode>,
  rootElement
);