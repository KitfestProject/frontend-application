// BounceAnimation.js
import React from "react";
import { motion } from "framer-motion";

const bounceTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeOut",
};

const BounceAnimation = ({ children, loading }) => {
  return (
    <motion.div
      animate={loading ? { y: ["0%", "-30%"] } : { y: "0%" }}
      transition={loading ? bounceTransition : { duration: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default BounceAnimation;
