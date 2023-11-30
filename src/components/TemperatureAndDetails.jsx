import React from "react";
import { UilArrowUp, UilArrowDown, UilSun, UilSunset, UilTornado } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";
import "react-circular-progressbar/dist/styles.css";

const TemperatureAndDetails = ({
    weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, timezone, pressure },
}) => {
    return (
        <div>
            <div>
                <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                    <p>{details}</p>
                </div>

                <div className="flex flex-row items-center justify-between text-white py-3">
                    <img src={iconUrlFromCode(icon)} alt={icon} className="w-20" />
                    <p className="text-5xl">
                        {`${temp.toFixed()}`}
                        <sup className="text-white/60">&deg;</sup>
                    </p>
                    <div className="flex flex-col space-y-2">
                        <div className="flex font-light text-sm items-center justify-start">
                            <UilTornado size={18} className="mr-1" /> Pressure :
                            <span className="font-medium ml-1">{`${pressure.toFixed()}`} Pa</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                    <UilSun />
                    <p className="font-light">
                        Rise :{" "}
                        <span className="font-medium ml-2">
                            {formatToLocalTime(sunrise, timezone, "hh:mm a")} |
                        </span>
                    </p>
                    <UilSunset />
                    <p className="font-light">
                        Set :{" "}
                        <span className="font-medium ml-2">
                            {formatToLocalTime(sunset, timezone, "hh:mm a")} |
                        </span>
                    </p>
                    <UilArrowUp />
                    <p className="font-light">
                        High :{" "}
                        <span className="font-medium ml-2">{`${temp_max.toFixed()}`}&deg; | </span>
                    </p>
                    <UilArrowDown />
                    <p className="font-light">
                        Low :{" "}
                        <span className="font-medium ml-2">{`${temp_min.toFixed()}`}&deg; </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TemperatureAndDetails;
