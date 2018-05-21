import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nevbar.css';


class Nevbar extends Component {
    render() {
      return (
          <nav className="navbar navbar-expand-md navbar-light bg-light">
              <div className="container">
                  <Link className="navbar-brand" to="/">Weather and News</Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <Link className="nav-link" to="/">HackerNews<span className="sr-only">(current)</span></Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/weather">Weather Forecast</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/about">About</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/contact">Contact</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      );
    }
}

export default Nevbar;