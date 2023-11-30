import React from "react";
import GaugeComponent from "react-gauge-component";
import { UilTemperature } from "@iconscout/react-unicons";

const Temp = ({ temp }) => {
    return (
        <div className="w-[15vw] text-white font-extralight border border-white m-3 p-2">
            <div className="flex flex-row items-center">
                <UilTemperature size={18} className="mr-1" /> Real Feels
            </div>
            <GaugeComponent
                value={temp}
                minValue={-40}
                maxValue={70}
                arc={{
                    colorArray: [
                        "#ffffff",
                        "#caf0f8",
                        "#90e0ef",
                        "#00b4d8",
                        "#70e000",
                        "#70e000",
                        "#9ef01a",
                        "#9ef01a",
                        "#9ef01a",
                        "#f9c74f",
                        "#f8961e",
                        "#f94144",
                        "#e85d04",
                        "#9d0208",
                    ],
                    width: 0.3,
                    subArcs: [
                        {
                            limit: -29,
                            color: "#ffffff",
                            showMark: true,
                        },
                        {
                            limit: -25,
                            color: "#caf0f8",
                            showMark: true,
                        },
                        {
                            limit: -15,
                            color: "#90e0ef",
                            showMark: true,
                        },
                        {
                            limit: -5,
                            color: "#80ffdb",
                            showMark: true,
                        },
                        {
                            limit: 0,
                            color: "#80ed99",
                            showMark: true,
                        },
                        {
                            limit: 10,
                            color: "#99d98c",
                            showMark: true,
                        },
                        {
                            limit: 15,
                            color: "#ffff3f",
                            showMark: true,
                        },
                        {
                            limit: 20,
                            color: "#ffba08",
                            showMark: true,
                        },
                        {
                            limit: 27,
                            color: "#faa307",
                            showMark: true,
                        },
                        {
                            limit: 33,
                            color: "#dc2f02",
                            showMark: true,
                        },
                        {
                            limit: 38,
                            color: "#d00000",
                            showMark: true,
                        },
                        {
                            limit: 45,
                            color: "#d00000",
                            showMark: true,
                        },
                        {
                            limit: 55,
                            color: "#d00000",
                            showMark: true,
                        },
                        {
                            color: "#d00000",
                            showMark: true,
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
                        formatTextValue: (value) => `${value}°C`,
                        fontSize: 30,
                    },
                    markLabel: {
                        valueConfig: {
                            formatTextValue: (value) => `${value}°C`,
                        },
                        hideMinMax: true,
                    },
                }}
            />
        </div>
    );
};

export default Temp;
