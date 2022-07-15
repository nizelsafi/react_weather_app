import axios from "axios";
interface IPositionInfos {
    lat: number,
    lon: number
}
const getWeatherByGeoLocation = async (positionInfos: IPositionInfos) => {

    const apiKey = "f825344b0cf0672c689378549f9868db";
    const params = `lat=${positionInfos.lat}&lon=${positionInfos.lon}&appid=${apiKey}`;

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

export default getWeatherByGeoLocation;