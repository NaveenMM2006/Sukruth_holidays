import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg"
    >
      <div className="text-2xl font-bold flex items-center gap-2">
        🚍 <span className="text-yellow-400">Sukruth Holidays</span>
      </div>

      <div className="space-x-6 text-lg">
        {["/", "/trips", "/about","/farecalculator" ,"/contact"].map((path, i) => (
          <Link
            key={i}
            to={path}
            className="hover:text-yellow-400 transition duration-300"
          >
            {["Home", "Trips", "About","FareCalculator", "Contact"][i]}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
