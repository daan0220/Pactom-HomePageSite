import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import FrontendChart from "./FrontendChart";
import BackendChart from "./BackendChart";
import Footer from "../Footer";
import ServiseImg from "../../Images/スクリーンショット 2023-11-21 8.34.25.png";
import matchImg from "../../Images/スクリーンショット 2023-11-21 8.51.16.png";
import DAOImg from "../../Images/スクリーンショット 2023-11-21 9.02.47.png";
import omniaappImg from "../../Images/スクリーンショット 2023-11-20 21.14.52.png";
import omniawebImg from "../../Images/スクリーンショット 2023-11-20 21.14.04.png";
import omniachromeImg from "../../Images/スクリーンショット 2023-11-20 21.15.51.png";
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';

const projects = [
  { 
    title: "Tech Match",
    image: matchImg,
    link: "https://github.com/daan0220/rails-ecsite"
  },
  { 
    title: "ECommerce",
    image: ServiseImg,
    link: "https://github.com/daan0220/rails-ecsite"
  },
  { 
    title: "J-leagueDAO",
    image: DAOImg,
    link: "https://github.com/shake551/fan-chain"
  },
  { 
    title: "Omnia Web",
    image: omniawebImg,
    link: "https://github.com/Marley-Mulvin-Broome/tech-translator/tree/master"
  },
  { 
    title: "Omnia App",
    image: omniaappImg,
    link: "https://github.com/Marley-Mulvin-Broome/tech-translator/tree/master"
  },
  { 
    title: "Omnia Chrome",
    image: omniachromeImg,
    link: "https://github.com/Marley-Mulvin-Broome/tech-translator/tree/master"
  },
];

const Home = () => {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const cardVariants = {
    rest: {
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

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
            <h1>Pactom</h1>
            <div className="scroll-indicator">
                <p>Scroll down for more</p>
            </div>
          </div>
          <section className="page-section" id="services">
            <div className="service">
              <div className="text-center">
                <h1 className="section-heading text-uppercase">SERVICE LIST</h1>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {projects.map((project, index) => (
              <Col key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="hover"
                  initial="rest"
                >
                  <Card className="h-100 shadow-sm">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <Card.Img variant="top" src={project.image} className="card-img-top" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title style={{ color: "black" }}>{project.title}</Card.Title>
                      <Button variant="outline-dark" className="mt-auto">
                      <Link to={project.link} className="stretched-link"/>
                        詳細はこちら <i className="fas fa-arrow-circle-right ms-1"></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
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
                  <li data-number="1">独学・授業程度</li>
                  <li data-number="2">ある程度書ける</li>
                  <li data-number="3">イベント・ハッカソン</li>
                  <li data-number="4">実務で使用経験あり</li>
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
