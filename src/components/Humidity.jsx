import React from "react";
import ProgressProvider from "./ProgressProvider";
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTear } from "@iconscout/react-unicons";

const Humidity = ({ humidity }) => {
    return (
        <div className="w-[15vw] text-white font-extralight border border-white m-3 p-2">
            <div className="flex flex-row items-center">
                <UilTear size={18} className="mr-1" /> Humidity
            </div>
            <div className="w-[8vw] m-1 items-center justify-center mx-auto">
                <ProgressProvider valueStart={10} valueEnd={humidity}>
                    {(value) => (
                        <CircularProgressbar
                            value={value}
                            text={`${value}%`}
                            styles={{
                                text: {
                                    fill: "white",
                                },
                                pathTransitionDuration: 1,
                                path: {
                                    transition: "stroke-dashoffset 1.5s ease 0s",
                                    transformOrigin: "center center",
                                },
                            }}
                        />
                    )}
                </ProgressProvider>
            </div>
        </div>
    );
};

export default Humidity;
