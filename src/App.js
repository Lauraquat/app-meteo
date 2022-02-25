import * as React from "react";
import {Outlet } from "react-router-dom";
import LocalWeather from './components/LocalWeather';

function App() {
    return (
        <div>
            <LocalWeather/>,
            <Outlet />
        </div>
    );
}

export default App;