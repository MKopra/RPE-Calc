import React, { FunctionComponent, useState, ChangeEvent, useRef } from "react";
import DropDown from "./dropdown";
import ReactDOMServer from 'react-dom/server'
import { SelectUnstyledContext } from "@mui/base";
import { Module } from "module";


function Menu() {
  const [selectSet, setSelectSet] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const Sets = () => {
    return ["Set of 1", "Set of 2", "Set of 3", "Set of 4"];
  };
  /** below is all the code i took from the original app to attempt to do conditionals in menu */
  const [onerepmax, setValue] = useState(Number);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setValue(+e.target.value);}
  const [tworepmax, setValue2] = useState<number>();
  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) =>{
    setValue2(+e.target.value);}
  const [threerepmax, setValue3] = useState<string | number>('');
  const handleChange3 = (e: ChangeEvent<HTMLInputElement>) =>{
      setValue3(+e.target.value);}
  const oneRMval = useRef(onerepmax)
  const twoRMval = useRef(tworepmax)
  const threeRMval = useRef(threerepmax)
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
  const props = selectSet.toString()

  
  return (
    
    <>
            <label>1 Rep Max</label>
            <input type="number" id="onerepmax" value={onerepmax === 0 ? '' : onerepmax} onChange={handleChange}>

            </input>
            <br />
            <label>2 Rep Max</label>
            <input type="number" id="tworepmax" value={tworepmax === 0 ? '' : tworepmax} onChange={handleChange2}>

            </input>
            <br />
            <label>3 Rep Max</label>
            <input type="number" id="threerepmax" value={threerepmax === 0 ? '' : threerepmax} onChange={handleChange3}>

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
            {selectSet == 'Set of 1' 
            ? `RPE10 = ${onerepmax}
              RPE9 = ${tworepmax}
              RPE8 = ${threerepmax}
              RPE7 = ${onerepmax * 0.883}
              RPE6 = ${onerepmax * 0.86}
              RPE5 = ${onerepmax * 0.833}`
              
            : ""}
            {selectSet == 'Set of 2'
            ? `RPE10 = ${tworepmax}
              RPE9 = ${threerepmax}
              RPE8 = ${onerepmax * 0.883}
              RPE7 = ${onerepmax * 0.86}
              RPE6 = ${onerepmax * 0.833}
              RPE5 = ${onerepmax * 0.803}`
              
            : ""}
            {selectSet == 'Set of 3'
            ? `RPE10 = ${threerepmax}
              RPE9 = ${onerepmax * 0.883}
              RPE8 = ${onerepmax * 0.86}
              RPE7 = ${onerepmax * 0.833}
              RPE6 = ${onerepmax * 0.803}
              RPE5 = ${onerepmax * 0.777}`
              
            : ""}
            {selectSet == 'Set of 3'
            ? `RPE10 = ${threerepmax}
              RPE9 = ${onerepmax * 0.883}
              RPE8 = ${onerepmax * 0.86}
              RPE7 = ${onerepmax * 0.833}
              RPE6 = ${onerepmax * 0.803}
              RPE5 = ${onerepmax * 0.777}`
              
            : ""}
            {selectSet == 'Set of 4'
            ? `RPE10 = ${onerepmax * 0.883}
              RPE9 = ${onerepmax * 0.86}
              RPE8 = ${onerepmax * 0.833}
              RPE7 = ${onerepmax * 0.803}
              RPE6 = ${onerepmax * 0.777}
              RPE5 = ${onerepmax * 0.753}`
              
            : ""}
      </div>
    </>
  );
  
};


export default Menu;
