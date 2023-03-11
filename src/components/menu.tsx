import React, { useState, ChangeEvent } from "react";
import DropDown from "./dropdown";
import setConditionals from "./utils";
import math from  "./algo"

function Menu() {
  const [selectSet, setSelectSet] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const Sets = () => {
    return ["Set of 1", "Set of 2", "Set of 3", "Set of 4"];
  };

  /** below is all the code i took from the original app to attempt to do conditionals in menu */
  const [onerepmax, setOneRM] = useState(Number);
  const handleOneRMChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOneRM(+e.target.value);
  }
  const [tworepmax, setTwoRM] = useState(Number);
  const handleTwoRMChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTwoRM(+e.target.value);
  }
  const [threerepmax, setThreeRM] = useState(Number);
  const handleThreeRMChange = (e: ChangeEvent<HTMLInputElement>) => {
    setThreeRM(+e.target.value);
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

  return (

    <>
      <label>1 Rep Max</label>
      <input type="number" id="onerepmax" value={onerepmax === 0 ? '' : onerepmax} onChange={handleOneRMChange}>

      </input>
      <br />
      <label>2 Rep Max</label>
      <input type="number" id="tworepmax" value={tworepmax === 0 ? '' : tworepmax} onChange={handleTwoRMChange}>

      </input>
      <br />
      <label>3 Rep Max</label>
      <input type="number" id="threerepmax" value={threerepmax === 0 ? '' : threerepmax} onChange={handleThreeRMChange}>

      </input>
      <br />
      <div className="announcement">
        <div>
          {selectSet
            ? `You selected ${selectSet}`
            : "Select the number of repetitions in your set"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <button>{selectSet ? "Select: " + selectSet : "Select ..."} </button>
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

      <div>
        {math(selectSet, onerepmax, tworepmax, threerepmax)}
      </div>
    </>
  );

};


export default Menu;
