import React from "react";
import {
    GeoapifyGeocoderAutocomplete,
    GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import "prismjs/themes/prism-solarizedlight.css";
import "../index.css";

const Autocomplete = ({ value, setCity }) => {
    function onPlaceSelect(value) {
        console.log(value);
        const result =
            value.properties.address_line1 ||
            value.properties.city ||
            value.properties.state ||
            value.properties.county ||
            value.properties.country;
        if (result) setCity(result);
    }

    return (
        <GeoapifyContext apiKey={`${process.env.REACT_APP_GEOAPIFY_API_KEY}`}>
            <GeoapifyGeocoderAutocomplete
                skipIcons
                value={value}
                placeSelect={onPlaceSelect}
                placeholder="enter a city, country ... "
                allowNonVerifiedHouseNumber={true}
                allowNonVerifiedStreet={true}
            />
        </GeoapifyContext>
    );
};

export default Autocomplete;
