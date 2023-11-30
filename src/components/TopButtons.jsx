import React from "react";
import { UilMapPinAlt, UilCompass } from "@iconscout/react-unicons";
import MiniWeather from "./MiniWeather.jsx";
const TopButtons = ({ setQuery }) => {
    const Worldcities = [
        {
            id: 1,
            title: "London",
        },
        {
            id: 2,
            title: "Shanghai",
        },
        {
            id: 3,
            title: "Paris",
        },
        {
            id: 4,
            title: "Singapore",
        },
        {
            id: 5,
            title: "Tokyo",
        },
    ];

    const Indiacities = [
        {
            id: 11,
            title: "Mumbai",
        },
        {
            id: 12,
            title: "Hyderabad",
        },
        {
            id: 13,
            title: "Kolkata",
        },
        {
            id: 14,
            title: "Chennai",
        },
        {
            id: 15,
            title: "Delhi",
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <p className="text-2xl text-white flex flex-row items-center font-medium">
                    India <UilMapPinAlt />
                </p>
                {Indiacities.map((city) => (
                    <button
                        key={city.id}
                        onClick={() => setQuery({ q: city.title })}
                        className=" text-white 
                        text-base text-left 
                        font-light px-3 py-1 my-2
                         border border-white
                         hover:bg-white/20 hover:border-white/0 hover:text-white">
                        <MiniWeather city={city.title} />
                    </button>
                ))}
            </div>
            <hr className="my-2 text-white text-base font-medium px-1 py-2" />
            <div className="flex flex-col">
                <p className="text-2xl text-white flex flex-row items-center">
                    World <UilCompass />
                </p>
                {Worldcities.map((city) => (
                    <button
                        key={city.id}
                        onClick={() => setQuery({ q: city.title })}
                        className="text-white text-base text-left font-light px-3 py-1 my-2 border border-white
                        hover:bg-white/20 hover:border-white/0 hover:text-white">
                        <MiniWeather city={city.title} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopButtons;
