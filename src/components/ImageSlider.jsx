import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1616606484004-5ef3cc46e39d?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFtcGl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1701430662581-fbda7edaa84a?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1702398460766-df7410e5e4a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVydWRlc2h3YXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1693139984941-f795cb5391ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVydWRlc2h3YXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VkYXJuYXRofGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1707194008324-ef357d453723?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVkaHNhZ2FyJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1066326260/photo/paradise-at-porto-moniz.webp?a=1&b=1&s=612x612&w=0&k=20&c=aF8f2T7iF7xk1k9-VzBlVFM4YFOuwexgbktLP81xbG0="
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <div className="aspect-[16/9] w-full relative">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 text-center">
            Explore India by Road 🚐
          </h1>
        </div>
      </div>
    </div>
  );
}
