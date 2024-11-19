import React from "react";
import { motion } from "framer-motion";
import DynamicLines from "./DynamicLines"; 

const Partnerships: React.FC = () => {
  const partners = ["Google", "Microsoft", "AWS"]; 

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "#ff914d",
            textShadow: "0px 0px 15px rgba(255, 145, 77, 0.8)",
            marginBottom: "20px",
          }}
        >
          Partnerships
        </h2>
      </motion.div>

      {/* パートナーリスト */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              textShadow: "0px 0px 10px rgba(255, 145, 77, 0.8)",
            }}
            style={{
              fontSize: "2rem",
              color: "#eaeaea",
              background:
                "linear-gradient(135deg, rgba(255,145,77,0.2), rgba(255,145,77,0.1))",
              padding: "15px 30px",
              borderRadius: "30px",
              boxShadow: "0px 0px 15px rgba(255, 145, 77, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {partner}
          </motion.div>
        ))}
      </div>

      {/* 背景に動的な円のエフェクト */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            background: "radial-gradient(circle, rgba(255,145,77,0.3) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
          }}
          animate={{
            scale: [0.5, 1, 1.5],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default Partnerships;
