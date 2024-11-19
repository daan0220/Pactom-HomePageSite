import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InitialTransition from "../../utils/InitialTransition";
import InitialAnimation from "../../utils/InitialAnimation";
import BusinessDetails from "../businessDetails/BusinessDetails";
import Portfolio from "../portfolio/Portfolio";
import MemberProfile from "../memberProfile/MemberProfile";
import CompanyDescliption from "../companyDescliption/CompanyDescliption";
import Footer from "../Footer";

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      style={{
        marginBottom: "100px",
      }}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <motion.section exit={{ opacity: 0 }}>
      <InitialTransition>
        {!showContent && <InitialAnimation onComplete={() => setShowContent(true)} />}
        {showContent && (
          <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-info">
              <h1
                style={{
                  fontSize: "3rem",
                  color: "#ff914d",
                  textShadow: "0px 4px 6px rgba(255, 145, 77, 0.8)",
                }}
              >
                Pactom
              </h1>
              <div className="scroll-indicator">
                <p style={{ fontSize: "1.2rem", color: "#fff" }}>Scroll down for more</p>
              </div>
            </div>

            <AnimatedSection>
              <Portfolio />
            </AnimatedSection>

            <AnimatedSection>
              <BusinessDetails />
            </AnimatedSection>

            <AnimatedSection>
              <MemberProfile />
            </AnimatedSection>

            <AnimatedSection>
              <CompanyDescliption />
            </AnimatedSection>

            <Footer />
          </motion.div>
        )}
      </InitialTransition>
    </motion.section>
  );
};

export default Home;
