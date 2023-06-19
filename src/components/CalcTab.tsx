import React, { ChangeEvent,useState } from "react";
import algo from "./algo";
import OutputTable from "./outputtable";
import DropDown from "./dropdown";

interface CalculatorTabProps {
  tabId: number;
  inputValues: {
    oneRepMax: number;
    twoRepMax: number;
    threeRepMax: number;
    fourRepMax: number;
    fiveRepMax: number;
  };
  onOneRMChange: (e: ChangeEvent<HTMLInputElement>, tabId: number) => void;
  onTwoRMChange: (e: ChangeEvent<HTMLInputElement>, tabId: number) => void;
  onThreeRMChange: (e: ChangeEvent<HTMLInputElement>, tabId: number) => void;
  onFourRMChange: (e: ChangeEvent<HTMLInputElement>, tabId: number) => void;
  onFiveRMChange: (e: ChangeEvent<HTMLInputElement>, tabId: number) => void;
  onCloseTab: (tabId: number) => void;
  exerciseNames: { [tabId: number]: string };
  onExerciseNameChange: (value: string, tabId: number) => void;
}

const CalculatorTab: React.FC<CalculatorTabProps> = ({
  tabId,
  inputValues,
  onOneRMChange,
  onTwoRMChange,
  onThreeRMChange,
  onFourRMChange,
  onFiveRMChange,
  onCloseTab,
  exerciseNames,
  onExerciseNameChange,
}) => {
const [exerciseName, setExerciseName] = useState("");

const handleExerciseNameUpdate = () => {
    onExerciseNameChange(exerciseName, tabId)
    setExerciseName(exerciseName);
};

const handleExerciseNameBlur = () => {
    handleExerciseNameUpdate();
};
const [selectSet, setSelectSet] = useState<string>("");
const [showDropDown, setShowDropDown] = useState<boolean>(false);
const Sets = () => {
    return ["Set of 1", "Set of 2", "Set of 3", "Set of 4", "Set of 5", "Set of 6", "Set of 7", "Set of 8"];
};
const onerepmax = inputValues.oneRepMax
const tworepmax = inputValues.twoRepMax
const threerepmax = inputValues.threeRepMax
const fourrepmax = inputValues.fourRepMax
const fiverepmax = inputValues.fiveRepMax

const RMs = algo(onerepmax, tworepmax, threerepmax, fourrepmax,fiverepmax)
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
    <div className="pb-10">
    <div className="w-full">
    <div className="p-4 border-b border-gray-300">
      <div className="flex flex-row justify-between mb-2">
        <input
        type="text"
        className="text-2xl text-white font-bold bg-gray-700 border border-white"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        onBlur={handleExerciseNameBlur}
        />
        <button
          className="text-white font-bold text-xl hover:text-red-700"
          onClick={() => onCloseTab(tabId)}
        >
          X
        </button>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <div className="py-5 grid grid-cols-2 w-2/3">
            <label className="px-2 text-white text-xl font-bold flex justify-center">1 Rep Max:</label>
            <input
            className="rounded-md p-2"
            type="number"
            value={inputValues.oneRepMax === 0 ? "" : inputValues.oneRepMax}
            onChange={(e) => onOneRMChange(e, tabId)}
            />
        </div>
        <div className="py-5 grid grid-cols-2 w-2/3">
            <label className="px-2 text-white text-xl font-bold flex justify-center">2 Rep Max:</label>
            <input
            className="rounded-md p-2"
            type="number"
            value={inputValues.twoRepMax === 0 ? "" : inputValues.twoRepMax}
            onChange={(e) => onTwoRMChange(e, tabId)}
            />
        </div>
        <div className="py-5 grid grid-cols-2 w-2/3"> 
            <label className="px-2 text-white text-xl font-bold flex justify-center">3 Rep Max:</label>
            <input
            className="rounded-md p-2"
            type="number"
            value={inputValues.threeRepMax === 0 ? "" : inputValues.threeRepMax}
            onChange={(e) => onThreeRMChange(e, tabId)}
            />
        </div>
        <div className="py-5 grid grid-cols-2 w-2/3">
            <label className="px-2 text-white text-xl font-bold flex justify-center">4 Rep Max:</label>
            <input
            className="rounded-md p-2"
            type="number"
            value={inputValues.fourRepMax === 0 ? "" : inputValues.fourRepMax}
            onChange={(e) => onFourRMChange(e, tabId)}
            />
        </div>
        <div className="py-5 grid grid-cols-2 w-2/3">
            <label className="px-2 text-white text-xl font-bold flex justify-center">5 Rep Max:</label>
            <input
            className="rounded-md p-2"
            type="number"
            value={inputValues.fiveRepMax === 0 ? "" : inputValues.fiveRepMax}
            onChange={(e) => onFiveRMChange(e, tabId)}
            />
        </div>
      </div>
      <div className="flex flex-row align-top w-full justify-center">
      <div className="px-4 w-full">
        <div className="py-10">
          <div className="justify-center py-5 items-start bg-white rounded-md shadow-md font-semibold h-full">
            <OutputTable
            selectSet={selectSet}
              RMs={RMs} />
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="flex justify-left">
      <div className="py-2 text-white text-lg font-semiboldt">
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
    </div>
    </div>
  );
};

export default CalculatorTab;
