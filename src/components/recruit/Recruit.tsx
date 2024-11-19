import React from "react";
import EngineerRecruit from "./EngineerRecruit";
import SalesRecruit from "./SalesRecruit";
import BackgroundAnimation from "./BackgroundAnimation";

const Recruit: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "150px 20px 50px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* 背景アニメーション */}
      <BackgroundAnimation />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#ff914d",
            marginBottom: "50px",
            textShadow: "0px 0px 20px rgba(255, 145, 77, 1)",
          }}
        >
          Recruit
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "100px",
            color: "#eaeaea",
          }}
        >
          私たちのチームに参加しませんか？未来を共に創造する仲間を募集しています。
        </p>
        <EngineerRecruit />
        <SalesRecruit />
      </div>
    </div>
  );
};

export default Recruit;
