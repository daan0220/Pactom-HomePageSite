import React from "react";
import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";
import Button from 'react-bootstrap/Button';
import instagramImage from "../Images/instagram.jpg";
import twitterImage from "../Images/008.jpg";
import facebookImage from "../Images/facebook.png";
const Contact = () => {


  function onClickHandleA () {
    window.open("https://www.instagram.com/", 'ago.__.gram');
  }

  function onClickHandleB () {
    window.open("https://www.Twitter.com/", 'ree_l_official')
  }

  function onClickHandleC () {
    window.open("https://www.facebook.com/", 'profile.php?id=100011448557801')
  }

  return (
    <InitialTransition>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >

    <section id="sns">
            <div className="text-center">
              <h1 className="title"> Social Networking Service</h1>
              <div className="row text-center">
                <div className="col-md-4 services">
                  <img src={instagramImage} />
                  <h4>Instagram</h4>
                  <p className="text-muted">Instagramでは、筋トレ動画や、毎日の朝活をおこなっている風景を中心に投稿をしています。</p>
                  <Button  onClick={onClickHandleA }>こちら</Button>
                </div>
                <div className="col-md-4 services">
                  <img src={twitterImage} />
                  <h4>Twitter</h4>
                  <p className="text-muted">Twitterでは、プログラミング学習においてのモチベーション向上や、知識を補うために使用しています</p>
                  <Button  onClick={onClickHandleB }>こちら</Button>
                </div>
                <div className="col-md-4 services">
                  <img src={facebookImage} />
                  <h4>Facebook</h4>
                  <p className="text-muted">Facebookでは、日常生活での些細なことや、経営者の方々の投稿などを拝見しています</p>
                  <Button  onClick={onClickHandleC }>こちら</Button>
                </div>
              </div>
            </div>
          </section>
      </motion.div>
    </InitialTransition>
  );
};

export default Contact;
