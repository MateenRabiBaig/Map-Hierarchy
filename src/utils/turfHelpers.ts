import * as turf from '@turf/turf';

export function createSafeHull(things) {
    const points = turf.featureCollection(
        things.map(t => turf.point([t.lng, t.lat]))
    );

    //3 or more - Convex Hull
    if (things.length >= 3) {
        return turf.convex(points);
    }

    //1 or 2 points - Buffer
    return turf.buffer(points, 0.3, { units: "meters" });
}
