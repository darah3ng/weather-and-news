import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewsPage from './pages/NewsPage';
import Weather from './pages/WeatherPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Meme from './pages/Meme';

import './App.css';

class App extends Component {
  render() {
    const env = process.env.PUBLIC_URL;
    return (
        <BrowserRouter basename={env}>
            <Switch>
                <Route exact path="/" component={NewsPage} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/meme" component={Meme} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
