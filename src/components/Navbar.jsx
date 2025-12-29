import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/trips", label: "Trips" },
    { path: "/about", label: "About" },
    { path: "/farecalculator", label: "Fare Calculator" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🚍 <span className="text-yellow-400">Sukruth Holidays</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="hover:text-yellow-400 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-800 px-4 pb-4 space-y-3"
        >
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-base hover:text-yellow-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
