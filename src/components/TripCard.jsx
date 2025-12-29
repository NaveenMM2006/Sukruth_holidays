import { motion } from "framer-motion";

export default function TripCard({ trip, onView }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <img
        src={trip.image}
        alt={trip.destination}
        className="h-48 w-full object-cover"
      />

      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold">
          {trip.source} → {trip.destination}
        </h2>

        <p className="text-gray-600">📅 {trip.days}</p>
        <p className="text-green-600 font-bold">{trip.price}</p>

        <button
          onClick={() => onView(trip)}
          className="mt-3 w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg transition"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
