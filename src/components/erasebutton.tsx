import { useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";

function EraseButton({ menu }: { menu: JSX.Element }) {
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
              What is RPE? </p>
              <p className="text-lg lg:text-2xl">
              Rate of perceived exertion is a method of measuring
              intensity in resistance/strength training on a scale of 1-10, where the
              difference between the RPE and 10 is the number of repetitions in reserve
              of the set, where RPE 9 means a trainee is 1 repetition from a 10/10
              exertion and 0 reps in reserve and an RPE 10 is max effort with nothing left. </p>
              <p className="text-2xl lg:text-3xl font-bold py-3"> 
              Why train with RPE? </p> 
              <p className="text-lg lg:text-2xl">The primary advantage of RPE is that it allows for "undulating periodization",
              where if a trainee has an off day, they can adjust the absolute weight they
              are using to the appropriate effort level, as opposed to potentially using
              an inappropriately prescribed (given the circumstances) percentage of one
              repetition max based model. One advantage of the percentage of one rep max based model, is that it is
              extremely straightforward for beginner trainees, where they can simply
              multiply their best set of one rep on an exercise by the prescribed percentage,
              which will dictate what weight they are being directed to use on the exercise.
            </p>
            <p className="text-2xl lg:text-3xl font-bold py-3">
              How Can an RPE Calculator Help?</p>
              <p className="text-lg lg:text-2xl"> This advantage of percentage based training can be mirrored in RPE based training by using a rep-max calculator
              that provides an anchor point or suggestion for the beginner trainee to plan
              their RPE based set around, and then be prepared to adjust further depending on feel.
            </p>
          </div>
          <div className="flex justify-center px-10">
            <div className="flex justify-center px-10 py-8">
            <img src="https://images.pexels.com/photos/4793229/pexels-photo-4793229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="royalty free plates pic" className="w-full md:max-w-md lg:max-w-lg md:w-full rounded-md object-cover"/>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center py-7">
      {isVisible && <p>
        <Link to="/rpe-calc">
        <button 
      onClick={handleClick} 
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl">   
          Get Started  
          </button>      
        </Link>
        </p>
      }
      {!isVisible && menu}
      </div>
    </>
  );
}

export default EraseButton;
