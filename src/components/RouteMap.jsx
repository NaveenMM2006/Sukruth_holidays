import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

export default function RouteMap({ start, end, route }) {
  if (!start || !end) return null;

  return (
    <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[start.lat, start.lon]}
        zoom={7}
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[start.lat, start.lon]} />
        <Marker position={[end.lat, end.lon]} />

        {route && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
}
