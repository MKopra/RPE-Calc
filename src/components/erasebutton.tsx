import { useState } from "react";

function EraseButton({ menu }: { menu: JSX.Element }) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="wrapper flex">
          <div className="text-container p-4 w-1/2 bg-gray-600 p-6 rounded-lg shadow-md">
            <p className="text">
              What is RPE? </p>
              <p className="text">
              Rate of perceived exertion is a method of measuring
              intensity in resistance/strength training on a scale of 1-10, where the
              difference between the RPE and 10 is the number of repetitions in reserve
              of the set, where RPE 9 means a trainee is 1 repetition from a 10/10
              exertion and 0 reps in reserve and an RPE 10 is max effort with nothing left. </p>
              <p className="text"> Why train with RPE? </p> 
              <p className="text">The primary advantage of RPE is that it allows for "undulating periodization",
              where if a trainee has an off day, they can adjust the absolute weight they
              are using to the appropriate effort level, as opposed to potentially using
              an inappropriately prescribed (given the circumstances) percentage of one
              repetition max based model. One advantage of the percentage of one rep max based model, is that it is
              extremely straightforward for beginner trainees, where they can simply
              multiply their best set of one rep on an exercise by the prescribed percentage,
              which will dictate what weight they are being directed to use on the exercise.
            </p>
            <p className="text">
              How Can an RPE Calculator Help?</p>
              <p className="text"> This advantage of percentage based training can be mirrored in RPE based training by using a rep-max calculator
              that provides an anchor point or suggestion for the beginner trainee to plan
              their RPE based set around, and then be prepared to adjust further depending on feel.
            </p>
          </div>
          <div className="image-container w-1/2 ">
          <img src="https://images.pexels.com/photos/4793229/pexels-photo-4793229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="royalty free plates pic" className="w-3/4 align top" style={{ objectPosition: 'top', objectFit: 'cover', height: '625px' }}/>
          </div>
        </div>
      )}
      {isVisible && <button 
      onClick={handleClick} 
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded-md shadow-md hover:bg-gray-600 active:outline-none"
    style={{ fontSize: '0.9rem' }}>
        Get Started
      </button>}
      {!isVisible && menu}
    </>
  );
}

export default EraseButton;
