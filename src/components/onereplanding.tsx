import { useState } from "react";
import '../index.css';
import OneRepMenu from "./onerepmenu";

function OneRepLanding({ OneRepMenu }: { OneRepMenu: JSX.Element }) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="flex flex-wrap px-8">
          <div className="text-white p-4 bg-gray-600 p-6 rounded-lg shadow-md w-full md:w-full lg:w-1/2 py-5">
            <p className="text-2xl lg:text-3xl font-bold py-3">
              What is a One Rep Max Calculator? </p>
              <p className="text-lg lg:text-2xl">
              A one rep max calculator is a tool used to estimate the maximum weight an individual can lift for one repetition of a particular exercise, based on their performance of a similar exercise with a lower weight and a higher number of repetitions </p>
              <p className="text-2xl lg:text-3xl font-bold py-3"> 
              Why use a One Rep Max Calculator? </p> 
              <p className="text-lg lg:text-2xl">A one rep max (1RM) calculator can be useful for strength athletes or anyone interested in tracking their strength progress. It is a tool that estimates the maximum amount of weight that a person can lift for a single repetition in a given exercise, based on the weight and number of repetitions they have previously lifted.

Knowing your 1RM can be helpful in setting goals and creating workout plans that are tailored to your individual needs and abilities. For example, if you want to increase your strength in a particular exercise, you could use your current 1RM as a starting point and aim to gradually increase the weight you can lift for that exercise over time.
            </p>
          </div>
          <div className="flex justify-center px-10 py-8">
          <img src="https://images.pexels.com/photos/4164468/pexels-photo-4164468.jpeg" alt="royalty free plates pic" className="w-full md:max-w-md lg:max-w-lg md:w-full rounded-md object-cover"/>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center py-7">
      {isVisible && <button 
      onClick={handleClick} 
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl">
        Get Started
      </button>}
      {!isVisible && OneRepMenu}
      </div>
    </>
  );
}

export default OneRepLanding;