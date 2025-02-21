import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Cards({children}){
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorre apenas uma vez
    threshold: 0.5, // Aciona quando 50% do elemento estiver visível
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-md mx-auto p-6 bg-blue-500 text-white text-center rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};
