var React = require("React");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
  getInitialState:function(){
    return {
      location: "Miami",
      temperature: 88
    }
  },
  handleSearch: function(location){
    var that = this;
    openWeatherMap.getTemperature(location).then((temperature)=>{
      that.setState({
        temperature:temperature,
        location:location
      })
    },(err)=>{
      alert(err);
    });

  },
  render: function (){
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={this.state.location} temperature={this.state.temperature}/>
      </div>

    );
  }
});

module.exports = Weather;
