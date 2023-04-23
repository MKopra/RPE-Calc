import Menu from "./components/menu";
import EraseButton from './components/erasebutton';
import './index.css';
import landingPage from "./components/landingpage";
import LandingPageElement from "./components/landingpage";




function App() {

  return (

    <div className="bg-gray-700">
      <header>
        <p className="text-5xl font-bold text-white flex justify-center py-5">RepetitionMax.com</p>
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
