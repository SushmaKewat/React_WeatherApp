import React from "react";
import GaugeComponent from "react-gauge-component";
import { UilWind } from "@iconscout/react-unicons";

const WindSpeed = ({ windSpeed }) => {
    return (
        <div className="w-[15vw] text-white font-extralight border border-white m-3 p-2">
            <div className="flex flex-row items-center">
                <UilWind size={18} className="mr-1" /> Wind Speed
            </div>
            <GaugeComponent
                value={windSpeed}
                maxValue={200}
                arc={{
                    width: 0.2,
                    padding: 0.01,
                    nbSubArcs: 12,

                    subArcs: [
                        {
                            limit: 1,
                            color: "#ffffff",
                            showMark: true,
                            tooltip: { text: "Calm" },
                        },
                        {
                            limit: 5,
                            color: "#caf0f8",
                            showMark: true,
                            tooltip: { text: "Light Air" },
                        },
                        {
                            limit: 11,
                            color: "#90e0ef",
                            showMark: true,
                            tooltip: { text: "Light Breeze" },
                        },
                        {
                            limit: 19,
                            color: "#80ffdb",
                            showMark: true,
                            tooltip: { text: "Gentle Breeze" },
                        },
                        {
                            limit: 28,
                            color: "#80ed99",
                            showMark: true,
                            tooltip: { text: "Moderate Breeze" },
                        },
                        {
                            limit: 38,
                            color: "#99d98c",
                            showMark: true,
                            tooltip: { text: "Fresh Breeze" },
                        },
                        {
                            limit: 49,
                            color: "#ffff3f",
                            showMark: true,
                            tooltip: { text: "Near Gale" },
                        },
                        {
                            limit: 74,
                            color: "#ffba08",
                            showMark: true,
                            tooltip: { text: "Gale" },
                        },
                        {
                            limit: 88,
                            color: "#faa307",
                            showMark: true,
                            tooltip: { text: "Strong Gale" },
                        },
                        {
                            limit: 102,
                            color: "#dc2f02",
                            showMark: true,
                            tooltip: { text: "Storm" },
                        },
                        {
                            limit: 117,
                            color: "#d00000",
                            showMark: true,
                            tooltip: { text: "Violent Storm" },
                        },
                        {
                            limit: 200,
                            color: "#9d0208",
                            tooltip: { text: "Hurricane" },
                        },
                    ],
                }}
                needle={{
                    color: "#345243",
                    length: 2,
                    width: 20,
                    animate: true,
                    animationDuration: 1000,
                    animationDelay: 200,
                }}
                labels={{
                    valueLabel: {
                        formatTextValue: (value) => `${value} km/h`,
                        fontSize: 25,
                    },
                }}
            />
        </div>
    );
};

export default WindSpeed;
