import React, { useState, ChangeEvent } from "react";
import DropDown from "./dropdown";
import onerepalgo from "./onerepalgo"
import OneRepTable from "./onereptable";
import '../index.css';
import BackButton from "./backbutton";




function OneRepMenu() {
  const [selectSet, setSelectSet] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const Sets = () => {
    return ["Set of 1", "Set of 2", "Set of 3", "Set of 4", "Set of 5", "Set of 6", "Set of 7", "Set of 8","Set of 9", "Set of 10"];
  };

  /** below is all the code i took from the original app to attempt to do conditionals in menu */
  const [weightLifted, setWeightLifted] = useState(Number);
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeightLifted(+e.target.value);
  }
  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };
  /**
   * Callback function to consume the
   * Set name from the child component
   *
   * @param Set  The selected Set
   */
  const SetSelection = (Set: string): void => {
    setSelectSet(Set);
  };

  const oRMs = onerepalgo(selectSet, weightLifted)
  return (
<div>
<div>
<p className="flex flex wrap justify-center text-white text-3xl font-bold items-top">One Rep Max Calculator</p>
    <div className="flex flex-wrap py-10 h-full lg:h-screen justify-center items-top">
      <div className="bg-gray-600 p-6 rounded-lg shadow-md h-min justify-center items-center">
        <div>
        <div>
          <label className="px-2 text-white text-lg font-semibold">Weight Lifted :  </label>
          <input className="rounded-md" type="number" value={weightLifted === 0 ? '' : weightLifted} onChange={handleWeightChange} />
          <br />
        </div>
        <br />
        <br />
        <div>
          <div className="py-2 text-white text-lg font-semibold">
            {selectSet
              ? ``
              : "Select the number of repetitions completed"}
          </div>
        </div>
        </div>
        <div>
        <button
  className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded-md shadow-md ${showDropDown ? "active" : ""}`}
  onClick={(): void => toggleDropDown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded-md shadow-md hover:bg-gray-600 active:outline-none">{selectSet ? "Selected: " + selectSet : "Select ..."} </button>
          {showDropDown && (
            <DropDown
              Sets={Sets()}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropDown()}
              SetSelection={SetSelection}
            />
          )}
        </button>
        <br />
        <br />
        </div>
      </div>
      <div className="px-4 lg:px-20">
        <div className="py-10">
          <div className="justify-center py-5 items-start bg-white rounded-md shadow-md font-semibold h-min">
            <OneRepTable
              oRMs={oRMs} />
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="flex flex-col items-center justify-end"><BackButton/></div>
    </div>
  );

};


export default OneRepMenu;
