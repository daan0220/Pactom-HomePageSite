import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import Footer from "../Footer";
import '@fortawesome/fontawesome-free/css/all.css'; 

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
            <h1>※開発中のためクロージング中です</h1>
            <Footer/>
          </div>
        </section>
      </motion.div>
    </InitialTransition>
  );
};

export default Contact;
