import React from "react";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import Temp from "./Temp";

const WeatherComponents = ({ temp, humidity, windSpeed }) => {
    return (
        <div className="flex flex-col mt-4 items-center justify-center">
            <Temp temp={temp} />
            <Humidity humidity={humidity} />
            <WindSpeed windSpeed={windSpeed} />
        </div>
    );
};

export default WeatherComponents;
