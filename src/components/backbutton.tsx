import { Routes, Link, useNavigate } from "react-router-dom";
import LandingPageElement from "./landingpage";

function BackButton() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/');
    }
  
    return (

      <button 
      onClick={handleClick} 
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl">
        <p>
            <Link to="/" className="">
                Back
            </Link>
        </p>
        </button>

    );
  }

export default BackButton