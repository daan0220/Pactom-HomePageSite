import React from "react";
import MVV from "./MVV";
import MessageFromCEO from "./MessageFromCEO";
import Partnerships from "./Partnerships";
import DynamicLines from "./DynamicLines";

const About: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "150px 20px 50px", 
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      <DynamicLines />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <MVV />
        <MessageFromCEO />
        <Partnerships />
      </div>
    </div>
  );
};

export default About;
