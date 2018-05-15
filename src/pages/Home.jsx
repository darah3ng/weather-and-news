import React, { Component } from 'react';
import Nevbar from '../components/Nevbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Articles from '../components/Article';

class Home extends Component{
    render() {
        return (
            <div>
                <Nevbar/>
                <Jumbotron title="Welcome" subtitle="Top news from hackernews" />
                <div className="container">
                    <Articles />
                </div>
                <Footer/>
            </div>
        );
    }
}

// class Home extends Component{
//     render() {
//         return (
//
//                 <Articles />
//
//         );
//     }
// }

export default Home;