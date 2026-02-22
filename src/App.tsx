import { useState } from "react";
import BaseMap from "./components/BaseMap";
import L from "leaflet";
import Zones from "./components/Zones";
import Divisions from "./components/Divisions";
import LeafletZones from "./components/LeafletZones";
import LeafletDivisions from "./components/LeafletDivisions";
import PumpingStations from "./components/PumpingStations";
import { dummyThingsApiResponse } from "./data/dummyData.js";
import { leafletThingsApiResponse } from "./data/leafletData.js";
import { normalizeThings } from "./utils/normalizeThings";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MODES = {
  TURF: "TURF",
  LEAFLET: "LEAFLET",
  SIDE_BY_SIDE: "SIDE_BY_SIDE"
};

const LEVELS = {
  ZONE: "ZONE",
  DIVISION: "DIVISION",
  PUMPING: "PUMPING"
};

function App() {
  const turfThings = normalizeThings(dummyThingsApiResponse);
  const leafletThings = normalizeThings(leafletThingsApiResponse);
  const [mode, setMode] = useState(MODES.SIDE_BY_SIDE);

  // Turf.js navigation state
  const [turfLevel, setTurfLevel] = useState(LEVELS.ZONE);
  const [turfSelectedZone, setTurfSelectedZone] = useState(null);
  const [turfSelectedDivision, setTurfSelectedDivision] = useState(null);

  // Leaflet navigation state
  const [leafletLevel, setLeafletLevel] = useState(LEVELS.ZONE);
  const [leafletSelectedZone, setLeafletSelectedZone] = useState(null);
  const [leafletSelectedDivision, setLeafletSelectedDivision] = useState(null);

  // Navigation handlers for Turf
  const handleTurfZoneClick = (zone) => {
    setTurfSelectedZone(zone);
    setTurfLevel(LEVELS.DIVISION);
  };

  const handleTurfDivisionClick = (division) => {
    setTurfSelectedDivision(division);
    setTurfLevel(LEVELS.PUMPING);
  };

  const handleTurfBack = () => {
    if (turfLevel === LEVELS.PUMPING) {
      setTurfLevel(LEVELS.DIVISION);
      setTurfSelectedDivision(null);
    } else if (turfLevel === LEVELS.DIVISION) {
      setTurfLevel(LEVELS.ZONE);
      setTurfSelectedZone(null);
    }
  };

  // Navigation handlers for Leaflet
  const handleLeafletZoneClick = (zone) => {
    setLeafletSelectedZone(zone);
    setLeafletLevel(LEVELS.DIVISION);
  };

  const handleLeafletDivisionClick = (division) => {
    setLeafletSelectedDivision(division);
    setLeafletLevel(LEVELS.PUMPING);
  };

  const handleLeafletBack = () => {
    if (leafletLevel === LEVELS.PUMPING) {
      setLeafletLevel(LEVELS.DIVISION);
      setLeafletSelectedDivision(null);
    } else if (leafletLevel === LEVELS.DIVISION) {
      setLeafletLevel(LEVELS.ZONE);
      setLeafletSelectedZone(null);
    }
  };

  const resetBoth = () => {
    setTurfLevel(LEVELS.ZONE);
    setTurfSelectedZone(null);
    setTurfSelectedDivision(null);
    setLeafletLevel(LEVELS.ZONE);
    setLeafletSelectedZone(null);
    setLeafletSelectedDivision(null);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Control Panel */}
      <div style={{
        position: "absolute",
        top: 10,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        backgroundColor: "white",
        padding: "15px 25px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <h3 style={{ margin: 0, textAlign: "center", fontSize: "16px" }}>
          Turf.js vs Leaflet-Only Comparison
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => { setMode(MODES.TURF); resetBoth(); }}
            style={{
              padding: "8px 16px",
              backgroundColor: mode === MODES.TURF ? "#dc2626" : "#f3f4f6",
              color: mode === MODES.TURF ? "white" : "#1f2937",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: mode === MODES.TURF ? "bold" : "normal"
            }}
          >
            Turf.js
          </button>
          <button
            onClick={() => { setMode(MODES.LEAFLET); resetBoth(); }}
            style={{
              padding: "8px 16px",
              backgroundColor: mode === MODES.LEAFLET ? "#2563eb" : "#f3f4f6",
              color: mode === MODES.LEAFLET ? "white" : "#1f2937",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: mode === MODES.LEAFLET ? "bold" : "normal"
            }}
          >
            Leaflet-Only
          </button>
          <button
            onClick={() => { setMode(MODES.SIDE_BY_SIDE); resetBoth(); }}
            style={{
              padding: "8px 16px",
              backgroundColor: mode === MODES.SIDE_BY_SIDE ? "#059669" : "#f3f4f6",
              color: mode === MODES.SIDE_BY_SIDE ? "white" : "#1f2937",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: mode === MODES.SIDE_BY_SIDE ? "bold" : "normal"
            }}
          >
            Side by Side
          </button>
        </div>
        <div style={{ fontSize: "12px", color: "#6b7280", textAlign: "center" }}>
          Click zones/divisions to drill down • Use back buttons to navigate up
        </div>
      </div>

      {/* Maps Container */}
      {mode === MODES.SIDE_BY_SIDE ? (
        <div style={{ display: "flex", height: "100%" }}>
          {/* Turf.js Map */}
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{
              position: "absolute",
              top: "130px",
              left: "10px",
              zIndex: 1000,
              backgroundColor: "rgba(220, 38, 38, 0.9)",
              color: "white",
              padding: "10px 15px",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "14px"
            }}>
              Turf.js
              {turfSelectedZone && (
                <div style={{ fontSize: "12px", marginTop: "5px", fontWeight: "normal" }}>
                  {turfLevel === LEVELS.DIVISION && `Zone: ${turfSelectedZone}`}
                  {turfLevel === LEVELS.PUMPING && `Zone: ${turfSelectedZone} > ${turfSelectedDivision}`}
                </div>
              )}
            </div>

            {/* Back Button for Turf */}
            {turfLevel !== LEVELS.ZONE && (
              <button
                onClick={handleTurfBack}
                style={{
                  position: "absolute",
                  top: "130px",
                  right: "10px",
                  zIndex: 1000,
                  backgroundColor: "rgba(220, 38, 38, 0.9)",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                ← Back
              </button>
            )}

            <BaseMap>
              {turfLevel === LEVELS.ZONE && (
                <Zones
                  things={turfThings}
                  onZoneClick={handleTurfZoneClick}
                />
              )}
              {turfLevel === LEVELS.DIVISION && (
                <Divisions
                  things={turfThings}
                  zone={turfSelectedZone}
                  onDivisionClick={handleTurfDivisionClick}
                />
              )}
              {turfLevel === LEVELS.PUMPING && (
                <PumpingStations
                  things={turfThings.filter(
                    t => t.zone === turfSelectedZone && t.division === turfSelectedDivision
                  )}
                />
              )}
            </BaseMap>
          </div>

          {/* Leaflet-Only Map */}
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{
              position: "absolute",
              top: "130px",
              left: "10px",
              zIndex: 1000,
              backgroundColor: "rgba(37, 99, 235, 0.9)",
              color: "white",
              padding: "10px 15px",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "14px"
            }}>
              Leaflet-Only
              {leafletSelectedZone && (
                <div style={{ fontSize: "12px", marginTop: "5px", fontWeight: "normal" }}>
                  {leafletLevel === LEVELS.DIVISION && `Zone: ${leafletSelectedZone}`}
                  {leafletLevel === LEVELS.PUMPING && `Zone: ${leafletSelectedZone} > ${leafletSelectedDivision}`}
                </div>
              )}
            </div>

            {/* Back Button for Leaflet */}
            {leafletLevel !== LEVELS.ZONE && (
              <button
                onClick={handleLeafletBack}
                style={{
                  position: "absolute",
                  top: "130px",
                  right: "10px",
                  zIndex: 1000,
                  backgroundColor: "rgba(37, 99, 235, 0.9)",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                ← Back
              </button>
            )}

            <BaseMap>
              {leafletLevel === LEVELS.ZONE && (
                <LeafletZones
                  things={leafletThings}
                  onZoneClick={handleLeafletZoneClick}
                />
              )}
              {leafletLevel === LEVELS.DIVISION && (
                <LeafletDivisions
                  things={leafletThings}
                  zone={leafletSelectedZone}
                  onDivisionClick={handleLeafletDivisionClick}
                />
              )}
              {leafletLevel === LEVELS.PUMPING && (
                <PumpingStations
                  things={leafletThings.filter(
                    t => t.zone === leafletSelectedZone && t.division === leafletSelectedDivision
                  )}
                />
              )}
            </BaseMap>
          </div>
        </div>
      ) : mode === MODES.TURF ? (
        <div style={{ height: "100%", position: "relative" }}>
          <div style={{
            position: "absolute",
            top: "130px",
            left: "10px",
            zIndex: 1000,
            backgroundColor: "rgba(220, 38, 38, 0.9)",
            color: "white",
            padding: "10px 15px",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "14px"
          }}>
            Turf.js
            {turfSelectedZone && (
              <div style={{ fontSize: "12px", marginTop: "5px", fontWeight: "normal" }}>
                {turfLevel === LEVELS.DIVISION && `Zone: ${turfSelectedZone}`}
                {turfLevel === LEVELS.PUMPING && `Zone: ${turfSelectedZone} > ${turfSelectedDivision}`}
              </div>
            )}
          </div>

          {turfLevel !== LEVELS.ZONE && (
            <button
              onClick={handleTurfBack}
              style={{
                position: "absolute",
                top: "130px",
                right: "10px",
                zIndex: 1000,
                backgroundColor: "rgba(220, 38, 38, 0.9)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px"
              }}
            >
              ← Back
            </button>
          )}

          <BaseMap>
            {turfLevel === LEVELS.ZONE && (
              <Zones
                things={turfThings}
                onZoneClick={handleTurfZoneClick}
              />
            )}
            {turfLevel === LEVELS.DIVISION && (
              <Divisions
                things={turfThings}
                zone={turfSelectedZone}
                onDivisionClick={handleTurfDivisionClick}
              />
            )}
            {turfLevel === LEVELS.PUMPING && (
              <PumpingStations
                things={turfThings.filter(
                  t => t.zone === turfSelectedZone && t.division === turfSelectedDivision
                )}
              />
            )}
          </BaseMap>
        </div>
      ) : (
        <div style={{ height: "100%", position: "relative" }}>
          <div style={{
            position: "absolute",
            top: "130px",
            left: "10px",
            zIndex: 1000,
            backgroundColor: "rgba(37, 99, 235, 0.9)",
            color: "white",
            padding: "10px 15px",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "14px"
          }}>
            Leaflet-Only
            {leafletSelectedZone && (
              <div style={{ fontSize: "12px", marginTop: "5px", fontWeight: "normal" }}>
                {leafletLevel === LEVELS.DIVISION && `Zone: ${leafletSelectedZone}`}
                {leafletLevel === LEVELS.PUMPING && `Zone: ${leafletSelectedZone} > ${leafletSelectedDivision}`}
              </div>
            )}
          </div>

          {leafletLevel !== LEVELS.ZONE && (
            <button
              onClick={handleLeafletBack}
              style={{
                position: "absolute",
                top: "130px",
                right: "10px",
                zIndex: 1000,
                backgroundColor: "rgba(37, 99, 235, 0.9)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px"
              }}
            >
              ← Back
            </button>
          )}

          <BaseMap>
            {leafletLevel === LEVELS.ZONE && (
              <LeafletZones
                things={leafletThings}
                onZoneClick={handleLeafletZoneClick}
              />
            )}
            {leafletLevel === LEVELS.DIVISION && (
              <LeafletDivisions
                things={leafletThings}
                zone={leafletSelectedZone}
                onDivisionClick={handleLeafletDivisionClick}
              />
            )}
            {leafletLevel === LEVELS.PUMPING && (
              <PumpingStations
                things={leafletThings.filter(
                  t => t.zone === leafletSelectedZone && t.division === leafletSelectedDivision
                )}
              />
            )}
          </BaseMap>
        </div>
      )}

      {/* Legend */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        backgroundColor: "white",
        padding: "12px 20px",
        borderRadius: "6px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontSize: "13px"
      }}>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", width: "20px", height: "20px", backgroundColor: "#dc2626", borderRadius: "3px", marginRight: "5px" }}></span>
            <strong>Turf.js:</strong> Smart polygons/lines
          </div>
          <div>
            <span style={{ display: "inline-block", width: "20px", height: "20px", backgroundColor: "#2563eb", borderRadius: "3px", marginRight: "5px" }}></span>
            <strong>Leaflet:</strong> Naive connection
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
