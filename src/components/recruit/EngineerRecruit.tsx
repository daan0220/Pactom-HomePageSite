import React from "react";
import { motion } from "framer-motion";

const EngineerRecruit: React.FC = () => {
  return (
    <motion.div
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
        エンジニア職
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
          次世代AIプラットフォームやWebアプリケーションの設計・開発・運用。
          フロントエンド、バックエンド、クラウドインフラのいずれかの分野で活躍いただきます。
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
          <li>AIを活用したプロダクトの開発</li>
          <li>WebアプリケーションのUX/UI設計</li>
          <li>クラウドインフラの設計と運用（AWS/GCPなど）</li>
          <li>技術チームとの連携・スプリント開発</li>
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
          <li>技術への情熱があり、自己成長を求めている方</li>
          <li>新しい課題に挑戦することを楽しめる方</li>
          <li>チームワークを重んじ、他メンバーと協力できる方</li>
          <li>React, Node.js, Python, AWS/GCPなどの技術に精通している方歓迎</li>
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
  );
};

export default EngineerRecruit;
