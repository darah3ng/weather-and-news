import React, { Component } from 'react';
import Nevbar from '../components/Nevbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import ArticleFeed from '../components/Article';

class NewsPage extends Component{
    render() {
        return (
            <div>
                <Nevbar/>
                <Jumbotron title="Welcome" subtitle="Top news from hackernews" />
                <div className="container">
                    <ArticleFeed />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default NewsPage;