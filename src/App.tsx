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
import PortFolio from "./components/portfolio/PortFolio";
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
            <Route path="/portfolio" element={<PortFolio/>} />
          </Routes>
        </InitialTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
