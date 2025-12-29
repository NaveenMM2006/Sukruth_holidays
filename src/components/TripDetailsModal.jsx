import { motion } from "framer-motion";

export default function TripDetailsModal({ trip, onClose }) {
  if (!trip) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-xl max-w-xl sm:max-w-2xl w-full p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 right-3 sm:right-4 text-xl font-bold"
        >
          ✕
        </button>

        <img
          src={trip.image}
          alt={trip.destination}
          className="h-40 sm:h-56 w-full object-cover rounded-xl"
        />

        <h2 className="text-xl sm:text-2xl font-bold mt-4 text-slate-900">
          {trip.source} → {trip.destination}
        </h2>

        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          📅 {trip.days} | 👥 {trip.people}
        </p>

        <p className="mt-2 font-bold text-green-600 text-sm sm:text-base">
          💰 {trip.price}
        </p>

        {/* Route */}
        <div className="mt-4">
          <h3 className="text-base sm:text-lg font-semibold">🛣 Travel Route</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2 text-sm sm:text-base">
            {trip.route.map((place, i) => (
              <li key={i}>{place}</li>
            ))}
          </ul>
        </div>

        {/* Places */}
        <div className="mt-4">
          <h3 className="text-base sm:text-lg font-semibold">📍 On the Way Places</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2 text-sm sm:text-base">
            {trip.places.map((place, i) => (
              <li key={i}>{place}</li>
            ))}
          </ul>
        </div>

        {/* Call Button */}
        <a
          href="tel:+918861115739"
          className="block mt-6 w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition text-sm sm:text-base"
        >
          📞 Call to Book
        </a>
      </motion.div>
    </div>
  );
}
