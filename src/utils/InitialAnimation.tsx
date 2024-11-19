import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface InitialAnimationProps {
  onComplete: () => void; // アニメーション完了後に呼ばれるコールバック
}

const InitialAnimation: React.FC<InitialAnimationProps> = ({ onComplete }) => {
  const letters = "Pactom".split(""); 

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle, #000 20%, #111 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 1000,
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 4.8 }}
    >
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "rgba(255, 145, 77, 0.8)",
          }}
          initial={{
            top: `${Math.random() * 150 - 50}vh`, 
            left: `${Math.random() * 150 - 50}vw`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            style={{
              fontSize: "5rem",
              color: "#ff914d",
              fontWeight: "bold",
              textShadow: "0px 0px 30px rgba(255, 145, 77, 0.8)",
              position: "relative",
              display: "inline-block",
              margin: "0 5px", 
            }}
            initial={{
              x: `${Math.random() * 800 - 400}px`, 
              y: `${Math.random() * 800 - 400}px`,
              opacity: 0,
            }}
            animate={{
              x: 0, 
              y: 0, 
              opacity: 1,
              transition: {
                delay: index * 0.3, 
                duration: 1.2,
                ease: "easeOut",
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default InitialAnimation;
