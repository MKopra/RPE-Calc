import React, { useState, ChangeEvent } from "react";
import DropDown from "./dropdown";

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

  var setConditionals = (selectSet: string, onerepmax: number, tworepmax: number, threerepmax: number) => {
    const setOfOneFirstEntryOnly = selectSet == "Set of 1" && onerepmax != 0 && tworepmax == 0 && threerepmax == 0
    const setOfOneFirstTwoEntry = selectSet == "Set of 1" && onerepmax != 0 && tworepmax != 0 && threerepmax == 0
    const setOfOneLastTwoEntry = selectSet == "Set of 1" && onerepmax == 0 && tworepmax != 0 && threerepmax != 0
    const setOfOneFirstLastEntry = selectSet == "Set of 1" && onerepmax != 0 && tworepmax == 0 && threerepmax != 0
    const setOfOneSecondEntryOnly = selectSet == "Set of 1" && onerepmax == 0 && tworepmax != 0 && threerepmax == 0
    const setOfOneLastEntryOnly = selectSet == "Set of 1" && onerepmax == 0 && tworepmax == 0 && threerepmax != 0
    const setOfOneAllEntry = selectSet == "Set of 1" && onerepmax != 0 && tworepmax != 0 && threerepmax != 0
    const setOfTwoFirstEntryOnly = selectSet == "Set of 2" && onerepmax != 0 && tworepmax == 0 && threerepmax == 0
    const setOfTwoFirstTwoEntry = selectSet == "Set of 2" && onerepmax != 0 && tworepmax != 0 && threerepmax == 0
    const setOfTwoLastTwoEntry = selectSet == "Set of 2" && onerepmax == 0 && tworepmax != 0 && threerepmax != 0
    const setOfTwoFirstLastEntry = selectSet == "Set of 2" && onerepmax != 0 && tworepmax == 0 && threerepmax != 0
    const setOfTwoSecondEntryOnly = selectSet == "Set of 2" && onerepmax == 0 && tworepmax != 0 && threerepmax == 0
    const setOfTwoLastEntryOnly = selectSet == "Set of 2" && onerepmax == 0 && tworepmax == 0 && threerepmax != 0
    const setOfTwoAllEntry = selectSet == "Set of 2" && onerepmax != 0 && tworepmax != 0 && threerepmax != 0
    const setOfThreeFirstEntryOnly = selectSet == "Set of 3" && onerepmax != 0 && tworepmax == 0 && threerepmax == 0
    const setOfThreeFirstTwoEntry = selectSet == "Set of 3" && onerepmax != 0 && tworepmax != 0 && threerepmax == 0
    const setOfThreeLastTwoEntry = selectSet == "Set of 3" && onerepmax == 0 && tworepmax != 0 && threerepmax != 0
    const setOfThreeFirstLastEntry = selectSet == "Set of 3" && onerepmax != 0 && tworepmax == 0 && threerepmax != 0
    const setOfThreeSecondEntryOnly = selectSet == "Set of 3" && onerepmax == 0 && tworepmax != 0 && threerepmax == 0
    const setOfThreeLastEntryOnly = selectSet == "Set of 3" && onerepmax == 0 && tworepmax == 0 && threerepmax != 0
    const setOfThreeAllEntry = selectSet == "Set of 3" && onerepmax != 0 && tworepmax != 0 && threerepmax != 0
    const setOfFourFirstEntryOnly = selectSet == "Set of 4" && onerepmax != 0 && tworepmax == 0 && threerepmax == 0
    const setOfFourFirstTwoEntry = selectSet == "Set of 4" && onerepmax != 0 && tworepmax != 0 && threerepmax == 0
    const setOfFourLastTwoEntry = selectSet == "Set of 4" && onerepmax == 0 && tworepmax != 0 && threerepmax != 0
    const setOfFourFirstLastEntry = selectSet == "Set of 4" && onerepmax != 0 && tworepmax == 0 && threerepmax != 0
    const setOfFourSecondEntryOnly = selectSet == "Set of 4" && onerepmax == 0 && tworepmax != 0 && threerepmax == 0
    const setOfFourLastEntryOnly = selectSet == "Set of 4" && onerepmax == 0 && tworepmax == 0 && threerepmax != 0
    const setOfFourAllEntry = selectSet == "Set of 4" && onerepmax != 0 && tworepmax != 0 && threerepmax != 0

    if (setOfOneFirstEntryOnly)
      return (
        <header>
          <div>RPE10 = {onerepmax}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.94}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.91}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.833}</div>
        </header>
      );
    if (setOfOneFirstTwoEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax}</div>
          <br />
          <div>RPE9 = {tworepmax}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.91}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.833}</div>
        </header>
      );
    if (setOfOneLastTwoEntry)
      return (
        <header>
          <div>RPE10 = {tworepmax / 0.94}</div>
          <br />
          <div>RPE9 = {tworepmax}</div>
          <br />
          <div>RPE8 = {threerepmax}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.883}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.86}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.833}</div>
        </header>
      );
    if (setOfOneFirstLastEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.94}</div>
          <br />
          <div>RPE8 = {threerepmax}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.833}</div>
        </header>
      );
    if (setOfOneAllEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax}</div>
          <br />
          <div>RPE9 = {tworepmax}</div>
          <br />
          <div>RPE8 = {threerepmax}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.833}</div>
        </header>
      );
    if (setOfOneSecondEntryOnly)
      return (
        <header>
          <div>RPE10 = {tworepmax / 0.94}</div>
          <br />
          <div>RPE9 = {tworepmax}</div>
          <br />
          <div>RPE8 = {(tworepmax / 0.94) * 0.91}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.883}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.86}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.833}</div>
        </header>
      );
    if (setOfOneLastEntryOnly)
      return (
        <header>
          <div>RPE10 = {threerepmax / 0.91}</div>
          <br />
          <div>RPE9 = {(threerepmax / 0.91) * 0.94}</div>
          <br />
          <div>RPE8 = {threerepmax}</div>
          <br />
          <div>RPE7 = {(threerepmax / 0.91) * 0.883}</div>
          <br />
          <div>RPE6 = {(threerepmax / 0.91) * 0.86}</div>
          <br />
          <div>RPE5 = {(threerepmax / 0.91) * 0.833}</div>
        </header>
      );
    ///////--------------------------------------------------------------------
    if (setOfTwoFirstEntryOnly)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.94}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.91}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.803}</div>
        </header>
      );
    if (setOfTwoFirstTwoEntry)
      return (
        <header>
          <div>RPE10 = {tworepmax}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.91}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.803}</div>
        </header>
      );
    if (setOfTwoLastTwoEntry)
      return (
        <header>
          <div>RPE10 = {tworepmax}</div>
          <br />
          <div>RPE9 = {threerepmax}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.86}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.833}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.803}</div>
        </header>
      );
    if (setOfTwoFirstLastEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.94}</div>
          <br />
          <div>RPE9 = {threerepmax}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.803}</div>
        </header>
      );
    if (setOfTwoAllEntry)
      return (
        <header>
          <div>RPE10 = {tworepmax}</div>
          <br />
          <div>RPE9 = {threerepmax}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.803}</div>
        </header>
      );
    if (setOfTwoSecondEntryOnly)
      return (
        <header>
          <div>RPE10 = {tworepmax}</div>
          <br />
          <div>RPE9 = {(tworepmax / 0.94) * 0.91}</div>
          <br />
          <div>RPE8 = {(tworepmax / 0.94) * 0.883}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.86}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.833}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.803}</div>
        </header>
      );
    if (setOfTwoLastEntryOnly)
      return (
        <header>
          <div>RPE10 = {(threerepmax / 0.91) * 0.94}</div>
          <br />
          <div>RPE9 = {threerepmax}</div>
          <br />
          <div>RPE8 = {(threerepmax / 0.91) * 0.883}</div>
          <br />
          <div>RPE7 = {(threerepmax / 0.91) * 0.86}</div>
          <br />
          <div>RPE6 = {(threerepmax / 0.91) * 0.833}</div>
          <br />
          <div>RPE5 = {(threerepmax / 0.91) * 0.803}</div>
        </header>
      );
    /////////////////////////////--------------------------------------------------------------------set of 3 start
    if (setOfThreeFirstEntryOnly)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.91}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.777}</div>
        </header>
      );
    if (setOfThreeFirstTwoEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.91}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.777}</div>
        </header>
      );
    if (setOfThreeLastTwoEntry)
      return (
        <header>
          <div>RPE10 = {threerepmax}</div>
          <br />
          <div>RPE9 = {(tworepmax / 0.94) * 883}</div>
          <br />
          <div>RPE8 = {(tworepmax / 0.94) * 0.86}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.833}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.803}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.777}</div>
        </header>
      );
    if (setOfThreeFirstLastEntry)
      return (
        <header>
          <div>RPE10 = {threerepmax}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.777}</div>
        </header>
      );
    if (setOfThreeAllEntry)
      return (
        <header>
          <div>RPE10 = {threerepmax}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.777}</div>
        </header>
      );
    if (setOfThreeSecondEntryOnly)
      return (
        <header>
          <div>RPE10 = {(tworepmax / 0.94) * 0.91}</div>
          <br />
          <div>RPE9 = {(tworepmax / 0.94) * 0.883}</div>
          <br />
          <div>RPE8 = {(tworepmax / 0.94) * 0.86}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.833}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.803}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.777}</div>
        </header>
      );
    if (setOfThreeLastEntryOnly)
      return (
        <header>
          <div>RPE10 = {threerepmax}</div>
          <br />
          <div>RPE9 = {(threerepmax / 0.91) * 0.883}</div>
          <br />
          <div>RPE8 = {(threerepmax / 0.91) * 0.86}</div>
          <br />
          <div>RPE7 = {(threerepmax / 0.91) * 0.833}</div>
          <br />
          <div>RPE6 = {(threerepmax / 0.91) * 0.803}</div>
          <br />
          <div>RPE5 = {(threerepmax / 0.91) * 0.777}</div>
        </header>
      );
    ////////////////////////////---------------------------------------------------- set of 4 start
    if (setOfFourFirstEntryOnly)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.777}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.753}</div>
        </header>
      );
    if (setOfFourFirstTwoEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.777}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.753}</div>
        </header>
      );
    if (setOfFourLastTwoEntry)
      return (
        <header>
          <div>RPE10 = {(tworepmax / 0.94) * 883}</div>
          <br />
          <div>RPE9 = {(tworepmax / 0.94) * 86}</div>
          <br />
          <div>RPE8 = {(tworepmax / 0.94) * 0.833}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.803}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.777}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.753}</div>
        </header>
      );
    if (setOfFourFirstLastEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.777}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.753}</div>
        </header>
      );
    if (setOfFourAllEntry)
      return (
        <header>
          <div>RPE10 = {onerepmax * 0.883}</div>
          <br />
          <div>RPE9 = {onerepmax * 0.86}</div>
          <br />
          <div>RPE8 = {onerepmax * 0.833}</div>
          <br />
          <div>RPE7 = {onerepmax * 0.803}</div>
          <br />
          <div>RPE6 = {onerepmax * 0.777}</div>
          <br />
          <div>RPE5 = {onerepmax * 0.753}</div>
        </header>
      );
    if (setOfFourSecondEntryOnly)
      return (
        <header>
          <div>RPE10 = {(tworepmax / 0.94) * 0.883}</div>
          <br />
          <div>RPE9 = {(tworepmax / 0.94) * 0.86}</div>
          <br />
          <div>RPE8 = {(tworepmax / 0.94) * 0.833}</div>
          <br />
          <div>RPE7 = {(tworepmax / 0.94) * 0.803}</div>
          <br />
          <div>RPE6 = {(tworepmax / 0.94) * 0.777}</div>
          <br />
          <div>RPE5 = {(tworepmax / 0.94) * 0.753}</div>
        </header>
      );
    if (setOfFourLastEntryOnly)
      return (
        <header>
          <div>RPE10 = {(threerepmax / 0.91) * 0.883}</div>
          <br />
          <div>RPE9 = {(threerepmax / 0.91) * 0.86}</div>
          <br />
          <div>RPE8 = {(threerepmax / 0.91) * 0.833}</div>
          <br />
          <div>RPE7 = {(threerepmax / 0.91) * 0.803}</div>
          <br />
          <div>RPE6 = {(threerepmax / 0.91) * 0.777}</div>
          <br />
          <div>RPE5 = {(threerepmax / 0.91) * 0.753}</div>
        </header>
      );
  }



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
        {setConditionals(selectSet, onerepmax, tworepmax, threerepmax)}
      </div>
    </>
  );

};


export default Menu;
