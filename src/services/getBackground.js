import { formatToLocalTime } from "./weatherService";

const getBackground = ({ weather }) => {
    if (!weather) return "from-cyan-700 to-blue-700";

    const weatherCondition = weather.details;

    const time = new Date(formatToLocalTime(weather.dt, weather.timezone, "dd LLL yyyy HH:mm"));
    const sunriseTime = new Date(
        formatToLocalTime(weather.sunrise, weather.timezone, "dd LLL yyyy HH:mm")
    );
    const sunsetTime = new Date(
        formatToLocalTime(weather.sunset, weather.timezone, "dd LLL yyyy HH:mm")
    );

    if (time > sunriseTime && time < sunsetTime) {
        if (weatherCondition === "Clouds") return "bg-cloudyDay";
        if (weatherCondition === "Thunderstorm") return "bg-thunderstormNight";
        if (weatherCondition === "Drizzle") return "bg-drizzleDay";
        if (weatherCondition === "Rain") return "bg-rainyDay";
        if (weatherCondition === "Snow") return "bg-snowDay";
        if (weatherCondition === "Smoke" || weatherCondition === "Dust") return "bg-smokeDay";
        if (weatherCondition === "Mist" || weatherCondition === "Sand") return "bg-mistDay";
        if (weatherCondition === "Haze" || weatherCondition === "Ash") return "bg-hazeDay";
        return "bg-sunnySky";
    } else {
        if (weatherCondition === "Clouds") return "bg-cloudyNight";
        if (weatherCondition === "Thunderstorm") return "bg-thunderstormNight";
        if (weatherCondition === "Drizzle") return "bg-drizzleNight";
        if (weatherCondition === "Rain") return "bg-rainyNight";
        if (weatherCondition === "Snow") return "bg-snowNight";
        if (weatherCondition === "Smoke" || weatherCondition === "Dust") return "bg-smokeDay";
        if (weatherCondition === "Mist" || weatherCondition === "Sand") return "bg-mistNight";
        if (weatherCondition === "Haze" || weatherCondition === "Ash") return "bg-hazeNight";
        return "bg-nightSky";
    }
};

export default getBackground;
