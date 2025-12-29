import { useState } from "react";
import trips from "../data/trips";
import TripCard from "../components/TripCard";
import TripDetailsModal from "../components/TripDetailsModal";
import SearchBar from "../components/SearchBar";

export default function Trips() {
  const [search, setSearch] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);

  const filteredTrips = trips.filter(
    (trip) =>
      trip.source.toLowerCase().includes(search.toLowerCase()) ||
      trip.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        🚐 Trip Packages
      </h1>

      {/* Search */}
      <div className="mb-6">
        <SearchBar setSearch={setSearch} />
      </div>

      {/* Trip Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} onView={setSelectedTrip} />
        ))}
      </div>

      {/* Trip Modal */}
      <TripDetailsModal
        trip={selectedTrip}
        onClose={() => setSelectedTrip(null)}
      />
    </div>
  );
}
