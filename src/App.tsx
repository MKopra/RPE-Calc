import EraseButton from './components/erasebutton';
import './index.css';
import LandingPage from "./components/landingpage";
import Navbar from "./components/navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import OneRepMenu from "./components/onerepmenu";
import CalMenu from "./components/calmenu";
import Menu from "./components/menu";
import  Login  from './components/login';
import { handleLogout } from './components/login';
import RPECalc from './components/rpecalc';
import HomePage from './components/homepage';

export let User: string | undefined = "";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    console.log('Login clicked');
    // handle login logic here
  };
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };
  
  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };
  
  return (

    <div className="bg-gray-700 h-full">
      <header>
      <Navbar 
      isLoginOpen={isLoginOpen} 
      setIsLoginOpen={setIsLoginOpen} 
      logout={handleLogout} 
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn} />
      <div>
      {isLoginOpen && (
      <Login 
      isLoginOpen={isLoginOpen} 
      setIsLoginOpen={setIsLoginOpen} 
      logout={handleLogout} 
      setIsLoggedIn={setIsLoggedIn} />
      )}
        <div className={`app-content ${isLoginOpen ? "blur" : ""}`}>
          <Routes>
            <Route path= '/' element={<HomePage/>}/>
            <Route path='/tools' element={<LandingPage/>}/>
            <Route path='/onerepmax-calc' element={<OneRepMenu/>}/>
            <Route path='/exercise-library' element={<Menu/>}/>
            <Route path='/rpe-calc' element={<RPECalc/>}/>
            <Route path='/cal-calc' element={<CalMenu/>}/>
          </Routes>
        </div>
        </div>
        <br />
        <br />
      </header>
    </div>

  );
} //////////////// ------- add tailwind CSS ------------------

export default App
