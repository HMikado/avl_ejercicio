import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorial-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Home
          </a>
          <div className=" navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
            <Routes>
              <Route path="/tutorials" element={< TutorialsList />} />
              <Route path="/add" element={< AddTutorial />} />
              <Route path="/tutorials/:id" element={< Tutorial />} />
            </Routes>
        </div>
      </div>
    );
  }
}

export default App;
