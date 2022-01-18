import React, { useEffect, useState } from 'react';
import Weatherimage from '../weather.svg';

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
            else {
                console.log("Data Not Found");
            }
        }
        catch (error) {
            console.log("Error " + error);
        }
    }
    useEffect(() => {
        weatherData();
    }, [city])
    let html = ``;
    if (weather.wea.includes("haze")) {
        html = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-haze" viewBox="0 0 16 16">
                                                            <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
                                                        </svg>`;
    }
    else if (weather.wea.includes("cloudy")) {
        html = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clouds" viewBox="0 0 16 16">
            <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z" />
            <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z" />
        </svg>
    }
    else if (weather.wea.includes("Mist", "fog")) {
        html = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-fog2" viewBox="0 0 16 16">
            <path d="M8.5 4a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4zM0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
        </svg>
    }
    else if (weather.wea.includes("Thundery")) {
        html = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning" viewBox="0 0 16 16">
            <path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z" />
        </svg>
    }
    else if (weather.wea.includes("Light rain", "rain")) {
        html = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning-rain" viewBox="0 0 16 16">
            <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z" />
        </svg>
    }
    else if (weather.wea.includes("heavy rain", "rain")) {
        html = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-rain-heavy" viewBox="0 0 16 16">
            <path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z" />
        </svg>
    }
    else if (weather.wea.includes("Clear", "sun")) {
        html = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
            <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
            <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
    }
    else if (weather.wea.includes("Snow")) {
        html = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-snow" viewBox="0 0 16 16">
            <path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z" />
        </svg>
    }
    else {
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-drizzle" viewBox="0 0 16 16">
            <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z" />
        </svg>
    }
    return (
        <>
            <div className="content">
                <div className="container-fluid">
                    <div className="contentbox">
                        <div className="contentbox-gid">
                            <h1>real time weather app</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sapiente quibusdam, dignissimos nesciunt consequatur quia quasi repellendus blanditiis fugiat molestias dicta minima id magnam obcaecati soluta tempore officia enim necessitatibus totam ipsam alias?</p>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <div className="row">
                                        <h6 className="location">{weather.name}, {weather.region}, {weather.country}</h6>
                                        <div className="col-12">
                                            <div className="current_weather">
                                                <h5>{weather.wea}</h5> {html}
                                            </div>
                                            <div className="infobox-primary">
                                                <h1 className="temp">{weather.currtemp}<span className="cel">°C</span></h1>
                                            </div>
                                        </div>
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
                                    <div className="row">
                                        <div className="col-12">
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
