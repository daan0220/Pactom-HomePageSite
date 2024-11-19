import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import About from "./components/about/Index";
import Service from "./components/service/Service";
import Recruit from "./components/recruit/Recruit";
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
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service/>} />
            <Route path="/recruit" element={<Recruit/>} />
          </Routes>
        </InitialTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
