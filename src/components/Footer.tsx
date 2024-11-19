import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSecVhF2_O_QRAi9vF6Enxd9XRr2TUKHAJiABYYcFRkl3hrA0g/viewform?usp=sf_link",
      "_blank"
    );
  };

  return (
    <footer
      style={{
        padding: "30px 20px 10px", // 上の余白を抑え、下の空白を縮小
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* About Us */}
        <div style={{ flex: "1 1 300px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "15px",
              color: "#ff914d",
              textShadow: "0px 2px 6px rgba(255, 145, 77, 0.6)",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#eaeaea",
            }}
          >
            Pactomへようこそ。イノベーションと卓越性が交わる場所です。
            私たちはIT業界で先進的なソリューションを提供する情熱的なチームです。
          </p>
        </div>

        {/* Contact Us */}
        <div style={{ flex: "1 1 300px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "15px",
              color: "#ff914d",
              textShadow: "0px 2px 6px rgba(255, 145, 77, 0.6)",
            }}
          >
            Contact Us
          </h2>
          <p style={{ fontSize: "1rem", color: "#eaeaea" }}>
            Email: daikiandoda@pactom.jp
          </p>
          <p style={{ fontSize: "1rem", color: "#eaeaea" }}>
            Phone: 080-9370-2122
          </p>
          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "#ff914d", cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              style={{ color: "#ff914d", cursor: "pointer" }}
              onClick={() => window.open("https://www.twitter.com/", "_blank")}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: "#ff914d", cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.facebook.com/", "_blank")
              }
            />
          </div>
          <Button
            onClick={openGoogleForm}
            style={{
              marginTop: "20px",
              backgroundColor: "#ff914d",
              border: "none",
              padding: "10px 20px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Open Google Form
          </Button>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 300px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "15px",
              color: "#ff914d",
              textShadow: "0px 2px 6px rgba(255, 145, 77, 0.6)",
            }}
          >
            Quick Links
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="/"
                style={{
                  color: "#eaeaea",
                  textDecoration: "none",
                  fontSize: "1rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#eaeaea")}
              >
                Home
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="/about"
                style={{
                  color: "#eaeaea",
                  textDecoration: "none",
                  fontSize: "1rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#eaeaea")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/service"
                style={{
                  color: "#eaeaea",
                  textDecoration: "none",
                  fontSize: "1rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff914d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#eaeaea")}
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <FontAwesomeIcon
          icon={faArrowUp}
          size="2x"
          style={{
            color: "#ff914d",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          onClick={scrollToTop}
        />
        <p style={{ color: "#eaeaea", fontSize: "0.9rem", margin: "10px 0" }}>
          &copy; 2024 Pactom All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
