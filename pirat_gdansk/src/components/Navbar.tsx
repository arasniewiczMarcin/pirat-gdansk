import logo from '../assets/logo_pirat.png';

const Navbar = () => {
    return (
        <nav className="bg-[#FFB923] sticky top-0 z-10 " >
                <div className="flex items-center justify-center space-x-16 ">
                    <a href="#About" className="text-gray hover:bg-[#ff9923]">O nas</a>
                    <a href="#Sponsors" className="text-gray hover:bg-[#ff9923]">Sponsorzy</a>
                    
                    <a href="#" className="text-gray hover:text-gray-300">
                        <img src={logo} alt='logo pirata' width={100}/>
                    </a>
                    <a href="#Team" className="text-gray hover:bg-[#ff9923]">Kadra</a>
                    <a href="#Gallery" className="text-gray hover:bg-[#ff9923]">Galeria</a>
                    
                    
                </div>
                
        </nav>
    );
  }
  export default Navbar;