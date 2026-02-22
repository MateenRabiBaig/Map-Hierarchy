import { Polygon, Polyline, Marker, Tooltip } from "react-leaflet";
import { Fragment } from "react";

const LEAFLET_ZONE_STYLE = {
  color: "#2563eb",
  weight: 2,
  fillColor: "#3b82f6",
  fillOpacity: 0.35
};

function resolveLeafletGeometry(points) {
  // Leaflet-only approach: Simple counting, no spatial analysis
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

export default function LeafletZones({ things, onZoneClick }) {
  const zones = {};

  things.forEach(t => {
    if (!t.zone) return;
    zones[t.zone] ||= [];
    zones[t.zone].push(t);
  });

  return (
    <>
      {Object.entries(zones).map(([zone, zoneThings]) => {
        const points = zoneThings.map(t => ({
          lat: t.lat,
          lng: t.lng
        }));

        const result = resolveLeafletGeometry(points);

        // ---------- POLYGON ----------
        if (result.type === "POLYGON") {
          return (
            <Polygon
              key={zone}
              positions={result.positions}
              pathOptions={LEAFLET_ZONE_STYLE}
              eventHandlers={{ click: () => onZoneClick(zone) }}
            >
              <Tooltip sticky>
                <strong>Zone (Leaflet):</strong> {zone}
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
              key={zone}
              positions={result.positions}
              pathOptions={{ ...LEAFLET_ZONE_STYLE, weight: 3 }}
              eventHandlers={{ click: () => onZoneClick(zone) }}
            >
              <Tooltip sticky>
                <strong>Zone (Leaflet):</strong> {zone}
              </Tooltip>
            </Polyline>
          );
        }

        // ---------- MARKERS ONLY ----------
        return (
          <Fragment key={zone}>
            {zoneThings.map(t => (
              <Marker
                key={t.id}
                position={[t.lat, t.lng]}
              >
                <Tooltip sticky>
                  <strong>Zone (Leaflet):</strong> {zone}
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
