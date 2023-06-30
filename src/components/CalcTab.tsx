import React, { ChangeEvent, useState, useEffect } from "react";
import algo from "./algo";
import OutputTable from "./outputtable";
import DropDown from "./dropdown";

interface ExerciseDatum {
  name: string;
  maxes: number[];
}

interface CalculatorTabProps {
  tabId: number;
  tabsProp: number[];
  exercise_data: ExerciseDatum[];
  exerciseNames: string[];
  setExerciseData: (exerciseData: ExerciseDatum[]) => void;
  setExerciseNames: (names: string[]) => void;
  setTabsProp: (tabsProp: number[]) => void;
  handleCloseTab: (tabId: number) => void;
}

const CalculatorTab: React.FC<CalculatorTabProps> = ({
  tabId,
  tabsProp,
  exercise_data,
  exerciseNames,
  setExerciseData,
  setExerciseNames,
  setTabsProp,
  handleCloseTab
}) => {
  const [exerciseName, setExerciseName] = useState<string>(exerciseNames[tabId]);
  const [onerepmax, setOneRepMax] = useState<number>(exercise_data[tabId]?.maxes[0] || 0);
  const [tworepmax, setTwoRepMax] = useState<number>(exercise_data[tabId]?.maxes[1] || 0);
  const [threerepmax, setThreeRepMax] = useState<number>(exercise_data[tabId]?.maxes[2] || 0);
  const [fourrepmax, setFourRepMax] = useState<number>(exercise_data[tabId]?.maxes[3] || 0);
  const [fiverepmax, setFiveRepMax] = useState<number>(exercise_data[tabId]?.maxes[4] || 0);

  useEffect(() => {
    setOneRepMax(exercise_data[tabId]?.maxes[0] || 0);
    setTwoRepMax(exercise_data[tabId]?.maxes[1] || 0);
    setThreeRepMax(exercise_data[tabId]?.maxes[2] || 0);
    setFourRepMax(exercise_data[tabId]?.maxes[3] || 0);
    setFiveRepMax(exercise_data[tabId]?.maxes[4] || 0);
  }, [exercise_data, tabId]);



  const handleExerciseNameChange = (value: string, tabId: number) => {
    const updatedExerciseData = (exercise_data as ExerciseDatum[]).map((item: ExerciseDatum, index: number) => {
      if (index === tabId) {
        return {
          ...item,
          name: value,
        };
      }
      return item;
    });
    setExerciseData(updatedExerciseData);

    const updatedExerciseNames = [...exerciseNames];
    updatedExerciseNames[tabId] = value;
    setExerciseNames(updatedExerciseNames);
    setExerciseName(value);
  };


  const handleOneRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes];
    if (maxes) {
      maxes[0] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setOneRepMax(value); // Update the state with the new value
    }
  };
  
  


  const handleTwoRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[1] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setTwoRepMax(value)
    }
  };
  

  const handleThreeRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[2] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setThreeRepMax(value)
    }
  };
  

  const handleFourRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[3] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setFourRepMax(value)
    }
  };
  

  const handleFiveRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[4] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setFiveRepMax(value)
    }
  };
  
  // const handleCloseTab = (tabId: number) => {
  //   // Find the corresponding tab ID in the tabs state
  //   const closeTabId = tabsProp[tabId];
  
  //   // Remove the tab from the tabs state
  //   const updatedTabs = tabsProp.filter((id) => id !== closeTabId);
  //   setTabsProp(updatedTabs);
  
  //   // Find the index of the tab ID within the exerciseData state
  //   //const exerciseDataIndex = exerciseData[tabId].index;
  
  //   if (closeTabId !== -1) {
  //     // Remove the corresponding exercise data from the exerciseData state
  //     const updatedExerciseData = [...exercise_data];
  //     updatedExerciseData.splice(closeTabId, 1);
  //     setExerciseData(updatedExerciseData);
  //     const updatedMaxes = updatedExerciseData.map((exercise_data) => exercise_data.maxes);
  //     const flattenedMaxes = updatedMaxes.flat(); // Flatten the 2D array
  //     setMaxes(flattenedMaxes);
  //   }
  
  //   // Remove the corresponding exercise name from the exerciseNames state
  //   const updatedExerciseNames = [...exerciseNames];
  //   updatedExerciseNames.splice(closeTabId, 1);
  //   setExerciseNames(updatedExerciseNames);
    
  // };

  const handleExerciseNameBlur = () => {
    handleExerciseNameChange(exerciseName, tabId);
  };

  const [selectSet, setSelectSet] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const Sets = () => {
    return ["Set of 1", "Set of 2", "Set of 3", "Set of 4", "Set of 5", "Set of 6", "Set of 7", "Set of 8"];
  };
  //var maxesIndex = tabsProp[tabId]+1
  //var maxes: number[] = exercise_data[tabId].maxes
  //console.log("exercise_data",exercise_data)
  //console.log("maxes:",maxes)
  // var onerepmax = exercise_data[tabId].maxes[0]
  // var tworepmax = exercise_data[tabId].maxes[1]
  // var threerepmax = exercise_data[tabId].maxes[2]
  // var fourrepmax = exercise_data[tabId].maxes[3]
  // var fiverepmax = exercise_data[tabId].maxes[4]
  //  console.log("exercise_data.maxes",exercise_data[tabId].maxes)
   //console.log('tabId:', tabId, 'maxes', maxes)
  // console.log("tabId:", tabId, "onerepmax calctab:", onerepmax)
  // console.log("tabId:", tabId,"tworepmax calctab:",tworepmax)
  // console.log("tabId:", tabId,"threerepmax calctab:",threerepmax)
  // console.log("tabId:", tabId,"fourrepmax calctab:",fourrepmax)

  const RMs = algo(onerepmax, tworepmax, threerepmax, fourrepmax, fiverepmax)

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };
  const SetSelection = (Set: string): void => {
    setSelectSet(Set);
  };

  // const [savedOneRepMax, setSavedOneRepMax] = useState<number>(0);
  // const [savedTwoRepMax, setSavedTwoRepMax] = useState<number>(0);
  // const [savedThreeRepMax, setSavedThreeRepMax] = useState<number>(0);
  // const [savedName, setSavedName] = useState<string>("");
  // const [inputModified, setInputModified] = useState(false);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/rpe-calc');
  //       const result = await response.json();
  //       setSavedName(result.exerciseNames)
  //       setSavedOneRepMax(result.oneRepMax);
  //       setSavedTwoRepMax(result.twoRepMax);
  //       setSavedThreeRepMax(result.threeRepMax);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //console.log("saveName:", savedName)
  //console.log("saved1rm:", savedOneRepMax);
  //console.log("saved2rm:", savedTwoRepMax);
  //console.log("saved3rm:", savedThreeRepMax);

  return (
    <div className="pb-10">
      <div className="w-full">
        <div className="p-4 border-b border-gray-300">
          <div className="flex flex-row justify-between mb-2">
            <input
              type="text"
              className="text-2xl text-white font-bold bg-gray-700 border border-white"
              value={exerciseNames[tabId]}
              onChange={(e) =>
                handleExerciseNameChange(e.target.value, tabId)}
              onBlur={handleExerciseNameBlur}
            />
            <button
              className="text-white font-bold text-xl hover:text-red-700"
              onClick={() => handleCloseTab(tabId)}
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
                value={onerepmax === 0 ? "" : onerepmax}
                onChange={(e) => {
                  handleOneRMChange(e, tabId, exercise_data);
                }}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">2 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={tworepmax === 0 ? "" : tworepmax}
                onChange={(e) => {
                  handleTwoRMChange(e, tabId, exercise_data);
                }}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">3 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={threerepmax === 0 ? "" : threerepmax}
                onChange={(e) => {
                  handleThreeRMChange(e, tabId, exercise_data);
                }}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">4 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={fourrepmax === 0 ? "" : fourrepmax}
                onChange={(e) => handleFourRMChange(e, tabId, exercise_data)}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">5 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={fiverepmax === 0 ? "" : fiverepmax}
                onChange={(e) => handleFiveRMChange(e, tabId, exercise_data)}
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
