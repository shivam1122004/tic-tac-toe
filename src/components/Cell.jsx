import { motion } from "framer-motion";

const Cell = ({ value, onClick, disabled, winner }) => (
  <motion.div
    whileHover={!disabled ? { scale: 1.1 } : {}}
    whileTap={!disabled ? { scale: 0.9 } : {}}
    className={`w-20 h-20 flex items-center justify-center bg-white border-2 border-gray-300 text-2xl font-bold ${
      disabled ? "cursor-not-allowed" : "cursor-pointer"
    } ${winner ? "bg-green-300 animate-pulse" : ""}`} // Highlight winning cells
    {...(!disabled && { onClick })}
    animate={{ opacity: value ? 1 : 0.8 }}
    transition={{ duration: 0.3 }}
  >
    {value && (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {value}
      </motion.span>
    )}
  </motion.div>
);

export default Cell;
