import { motion } from "framer-motion";
import InitialTransition from "../../utils/InitialTransition";
import Footer from "../Footer";
import '@fortawesome/fontawesome-free/css/all.css'; 

const Contact = () => {
  return (
    <InitialTransition>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <section id="service">
          <div className="text-center">
            <h1>ECommerce</h1>
          </div>
          <div className="service-description">
            <h2>機能一覧</h2>
            <ul>
              <li>共通
                <ul>
                  <li>全ての画面は、レスポンシブ対応しています。</li>
                  <li>管理者側の画面は、認証画面を除いて、管理者としてログインしないと閲覧できません。</li>
                  <li>顧客側の画面は、認証画面・商品に関する画面を除いて、顧客としてログインしないと閲覧できません。</li>
                </ul>
              </li>
              <li>管理者側
                <ul>
                  <li>ナビゲーションバー</li>
                  <li>ログインページ</li>
                  {/* 他の項目を追加 */}
                </ul>
              </li>
              {/* 他の項目を追加 */}
            </ul>
            {/* 顧客側の機能に関する情報を追加 */}
          </div>
          <Footer/>
        </section>
      </motion.div>
    </InitialTransition>
  );
};

export default Contact;
