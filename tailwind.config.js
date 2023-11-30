/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        backgroundImage: {
            nightSky: "url('./media/beautiful-shot-blue-purple-sky-filled-with-starts.jpg')",
            sunnySky:
                "url('./media/vecteezy_blue-sky-with-white-clouds-in-sunny-weather_1223652.jpg')",
            hazeDay: "url('./media/view-metro-city-buildings-cityscape.jpg')",
            hazeNight: "url('./media/horizon-light-fog-sunrise-bridge-night-99076-pxhere.com.jpg')",
            cloudyDay: "url('./media/cloudy-4482662_1920.jpg')",
            cloudyNight: "url('./media/dark-cloudy-night-sky-moon-rj9llmsuas28ih98.jpg')",
            drizzleDay:
                "url('./media/vecteezy_rain-drops-on-window-with-blurred-background-rainy-day-water_13099022_688.jpg')",
            drizzleNight: "url('./media/background-rain-drops-close-up.jpg')",
            smokeDay:
                "url('./media/sunlight-trees-landscape-forest-mountains-Italy-867885-wallhere.com.jpg')",
            snowDay: "url('./media/cloris-ying-J1LYc-oMA4k-unsplash.jpg')",
            snowNight:
                "url('./media/beautiful_snow_covered_spruce_trees_during_winter_hd_winter-1920x1080.jpg')",
            rainyDay: "url('./media/jan-willem-FobwhDUgdrk-unsplash.jpg')",
            rainyNight: "url('./media/rain-desktop-fy2rjkv24pk2kjmy.jpg')",
            thunderstormNight: "url('./media/felix-mittermeier-L4-16dmZ-1c-unsplash.jpg')",
            mistDay: "url('./media/marita-kavelashvili-ugnrXk1129g-unsplash.jpg')",
            mistNight: "url('./media/armands-brants-CQ_WJsl80xg-unsplash.jpg')",
        },

        fontFamily: {
            sacramento: ["Sacramento"],
        },
    },
};
export const plugins = [];
