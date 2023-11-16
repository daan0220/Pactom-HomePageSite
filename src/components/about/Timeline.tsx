import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  details: string; 
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, details }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h4>{year}</h4>
        <h5>{title}</h5>
        <p>{description}</p>
        <Button variant="secondary" onClick={handleShow} className="custom-button">
          View Details
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const MyCareerTimeline: React.FC = () => {
  const timelineData: TimelineItemProps[] = [
    {
      year: "2022.05〜2022.08",
      title: 'ON株式会社',
      description: 'フロントエンドエンジニア',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec libero vitae urna aliquet faucibus. Nullam convallis purus quis felis sodales, sed fermentum ex semper.'
    },
    {
      year: "2023.03〜2023.09",
      title: '株式会社Enginee',
      description: 'フロント・バックエンドエンジニア',
      details: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vitae mi sit amet ex congue tincidunt sed et lectus.'
    },
    {
      year: "2023.03.01〜現在",
      title: 'HOUSEI株式会社',
      description: 'フロント・バックエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "2023.11〜現在",
      title: '株式会社マネーフォワード',
      description: 'フロント・バックエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "1month",
      title: '株式会社ラクス',
      description: 'フロント・バックエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "1day",
      title: 'Sansan株式会社',
      description: 'バックエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "1month",
      title: 'GAテクノロジーズ',
      description: 'バックエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "1day",
      title: '株式会社MIXI',
      description: 'Git challenge #13',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "1week",
      title: '名古屋web3 ハッカソン',
      description: 'フロントエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "2weeks",
      title: '技育CAMPハッカソン大阪',
      description: 'フロントエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "2days",
      title: 'JPHACKS 2023',
      description: 'フロントエンドエンジニア',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    
  ];

  return (
    <Container>
      <Row>
        {timelineData.map((item, index) => (
          <Col key={index} md={4}>
            <TimelineItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyCareerTimeline;
