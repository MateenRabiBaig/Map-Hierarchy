import { MapContainer, TileLayer } from "react-leaflet";

export default function BaseMap({ children }) {
    return (
        <MapContainer
            center={[17.385, 78.4867]}
            zoom={11}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    );
}
