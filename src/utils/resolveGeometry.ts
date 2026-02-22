import { areCollinear } from "./geoUtils";
import * as turf from "@turf/turf";

export function resolveGeometry(points) {
    if (points.length === 1) {
        return { type: "MARKERS" };
    }

    if (points.length === 2) {
        return {
            type: "LINE",
            geometry: turf.lineString(points.map(p => [p.lng, p.lat]))
        };
    }

    if (areCollinear(points)) {
        return {
            type: "LINE",
            geometry: turf.lineString(points.map(p => [p.lng, p.lat]))
        };
    }

    const hull = turf.convex(
        turf.featureCollection(
            points.map(p => turf.point([p.lng, p.lat]))
        )
    );

    return hull
        ? { type: "POLYGON", geometry: hull }
        : { type: "MARKERS" }
}
