
import { IconButton, MobileNav } from '@material-tailwind/react';
import logo from '../assets/logo_pirat.png';
import { useState } from 'react';

const navLinks = (
    <>
        <a href="#About" className="text-gray hover:bg-[#ff9923]">O nas</a>
        <a href="#Sponsors" className="text-gray hover:bg-[#ff9923]">Sponsorzy</a>

        <a href="#" className="text-gray hover:text-gray-300">
            <img src={logo} alt='logo pirata' width={100}/>
        </a>
        <a href="#Team" className="text-gray hover:bg-[#ff9923]">Kadra</a>
        <a href="#Gallery" className="text-gray hover:bg-[#ff9923]">Galeria</a>
    </>
)
interface NavbarProps {
  mobileView: boolean;
}

const Navbar = ({mobileView}: NavbarProps) => {
  const [openNav, setOpenNav] = useState(false); 

  return (
    <nav className="bg-[#FFB923] sticky top-0 z-10 " >
      <div className="flex items-center justify-center space-x-16 ">
      
        {!mobileView && navLinks}   
               
      </div>
      <IconButton placeholder={"t"}
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mt-2 mx-2"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                </IconButton>
      <MobileNav open={openNav && mobileView}>
        <div className="flex items-center flex-col justify-center ">
            {navLinks}
        </div>
      </MobileNav>
    </nav>
  ); 
}

export default Navbar;
