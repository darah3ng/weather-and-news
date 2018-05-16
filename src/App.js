import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    const env = process.env.PUBLIC_URL;
    return (
        <BrowserRouter basename={env}>
            <switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </switch>
        </BrowserRouter>
    );
  }
}

export default App;
