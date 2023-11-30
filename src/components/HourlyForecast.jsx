import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from "recharts";
import { iconUrlFromCode } from "../services/weatherService";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="flex flex-col border border-white p-2 custom-tooltip backdrop-blur-lg bg-slate-100/30">
                <p className="label w-1/3 items-center justify-center mx-auto">
                    <img
                        src={`${iconUrlFromCode(payload[0].payload.icon)}`}
                        alt={payload[0].payload.icon}
                    />
                </p>
                <p className="label">Time : {`${label}`}</p>
                <p className="label">Temp : {`${payload[0].value}`}&deg;</p>
                <p className="label">Humidity : {`${payload[0].payload.humidity}`}</p>
                <p className="label">Des : {`${payload[0].payload.description}`}</p>
            </div>
        );
    }

    return null;
};

const CustomizedDot = (props) => {
    const { x, y, value } = props;

    return (
        <text
            x={x + 2}
            y={y - 6}
            dy={-7}
            fill={"red"}
            fontSize={15}
            textAnchor="middle"
            style={{ fill: "white", color: "white" }}>
            {value.toFixed()}&deg;
        </text>
    );
};

const CustomIcon = (props) => {
    const { x, y, value } = props;
    return (
        <foreignObject
            xmlns="http://www.w3.org/2000/svg"
            height={40}
            width={40}
            x={x - 17}
            y={y - 17}>
            <img id="icon" src={`${iconUrlFromCode(value)}`} alt={value} height={40} width={40} />
        </foreignObject>
    );
};

const HourlyForecast = ({ title, data }) => {
    return (
        <div className="text-white font-extralight mt-4 mb-6">
            <div className="flex items-center justify-start mt-6 ">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />
            <div className="mt-4 mb-6">
                <AreaChart
                    style={{ fill: "white" }}
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        domain={["auto", "auto"]}
                        includeHidden={true}
                        dataKey="title"
                        tick={{ fill: "white" }}
                        tickCount={8}
                        tickMargin={10}
                        tickLine={{ stroke: "white" }}
                        allowDataOverflow
                        padding={{ left: 20 }}
                        stroke="white"
                    />

                    <YAxis
                        stroke="white"
                        tickCount={7}
                        tickMargin={10}
                        tick={{ fill: "white" }}
                        tickLine={{ stroke: "white" }}
                        minTickGap={8}
                        padding={{ top: 50 }}
                    />
                    <CartesianGrid opacity={0.2} strokeDasharray={3} />
                    <Tooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        viewBox={{ height: 100 }}
                        content={<CustomTooltip />}
                    />
                    <Area
                        label={<CustomizedDot icon={data} />}
                        animationBegin={4000}
                        animationDuration={2000}
                        activeDot={false}
                        type="monotone"
                        dataKey="temp"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)">
                        <LabelList dataKey="icon" position={"top"} content={<CustomIcon />} />
                    </Area>
                </AreaChart>
            </div>
        </div>
    );
};

export default HourlyForecast;
