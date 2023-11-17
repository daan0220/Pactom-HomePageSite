import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Blog from "./components/about/Blog";
import Service from "./components/service/Service";
import { AnimatePresence } from "framer-motion";
import InitialTransition from "./utils/InitialTransition";
import ThreeBackground from "./components/ThreeBackground"; 

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ThreeBackground />
      <AnimatePresence>
        <InitialTransition>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Blog />} />
            <Route path="/service" element={<Service/>} />
          </Routes>
        </InitialTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
