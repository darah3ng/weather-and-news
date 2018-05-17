import React, { Component } from 'react';
import Moment from 'moment';

const ApiKey = "bbf172d5e61267c5082dcae10b6194cd";
const ApiRequest = `http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${ApiKey}&q=brisbane&mode=json&units=metric&cnt=7`;


function TableHead({ date }) {
    const convertDate = Moment.unix(date).format('dddd');
    return (
      <th scope="col">{ convertDate }</th>
    );
}

function TableRow({ weatherInfo }) {
    return (
      <td>{ weatherInfo }</td>
    );
}

function Weathers({ weathers }){
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
        fetch(ApiRequest)
            .then(response => response.json())
            .then(data => this.setState({ weather: data, isLoading: false }))
    }

    render() {
        const { isLoading } = this.state;
        if(isLoading){
            return (<p>Loading...</p>);
        }
        return (
            <Weathers weathers={this.state.weather.list} />
        );
    }
}

export default WeatherFeed;