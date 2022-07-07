import { useState } from "react";
import getWeather from "./getWeather";

function WeatherCity() {

    const [city, setCity] = useState("");
    const [weatherInfos, setWeatherInfos] = useState(null);
    const onChangeHandler = event => {
        setCity(event.target.value);
    };
    const getWeatherByCity = () => {
        getWeather(city).then(data => {
            setWeatherInfos(data);
        });
        console.log(weatherInfos);
    };

    return (
      <div className="">
        <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={city}
        />
        <button onClick={getWeatherByCity}>Submit</button>
        <div>
            <span>{weatherInfos?.name}</span>
        </div>
      </div>
    );
}
  
export default WeatherCity;