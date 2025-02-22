import { motion } from "framer-motion";

export function LogoAnimation({ children }){
  return (
    <motion.div
      whileHover={{ scale: 1.2 }} // Aumenta 10% ao passar o mouse
      whileTap={{ scale: 0.95 }} // Dá um pequeno efeito de clique
      transition={{ duration: 0.3, ease: "easeOut" }} // Transição suave
      className="p-6 bg-blue-500 text-white text-center rounded-lg shadow-lg cursor-pointer"
    >
      {children}
    </motion.div>
  );
};