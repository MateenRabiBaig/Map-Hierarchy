# Map Hierarchy Comparison: Turf.js vs. Leaflet

This project is a React-based interactive map application designed to visualize and compare two different approaches for rendering hierarchical geospatial data. It contrasts a "smart" geometry generation approach using **Turf.js** against a "naive" rendering approach using standard **Leaflet** polygons.

## 🚀 Features

- **Dual Rendering Modes**:
  - **Turf.js Mode (Red)**: Uses geospatial analysis (Convex Hulls) to intelligently generate zone and division boundaries from scattered point data.
  - **Leaflet-Only Mode (Blue)**: Demonstrates a naive approach by simply connecting points in order, highlighting the necessity of geospatial libraries for unstructured data.
  - **Side-by-Side View**: Compare both rendering techniques in real-time.

- **Hierarchical Drill-Down**:
  - **Level 1 (Zones)**: View major geographic zones.
  - **Level 2 (Divisions)**: Click a zone to drill down into its sub-divisions.
  - **Level 3 (Pumping Stations)**: Click a division to view individual station markers.

- **Interactive UI**:
  - Custom control panel for switching modes.
  - Breadcrumb-style navigation (Back buttons).
  - Tooltips and Popups for data inspection.

## 🛠️ Tech Stack

- **Frontend Framework**: React (with TypeScript)
- **Build Tool**: Vite
- **Mapping Library**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- **Geospatial Analysis**: [Turf.js](https://turfjs.org/)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Map-Hierarchy
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```text
src/
├── components/
│   ├── BaseMap.tsx          # Common Leaflet map container
│   ├── Zones.tsx            # Turf.js implementation for Zones (Smart Geometry)
│   ├── Divisions.tsx        # Turf.js implementation for Divisions
│   ├── LeafletZones.tsx     # Naive Leaflet implementation for Zones
│   ├── LeafletDivisions.tsx # Naive Leaflet implementation for Divisions
│   └── PumpingStations.tsx  # Marker rendering
├── data/
│   ├── dummyData.js         # Data source for Turf mode
│   └── leafletData.js       # Data source for Leaflet mode
├── utils/
│   ├── geoUtils.ts          # Geometry helper functions
│   ├── normalizeThings.ts   # Data normalization logic
│   └── resolveGeometry.ts   # Logic to determine if points form a Point, Line, or Polygon
└── App.tsx                  # Main application logic and layout
```

## 🔍 The Comparison

### Turf.js Approach (Red)
- **Logic**: Takes a set of points belonging to a Zone or Division and calculates the **Convex Hull**.
- **Result**: A clean, mathematically enclosing polygon that represents the area covered by the points.
- **Use Case**: Ideal when you have point data (e.g., assets, stations) and need to visualize the service area or territory they occupy without having explicit boundary coordinates.

### Leaflet-Only Approach (Blue)
- **Logic**: Takes the same set of points and connects them sequentially or in the order provided in the dataset.
- **Result**: Often results in intersecting lines, "bowtie" shapes, or chaotic polygons if the data isn't pre-sorted geographically.
- **Use Case**: Highlights why simple polygon rendering fails for unordered point clouds and why libraries like Turf.js are essential for dynamic geometry generation.
