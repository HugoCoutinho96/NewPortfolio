import { motion } from "framer-motion";

export function AboutMeAnimation({ children }){
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} 
      className="p-6 bg-gray-200 rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      {children}
    </motion.div>
  );
};
