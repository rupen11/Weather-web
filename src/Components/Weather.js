import React, { useEffect, useState } from 'react';
import Weatherimage from '../weather2.svg';

const Weather = () => {
    const key = "f9d7a427f25a43a79d5132718211006";
    const [city, setCity] = useState("ahmedabad");
    const [weather, setWeather] = useState({
        name: "", region: "", country: "", co: "", no2: "", o3: "", pm25: "", pm10: "", so2: "", icon: "", wea: "", currtemp: "", feeltemp: "", humidity: "", windspeed: "", winddir: "", winddeg: "", pressure: "", clouds: ""
    });
    const weather_control = async (e) => {
        setCity(e.target.value);
    };
    const weatherData = async () => {
        try {
            const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;
            const res = await fetch(url);
            if (res.status === 200) {
                const data = await res.json();
                console.log(data);
                const name = data.location.name;
                const region = data.location.region;
                const country = data.location.country;
                const co = parseFloat(data.current.air_quality.co).toFixed(2);
                const no2 = parseFloat(data.current.air_quality.no2).toFixed(2);
                const o3 = parseFloat(data.current.air_quality.o3).toFixed(2);
                const pm25 = parseFloat(data.current.air_quality.pm2_5).toFixed(2);
                const pm10 = parseFloat(data.current.air_quality.pm10).toFixed(2);
                const so2 = parseFloat(data.current.air_quality.so2).toFixed(2);
                const icon = data.current.condition.icon;
                const wea = data.current.condition.text;
                const currtemp = data.current.temp_c;
                const feeltemp = data.current.feelslike_c;
                const humidity = data.current.humidity;
                const windspeed = data.current.wind_mph;
                const winddir = data.current.wind_dir;
                const winddeg = data.current.wind_degree;
                const pressure = data.current.pressure_mb;
                const clouds = data.current.cloud;
                setWeather({ name, region, country, co, no2, o3, pm25, pm10, so2, icon, wea, currtemp, feeltemp, humidity, windspeed, winddir, winddeg, pressure, clouds });
            }
        }
        catch (error) {
            // console.log("Some error to find location " + error);
        }
    }
    useEffect(() => {
        weatherData();
    }, [city]);

    return (
        <>
            <div id="weather">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="weather_box">
                                <div className="weather_searchbox">
                                    <form method="post" className="myform">
                                        <input type="text" name="weather" className="myinput" placeholder="Search Location" onChange={weather_control} />
                                    </form>
                                </div>
                                <div className="weather_info">
                                    <h6 className="location">{weather.name}, {weather.region}, {weather.country}</h6>
                                    <div className="current_weather">
                                        <h5>{weather.wea}</h5>
                                        <img src={weather.icon} alt="icon" />
                                    </div>
                                    <div className="infobox-primary">
                                        <h1 className="temp">{weather.currtemp}<span className="cel">°C</span></h1>
                                    </div>
                                    <div className="underline-top"></div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="infobox-secondary">
                                                <table className="infotable">
                                                    <tr>
                                                        <th>real feel</th>
                                                        <td>{weather.feeltemp}°C</td>
                                                    </tr>
                                                    <tr>
                                                        <th>humidity</th>
                                                        <td>{weather.humidity}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>pressure</th>
                                                        <td>{weather.pressure}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="infobox-secondary">
                                                <table className="infotable">
                                                    <tr>
                                                        <th>Wind Speed</th>
                                                        <td>{weather.windspeed}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Wind Degree</th>
                                                        <td>{weather.winddeg}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Wind Direction</th>
                                                        <td>{weather.winddir}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="air">
                                        <div className="airbox">
                                            <div className="airquality">
                                                <p>{weather.co}</p>
                                                <h6>CO</h6>
                                            </div>
                                            <div className="airquality">
                                                <p>{weather.no2}</p>
                                                <h6>NO<sub>2</sub></h6>
                                            </div>
                                            <div className="airquality">
                                                <p>{weather.o3}</p>
                                                <h6>O<sub>3</sub></h6>
                                            </div>
                                            <div className="airquality">
                                                <p>{weather.so2}</p>
                                                <h6>SO<sub>2</sub></h6>
                                            </div>
                                            <div className="airquality">
                                                <p>{weather.pm25}</p>
                                                <h6>PM2.5</h6>
                                            </div>
                                            <div className="airquality">
                                                <p>{weather.pm10}</p>
                                                <h6>PM10</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="weather_image">
                                <img src={Weatherimage} alt="weather img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather
