import Menu from "./components/menu";
import EraseButton from './components/erasebutton';
import './index.css';
import landingPage from "./components/landingpage";
import LandingPageElement from "./components/landingpage";
import Navbar from "./components/navbar";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import OneRepLanding from "./components/onereplanding";
import OneRepMenu from "./components/onerepmenu";
import CalLanding from "./components/callanding";
import CalMenu from "./components/calmenu";
import RoutesApp from "./components/routes";







function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    console.log('Login clicked');
    // handle login logic here
  };

  return (
    <div className="bg-gray-700 h-full">
      <header>
      <Navbar isLoggedIn={isLoggedIn} onLogin={() => handleLogin()} />
        <div>
          <Routes>
            <Route path='/' element={LandingPageElement}/>
            <Route path='/onerepmax-landing' element={<OneRepLanding OneRepMenu={<OneRepMenu />} />}/>
            <Route path='/onerepmax-calc' element={<OneRepMenu/>}/>
            <Route path='/rpe-landing' element={<EraseButton menu={<Menu/>}/>}/>
            <Route path='/rpe-calc' element={<Menu/>}/>
            <Route path='/cal-landing' element={<CalLanding CalMenu={<CalMenu/>} />}/>
            <Route path='/cal-calc' element={<CalMenu/>}/>
          </Routes>
        </div>
        <br />
        <br />
      </header>
    </div>
  );
} //////////////// ------- add tailwind CSS ------------------

export default App
