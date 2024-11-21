import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Form } from 'react-bootstrap';

const Contacts: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <motion.div
      className="contacts-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        color: '#fff',
        padding: '20px',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <motion.div
        className="contact-card"
        style={{
          width: '90%',
          maxWidth: '600px',
          padding: '30px',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.1)', // 半透明のカード背景
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 15px 40px rgba(255, 255, 255, 0.3)',
        }}
      >
        {!isSubmitted ? (
          <Form onSubmit={handleSubmit}>
            <motion.h2
              className="form-title"
              style={{
                fontSize: '2rem',
                marginBottom: '20px',
                color: '#ff914d',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              お問い合わせフォーム
            </motion.h2>
            <Form.Group controlId="formName" className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>お名前</Form.Label>
              <Form.Control
                type="text"
                placeholder="例: 山田 太郎"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px',
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCompany" className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>所属企業</Form.Label>
              <Form.Control
                type="text"
                placeholder="例: 株式会社〇〇"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px',
                }}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>メールアドレス</Form.Label>
              <Form.Control
                type="email"
                placeholder="例: example@domain.com"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px',
                }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label style={{ fontWeight: 'bold' }}>メッセージ</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="お問い合わせ内容をご記入ください"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px',
                }}
                required
              />
            </Form.Group>
            <motion.div
              whileHover={{
                scale: 1.1,
                backgroundColor: '#ff914d',
                color: '#fff',
              }}
              transition={{ duration: 0.3 }}
            >
              <Button
                type="submit"
                style={{
                  width: '100%',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  background: '#ff914d',
                  border: 'none',
                  borderRadius: '10px',
                }}
              >
                送信
              </Button>
            </motion.div>
          </Form>
        ) : (
          <motion.div
            className="thank-you-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#ff914d' }}>
              お問い合わせありがとうございます！
            </h2>
            <p style={{ fontSize: '1.2rem' }}>
              ご入力いただいた内容は正常に送信されました。確認の上、担当者よりご連絡いたします。
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
