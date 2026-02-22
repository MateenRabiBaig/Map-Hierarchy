import { Polygon, Polyline, Marker, Tooltip } from "react-leaflet";
import { resolveGeometry } from "../utils/resolveGeometry";
import { getPolygonLatLngs } from "../utils/geoUtils";
import { Fragment } from "react/jsx-runtime";

const DIVISION_STYLE = {
    color: "#15803d",
    weight: 2,
    fillColor: "#4ade80",
    fillOpacity: 0.45
};

export default function Divisions({ things, zone, onDivisionClick }) {
    if (!zone) return null;

    const filtered = things.filter(t => t.zone === zone);

    const divisionMap = {};
    filtered.forEach(t => {
        divisionMap[t.division] ||= [];
        divisionMap[t.division].push(t);
    });

    return (
        <>
            {Object.entries(divisionMap).map(([division, divisionThings]) => {
                const points = divisionThings.map(t => ({
                    lat: t.lat,
                    lng: t.lng
                }));

                const result = resolveGeometry(points);

                // -----------POLYGON-----------
                if (result.type === "POLYGON") {
                    return (
                        <Polygon
                            key={division}
                            positions={getPolygonLatLngs(result.geometry)}
                            pathOptions={DIVISION_STYLE}
                            eventHandlers={{ click: () => onDivisionClick(division) }}
                        >
                            <Tooltip sticky><strong>Division: </strong>{division}</Tooltip>
                        </Polygon>
                    );
                }

                // -----------LINE-----------
                if (result.type === "LINE") {
                    const positions = result.geometry.geometry.coordinates.map(
                        ([lng, lat]) => [lat, lng] 
                    );

                    return (
                        <Polyline
                            key={division}
                            positions={positions}
                            pathOptions={DIVISION_STYLE}
                            eventHandlers={{ click: () => onDivisionClick(division) }}
                        >
                            <Tooltip sticky><strong>Division: </strong>{division}</Tooltip>
                        </Polyline>
                    );
                }

                return (
                   <Fragment key={division}>
                    {divisionThings.map(t => (
                        <Marker
                            key={t.id}
                            position={[t.lat, t.lng]}
                            eventHandlers={{ click: () => onDivisionClick(division) }}
                        >
                            <Tooltip sticky><strong>Division: </strong>{division}<br/>{t.name}</Tooltip>
                        </Marker>
                    ))}
                   </Fragment>
                );                    
            })}
        </>
    );
}
