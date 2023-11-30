import React, { useState, useEffect } from "react";
import getFormattedWeatherData, {
    formatToLocalTime,
    iconUrlFromCode,
} from "../services/weatherService.js";

const MiniWeather = ({ city }) => {
    // eslint-disable-next-line
    const [query, setQuery] = useState({ q: city });
    // eslint-disable-next-line
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getFormattedWeatherData({ ...query, units });
            setWeather(data);
        };
        fetchWeather();
        // eslint-disable-next-line
    }, []);

    if (weather) {
        return (
            <div className="flex justify-between">
                <span>
                    <p className="pr-3 "> {city} </p>
                    <p className="text-xl font-medium pt-1">
                        {weather.temp.toFixed()}
                        <sup>&deg;C</sup>
                    </p>
                </span>
                <span>
                    <p className="font-extralight">
                        {formatToLocalTime(weather.dt, weather.timezone, "hh:mm a")}
                    </p>
                    <p>
                        <img
                            src={iconUrlFromCode(weather.icon)}
                            alt={weather.icon}
                            className="w-10"
                        />
                    </p>
                </span>
            </div>
        );
    } else {
        return (
            <div>
                <p className="pr-3 "> {city} </p>
            </div>
        );
    }
};

export default MiniWeather;
