import logo from './logo.svg';
import * as React from "react";
import {Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (

    <div className="App">
      <header style={{ marginBottom: 150}}>
        <h1>Navigation</h1>

        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem"}}>
          <Link to="/home">Météo Locale</Link> | <Link to="/search">Recherche</Link> | <Link to="/favorite">Favoris</Link>
        </nav>
      </header>

      <Outlet />

    </div>
  );
}

export default App;