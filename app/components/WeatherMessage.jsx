var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's it {temp}&#8451; in {location}.</h3>
  )
};

module.exports = WeatherMessage;
