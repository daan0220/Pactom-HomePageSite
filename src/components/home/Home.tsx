import React, { useState } from "react";
import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import InitialAnimation from "../../utils/InitialAnimation"; 
import BusinessDetails from "../businessDetails/BusinessDetails";
import PortFolio from "../portfolio/PortFolio";
import MemberProfile from "../memberProfile/MemberProfile";
import CompanyDescliption from "../companyDescliption/CompanyDescliption";
import Footer from "../Footer";

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
              <h1>Pactom</h1>
              <div className="scroll-indicator">
                <p>Scroll down for more</p>
              </div>
            </div>
            <PortFolio />
            <BusinessDetails />
            <MemberProfile />
            <CompanyDescliption />
            <Footer />
          </motion.div>
        )}
      </InitialTransition>
    </motion.section>
  );
};

export default Home;
