import { motion } from "framer-motion";

export default function TripCard({ trip, onView }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden w-full"
    >
      <img
        src={trip.image}
        alt={trip.destination}
        className="h-40 sm:h-44 md:h-48 w-full object-cover"
      />

      <div className="p-4 sm:p-5 space-y-2">
        <h2 className="text-lg sm:text-xl font-bold">
          {trip.source} → {trip.destination}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base">📅 {trip.days}</p>
        <p className="text-green-600 font-bold text-sm sm:text-base">{trip.price}</p>

        <button
          onClick={() => onView(trip)}
          className="mt-3 w-full bg-slate-900 hover:bg-slate-800 text-white py-2 sm:py-3 rounded-lg transition text-sm sm:text-base"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
