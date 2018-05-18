import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

var openWeather = {
  clear: 'CLEAR_DAY',
  atmosphere: 'FOG',
  snow: 'SNOW',
  rain: 'RAIN',
  drizzle: 'RAIN',
  thunderstorm: 'RAIN'
};

const defaults = {
    icon: '',
    color: 'black',
    size: 200,
    animate: true
};

function GenerateWeather(props) {
    return (
        <ReactAnimatedWeather
            icon={props.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
        />
    );
}

function OutputAnimation(props) {
    const weatherCondition = props.weatherCondition.toLowerCase();
    for (var con in openWeather){
        if(weatherCondition.match(con)){
            return (
                <GenerateWeather icon={openWeather[con]}  />
            );
        }
    }
    return (
      <div>Hello!</div>
    );
}

export default OutputAnimation;