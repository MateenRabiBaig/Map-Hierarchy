import { Polygon, Polyline, Marker, Tooltip } from "react-leaflet";
import { Fragment } from "react";

const LEAFLET_DIVISION_STYLE = {
  color: "#0891b2",
  weight: 2,
  fillColor: "#06b6d4",
  fillOpacity: 0.45
};

function resolveLeafletGeometry(points) {
  if (points.length === 1) {
    return { type: "MARKERS" };
  }

  if (points.length === 2) {
    return {
      type: "LINE",
      positions: points.map(p => [p.lat, p.lng])
    };
  }

  return {
    type: "POLYGON",
    positions: points.map(p => [p.lat, p.lng])
  };
}

export default function LeafletDivisions({ things, zone, onDivisionClick }) {
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

        const result = resolveLeafletGeometry(points);

        // ---------- POLYGON ----------
        if (result.type === "POLYGON") {
          return (
            <Polygon
              key={division}
              positions={result.positions}
              pathOptions={LEAFLET_DIVISION_STYLE}
              eventHandlers={{ click: () => onDivisionClick(division) }}
            >
              <Tooltip sticky>
                <strong>Division (Leaflet):</strong> {division}
                <br />
                <em>Naive polygon - connects points in order</em>
              </Tooltip>
            </Polygon>
          );
        }

        // ---------- LINE ----------
        if (result.type === "LINE") {
          return (
            <Polyline
              key={division}
              positions={result.positions}
              pathOptions={LEAFLET_DIVISION_STYLE}
              eventHandlers={{ click: () => onDivisionClick(division) }}
            >
              <Tooltip sticky>
                <strong>Division (Leaflet):</strong> {division}
              </Tooltip>
            </Polyline>
          );
        }

        // ---------- MARKERS ONLY ----------
        return (
          <Fragment key={division}>
            {divisionThings.map(t => (
              <Marker
                key={t.id}
                position={[t.lat, t.lng]}
                eventHandlers={{ click: () => onDivisionClick(division) }}
              >
                <Tooltip sticky>
                  <strong>Division (Leaflet):</strong> {division}
                  <br />
                  <strong>Station:</strong> {t.displayName}
                </Tooltip>
              </Marker>
            ))}
          </Fragment>
        );
      })}
    </>
  );
}
