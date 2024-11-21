import React from "react";
import { motion } from "framer-motion";

const SalesRecruit: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
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
        営業職
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
          AI技術を活用したプロダクトの提案・販売を通じて、クライアントの課題解決をサポートします。
          新規開拓から既存顧客とのリレーション構築まで、幅広い営業活動に携わっていただきます。
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
          <li>クライアントの課題をヒアリングし、最適なソリューションを提案</li>
          <li>新規顧客の開拓と関係構築</li>
          <li>見積もり、契約締結、プロジェクト管理サポート</li>
          <li>顧客満足度向上のためのフォローアップ</li>
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
          <li>課題解決型の提案営業に意欲がある方</li>
          <li>コミュニケーション能力が高く、顧客対応が得意な方</li>
          <li>新しい市場開拓に挑戦する意欲がある方</li>
          <li>IT/AI業界での営業経験がある方は優遇</li>
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
          営業職の皆様には、以下の待遇と福利厚生を提供します：
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
          <li>リモートワーク制度と出張手当</li>
          <li>成果に応じたインセンティブ制度</li>
          <li>週休二日制（土日祝休み）</li>
          <li>キャリアアップのための研修制度</li>
          <li>交通費支給・社会保険完備</li>
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

export default SalesRecruit;
