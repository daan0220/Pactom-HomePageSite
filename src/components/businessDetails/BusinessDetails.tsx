import React from "react";
import { motion } from "framer-motion";

const BusinessDetails: React.FC = () => {
    const businesses = [
        {
            id: 4,
            title: "Pactom DeMo",
            description: "ノーコードで短時間でSaaSデモ環境を構築するプラットフォーム。",
            details: [
              {
                icon: "fas fa-rocket",
                title: "ノーコード構築",
                desc: "プログラミング不要で、直感的な操作でデモ環境を構築できます。製品の導入検討をスムーズに進められます。",
              },
              {
                icon: "fas fa-clock",
                title: "効率化支援",
                desc: "手間のかかる調整作業を省略し、迅速なデモ作成と共有を実現します。",
              },
              {
                icon: "fas fa-chart-bar",
                title: "統計機能",
                desc: "デモ利用状況やユーザー行動を分析し、営業戦略に役立てるデータインサイトを提供します。",
              },
              {
                icon: "fas fa-edit",
                title: "柔軟なカスタマイズ",
                desc: "デモ環境の外観や機能を自由に調整し、クライアントの要件に完全に適合させることが可能です。",
              },
            ],
          },
        {
          id: 1,
          title: "Webサービス開発",
          description: "お客様の仕様・要件に基づき、AIとDX技術を融合させた高品質なWebサービスを提供します。",
          details: [
            {
              icon: "fas fa-chart-line",
              title: "顧客行動分析",
              desc: "AIを用いた顧客行動データの分析により、購買傾向や行動パターンを明確化。これにより、効果的なマーケティング戦略を立案します。",
            },
            {
              icon: "fas fa-user-friends",
              title: "パーソナライズ分析",
              desc: "顧客一人ひとりの嗜好や行動履歴をもとに、カスタマイズされたサービスやコンテンツを提供し、顧客満足度を向上させます。",
            },
            {
              icon: "fas fa-cogs",
              title: "自動化機能",
              desc: "業務プロセスを自動化することで、効率化と人材の解放を実現します。これにより、コア業務への集中を可能にします。",
            },
            {
              icon: "fas fa-database",
              title: "データ分析基盤",
              desc: "データ分析基盤を構築し、リアルタイムでの意思決定を支援します。ビジネスの可視性を高め、迅速な対応を可能にします。",
            },
          ],
        },
        {
          id: 2,
          title: "アプリケーション開発",
          description: "モバイルアプリや業務用アプリなど、柔軟でスケーラブルなアプリケーションを提供します。",
          details: [
            {
              icon: "fas fa-lock",
              title: "セキュリティ強化",
              desc: "最新の暗号化技術や認証プロトコルを活用し、セキュアなアプリケーションを構築します。特に業務用アプリでは高い安全性を確保します。",
            },
            {
              icon: "fas fa-code",
              title: "モダンな言語",
              desc: "ReactやSwiftなど、最新技術を用いた効率的な開発を行い、長期運用を考慮した堅牢なアプリケーションを提供します。",
            },
            {
              icon: "fas fa-expand-arrows-alt",
              title: "スケーラブル設計",
              desc: "将来的な機能拡張やユーザー増加を見据えた設計を行い、ビジネスの成長を支援します。",
            },
            {
              icon: "fas fa-tools",
              title: "カスタマイズ性",
              desc: "特定の業務プロセスやニーズに合わせたカスタム機能を追加し、柔軟な運用を実現します。",
            },
          ],
        },
        {
          id: 3,
          title: "生成AI・DXコンサルティング",
          description: "AI導入やDX推進を通じて、ビジネスの効率化と成長を包括的に支援します。",
          details: [
            {
              icon: "fas fa-search",
              title: "現状分析",
              desc: "ビジネスプロセスやデータインフラの現状を詳細に分析し、課題と改善ポイントを特定します。",
            },
            {
              icon: "fas fa-lightbulb",
              title: "AI戦略策定・技術選定",
              desc: "企業の目標達成に向け、最適なAI技術の選定と導入計画を策定します。",
            },
            {
              icon: "fas fa-check-circle",
              title: "PoC実施",
              desc: "AI技術の有効性を検証するためのPoC（概念実証）を実施し、投資対効果を明確化します。",
            },
            {
              icon: "fas fa-hands-helping",
              title: "導入支援・運用最適化",
              desc: "導入後の運用サポート、トレーニング、改善提案を通じて、AI活用を最大限にサポートします。",
            },
          ],
        },
      ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "50px",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "50px",
          textShadow: "0px 4px 6px rgba(255, 145, 77, 0.6)",
          animation: "text-glow 1.5s infinite alternate",
        }}
      >
        Our Services
      </h2>
      {businesses.map((business, index) => (
        <motion.div
          key={business.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(255, 145, 77, 0.8)",
            background: "rgba(255, 255, 255, 0.2)",
          }}
          style={{
            width: "80%",
            maxWidth: "1200px",
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "left",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <h3
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
              color: "#fff",
              textShadow: "0px 2px 4px rgba(255, 255, 255, 0.6)",
            }}
          >
            {business.title}
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "20px",
              lineHeight: "1.6",
              textShadow: "0px 2px 4px rgba(255, 255, 255, 0.3)",
            }}
          >
            {business.description}
          </p>
          <div>
            {business.details.map((detail, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  padding: "10px",
                  borderLeft: "4px solid #ff914d", // オレンジ色に変更
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "10px",
                }}
              >
                <i
                  className={`${detail.icon} me-3`}
                  style={{
                    fontSize: "1.8rem",
                    color: "#ff914d", // オレンジ色に変更
                    flexShrink: 0,
                  }}
                ></i>
                <div>
                  <strong
                    style={{
                      fontSize: "1.2rem",
                      color: "#ff914d", // オレンジ色に変更
                    }}
                  >
                    {detail.title}
                  </strong>
                  : {detail.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BusinessDetails;
