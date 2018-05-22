import React, { Component } from 'react';
import Nevbar from '../components/Nevbar';
// import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import { Link } from 'react-router-dom';

class Contact extends Component{
    render() {
        return (
            <div>
                <Nevbar/>
                <Jumbotron title="Contact" subtitle="The Dank is here!" />
                <div className="container">
                    <h2>Contact</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <Link to="/meme"> Dank </Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default Contact;