import React from "react";
import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Footer from "../Footer";
import Timeline from "./Timeline";
import { FaGithub, FaBlogger } from 'react-icons/fa';

const CustomToggle = ({ children, eventKey }: { 
  
  children: JSX.Element;
  eventKey: string;
}): JSX.Element => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "white"}}
      onClick={decoratedOnClick}
      className="button"
    >
      {children}
    </button>
  );
}


const Blog = () => {

  const timelineVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const githubLink = 'https://github.com/daan0220'; 
  const blogLink = 'https://zenn.dev/daan0220'; 


  return (
    <InitialTransition>
      <motion.div
        className="container1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >


    <Container>
      <Row className="produce" >
          <Col  xs={{ order: 'first' }} className="font text-center">
                  <h1>
                    Hi! I'm Daiki Ando Engineer
                  </h1>
                  <div className="social-icons">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" size={64} />
                    </a>
                    <span className="icon-spacing"></span>
                    <a href={blogLink} target="_blank" rel="noopener noreferrer">
                      <FaBlogger className="icon" size={64} />
                    </a>
                  </div>
                  <p className="text-muted">
                  2002年に京都府で生まれ（現大学3年生）小学生〜大学2年生秋までサッカーに打ち込んでいました。高校時には香川県で寮生活をして、全国高校サッカー選手権に出場、その後国士舘大学に入学を決め、サッカー部に所属。2年生の秋に1年休学をしてドイツにサッカー留学。怪我などもあり、サッカー選手になることをあきらめ、渡航中にエンジニアを目指すことにシフトチェンジしました。現在はType script,React,Go,Railsなどを中心とした個人開発を進めています。
                  </p>          
          </Col>
      </Row>

      <hr />

      <Row className="text-center">
      <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center mb-4">My Career Timeline</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
            <Timeline/>
        </Col>
      </Row>
      </Container>
      </Row>

      <hr />

      <Row className="future" id="future">
      <h1 className="word1">Future</h1> 
      <Accordion defaultActiveKey="0" >
      <Card className="card0">
        <Card.Header>
          <CustomToggle eventKey="0"><p>The target for 1 year after</p></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>1年後には就職活動が本格的に始まるので、良いスタートが切れるように、資格の取得（TOEIC）と、Typescript,React,Go,Railsなどを使用したアプリケーションを3つ制作し、エンジニアとしてのポテンシャルを高めていきます。</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="card1">
        <Card.Header>
          <CustomToggle eventKey="1"><p>The target for 5 year after</p></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>社会人として、その時点で就業させて頂いてる企業様にプラスになるような人材、欠かせない人材となるよう、技術力のほかに企業仲間に愛されるような人材を目指します</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="card2">
        <Card.Header>
          <CustomToggle eventKey="2"><p>The target for 10 year after</p></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>会社員としての役目を果たしながら、個人開発したアプリケーションの規模を拡大していく。</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    <p className="text-muted">企業様から、契約などをいただいた暁には、ひとつひとつの業務に対して責任を持って対応させていただきます。</p>
    <Footer />
    </Row>
    </Container>
      </motion.div>
    </InitialTransition>
  );
};

export default Blog;
