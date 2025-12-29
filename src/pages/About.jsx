// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* HERO SECTION */}
//       <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-5xl mx-auto text-center px-6"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
//             About Sukruth Holidays
//           </h1>
//           <p className="mt-6 text-lg text-gray-300">
//             Driven by passion, powered by comfort — your trusted road travel partner.
//           </p>
//         </motion.div>

//         {/* Road */}
//         <div className="absolute bottom-8 w-full h-3 bg-gray-700">
//           <div className="h-full border-t-2 border-dashed border-yellow-400"></div>
//         </div>

//         {/* Moving Vehicle */}
//         <motion.div
//           initial={{ x: "-10%" }}
//           animate={{ x: "110%" }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-10 text-4xl"
//         >
//           🚍
//         </motion.div>
//       </div>

//       {/* WHO WE ARE */}
//       <div className="py-16 px-6 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-2xl shadow-xl p-10"
//         >
//           <h2 className="text-3xl font-bold text-slate-900">
//             Who We Are
//           </h2>
//           <p className="mt-4 text-gray-600 leading-relaxed">
//             Sukruth Holidays is a professional travel agency specializing in
//             road-based travel experiences across India. From comfortable tourist
//             vehicles to customized holiday packages, we ensure every journey
//             is safe, smooth, and memorable.
//           </p>
//         </motion.div>
//       </div>

//       {/* OUR JOURNEY */}
//       <div className="bg-white py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
//             Our Journey
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 year: "2018",
//                 text: "Started with a single tourist vehicle and a vision."
//               },
//               {
//                 year: "2020",
//                 text: "Expanded to multi-state travel routes and group tours."
//               },
//               {
//                 year: "2024",
//                 text: "Trusted by 1200+ happy customers across India."
//               }
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 className="bg-gray-100 p-8 rounded-2xl shadow-md text-center"
//               >
//                 <h3 className="text-2xl font-bold text-yellow-500">
//                   {item.year}
//                 </h3>
//                 <p className="mt-4 text-gray-600">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* WHY CHOOSE US */}
//       <div className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
//             Why Choose Sukruth Holidays?
//           </h2>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               "🚐 Well Maintained Vehicles",
//               "🛣 Experienced Drivers",
//               "⏱ On-Time Service",
//               "⭐ Customer Satisfaction"
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-xl shadow-lg text-center"
//               >
//                 <p className="text-lg font-semibold">{item}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="bg-yellow-400 py-14 text-center"
//       >
//         <h2 className="text-3xl font-bold">
//           Travel With Confidence
//         </h2>
//         <p className="mt-2 text-lg">
//           Join thousands of happy travelers who trust Sukruth Holidays.
//         </p>
//       </motion.div>

//     </div>
//   );
// }


import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">
            About Sukruth Holidays
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-300">
            Reliable road travel solutions built on comfort, safety, and trust.
          </p>
        </motion.div>

        {/* Road */}
        <div className="absolute bottom-6 md:bottom-8 w-full h-2 md:h-3 bg-gray-700">
          <div className="h-full border-t-2 border-dashed border-yellow-400"></div>
        </div>

        {/* Vehicle */}
        <motion.div
          initial={{ x: "-20%" }}
          animate={{ x: "110%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 md:bottom-10 text-3xl sm:text-4xl md:text-4xl"
        >
          🚍
        </motion.div>
      </div>

      {/* WHO WE ARE */}
      <div className="py-12 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            Sukruth Holidays is a professional travel agency specializing in
            vehicle-based travel services across India. We offer tourist buses,
            tempo travellers, and customized road trip packages with a strong
            focus on safety, punctuality, and comfort.
          </p>
        </motion.div>
      </div>

      {/* JOURNEY */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12">
            Our Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { year: "2018", text: "Founded with a small fleet and a big vision." },
              { year: "2020", text: "Expanded services across multiple states." },
              { year: "2024", text: "Trusted by 1200+ satisfied customers." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-500">
                  {item.year}
                </h3>
                <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY US */}
      <div className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-900">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "🚐 Well-Maintained Vehicles",
              "🛣 Experienced Drivers",
              "⏱ On-Time Service",
              "🤝 Customer Trust"
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center"
              >
                <p className="text-base sm:text-lg font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-yellow-400 py-10 md:py-14 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900">
          Travel With Confidence
        </h2>
        <p className="mt-2 text-base sm:text-lg">
          Your journey deserves the right vehicle and the right partner.
        </p>
      </div>

    </div>
  );
}
