import { motion } from "framer-motion";

export default function SearchBar({ setSearch }) {
  return (
    <motion.input
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      type="text"
      placeholder="🔍 Search source or destination"
      className="w-full p-4 mb-6 rounded-xl shadow-md border focus:ring-2 focus:ring-yellow-400 outline-none"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
