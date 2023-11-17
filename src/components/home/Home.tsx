import { Button, Card} from "react-bootstrap";

import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import FrontendChart from "./FrontendChart";
import BackendChart from "./BackendChart";
import Footer from "../Footer";
import ServiseImg from "../../Images/スクリーンショット 2023-11-16 11.32.23.png";
import { Link } from 'react-router-dom';

const Home = () => {

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
            <div className="scroll-indicator">
                <p>Scroll down for more</p>
            </div>
          </div>
          <section className="page-section" id="services">
            <div className="service">
              <div className="text-center">
                <h1 className="section-heading text-uppercase">SERVICE</h1>
              </div>
              <div className="row text-center">
                <div className="col-md-6 offset-md-3">
                <img src={ServiseImg} className="" alt="" />
                  <h4 className="my-3"></h4>
                  <Link to="https://github.com/daan0220/rails-ecsite">
                    <Button variant="link">詳細はこちらをクリック</Button>
                  </Link>
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
            <div className="col-md-6 d-flex justify-content-center">
                <Card style={{ width: '27rem', height: '27rem', padding: '1rem', margin: '1rem' }}>
                <FrontendChart />
                </Card>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <Card style={{ width: '27rem', height: '27rem', padding: '1rem', margin: '1rem' }}>
                  <BackendChart />
                </Card>
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
