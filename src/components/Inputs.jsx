import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import Autocomplete from "./Autocomplete";

const Inputs = ({ setQuery, units, setUnits }) => {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success("Weather fetched for current location");
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-2/3 items-center justify-center space-x-2">
                <Autocomplete
                    className="w-2/3"
                    value={city}
                    setCity={setCity}
                    onChange={(e) => {
                        e.preventDefault();
                    }}
                />
                <UilSearch
                    size={30}
                    onClick={handleSearchClick}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                />
                <UilLocationPoint
                    size={30}
                    onClick={handleLocationClick}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                />
            </div>

            <div className="flex flex-row w-1/5 items-center justify-center">
                <button
                    name="metric"
                    onClick={handleUnitChange}
                    className="text-xl text-white font-light transition ease-out hover:scale-125 p-1">
                    °C
                </button>
                <p className="text-white text-xl font-light px-2"> | </p>
                <button
                    name="imperial"
                    onClick={handleUnitChange}
                    className="text-xl text-white font-light transition ease-out hover:scale-125 p-1 ">
                    °F
                </button>
            </div>
        </div>
    );
};

export default Inputs;
