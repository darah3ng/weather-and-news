import React, { Component } from 'react';
import Moment from 'moment';
import Axios from 'axios';
import WeatherAnimation from './WeatherAnimation';

const ApiKey = "bbf172d5e61267c5082dcae10b6194cd";
const ApiRequest = `https://api.openweathermap.org/data/2.5/forecast/daily?APPID=${ApiKey}&q=brisbane&mode=json&units=metric&cnt=7`;


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
        <table className="table table-bordered table-dark">
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
    );
}

class WeatherFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: [],
            isLoading: true
        };
    }

    componentDidMount(){
        Axios.get(ApiRequest)
            .then(response => response.data)
            .then(data => this.setState({ weather: data, isLoading: false }))
    }

    render() {
        const { isLoading } = this.state;
        if(isLoading){
            return (<p>Loading...</p>);
        }
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <WeatherAnimation weatherCondition={this.state.weather.list[0].weather[0].main} />
                    </div>
                    <div className="col-sm">
                        <h2>{this.state.weather.list[0].weather[0].description} today!</h2>
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