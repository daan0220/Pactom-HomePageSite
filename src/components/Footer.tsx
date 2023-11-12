import React from "react";
import { Button } from "react-bootstrap";
import { ArrowUp } from "react-bootstrap-icons"; // Import the ArrowUp icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGoogleForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSecVhF2_O_QRAi9vF6Enxd9XRr2TUKHAJiABYYcFRkl3hrA0g/viewform?usp=sf_link", '_blank');
  };

  return (
    <footer className="text-dark py-5">
      <div className="container">
      
        <div className="row">
        
          <div className="col-md-4 mb-4">
            <h2>About Us</h2>
            <p>
            Daiki.comへようこそ。イノベーションと卓越性が交わる場所です。
            私たちはIT業界で先進的なソリューションを提供する情熱的なチームです
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h2>Contact Us</h2>
            <p>Email: daikisocceta1@gmail.com</p>
            <p>Phone: 080-9370-2122</p>
            <div className="row text-center">
            <div className="col-md-4 mb-1 services">
                <i className="fab fa-instagram fa-2x" onClick={() => window.open("https://www.instagram.com/", '_daikiando')}></i>
            </div>
            <div className="col-md-4 mb-1 services">
                <i className="fab fa-twitter fa-2x" onClick={() => window.open("https://www.Twitter.com/", 'andodaiki2')}></i>
            </div>
            <div className="col-md-4 mb-1 services">
                <i className="fab fa-facebook fa-2x" onClick={() => window.open("https://www.facebook.com/", 'profile.php?id=100011448557801')}></i>
            </div>
            </div>
            <section id="contact-form" className="text-center">
            <Button variant="gray" onClick={openGoogleForm}>
                Open Google Form <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
            </Button>
            </section>
          </div>
          <div className="col-md-4 mb-4">
            <h2>Quick Links</h2>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/service">Service</a>
              </li>
            </ul>
          </div>
          
        </div>
        <Button
          onClick={scrollToTop}
          variant="outline-dark"
          className="mb-3"
          style={{ borderRadius: "50%", padding: "8px" }}
        >
          <ArrowUp size={20} />
        </Button>
      </div>
      <div className="text-center">
        <p>&copy; 2023 Daiki.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
