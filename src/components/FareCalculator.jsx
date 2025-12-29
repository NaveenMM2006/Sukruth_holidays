import { useState } from "react";
import axios from "axios";
import RouteMap from "./RouteMap";

const PRICE_PER_KM = 20;
const GST_PERCENT = 5;
const TOLL_PER_KM = 2;

export default function FareCalculator() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(null);
  const [fare, setFare] = useState(null);
  const [loading, setLoading] = useState(false);

  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);
  const [routeCoords, setRouteCoords] = useState(null);

  const geocode = async (place) => {
    const res = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: { q: place, format: "json", limit: 1 },
      }
    );

    if (!res.data.length) throw new Error("Location not found");

    return {
      lat: parseFloat(res.data[0].lat),
      lon: parseFloat(res.data[0].lon),
    };
  };

  const calculateFare = async () => {
    if (!source || !destination) return;

    setLoading(true);

    try {
      const start = await geocode(source);
      const end = await geocode(destination);

      setStartCoords(start);
      setEndCoords(end);

      const routeRes = await axios.get(
        `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${end.lon},${end.lat}?overview=full&geometries=geojson`
      );

      const route = routeRes.data.routes[0];
      const km = route.distance / 1000;

      const base = km * PRICE_PER_KM;
      const gst = (base * GST_PERCENT) / 100;
      const toll = km * TOLL_PER_KM;

      setDistance(km.toFixed(1));
      setFare({
        base: base.toFixed(0),
        gst: gst.toFixed(0),
        toll: toll.toFixed(0),
        total: (base + gst + toll).toFixed(0),
      });

      setRouteCoords(
        route.geometry.coordinates.map(([lon, lat]) => [lat, lon])
      );
    } catch (err) {
      alert("Unable to calculate route. Try nearby city names.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        🚐 Fare Estimator with Route Map
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="p-3 border rounded"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <input
          className="p-3 border rounded"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <button
        onClick={calculateFare}
        disabled={loading}
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl"
      >
        {loading ? "Calculating..." : "Calculate Fare"}
      </button>

      {fare && (
        <>
          <div className="mt-6 grid md:grid-cols-4 gap-4 text-center">
            <div>📍 <b>{distance} km</b></div>
            <div>💰 ₹{fare.base}</div>
            <div>🧾 ₹{fare.gst}</div>
            <div>🛣 ₹{fare.toll}</div>
          </div>

          <p className="mt-4 text-center text-xl font-bold text-green-600">
            Total: ₹{fare.total}
          </p>

          <RouteMap
            start={startCoords}
            end={endCoords}
            route={routeCoords}
          />
        </>
      )}
    </div>
  );
}
