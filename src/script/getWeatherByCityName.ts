import axios from "axios";

const getWeatherByCityName = async (city: string) => {

    const apiKey = "f825344b0cf0672c689378549f9868db";
    const params = `q=${city}&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?`+ params;
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

export default getWeatherByCityName;