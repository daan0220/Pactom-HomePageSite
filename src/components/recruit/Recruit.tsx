import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Recruit: React.FC = () => {
  const navigate = useNavigate();

  const navigateToEngineerRecruit = () => {
    navigate('/engineer-recruit');
  };

  const navigateToSalesRecruit = () => {
    navigate('/sales-recruit');
  };

  const navigateToDesignerRecruit = () => {
    navigate('/designer-recruit');
  };

  return (
    <div
      style={{
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 60px)',
        color: 'white',
        position: 'relative',
        overflowY: 'auto',
      }}
    >
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.6;
            }
          }

          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <h1
        className="text-center mb-4"
        style={{
          fontSize: '3rem',
          textShadow: '0px 4px 6px rgba(255, 145, 77, 0.6)',
        }}
      >
        Recruitment
      </h1>

      {/* エンジニア採用 */}
      <Card
        onClick={navigateToEngineerRecruit}
        className="mb-5"
        style={{
          width: '90%',
          maxWidth: '700px',
          padding: '20px',
          borderRadius: '15px',
          color: '#fff',
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
          zIndex: 1,
          animation: 'slideIn 1s ease forwards',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 145, 77, 0.7)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        <Card.Body>
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' }}>
            エンジニア採用
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            最先端技術を駆使し、未来の開発を共に創るエンジニアを募集しています。
          </p>
          <Button
            variant="dark"
            style={{
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '10px',
              background: '#1b1b1b',
              border: '1px solid white',
              color: 'white',
            }}
          >
            詳しく見る
          </Button>
        </Card.Body>
      </Card>

      {/* 営業職採用 */}
      <Card
        onClick={navigateToSalesRecruit}
        className="mb-5"
        style={{
          width: '90%',
          maxWidth: '700px',
          padding: '20px',
          borderRadius: '15px',
          color: '#fff',
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
          zIndex: 1,
          animation: 'slideIn 1s ease forwards',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 145, 77, 0.7)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        <Card.Body>
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' }}>
            営業職採用
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            クライアントと未来を繋ぐ架け橋となる営業職を募集しています。
          </p>
          <Button
            variant="dark"
            style={{
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '10px',
              background: '#1b1b1b',
              border: '1px solid white',
              color: 'white',
            }}
          >
            詳しく見る
          </Button>
        </Card.Body>
      </Card>

      {/* デザイナー採用 */}
      <Card
        onClick={navigateToDesignerRecruit}
        className="mb-5"
        style={{
          width: '90%',
          maxWidth: '700px',
          padding: '20px',
          borderRadius: '15px',
          color: '#fff',
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
          zIndex: 1,
          animation: 'slideIn 1s ease forwards',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 145, 77, 0.7)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        <Card.Body>
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' }}>
            デザイナー採用
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            クリエイティブなデザインで未来を創るデザイナーを募集しています。
          </p>
          <Button
            variant="dark"
            style={{
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '10px',
              background: '#1b1b1b',
              border: '1px solid white',
              color: 'white',
            }}
          >
            詳しく見る
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recruit;
