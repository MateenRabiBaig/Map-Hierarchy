export function normalizeThings(apiResponse) {
    return apiResponse.data.things
        .map(t => ({
            id: t.thingName,
            name: t.displayname,
            zone: t.meta?.zone,
            division: t.meta?.division,
            ward: t.meta?.ward,
            lat: t.properties?.latitude,
            lng: t.properties?.longitude
        }))
        .filter(t => {
            const valid =
                t.zone &&
                t.division &&
                typeof t.lat === "number" &&
                typeof t.lng === "number";

            if (!valid) {
                console.warn("Invalid thing skipped", t);
            }
            return valid;
        });
}
