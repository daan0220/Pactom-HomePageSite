import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface InitialAnimationProps {
  onComplete: () => void; // アニメーション完了後に呼ばれるコールバック
}

const InitialAnimation: React.FC<InitialAnimationProps> = ({ onComplete }) => {
  useEffect(() => {
    // アニメーション終了後にコールバックを呼び出す
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // アニメーションの遅延と一致させる

    return () => clearTimeout(timer); // クリーンアップ
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
      {/* 背景の光の粒子アニメーション */}
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
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
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

      {/* メインのロゴアニメーション */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.h1
          style={{
            fontSize: "5rem",
            color: "#ff914d",
            textShadow: "0px 0px 30px rgba(255, 145, 77, 1)",
            fontFamily: "Arial, sans-serif",
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          Pactom
        </motion.h1>
        <motion.p
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            marginTop: "1rem",
            opacity: 0.8,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 1], y: [20, 0] }}
          transition={{
            delay: 1.5,
            duration: 2,
            ease: "easeOut",
          }}
        >
          Powering the Future of AI
        </motion.p>
      </motion.div>

      {/* フレアのエフェクト */}
      <motion.div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(255,145,77,0.5) 0%, rgba(0,0,0,0) 80%)",
          borderRadius: "50%",
          zIndex: 5,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 2],
          opacity: [0.5, 0.3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.div>
  );
};

export default InitialAnimation;
