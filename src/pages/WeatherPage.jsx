import React, { Component } from 'react';
import Nevbar from '../components/Nevbar';
// import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import WeatherTable from '../components/Weather';

class NewsPage extends Component{
    render() {
        return (
            <div>
                <Nevbar/>
                <Jumbotron title="Weather" subtitle="Weather forecast from Open Weather Map" />
                <div className="container">
                    <WeatherTable />
                </div>
            </div>
        );
    }
}

export default NewsPage;