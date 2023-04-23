import Menu from "./components/menu";
import EraseButton from './components/erasebutton';
import './index.css';
import landingPage from "./components/landingpage";
import LandingPageElement from "./components/landingpage";
import Navbar from "./components/navbar";
import { useState } from "react";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    console.log('Login clicked');
    // handle login logic here
  };

  return (

    <div className="bg-gray-700">
      <header>
      <Navbar isLoggedIn={isLoggedIn} onLogin={() => handleLogin()} />
        <div>
          {LandingPageElement}
        </div>
        <br />
        <br />
      </header>
    </div>
  );
} //////////////// ------- add tailwind CSS ------------------

export default App
