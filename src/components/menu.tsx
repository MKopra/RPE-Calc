import React, { useState, ChangeEvent } from "react";
import CalculatorTab from "./CalcTab";
import BackButton from "./backbutton";


function Menu() {
  const [tabs, setTabs] = useState<number[]>([]);
  const [nextTabId, setNextTabId] = useState(1);
  const [tabInputs, setTabInputs] = useState<{ [key: number]: any }>({});
  const [visibleTab, setVisibleTab] = useState<number | null>(null);
  const [exerciseNames, setExerciseNames] = useState<{ [key: number]: string }>({});

  const toggleTabVisibility = (tabId: number) => {
    setVisibleTab(tabId === visibleTab ? null : tabId);
  };

  const handleCloseTab = (tabId:number) => {
    // Remove the tab from the tabs state
    const updatedTabs = tabs.filter((id) => id !== tabId);
    setTabs(updatedTabs);

    // Remove the corresponding input values from the tabInputs state
    const updatedTabInputs = { ...tabInputs };
    delete updatedTabInputs[tabId];
    setTabInputs(updatedTabInputs);
    const updatedExerciseNames = { ...exerciseNames };
    delete updatedExerciseNames[tabId];
    setExerciseNames(updatedExerciseNames);
  };

  const handleExerciseNameChange = (value: string, tabId: number) => {
    const name = value;
    setExerciseNames((prevExerciseNames) => ({
      ...prevExerciseNames,
      [tabId]: name,
    }));
  };

  const handleOneRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number) => {
    setTabInputs((prevInputs) => ({
      ...prevInputs,
      [tabId]: {
        ...prevInputs[tabId],
        oneRepMax: +e.target.value,
      },
    }));
  };

  const handleTwoRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number) => {
    setTabInputs((prevInputs) => ({
      ...prevInputs,
      [tabId]: {
        ...prevInputs[tabId],
        twoRepMax: +e.target.value,
      },
    }));
  };

  const handleThreeRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number) => {
    setTabInputs((prevInputs) => ({
      ...prevInputs,
      [tabId]: {
        ...prevInputs[tabId],
        threeRepMax: +e.target.value,
      },
    }));
  };

  const handleFourRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number) => {
    setTabInputs((prevInputs) => ({
      ...prevInputs,
      [tabId]: {
        ...prevInputs[tabId],
        fourRepMax: +e.target.value,
      },
    }));
  };

  const handleFiveRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number) => {
    setTabInputs((prevInputs) => ({
      ...prevInputs,
      [tabId]: {
        ...prevInputs[tabId],
        fiveRepMax: +e.target.value,
      },
    }));
  };

  const addTab = () => {
    setTabs((prevTabs) => [...prevTabs, nextTabId]);
    setTabInputs((prevInputs) => ({
      ...prevInputs,
      [nextTabId]: {
        oneRepMax: 0,
        twoRepMax: 0,
        threeRepMax: 0,
        fourRepMax: 0,
        fiveRepMax: 0,
      },
    }));
    setExerciseNames((prevExerciseNames) => ({
      ...prevExerciseNames,
      [nextTabId]: `Exercise ${nextTabId}`,
    }));
    setNextTabId((prevId) => prevId + 1);
  };

  const deleteTab = (tabId: number) => {
    setTabs((prevTabs) => prevTabs.filter((id) => id !== tabId));
    setTabInputs((prevInputs) => {
      const updatedInputs = { ...prevInputs };
      delete updatedInputs[tabId];
      return updatedInputs;
    });
    setExerciseNames((prevExerciseNames) => {
      const updatedExerciseNames = { ...prevExerciseNames };
      delete updatedExerciseNames[tabId];
      return updatedExerciseNames;
    });
  };
  console.log(exerciseNames);

  return (
    <div className="min-h-screen">
      <div className="flex items-center py-2 bg-gray-600">
        <h2 className="text-3xl text-white font-semibold pr-10 pl-3">Exercise Library</h2>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-md shadow-md"
          onClick={addTab}
        >
          Add Exercise
        </button>
        <div className="flex flex-grow justify-end"> <BackButton/></div>
      </div>
      <div className="flex">
        <div className="w-1/6  bg-gray-600 min-h-screen">
          <ul>
            {tabs.map((tabId) => (
              <li key={tabId} className="border border-black">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 shadow-md w-full justify-center"
                  onClick={() => toggleTabVisibility(tabId)}
                >
                  {exerciseNames[tabId]}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4">
          {tabs.map((tabId) => (
            <div
            key={tabId}
            className={`px-4 ${visibleTab === tabId ? "" : "hidden"}`}>
            <CalculatorTab
              key={tabId}
              tabId={tabId}
              inputValues={tabInputs[tabId]}
              onOneRMChange={(e) => handleOneRMChange(e, tabId)}
              onTwoRMChange={(e) => handleTwoRMChange(e, tabId)}
              onThreeRMChange={(e) => handleThreeRMChange(e, tabId)}
              onFourRMChange={(e) => handleFourRMChange(e, tabId)}
              onFiveRMChange={(e) => handleFiveRMChange(e, tabId)}
              onCloseTab={() => handleCloseTab(tabId)}
              exerciseNames = {exerciseNames[tabId]}
              onExerciseNameChange={handleExerciseNameChange}
            />
            </div>
          ))}

            </div>
            </div>
 
    </div>
  );
}

export default Menu;
