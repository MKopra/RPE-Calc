import React, { useState } from "react";
import Menu from "./menu";

function EraseButton({ menu }: { menu: JSX.Element }) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div>
          <p className="text">
            Mission Statement: Rate of perceived exertion is a method of measuring
            intensity in resistance/strength training on a scale of 1-10, where the
            difference between the RPE and 10 is the number of repetitions in reserve
            of the set, where RPE 9 means a trainee is 1 repetition from a 10/10
            exertion and 0 reps in reserve and an RPE 10 is max effort with nothing left.
            While the advantage of RPE is that it allows for undulating periodization,
            where if a trainee has an off day, they can adjust the absolute weight they
            are using to the appropriate effort level, as opposed to potentially using
            an inappropriately prescribed (given the circumstances) percentage of one
            repetition max based model.
          </p>
          <p className="text">
            One advantage of the percentage of one rep max based model, is that it is
            extremely straightforward for beginner trainees, where they can simply
            multiply their best set of one rep on an exercise by the prescribed percentage,
            which will dictate what weight they are being directed to use on the exercise.
            This however, can be mirrored in RPE based training by using a rep-max calculator
            that provides an anchor point or suggestion for the beginner trainee to plan
            their RPE based set around, and then adjust +/- 2.5% based on “good day” and
            “bad day” suggestions.
          </p>
        </div>
      )}
      {isVisible && <button onClick={handleClick}>Get Started</button>}
      {!isVisible && menu}
    </>
  );
}

export default EraseButton;
