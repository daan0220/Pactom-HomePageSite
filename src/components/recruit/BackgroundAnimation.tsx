import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimation: React.FC = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "rgba(255, 145, 77, 0.8)",
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default BackgroundAnimation;
