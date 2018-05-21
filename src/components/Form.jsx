import React, { Component } from 'react';
import './Form.css';

const Form = props => (
    <form onSubmit={props.getWeather} className="form-container">
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>
);

export default Form;