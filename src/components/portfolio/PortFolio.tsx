import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import Footer from "../Footer";
import '@fortawesome/fontawesome-free/css/all.css'; 
import ServiseImg from "../../Images/スクリーンショット 2023-11-21 8.34.25.png";
import matchImg from "../../Images/スクリーンショット 2023-11-21 8.51.16.png";
import DAOImg from "../../Images/スクリーンショット 2023-11-21 9.02.47.png";
import omniaappImg from "../../Images/スクリーンショット 2023-11-20 21.14.52.png";
import omniawebImg from "../../Images/スクリーンショット 2023-11-20 21.14.04.png";
import omniachromeImg from "../../Images/スクリーンショット 2023-11-20 21.15.51.png";
import PactomDeMoImg from "../../Images/スクリーンショット 2024-11-18 13.35.08.png";
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';

const projects = [
  { 
    title: "Pactom DeMo",
    image: PactomDeMoImg,
    link: ""
  },
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

const Portfolio: React.FC = () => {
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
    <InitialTransition>
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <section id="service">
          <div className="text-center">
            <h1
              className="text-center mb-4"
              style={{
                fontSize: "3rem",
                textShadow: "0px 4px 6px rgba(255, 145, 77, 0.6)", 
              }}
            >
              Portfolio
            </h1>
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
                        <Card.Img
                          variant="top"
                          src={project.image}
                          className="card-img-top"
                          style={{ objectFit: "cover", height: "100%", width: "100%" }}
                        />
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <Card.Title style={{ color: "black" }}>
                          {project.title}
                        </Card.Title>
                        <Button variant="outline-dark" className="mt-auto">
                          詳細はこちら <i className="fas fa-arrow-circle-right ms-1"></i>
                          <Link to={project.link} className="stretched-link"></Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </motion.div>
    </InitialTransition>
  );
};

export default Portfolio;
