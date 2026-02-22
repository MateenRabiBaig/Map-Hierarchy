export function getPolygonLatLngs(geo) {
    if (!geo) return [];

    const geometry = geo.type === "Feature" ? geo.geometry : geo;
    if(!geometry) return [];

    // Polygon
    if (geometry.type === "Polygon") {
        return geometry.coordinates[0].map(
            ([lng, lat]) => [lat, lng]
        );
    }

    // MultiPolygon (Take first polygon)
    if(geometry.type === "MultiPolygon") {
        return geometry.coordinates[0][0].map(
            ([lng, lat]) => [lat, lng]
        );
    }

    return [];
}

export function areCollinear(points, tolerance = 1e-6) {
    if (points.length < 3) return true;

    const { lat: x1, lng: y1 } = points[0];
    const { lat: x2, lng: y2 } = points[1];

    for (let i=2; i<points.length; i++) {
        const { lat: x3, lng: y3 } = points[i];

        const area =
            x1 * (y2 - y3) +
            x2 * (y3 - y1) +
            x3 * (y1 - y2);

        if (Math.abs(area) > tolerance) {
            return false;
        }
    }
    return true;
}
