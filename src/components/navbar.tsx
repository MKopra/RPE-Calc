import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogin }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-gray-800 text-white">
      <div className="flex items-center">
      <Link to="/">
        <button className="ml-4 text-3xl font-bold">RepetitionMax.com</button>
      </Link>
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <button
            className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={() => alert("You are already logged in!")}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded-md text-white font-bold bg-gray-600 hover:bg-gray-700"
            onClick={onLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
