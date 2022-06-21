import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/404Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/users">Users</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:id" element={<Users/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
