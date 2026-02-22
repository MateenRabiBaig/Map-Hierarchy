import { Marker, Tooltip, Popup } from "react-leaflet";

export default function PumpingStations({ things }) {
    return (
        <>
            {things.map(t => (
                <Marker key={t.id} position={[t.lat, t.lng]}>
                    <Tooltip sticky>
                        <div>
                            <strong>{t.name}</strong><br/>
                            Zone: {t.zone}<br/>
                            Division: {t.division}
                        </div>
                    </Tooltip>
                    <Popup>{t.name}</Popup>
                </Marker>
            ))}
        </>
    );
}
