import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nevbar.css';

class Nevbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md">
                <div className="container">
                <Link className="navbar-brand" to="/">Weather and News</Link>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
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