import React from "react";
import { motion } from "framer-motion";
import CEOImage from "../../Images/IMG_6839.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MessageFromCEO: React.FC = () => {
  return (
    <div>
      {/* CEOメッセージ全体 */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        {/* CEOの画像と名前 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={CEOImage} 
            alt="CEO"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 0 30px rgba(255, 145, 77, 0.9)",
              marginBottom: "20px",
            }}
          />
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#fff",
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
              marginBottom: "10px",
            }}
          >
            安藤太紀 / Ando Daiki
          </h3>
          {/* SNSアイコン */}
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <a
              href="https://github.com/daan0220"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ transition: "color 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              />
            </a>
            <a
              href="https://x.com/andodaiki2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2x"
                style={{ transition: "color 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100011448557801"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                style={{ transition: "color 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/daiki-ando-207a112a1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ transition: "color 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              />
            </a>
          </div>
        </motion.div>

        {/* メッセージテキスト */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: "2",
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
            Message from the CEO
          </h2>
          <motion.p
            style={{
              fontSize: "1.5rem",
              lineHeight: "2",
              color: "#eaeaea",
              position: "relative",
              padding: "20px",
              background: "linear-gradient(135deg, rgba(255,145,77,0.2), rgba(255,145,77,0.1))",
              borderRadius: "15px",
              textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
              boxShadow: "0px 0px 20px rgba(255, 145, 77, 0.3)",
              transform: "rotate(-1deg)",
            }}
            animate={{
              rotate: [0, -1, 1, 0],
              transition: { repeat: Infinity, duration: 8 },
            }}
          >
            私たちは、技術の力で企業や社会に革新をもたらすことを信じています。
            未来をデジタルで進化させ、すべての人が恩恵を享受できる社会を目指しています。
            <br />
            <br />
            皆様とともに未来を創造することを楽しみにしています。
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default MessageFromCEO;
