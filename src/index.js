import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import store from "./store/store";
//import {Provider} from "react-redux";
//import './index.css';
import App from './App';
import LocalWeather from "./views/Home";
import Search from "./views/Search";
import Favorite from "./views/Favorite";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  {/* <Provider store={store}> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<LocalWeather />}/>
        <Route path="search" element={<Search />}/>
        <Route path="favorite" element={<Favorite />}/>
      </Route>
    </Routes>
    {/* </Provider> */}
  </BrowserRouter>
  </React.StrictMode>,
  rootElement
);