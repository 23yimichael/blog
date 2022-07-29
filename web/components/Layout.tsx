import { motion } from "framer-motion";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { variants } from "../utils/constants";

interface Props {
  children: React.ReactNode;
}

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
        className="min-h-screen"
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
