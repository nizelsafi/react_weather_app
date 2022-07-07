import React from "react";

const WeatherInfos = (weatherInfos) => {
    const {
        temperature, 
        city, 
        desc, 
        name, 
        humidity, 
        visibility, 
        windspeed, 
        wicon
    } = weatherInfos.weatherInfos;

    return (
        <div id="card" className="weather">
          <div className="details">
            <div className="temp">
              {temperature}
              <span>&deg;</span>
            </div>
            <div className="right">
              <div id="summary">{desc}</div>
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>{name}</div>
            </div>
          </div>
          <img className="weatherimg" alt="image1" src={`${wicon}.svg`} />
          <div className="infos">
            <img
              alt="humidity1"
              className="humidityimg"
              style={{ width: "5", height: "5" }}
              src="humidity.svg"
            ></img>
            <div className="humidity">Humidity {humidity}%</div>
            <img
              alt="visibility1"
              className="visibilityimg"
              style={{ width: "5", height: "5" }}
              src="visibility.svg"
            ></img>
            <div className="visibility">Visibility {visibility} km</div>
            <img
              alt="windspeed1"
              className="windimg"
              style={{ width: "5", height: "5" }}
              src="wind.svg"
            ></img>
            <div className="windspeed">Wind Speed {windspeed} km</div>
          </div>
        </div>
      
    );
}
  
export default WeatherInfos;