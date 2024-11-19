import React from "react";
import { motion } from "framer-motion";

const DynamicLines: React.FC = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "2px",
            height: "150vh", // 高さを延長
            background: "rgba(255, 145, 77, 0.5)",
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1, 1.2],
            x: Math.random() * 50 - 25, // 左右への微動
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default DynamicLines;
