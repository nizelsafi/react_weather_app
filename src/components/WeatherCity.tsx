import React, { useState, useEffect } from "react";
import getWeatherByCityName from "../script/getWeatherByCityName";
import getWeatherByGeoLocation from "../script/getWeatherByGeoLocation";
import WeatherInfos from "./WeatherInfos";
import TimeInfos from "./TimeInfos";

function WeatherCity() {
    const [city, setCity] = useState("");
    const [weatherInfos, setWeatherInfos] = useState(null);

    const onChangeHandler = event => {
        setCity(event.target.value);
    };
    const getWeatherByCity = () => {
        getWeatherByCityName(city).then(data => {
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

    useEffect(() => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const positionInfos = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                getWeatherByGeoLocation(positionInfos).then(data => {
                    console.log(data);
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
            });
        }
        else {
            x.innerHTML="Geolocation is not supported by this browser.";
        }    
    }, [])

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