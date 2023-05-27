import { useState } from "react";
import '../index.css';
import CalMenu from "./calmenu";
import { Link } from "react-router-dom";
import handleImageLoad from "./compressimage";


function CalLanding({ CalMenu }: { CalMenu: JSX.Element }) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="flex flex-wrap px-4 py-4">
          <div className="text-white p-4 bg-gray-600 p-6 rounded-lg shadow-md w-full md:w-full lg:w-1/2 py-5">
            <p className="text-2xl lg:text-3xl font-bold py-3">
              What is a Weighted Calesthenics Calculator? </p>
              <p className="text-lg lg:text-2xl">
              A Weighted Calisthenics Calculator is a tool used by individuals who incorporate calisthenics into their fitness routine and want to add additional resistance through the use of weight vests or other equipment. The calculator allows the user to input their body weight, the exercise they are performing, and the weight added, and provides an estimate of the user's 1 rep max and other repetition maxes based on that information. This can be helpful for individuals who want to track their progress and make sure they are gradually increasing the intensity of their workouts.</p>
              <p className="text-2xl lg:text-3xl font-bold py-3"> 
              Why use a Weighted Calesthenics Calculator? </p> 
              <p className="text-lg lg:text-2xl"> By using a Weighted Calisthenics Calculator, individuals can determine the appropriate amount of weight to add to their calisthenics exercises based on their body weight and fitness goals, ensuring that they are training at an optimal level for their individual needs. The numbers provided can be utilized to run a percentage of one rep max based program, or used as a reference for following an RPE based program.
            </p>
          </div>
          <div className="flex justify-center px-10 py-8">
          <img src="https://images.pexels.com/photos/14019139/pexels-photo-14019139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="royalty free plates pic" 
          className="w-full md:max-w-md lg:max-w-lg md:w-full rounded-md object-cover"
          onLoad={handleImageLoad}/>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center py-7">
      {isVisible && <p>
        <Link to="/cal-calc">
        <button 
      onClick={handleClick} 
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl">
          Get Started 
          </button>       
        </Link>
        </p>
      }
      {!isVisible && CalMenu}
      </div>
    </>
  );
}

export default CalLanding;