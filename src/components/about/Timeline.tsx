import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

interface TimelineItemProps {
  year: number;
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
      year: 2015,
      title: 'First Job',
      description: 'Started working as a junior developer',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec libero vitae urna aliquet faucibus. Nullam convallis purus quis felis sodales, sed fermentum ex semper.'
    },
    {
      year: 2018,
      title: 'Promotion',
      description: 'Promoted to team lead position',
      details: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vitae mi sit amet ex congue tincidunt sed et lectus.'
    },
    {
      year: 2020,
      title: 'Career Shift',
      description: 'Transitioned to a new technology stack',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: 2020,
      title: 'Career Shift',
      description: 'Transitioned to a new technology stack',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: 2020,
      title: 'Career Shift',
      description: 'Transitioned to a new technology stack',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: 2020,
      title: 'Career Shift',
      description: 'Transitioned to a new technology stack',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: 2020,
      title: 'Career Shift',
      description: 'Transitioned to a new technology stack',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: 2020,
      title: 'Career Shift',
      description: 'Transitioned to a new technology stack',
      details: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: 2020,
      title: 'Career Shift',
      description: 'Transitioned to a new technology stack',
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
