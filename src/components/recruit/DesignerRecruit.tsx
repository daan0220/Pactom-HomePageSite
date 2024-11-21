import React from 'react';
import { motion } from 'framer-motion';

const DesignerRecruit: React.FC = () => {
  return (
    <div
    style={{
        marginTop: '60px', // Header分の余白
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // 上から順に配置
        minHeight: 'calc(100vh - 60px)', // Headerの高さを除外
        overflowY: 'auto', // 縦スクロールを許可
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

      <motion.div
        id="details"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          marginBottom: "100px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* セクションタイトル */}
        <h2
          style={{
            fontSize: "3rem",
            color: "#fff",
            marginBottom: "30px",
            textShadow: "0px 0px 15px rgba(255, 145, 77, 0.8)",
          }}
        >
          デザイナー職
        </h2>

        {/* 仕事内容 */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              color: "#ff914d",
              textShadow: "0px 0px 10px rgba(255, 145, 77, 0.8)",
              marginBottom: "10px",
            }}
          >
            仕事内容
          </h3>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "2",
              color: "#eaeaea",
              margin: "0 auto",
              maxWidth: "800px",
            }}
          >
            Webサイトやアプリケーションのデザイン、ユーザー体験の向上を目指したUI/UXデザインを担当していただきます。
          </p>
          <ul
            style={{
              listStyleType: "disc",
              textAlign: "left",
              margin: "20px auto",
              paddingLeft: "20px",
              maxWidth: "800px",
              fontSize: "1.2rem",
              color: "#eaeaea",
            }}
          >
            <li>Webサイトやアプリケーションのデザイン</li>
            <li>UI/UXデザインの改善と提案</li>
            <li>デザインシステムの構築と運用</li>
            <li>開発チームとの連携</li>
          </ul>
        </div>

        {/* 求める人物像 */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              color: "#ff914d",
              textShadow: "0px 0px 10px rgba(255, 145, 77, 0.8)",
              marginBottom: "10px",
            }}
          >
            求める人物像
          </h3>
          <ul
            style={{
              listStyleType: "circle",
              textAlign: "left",
              margin: "20px auto",
              paddingLeft: "20px",
              maxWidth: "800px",
              fontSize: "1.2rem",
              color: "#eaeaea",
            }}
          >
            <li>デザインに対する情熱があり、自己成長を求めている方</li>
            <li>新しい課題に挑戦することを楽しめる方</li>
            <li>チームワークを重んじ、他メンバーと協力できる方</li>
            <li>Adobe XD, Figma, Sketchなどのデザインツールに精通している方歓迎</li>
          </ul>
        </div>

        {/* 待遇・福利厚生 */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              color: "#ff914d",
              textShadow: "0px 0px 10px rgba(255, 145, 77, 0.8)",
              marginBottom: "10px",
            }}
          >
            待遇・福利厚生
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#eaeaea",
              margin: "0 auto",
              maxWidth: "800px",
            }}
          >
            私たちは従業員の働きやすさを重視し、以下のような待遇を提供しています：
          </p>
          <ul
            style={{
              listStyleType: "square",
              textAlign: "left",
              margin: "20px auto",
              paddingLeft: "20px",
              maxWidth: "800px",
              fontSize: "1.2rem",
              color: "#eaeaea",
            }}
          >
            <li>リモートワーク制度あり</li>
            <li>週休二日制（土日祝休み）</li>
            <li>フレックスタイム制度導入</li>
            <li>学習・技術向上のための書籍購入費補助</li>
            <li>社会保険完備・交通費支給</li>
          </ul>
        </div>

        {/* 応募方法 */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              color: "#ff914d",
              textShadow: "0px 0px 10px rgba(255, 145, 77, 0.8)",
              marginBottom: "10px",
            }}
          >
            応募方法
          </h3>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "2",
              color: "#eaeaea",
            }}
          >
            下記のフォームからご応募ください：
            <br />
            <a
              href="https://example.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ff914d",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              応募フォームはこちら
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DesignerRecruit;