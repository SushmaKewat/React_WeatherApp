import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "../index.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ResizeMap = () => {
    const map = useMap();
    map._onResize();
    return null;
};

function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
}

const Map = ({ lat, lon }) => {
    return (
        <MapContainer
            style={{ height: "30vh" }}
            center={[lat, lon]}
            zoom={12}
            minZoom={3}
            maxZoom={19}
            maxBounds={[
                [-85.06, -180],
                [85.06, 180],
            ]}
            scrollWheelZoom={true}>
            <ResizeMap />
            <ChangeView center={[lat, lon]} />
            <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}@2x.png" />
            <Marker map={this} position={[lat, lon]} />
        </MapContainer>
    );
};

export default Map;
