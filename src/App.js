import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/weatherService.js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UilThunderstormSun } from "@iconscout/react-unicons";
import Map from "./components/Map.jsx";
import WeatherComponents from "./components/WeatherComponents.js";
import HourlyForecast from "./components/HourlyForecast.jsx";
import getBackground from "./services/getBackground.js";

function App() {
    const [query, setQuery] = useState({ q: "hyderabad" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units }).then((data) => {
                toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);
                setWeather(data);
            });
        };
        fetchWeather();
    }, [query, units]);

    const formatBackground = getBackground({ weather });

    /* bg-gradient-to-br from-cyan-700 to-blue-700  ${formatBackground()}*/

    return (
        <div className={`mx-auto max-w-full py-5 px-8 h-fit bg-cover ${formatBackground}`}>
            <div className="w-full flex flex-row max-w-full text-white text-5xl mb-5 align-content items-center justify-center text-center">
                <div className="flex flex-col my-2">
                    <p className="flex flex-row text-sm items-center justify-end font-light -mb-6">
                        <span className="mr-2">What's the</span> <UilThunderstormSun />
                    </p>
                    <p className="font-sacramento font-black text-7xl">Mausam</p>
                </div>
            </div>
            <div className="mx-auto flex flex-row backdrop-blur-md bg-black/10">
                <div className="mx-2 w-auto min-h-full p-4 pt-0 ">
                    <TopButtons setQuery={setQuery} />
                </div>
                <div className="w-auto h-fit mx-auto  p-4 align-content items-center justify-center ">
                    <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

                    {weather && (
                        <>
                            <div className="flex flex-row">
                                <div className="w-auto mx-auto px-4">
                                    <TimeAndLocation weather={weather} />
                                    <TemperatureAndDetails weather={weather} />
                                    <div className=" p-2">
                                        <Map lat={weather.lat} lon={weather.lon} />
                                    </div>
                                </div>
                                <div className="flex flex-col w-auto ml-10 p-6">
                                    <WeatherComponents
                                        temp={`${weather.feels_like.toFixed()}`}
                                        humidity={`${weather.humidity.toFixed()}`}
                                        windSpeed={`${weather.speed.toFixed()}`}
                                    />
                                </div>
                            </div>
                            <div className="my-3 w-auto hourly-forecast">
                                <HourlyForecast title="hourly forecast" data={weather.hourly} />
                                <HourlyForecast title="daily forecast" data={weather.daily} />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <ToastContainer
                autoClose={1000}
                theme="colored"
                newestOnTop={true}
                className="w-500 text-sm"
                style={{ width: "350px" }}
            />
        </div>
    );
}

export default App;
