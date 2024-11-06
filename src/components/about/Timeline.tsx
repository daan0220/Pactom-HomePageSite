import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  link: string; 
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, link }) => {

  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h4>{year}</h4>
        <h5>{title}</h5>
        <p>{description}</p>
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="custom-button">
            関連リンクを開く
          </a>
        </p>
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
      link: 'https://o-n.co.jp/',
    },
    {
      year: "2023.03〜2023.09",
      title: '株式会社Enginee',
      description: 'フロント・バックエンドエンジニア',
      link: 'https://enginee.co.jp/'
    },
    {
      year: "2023.03.01〜現在",
      title: 'HOUSEI株式会社',
      description: 'フロント・バックエンドエンジニア',
      link: 'https://www.housei-inc.com/'
    },
    {
      year: "2023.11〜2024.03",
      title: '株式会社マネーフォワード',
      description: 'フロント・バックエンドエンジニア',
      link: 'https://hrmos.co/pages/moneyforward/jobs/1705418982829588664'
    },
    {
      year: "2024.03〜現在",
      title: '株式会社CoNico',
      description: 'フロントエンジニア',
      link: 'https://conico.jp/'
    },
    {
      year: "1month",
      title: '株式会社ラクス',
      description: 'フロント・バックエンドエンジニア',
      link: 'https://fresh-recruit.rakus.co.jp/recruit/internship.html'
    },
    {
      year: "1month",
      title: '株式会社GAテクノロジーズ',
      description: 'バックエンドエンジニア',
      link: 'https://www.ga-tech.co.jp/recruit/newgraduate/internship/'
    },
    {
      year: "2weeks",
      title: '技育CAMPハッカソン大阪',
      description: 'フロントエンドエンジニア',
      link: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
    },
    {
      year: "2months",
      title: 'GifTechハッカソン',
      description: 'PM/フロントエンドエンジニア',
      link: 'Integer non arcu euismod, viverra orci a, tincidunt nulla. Etiam sollicitudin consectetur elit nec fermentum.'
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
