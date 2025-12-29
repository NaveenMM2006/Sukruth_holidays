import ImageSlider from "../components/ImageSlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="bg-gray-100">
      
      {/* HERO SLIDER */}
      <ImageSlider />

      {/* ROAD + VEHICLE SECTION */}
      <div className="relative bg-slate-900 text-white py-20 overflow-hidden">

        {/* Road */}
        <div className="absolute bottom-10 w-full h-4 bg-gray-700">
          <div className="h-full border-t-2 border-dashed border-yellow-400"></div>
        </div>

        {/* Moving Vehicle */}
        <motion.div
          initial={{ x: "-20%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 text-5xl"
        >
          🚐
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Travel by Road, Travel with Comfort
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Premium buses, tourist vehicles & customized holiday packages
            across India.
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <Link
              to="/trips"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
            >
              View Trips
            </Link>

            <Link
              to="/contact"
              className="border border-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* STATS SECTION */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          {[
            { label: "Trips Completed", value: "250+" },
            { label: "Vehicles Available", value: "40+" },
            { label: "Happy Customers", value: "1200+" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-100 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-4xl font-bold text-slate-900">
                {item.value}
              </h2>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-yellow-400 py-14 text-center"
      >
        <h2 className="text-3xl font-bold">
          Ready for Your Next Journey?
        </h2>
        <p className="mt-2 text-lg">
          Book your road trip with Sukruth Holidays today!
        </p>

        <Link
          to="/trips"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          Explore Packages
        </Link>
      </motion.div>

    </div>
  );
}
