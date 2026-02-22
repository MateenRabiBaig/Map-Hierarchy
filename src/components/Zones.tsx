import { Polygon, Polyline, Marker, Tooltip } from "react-leaflet";
import { resolveGeometry } from "../utils/resolveGeometry";
import { getPolygonLatLngs } from "../utils/geoUtils";
import { Fragment } from "react";

const ZONE_STYLE = {
    color: "#f10000ff",
    weight: 2,
    fillColor: "#f87171",
    fillOpacity: 0.35
};

export default function Zones({ things, onZoneClick }) {
    const zones = {};

    things.forEach(t => {
        if (!t.zone) return;
        zones[t.zone] || = [];
        zones[t.zone].push(t);
    });

    return (
        <>
            {Object.entries(zones).map(([zones, zoneThings]) => {
                const points = zoneThings.map(t => ({
                    lat: t.lat,
                    lng: t.lng
                }));

                const result = resolveGeometry(points);

                // -----------POLYGON-----------
                if (result.type === "POLYGON") {
                    const positions = getPolygonLatLngs(result.geometry);

                    return (
                        <Polygon
                            key={zone}
                            positions={positions}
                            pathOptions={ZONE_STYLE}
                            eventHandlers={{ click: () => onZoneClick(zone) }}
                        >
                            <Tooltip sticky>
                                <strong>Zone:</strong>
                            </Tooltip>
                        </Polygon>
                    )
                }

                // -----------LINE-----------
                if (result.type === "LINE") {
                    const positions = result.geometry.geometry.coordinates.map(
                        ([lng, lat]) => [lat, lng] 
                    );

                    return (
                        <Polyline
                            key={zone}
                            positions={positions}
                            pathOptions={{...ZONE_STYLE, weight: 3}}
                            eventHandlers={{ click: () => onZoneClick(zone) }}
                        >
                            <Tooltip sticky>
                                <strong>Zone:</strong> {zone}
                            </Tooltip>
                        </Polyline>
                    );
                }

                return (
                    <Fragment key={zone}>
                        {zoneThings.map(t => (
                            <Marker key={t.id} position={[t.lat, t.lng]}>
                                <Tooltip sticky>
                                    <strong>Zone:</strong> {zone}
                                </Tooltip>
                            </Marker>
                        ))}
                    </Fragment>
                );
            })}
        </>
    );
}
