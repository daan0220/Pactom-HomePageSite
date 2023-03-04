import React from "react";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import TsbaseImage from "../Images/Typescript_logo_2020.svg.png";
import profileImage from "../Images/IMG_6211 2.jpg";
import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";
import { Button } from "react-bootstrap";
import portimg from "../Images/portimg.png";

/* https://jfelix.info/blog/page-transitions-in-react */

const Home = () => {
  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const title = {
    initial: { x: -120, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const inputs = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  function onClickHandleD () {
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
          // initial={{ width: 0 }}
          // animate={{ width: "100%" }}
          // exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
          <h1>DAIKI ANDO</h1>

          <img src={profileImage} className="profileImage" />

          <p className="text-muted">
            2002年.2月.20日生まれ。京都府出身。普段は大学生として、日々生活しています。2年前にIT業界に興味を持ち、現在はTypescript、Reactの学習をしています。趣味はサッカーと筋トレで身体を鍛えることが好きです。
          </p>
          <hr />

          <section className="page-section" id="services">
            <div className="service">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
                <h3 className="section-subheading text-muted mb-5">
                  ☟下記が作品です☟
                </h3>
              </div>
              <div className="row text-center">
                <div className="md={{ span: 6, offset: 3 }}">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <img src={portimg} className="portimg"></img>
                  <h4 className="my-3">IDK.LIST</h4>
                  <Button variant="link" onClick={onClickHandleD }>こちらをクリックするとブラウザで表示されます</Button>

                  <p className="text-muted">
                    IDK.LISTを開発した理由は、自分がTodoリストを使っていた時に、することをリストに書き出す時点で時間が消費し、書き出す時間ですることを一つ一つこなしていく方が効率が良いと思いました。人は毎日悩むことがあり、それを解決しようとしますが、何を悩んでいたかを忘れることが多々あると思います。自分が都度分からなかった事をリスト化すると、忘れることがなくなるので非常に役に立つと思い開発に至りました。
                  </p>
                  
                  <hr />
                </div>
              </div>
            </div>
          </section>

          <section id="skill">
            <div className="text-center">
              <h1 className="title">Programming Skill</h1>             
              <div className="row text-center">                
                <div className="col-md-4 services">
                  <img src={reactImage} />
                  <h4>React</h4>
                  <p>Reactがつかえます</p>
                </div>
                <div className="col-md-4 services">
                  <img src={jsImage} />
                  <h4>HTML/CSS.Javascript</h4>
                  <p>HTML/CSS.Javascriptがつかえます</p>
                </div>              
                <div className="col-md-4 services">
                  <img src={TsbaseImage} />
                  <h4>Typescript</h4>
                  <p>Typescriptがつかえます</p>
                </div>           
              </div>          
            </div>
          </section>

         


        </motion.div>
      </InitialTransition>
    </motion.section>
  );
};

export default Home;
