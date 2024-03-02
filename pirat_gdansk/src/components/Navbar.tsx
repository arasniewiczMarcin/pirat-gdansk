import { Link } from "react-router-dom";
import logo from '../assets/logo_pirat.png';

const Navbar = () => {
    return (
        <nav className="bg-[#FFB923]">
                <div className="flex items-center justify-center space-x-16 ">
                    <Link to="/o_nas" className="text-gray hover:bg-[#ff9923]">O nas</Link>
                    <Link to="/kadra" className="text-gray hover:bg-[#ff9923]">Kadra</Link>
                    
                    <Link to="/" className="text-gray hover:text-gray-300">
                        <img src={logo} alt='logo pirata' width={100}/>
                    </Link>
                    <Link to="/galeria" className="text-gray hover:bg-[#ff9923]">Galeria</Link>
                    <Link to="/sponsorzy" className="text-gray hover:bg-[#ff9923]">Sponsorzy</Link>
                </div>
        </nav>
    );
  }
  export default Navbar;