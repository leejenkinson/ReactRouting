import './App.css';
import React from "react";
import { Route, Routes, Link, BrowserRouter} from "react-router-dom";
import Home from "./Pages(Routing)/Home";
import About from "./Pages(Routing)/About";
import Shop from "./Pages(Routing)/Shop";


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <p>Let's Add Routing!</p>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul> 
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />

        </Routes> </div>
    </BrowserRouter>
  );
}

export default App;
