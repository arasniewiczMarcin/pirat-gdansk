import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Kadra from './views/Kadra';
import Galeria from "./views/Gallery";
import Sponsorzy from "./views/Sponsorzy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o_nas" element={<About />} />
          <Route path="/kadra" element={<Kadra />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sponsorzy" element={<Sponsorzy />} />
        </Routes>
        <Footer />
      </Router>
    </div>  
  )
}