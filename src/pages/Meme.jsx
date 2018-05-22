import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Meme extends Component{
    render(){
        return(
            <div className="container">
                <p>Haha AWESOME! you made it here. Based from Dankpedia, it's estimated that less than 1% of the dank population made it here.</p>
                <div className="row">
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                    <div className="col-sm-6 padding-0">
                        <img src={require('../images/dankmeme.gif')} alt="Mountain View" />
                    </div>
                </div>
                <Link className="takemehome" to="/"> Leave Dank world, for now! </Link>
            </div>
        );
    }
}

export default Meme;

