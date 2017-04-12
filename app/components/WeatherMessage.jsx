var React = require("react");

var WeatherMessage = (props) => {
    return (
      <h3>It's {props.temperature} in {props.location}</h3>
    );
};

module.exports = WeatherMessage;
