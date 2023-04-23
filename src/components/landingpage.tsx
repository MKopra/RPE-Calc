import Menu from "./menu";
import EraseButton from './erasebutton';
import { useState } from 'react';
import { Dialog, DialogContent } from "@mui/material";
import OneRepLanding from "./onereplanding";
import OneRepMenu from "./onerepmenu";
import CalLanding from "./callanding";
import CalMenu from "./calmenu";


function LandingPage() {  
    const [isVisible1, setIsVisible1] = useState<boolean>(true);
    const [isOneRepVisible, setIsOneRepVisible] = useState(false);
    const [isEraseButtonVisible, setIsEraseButtonVisible] = useState(false);
    const [isCalVisible, setIsCalVisible] = useState(false);


    const handleClick1 = (element: string) => {
        setIsVisible1(false);
        setIsOneRepVisible(true);
      };
    const handleClick2 = (element: string) => {
        setIsVisible1(false);
        setIsEraseButtonVisible(true);
      };
      const handleClick3 = (element: string) => {
        setIsVisible1(false);
        setIsCalVisible(true);
      };

      


  return (
    
    <div>
     {isVisible1 && (   <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-white py-5">Welcome to RepetitionMax.com!</p> 
    </div> )}
    <body className="flex flex-wrap justify-center items-center px-8 h-full">
    {isVisible1 && (
        <div className="px-2 py-2 w-full md:w-full lg:w-1/2 py-5 h-min">
            <div className="text-white p-4 bg-gray-600 p-6 rounded-lg shadow-md">
                <div className="text-md lg:text-xl">Welcome to RepetitionMax.com, this website serves as a one stop shop for any strength-nerd type calculations you could possibly require. The three tools you'll find on this webpage are: </div>
                <div className="text-xl lg:text-2xl font-bold py-3">1. One Rep Max Calculator</div>
                <div className="text-md lg:text-xl">a one repetition max calculator that takes a weight lifted for a certain number of reps 1-10, and uses that to find your estimated repetition maxes. </div>
                <div className="text-xl lg:text-2xl font-bold py-3">2. RPE Calculator</div>
                <div className="text-md lg:text-xl">An RPE calculator that takes your repetition maxes, and uses them to provide you with Rate of Perceived Exertion prescriptions upt to a set of 8, and out to RPE 5. </div>
                <div className="text-xl lg:text-2xl font-bold py-3">3. Weighted Calesthenics Calculator </div>
                <div className="text-md lg:text-xl">A weighted Calesthenics rep max calculator. The hard part about using percentages and RPE calculations based off of percentage with weighted Calesthenics is that your bodyweight needs to be involved in the calculation, which can be a tedious process for the trainee - fret not, we've go you covered. </div>
            </div>
        </div>
                )} 
      
      {isVisible1 && (<div className="px-2 py-2 w-full md:w-full lg:w-1/3 h-min">
            <div className="flex flex-col justify-center items-center bg-gray-600 rounded-lg shadow-md">
            <div className="py-5">
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl px-5"onClick={() => handleClick1("onerepmax")}>One Rep Max Calculator</button>
            </div>
                <div className="py-5">
                {isVisible1 &&<button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl px-5"onClick={() => handleClick2("rpecalc")}>RPE Calculator</button>}
                {!isVisible1}
                </div>
                <div className="py-5">
                {isVisible1 &&<button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl px-5"onClick={() => handleClick3("cal")}>Weighted Calesthenics Calculator</button>}
                {!isVisible1}
                </div>
            </div>
            {isVisible1 &&<div className="flex justify-center px-10 py-8">
          <img src="https://images.pexels.com/photos/4608124/pexels-photo-4608124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="royalty free plates pic" className="w-full md:max-w-md lg:max-w-lg md:w-full rounded-md object-cover"/>
          </div>}
          <div className="fixed z-50" id="dialog-container"></div>
        </div>
      )}
      <div>{isOneRepVisible && 
                    <div className="h-full lg:h-full">
                        <OneRepLanding OneRepMenu={<OneRepMenu />} />
                    </div>
                } </div>
        <div>{isEraseButtonVisible && 
                    <div className="h-full lg:h-full">
                        <EraseButton menu={<Menu />} />
                    </div>
                } </div>
        <div>{isCalVisible && 
                    <div className="h-full lg:h-full">
                        <CalLanding CalMenu={<CalMenu />} />
                    </div>
                } </div>
    </body>
    </div>
  );
}
const LandingPageElement = <LandingPage />;

export default LandingPageElement;
