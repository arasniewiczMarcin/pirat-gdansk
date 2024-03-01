import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Kadra from './views/Kadra';
import Galeria from "./views/Galeria";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kadra" element={<Kadra />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </Router>
    </div>  
  )
}