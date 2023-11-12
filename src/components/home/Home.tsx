import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import FrontendChart from "./FrontendChart";
import BackendChart from "./BackendChart";
import profileImage from "../../Images/IMG_6211 2.jpg";
import Footer from "../Footer";

const Home = () => {
  function onClickHandleD() {
    window.open("https://main.d38flg0ys61q9z.amplifyapp.com");
  }

  return (
    <motion.section exit={{ opacity: 0 }}>
      <InitialTransition>
        <motion.div
          className="container text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="profile-info">
            <h1>DAIKI ANDO</h1>
            <img src={profileImage} className="profileImage" alt="Profile" />
          </div>
          <section className="page-section" id="services">
            <div className="service">
              <div className="text-center">
                <h1 className="section-heading text-uppercase">SERVICE</h1>
              </div>
              <div className="row text-center">
                <div className="col-md-6 offset-md-3">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h2>現在開発中のためクロージング中です</h2>
                  <h4 className="my-3"></h4>
                  <Button variant="link" onClick={onClickHandleD}>
                    詳細はこちらをクリック
                  </Button>
                  <p className="text-muted">
                    
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="skill">
            <div className="text-center">
              <h1 className="section-heading text-uppercase">Skills</h1>
            </div>
            <div className="charts-container row">
              <div className="col-md-6">
                <FrontendChart />
              </div>
              <div className="col-md-6">
                <BackendChart />
              </div>
              <div className="col-md-6 chart-text">
                <ul>
                  <li>1: 独学・授業程度</li>
                  <li>2: ある程度書ける</li>
                  <li>3: イベント・ハッカソン</li>
                  <li>4: 実務で使用経験あり</li>
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </motion.div>
      </InitialTransition>
    </motion.section>
  );
};

export default Home;
