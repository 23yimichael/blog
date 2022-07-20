import { motion } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const variants = {
  initial: { opacity: 0, x: 0, y: 25 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 25 },
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, type: "easeInOut" }}
        style={{ position: "relative" }}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
