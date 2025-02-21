import { motion } from "framer-motion";

export function ImageAnimation({ children }){
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Começa menor e invisível
      whileInView={{ scale: 1, opacity: 1 }} // Cresce até o tamanho original
      transition={{ duration: 0.8, ease: "easeOut" }} // Suaviza a transição
      viewport={{ once: true, amount: 0.2 }} // Anima quando 20% estiver visível
      className="overflow-hidden flex justify-center"
    >
      {children}
    </motion.div>
  );
};