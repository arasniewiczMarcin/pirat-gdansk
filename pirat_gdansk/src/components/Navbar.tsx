import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </div>
                {/* Add any additional elements here */}
            </div>
        </div>
        </nav>
    );
  }
  export default Navbar;