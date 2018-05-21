import React, { Component } from 'react';
import Moment from 'moment';
import Axios from 'axios';
import Form from './Form';
import WeatherAnimation from './WeatherAnimation';
import './Weather.css';

const API_KEY = "bbf172d5e61267c5082dcae10b6194cd";


function TableHead({ date }) {
    const convertDate = Moment.unix(date).format('dddd');
    return (
      <th scope="col">{ convertDate }</th>
    );
}

function TableRow({ weatherInfo }) {
    return (
      <td>{ weatherInfo+ ' °C'}</td>
    );
}

function Weathers({ weathers }){
    console.log(weathers[0].weather[0].main);
    return(
        <div className="table-wrapper">
            <table className="table table-strip table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="row"></th>
                        {weathers.map(weather =>
                            <TableHead date={weather.dt} />
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Morning</th>
                        {weathers.map(weather =>
                            <TableRow weatherInfo={weather.temp.morn} />
                        )}
                    </tr>
                    <tr>
                        <th scope="row">Day</th>
                        {weathers.map(weather =>
                            <TableRow weatherInfo={weather.temp.day} />
                        )}
                    </tr>
                    <tr>
                        <th scope="row">Evening</th>
                        {weathers.map(weather =>
                            <TableRow weatherInfo={weather.temp.eve} />
                        )}
                    </tr>
                    <tr>
                        <th scope="row">Night</th>
                        {weathers.map(weather =>
                            <TableRow weatherInfo={weather.temp.night} />
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

class WeatherFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: [],
            isLoading: true,
            error: false
        };
        this.GetWeather = this.GetWeather.bind(this);
    }

    GetWeather(e){
       e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        Axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?APPID=${API_KEY}&q=${city},${country}&mode=json&units=metric&cnt=7`)
            .then(response => response.data)
            .then(data => this.setState({ weather: data, isLoading: false, error: false }))
            .catch(() => this.setState({error: true}))
            // .then(data => console.log(data));
    }

    render() {
        const { isLoading, error } = this.state;
        if(isLoading && !error){
            return (
                <Form getWeather={this.GetWeather} />
            );
        }

        if(error){
            return (
                <div>
                    <Form getWeather={this.GetWeather} />
                    <p><span id="error_warning">Please try again! :(</span></p>
                </div>
            );
        }

        return (
            <div>
                <div className="row">
                    <Form getWeather={this.GetWeather} />
                </div>
                <div className="row">
                    <div className="col-xs-5">
                        <WeatherAnimation weatherCondition={this.state.weather.list[0].weather[0].main} />
                    </div>
                    <div className="col-xs-5">
                        <h2>{this.state.weather.list[0].weather[0].description} right now!</h2>
                    </div>
                </div>
                <div className="row">
                    <Weathers weathers={this.state.weather.list} />
                </div>
            </div>
        );
    }
}

export default WeatherFeed;