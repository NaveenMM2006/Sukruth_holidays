import { useState } from "react";
import trips from "../data/trips";
import TripCard from "../components/TripCard";
import TripDetailsModal from "../components/TripDetailsModal";
import SearchBar from "../components/SearchBar";


export default function Trips() {
  const [search, setSearch] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);

  const filteredTrips = trips.filter(trip =>
    trip.source.toLowerCase().includes(search.toLowerCase()) ||
    trip.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">🚐 Trip Packages</h1>

      <SearchBar setSearch={setSearch} />

      <div className="grid md:grid-cols-3 gap-6">
        {filteredTrips.map(trip => (
          <TripCard
            key={trip.id}
            trip={trip}
            onView={setSelectedTrip}
          />
        ))}
      </div>

      <TripDetailsModal
        trip={selectedTrip}
        onClose={() => setSelectedTrip(null)}
      />


      
    </div>

    
  );
}
