import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import CEOImage from "../../Images/IMG_6839.jpg";

const MemberProfile: React.FC = () => {
  const members = [
    {
      role: "代表取締役CEO",
      name: "Ando Daiki",
      description:
        "学生時代にサッカーでドイツに渡り帰国後、複数の会社でエンジニアとして活躍。その後、エンジニアでも営業ができる社会を創りたい思いからPactomを創業",
      image: CEOImage,
    },
    {
      role: "最高技術責任者CTO",
      name: "Kengo Handa",
      description:
        "9歳からプログラミングを始め、累計約50個のアプリを開発。その後豪州のトップ大学に進学し、在学中に京都大学に留学。日本のハッカソンで多数入賞経験あり。",
      image: "https://via.placeholder.com/150", 
    },
    // {
    //   role: "リードエンジニア",
    //   name: "Syota",
    //   description:
    //     "9歳からプログラミングを始め、累計約50個のアプリを開発。その後豪州のトップ大学に進学し、在学中に京都大学に留学。日本のハッカソンで多数入賞経験あり。",
    //   image: "https://via.placeholder.com/150", 
    // },
    // {
    //   role: "リードエンジニア",
    //   name: "Kizuku",
    //   description:
    //     "9歳からプログラミングを始め、累計約50個のアプリを開発。その後豪州のトップ大学に進学し、在学中に京都大学に留学。日本のハッカソンで多数入賞経験あり。",
    //   image: "https://via.placeholder.com/150", 
    // },
  ];

  return (
    <div
      style={{
        padding: "50px",
        color: "#fff",
      }}
    >
      <h1
        className="text-center mb-4"
        style={{
          fontSize: "3rem",
          textShadow: "0px 4px 6px rgba(255, 145, 77, 0.6)", 
        }}
      >
        Member
      </h1>
      <Row xs={1} md={3} className="g-4 justify-content-center">
        {members.map((member, index) => (
          <Col key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255, 145, 77, 0.8)", 
              }}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
              }}
            >
              <motion.img
                src={member.image}
                alt={`${member.name}の写真`}
                className="rounded-circle mb-3"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "4px solid #ff914d", 
                }}
                whileHover={{ rotate: 360, transition: { duration: 1 } }}
              />
              <motion.h5
                className="mb-1"
                style={{
                  fontSize: "1.5rem",
                  color: "#ff914d", 
                  textShadow: "0px 2px 4px rgba(255, 145, 77, 0.5)", 
                }}
              >
                {member.role}
              </motion.h5>
              <motion.h6
                style={{
                  fontSize: "1.2rem",
                  margin: "10px 0",
                  color: "#ffffff",
                  fontWeight: "lighter",
                  textShadow: "0px 2px 4px rgba(255, 255, 255, 0.5)",
                }}
              >
                {member.name}
              </motion.h6>
              <motion.p
                className="text-muted"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#ffffff",
                  textShadow: "0px 1px 3px rgba(255, 255, 255, 0.3)",
                }}
              >
                {member.description}
              </motion.p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MemberProfile;
