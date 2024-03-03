import Home from "./views/Home";
import About from "./views/About";
import Kadra from './views/Kadra';
import Galeria from "./views/Gallery";
import Sponsorzy from "./views/Sponsorzy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
export default function App() {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 ? setMobileView(false) : setMobileView(true),
    );
  }, []);
  return (
    <div>      
      <Navbar mobileView={mobileView}/>
      <div id="Home"><Home /></div>
      <div id="About"><About mobileView={mobileView}/></div>
      <div id="Sponsors"><Sponsorzy /></div>
      <div id="Team"><Kadra /></div>
      <div id="Gallery"><Galeria /></div>
      <div id="Footer"><Footer /></div>
    </div>  
  )
}