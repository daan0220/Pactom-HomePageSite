import React from "react";
import { motion } from "framer-motion";

const CompanyDescription: React.FC = () => {
  const items = [
    {
      icon: "fas fa-map-marker-alt",
      label: "所在地",
      value: "東京都新宿区西新宿",
    },
    {
      icon: "fas fa-briefcase",
      label: "事業内容",
      value: "ソフトウェアデモプラットフォームの開発・運営、SaaS企業の成長支援、AI・DXコンサルティング",
    },
    {
      icon: "fas fa-users",
      label: "メンバー数",
      value: "14名（業務委託含む）",
    },
    {
      icon: "fas fa-calendar-alt",
      label: "設立",
      value: "2024年11月19日",
    },
  ];

  return (
    <div
      style={{
        borderRadius: "20px",
        padding: "50px",
        color: "#fff",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <motion.h1
        className="text-center mb-4"
        style={{
          fontSize: "3rem",
          textShadow: "0px 4px 6px rgba(255, 145, 77, 0.6)", 
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Company overview
      </motion.h1>
      <div>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="d-flex align-items-start mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            style={{
              padding: "10px 0",
              borderBottom: index !== items.length - 1 ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
            }}
          >
            <i
              className={`${item.icon}`}
              style={{
                fontSize: "1.8rem",
                color: "#ff914d",
                marginRight: "15px",
              }}
            ></i>
            <div>
  <h4
    style={{
      fontSize: "1.2rem",
      color: "#ff914d",
      marginBottom: "5px",
      textAlign: "left",
    }}
  >
    {item.label}
  </h4>
  <p
    style={{
      fontSize: "1rem",
      color: "#fff",
      margin: 0,
      lineHeight: "1.6",
      textAlign: "left", 
    }}
  >
    {item.value}
  </p>
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDescription;
