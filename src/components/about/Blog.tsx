import React from "react";
import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import MyImage from "../../Images/IMG_3052.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import mtv0 from "../../Images/mtv0.jpg";
import mtv1 from "../../Images/mtv1.jpg";
import mtv2 from "../../Images/mtv2.jpg";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Footer from "../Footer";

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
  return (
    <InitialTransition>
      <motion.div
        className="container1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >


    <Container>
      <Row className="produce" >
          <Col  xs={{ order: 'first' }} className="font">
                  <h1 className="text-start">
                    Hi!
                    <br />
                    I'm Daiki Ando
                    <br />
                    Engineer
                  </h1>
                  <p className="text-muted">
                  2002年に京都府で生まれ（現大学2年生）小学生〜大学2年生秋までサッカーに打ち込んでいました。高校時には香川県で寮生活をして、全国高校サッカー選手権に出場、その後国士舘大学に入学を決め、サッカー部として活動をしていました。大学2年の秋に1年休学をしてサッカー留学をすることを決めドイツに渡航。しかし、怪我をしてしまい10ヶ月程で帰国をしました。そこでサッカー人生に終止符を打ち、幼い頃からサッカーに全力投球していた自分はドイツ渡航中から始めていたプログラミングを極めることにシフトチェンジしました。ドイツから日本のスタートアップ企業にインターンシップ生として実務を積んでいましたが、時差などサッカーとの両立ができず2ヶ月程で辞退となりました。現在はType script,Reactを中心とした個人開発を進めています。
                  </p>          
          </Col>

          <Col xs={{ order: 'last' }} >
          <Image src={MyImage} className="img"/>
          </Col>
      </Row>

      <hr />

      <Row className="text-center">
      <h1 className="word">My favorite word</h1> 
        <Carousel fade >
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={mtv0}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>何事も成し遂げるまではいつでも不可能に見える</h2>
              <p>ネルソン・マンデラ（元・南アフリカ大統領）</p>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item className="img">
            <Image 
              className="d-block w-100"
              src={mtv1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>成功に囚われるな、成長に囚われろ</h2>            
              <p>本田圭佑（元・サッカー日本代表、起業家）</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mtv2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>他人の人生に影響を与えてこそ人生には意味がある</h2>
              <p>
              ジャッキー・ロビンソン（黒人初のメジャーリーガー）
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <p className="text-muted" >上記以外の言葉でも、自分の行動と言動を見つめ直し、日々成長しています</p>
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
          <Card.Body>1年後には就職活動が本格的に始まるので、良いスタートが切れるように、資格の取得（TOEIC.ドイツ語検定.中国語検定）と、Typescript,Reactを使用したアプリケーションを3つ制作し、エンジニアとしてのポテンシャルを高めていきます。</Card.Body>
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
