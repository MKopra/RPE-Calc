import React from "react";
import { Link } from "react-router-dom";
import { handleLogout, User } from "./login";

interface NavbarProps {
  isLoginOpen: boolean;
  setIsLoginOpen: (value: boolean) => void;
  logout: (setIsLoggedIn: (value: boolean) => void) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}


const Navbar: React.FC<NavbarProps> = ({isLoginOpen, setIsLoginOpen, logout, isLoggedIn, setIsLoggedIn}) => {
  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };


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
            className="px-4 py-2 rounded-md text-white font-bold bg-gray-600 hover:bg-gray-700"
            onClick={handleLogout(setIsLoggedIn)}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded-md text-white font-bold bg-gray-600 hover:bg-gray-700"
            onClick={handleOpenLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
