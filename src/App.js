//This is main file from here i can hundle everything
import React from "react";
import Title from "./component/Title";
import Forms from "./component/Forms";
import Weather from "./component/Weather";

const API_KEY = "61165ce61ea8fe2395209d4f4a4d842f";
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    // const state = e.target.elements.state.value;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const course_api= await fetch(`/api/courses`);
    const data1  = await course_api.json();
      console.log(data1);
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric` //if you want state write ${state}
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
        // error: " "
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter the values."
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 Forms-container">
                  <Forms getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
