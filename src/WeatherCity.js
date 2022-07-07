import { useState } from "react";
import getWeather from "./getWeather";
import WeatherInfos from "./components/WeatherInfos";

function WeatherCity() {
    const [city, setCity] = useState("");
    const [weatherInfos, setWeatherInfos] = useState(null);
    const [loading, setIsLoading] = useState(null);

    const onChangeHandler = event => {
        setCity(event.target.value);
    };
    const getWeatherByCity = () => {
        getWeather(city).then(data => {
            const infos = { 
                temperature: Math.round(data.main.temp - 273.15), 
                city, 
                desc: data.weather[0].description, 
                name: data.name, 
                humidity: data.main.humidity, 
                visibility: data.visibility / 1000, 
                windspeed: data.wind.speed, 
                wicon: data.weather[0].icon
            }
            setWeatherInfos(infos);
        });
    };

    return (
        <div className="background">
            <div className="container">
            <form id="content" autoComplete="off">
                <input
                    type="text"
                    name="input"
                    className="Search-box"
                    onChange={onChangeHandler}
                    value={city}
                />
                </form>
                <button className="searchbtn" onClick={getWeatherByCity}>Search</button>
                {weatherInfos && <WeatherInfos weatherInfos={weatherInfos} />}
            </div>
      </div>
    );
}
  
export default WeatherCity;