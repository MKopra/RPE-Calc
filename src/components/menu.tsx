import React, { useState, useEffect, ChangeEvent } from "react";
import CalculatorTab from "./CalcTab";
import BackButton from "./backbutton";
import axios from 'axios';
import { fetchData } from './utils';
import { User } from "./login";

interface ExerciseDatum {
    name: string;
    maxes: number[];
}

interface InputDataWithDate {
    user_id: string;
    exercise_data: ExerciseDatum[];
    created_at: Date
}

function Menu() {
    const [tabs, setTabs] = useState<number[]>([0]);
    const [visibleTab, setVisibleTab] = useState<number>(0);
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [exerciseData, setExerciseData] = useState<ExerciseDatum[]>([
        { name: "Exercise 1", maxes: [0, 0, 0, 0, 0] }
    ]);
    const [exerciseNames, setExerciseNames] = useState<string[]>(exerciseData.map((exercise) => exercise.name));
    const [message, setMessage] = useState<string>("");


    useEffect(() => {
        const newTabIndex = tabs.indexOf(visibleTab);
        if (newTabIndex !== -1) {
          setTabIndex(newTabIndex);
        }
      }, [visibleTab, tabs]);      
      

    const handleClick = async () => { ///// handleLoadData
        if (typeof User === 'string' && User.length === 24) {
            try {
                console.log("handleclick user print",User)
                const data = await fetchData(User);
                setExerciseData(data.exercise_data);
                setExerciseNames(data.exercise_data.map((item: { name: string }) => item.name));
                console.log('exerciseData', exerciseData)
                console.log("exercise_data ie everything", data)
                const initialTabs = Array.from({ length: data.exercise_data.length }, (_, index) => index);
                setTabs(initialTabs);
                setMessage('')
            } catch (error) {
                console.error('Error loading data:', error);
            }
        }
        else {
            setMessage("Please login to save or load data");
          }
    };

    const toggleTabVisibility = (tabIndex: number) => {
        setVisibleTab(tabIndex);
        setTabIndex(tabIndex); // Set the tabIndex state to the clicked tab index
    };

    const addTab = () => {
        setTabs((prevTabs) => [...prevTabs, exerciseNames.length]);

        setExerciseData((prevExerciseData) => [
            ...prevExerciseData,
            {
                name: "",
                maxes: [0, 0, 0, 0, 0]
            }
        ]);

        setExerciseNames((prevExerciseNames) => [
            ...prevExerciseNames,
            `Exercise ${exerciseNames.length + 1}`
        ]);
    };

    const handleSaveClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (User !== undefined) {
        const data: InputDataWithDate = {
            user_id: User,
            exercise_data: exerciseData,
            created_at: new Date(),
        };
            event.preventDefault();
            try {
                console.log("data being submitted to API:", data)
                const response = await fetch('http://127.0.0.1:8000/exercises/' + User, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
    
                // Handle the response as needed
                console.log('Response:', response);
            } catch (error) {
                // Handle the error
                console.error('Error submitting form:', error);
            }
            setMessage('')
        }
        else {setMessage("Please login to save or load data")} 
    };

        
    const handleCloseTab = (tabIndex: number) => {
        // Find the corresponding tab ID in the tabs state
        const tabId = tabs[tabIndex];
      
        // Remove the tab from the tabs state
        const updatedTabs = tabs.filter((id) => id !== tabId);
      
        // Update the tabIndex values in the updatedTabs array
        const updatedTabsWithIndex = updatedTabs.map((id, index) => {
          return id > tabId ? id - 1 : id;
        });
      
        setTabs(updatedTabsWithIndex);
      
        // Find the index of the tab ID within the exerciseData state
        const updatedExerciseData = [...exerciseData];
        const updatedExerciseNames = [...exerciseNames];
      
        if (tabId !== -1) {
          // Remove the corresponding exercise data from the exerciseData state
          updatedExerciseData.splice(tabId, 1);
      
          // If the closed tab is the currently visible tab,
          // update the visibleTab state to the first remaining tab
          if (tabIndex === visibleTab) {
            setVisibleTab(updatedTabsWithIndex[0]);
          }
        }
      
        // Remove the corresponding exercise name from the exerciseNames state
        updatedExerciseNames.splice(tabIndex, 1);
      
        // Update the state variables
        setExerciseData(updatedExerciseData);
        setExerciseNames(updatedExerciseNames);
      };
    
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
                <div className="pl-10">
                    <button
                        type='submit'
                        onClick={handleSaveClick}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-md shadow-md">
                        Save
                    </button>
                </div>
                <div className="pl-10">
                    <button
                        type='submit'
                        onClick={handleClick}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-md shadow-md">
                        Load Data
                    </button>
                    {message && <span className="text-white font-bold py-2 px-3 ">{message}</span>}
                </div>
                <div className="flex flex-grow justify-end"> <BackButton /></div>
            </div>
            <div className="flex">
                <div className="w-1/6  bg-gray-600 min-h-screen">
                    <ul>
                        {exerciseNames.map((name: string, tabIndex: number) => (
                            <li key={tabIndex} className="border border-black">
                                <button
                                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 shadow-md w-full justify-center"
                                    onClick={() => toggleTabVisibility(tabIndex)}
                                >
                                    {exerciseNames[tabIndex]}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-3/4">
                    {tabs.map((tabIndex) => (
                        <div
                            key={tabIndex}
                            className={`px-4 ${visibleTab === tabIndex ? "" : "hidden"}`}>

                            <CalculatorTab
                                tabId={tabIndex}
                                exercise_data={exerciseData}
                                exerciseNames={exerciseNames}
                                setExerciseData={setExerciseData}
                                setExerciseNames={setExerciseNames}
                                handleCloseTab={() => handleCloseTab(tabIndex)}
                            />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default Menu;
