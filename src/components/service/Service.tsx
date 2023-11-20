import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import Footer from "../Footer";
import '@fortawesome/fontawesome-free/css/all.css'; 
import ServiseImg from "../../Images/スクリーンショット 2023-11-16 11.32.23.png";
import matchImg from "../../Images/スクリーンショット 2023-11-20 17.09.47.png";
import DAOImg from "../../Images/スクリーンショット 2023-11-20 17.16.14.png";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <InitialTransition>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <section id="service">
          <div className="text-center">
            <h1>Tech Match</h1>
            <div className="row text-center">
                <div className="col-md-6 offset-md-3">
                <img src={matchImg} className="" alt="" />
                  <h4 className="my-3"></h4>
                  <Link to="https://github.com/daan0220/rails-ecsite">
                    <Button variant="link">詳細はこちらをクリック</Button>
                  </Link>
                  <p className="text-muted">
                    
                  </p>
                </div>
              </div>
            <h1>ECommerce</h1>
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
            <h1>J-leagueDAO</h1>
            <div className="row text-center">
                <div className="col-md-6 offset-md-3">
                <img src={DAOImg} className="" alt="" />
                  <h4 className="my-3"></h4>
                  <Link to="https://github.com/shake551/fan-chain">
                    <Button variant="link">詳細はこちらをクリック</Button>
                  </Link>
                  <p className="text-muted">
                    
                  </p>
                </div>
              </div>
            <Footer/>
          </div>
        </section>
      </motion.div>
    </InitialTransition>
  );
};

export default Contact;