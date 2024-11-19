import React from "react";
import { motion } from "framer-motion";

const MVV: React.FC = () => {
  return (
    <div>
      {/* Mission セクション */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          marginBottom: "100px",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#ff914d",
            textShadow: "0px 0px 20px rgba(255, 145, 77, 1)",
          }}
        >
          Mission
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.8",
            color: "#eaeaea",
            marginLeft: "20px",
          }}
        >
          私たちはAI技術を活用し、企業の未来をデジタルで進化させることを目指します。
        </p>
      </motion.div>

      {/* Vision セクション */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          marginBottom: "100px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#ff914d",
            textShadow: "0px 0px 20px rgba(255, 145, 77, 1)",
          }}
        >
          Vision
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.8",
            color: "#eaeaea",
            marginTop: "20px",
          }}
        >
          誰もが簡単に利用できる生成AIを提供し、新たな価値を創出します。
        </p>
      </motion.div>

      {/* Value セクション */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          marginBottom: "100px",
          textAlign: "right",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#ff914d",
            textShadow: "0px 0px 20px rgba(255, 145, 77, 1)",
          }}
        >
          Value
        </h1>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "20px",
            fontSize: "1.5rem",
            lineHeight: "2",
            color: "#eaeaea",
          }}
        >
          <li>
            
            クライアントとの強固なパートナーシップを構築。
          </li>
          <li>
            
            先進的な技術を用いたソリューション提供。
          </li>
          <li>
            社会とともに成長し、持続可能な未来を追求。
          </li>
        </ul>
      </motion.div>

      {/* 背景に動的な円のエフェクト */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
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

export default MVV;
