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
      <Navbar />
      <div id="Home"><Home /></div>
      <div id="About"><About /></div>
      <div id="Sponsors"><Sponsorzy /></div>
      <div id="Team"><Kadra /></div>
      <div id="Gallery"><Galeria /></div>
      <div id="Footer"><Footer /></div>
    </div>  
  )
}