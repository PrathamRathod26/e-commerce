import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }} // start below
      animate={{ y: 0, opacity: 1 }} // move into place
      exit={{ y: "-50%", opacity: 0 }} // slide out upwards
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
