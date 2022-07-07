import axios from "axios";

const getWeather = async (city: string) => {

    const apiKey = "f825344b0cf0672c689378549f9868db";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let weatherInfos;

    try {
        const res = await axios.get(url);
        console.log(res.data);
        weatherInfos = res.data;
    } catch (err) {
        console.error(err);
    }
    
    return weatherInfos;
}

export default getWeather;