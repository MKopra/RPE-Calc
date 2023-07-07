import React, { ChangeEvent, useState, useEffect } from "react";
import algo from "./algo";
import OutputTable from "./outputtable";
import DropDown from "./dropdown";
import { fetchRMHistory } from "./utils";
import { User } from "./login";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



interface ExerciseDatum {
  name: string;
  maxes: number[];
}

interface HistoryDatum {
  name:string;
  maxes: number[];
  created_at: Date;
}

interface CalculatorTabProps {
  tabId: number;
  exercise_data: ExerciseDatum[];
  exerciseNames: string[];
  setExerciseData: (exerciseData: ExerciseDatum[]) => void;
  setExerciseNames: (names: string[]) => void;
  handleCloseTab: (tabId: number) => void;
}

const CalculatorTab: React.FC<CalculatorTabProps> = ({
  tabId,
  exercise_data,
  exerciseNames,
  setExerciseData,
  setExerciseNames,
  handleCloseTab
}) => {
  const [exerciseName, setExerciseName] = useState<string>(exerciseNames[tabId]);
  const [onerepmax, setOneRepMax] = useState<number>(exercise_data[tabId]?.maxes[0] || 0);
  const [tworepmax, setTwoRepMax] = useState<number>(exercise_data[tabId]?.maxes[1] || 0);
  const [threerepmax, setThreeRepMax] = useState<number>(exercise_data[tabId]?.maxes[2] || 0);
  const [fourrepmax, setFourRepMax] = useState<number>(exercise_data[tabId]?.maxes[3] || 0);
  const [fiverepmax, setFiveRepMax] = useState<number>(exercise_data[tabId]?.maxes[4] || 0);
  const [sixrepmax, setSixRepMax] = useState<number>(exercise_data[tabId]?.maxes[5] || 0);
  const [sevenrepmax, setSevenRepMax] = useState<number>(exercise_data[tabId]?.maxes[6] || 0);
  const [eightrepmax, setEightRepMax] = useState<number>(exercise_data[tabId]?.maxes[7] || 0);
  const [ninerepmax, setNineRepMax] = useState<number>(exercise_data[tabId]?.maxes[8] || 0);
  const [tenrepmax, setTenRepMax] = useState<number>(exercise_data[tabId]?.maxes[9] || 0);
  const [showHistory, setShowHistory] = useState<boolean>(false); // New state for controlling history visibility
  const [historyEntries, setHistoryEntries] = useState<HistoryDatum[]>([]);
  const [currentEntryIndex, setCurrentEntryIndex] = useState<number>(0);


  useEffect(() => {
    setOneRepMax(exercise_data[tabId]?.maxes[0] || 0);
    setTwoRepMax(exercise_data[tabId]?.maxes[1] || 0);
    setThreeRepMax(exercise_data[tabId]?.maxes[2] || 0);
    setFourRepMax(exercise_data[tabId]?.maxes[3] || 0);
    setFiveRepMax(exercise_data[tabId]?.maxes[4] || 0);
    setSixRepMax(exercise_data[tabId]?.maxes[5] || 0);
    setSevenRepMax(exercise_data[tabId]?.maxes[6] || 0);
    setEightRepMax(exercise_data[tabId]?.maxes[7] || 0);
    setNineRepMax(exercise_data[tabId]?.maxes[8] || 0);
    setTenRepMax(exercise_data[tabId]?.maxes[9] || 0);
    setExerciseName(exerciseNames[tabId]);
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

  const handleSixRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[5] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setSixRepMax(value)
    }
  };

  const handleSevenRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[6] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setSevenRepMax(value)
    }
  };

  const handleEightRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[7] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setEightRepMax(value)
    }
  };

  const handleNineRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[8] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setNineRepMax(value)
    }
  };

  const handleTenRMChange = (e: ChangeEvent<HTMLInputElement>, tabId: number, prevExerciseData: ExerciseDatum[]) => {
    const value = +e.target.value;
    const updatedExerciseData = [...prevExerciseData];
    const maxes = [...updatedExerciseData[tabId]?.maxes]; // Retrieve maxes based on current tabId
    if (maxes) {
      maxes[9] = value;
      updatedExerciseData[tabId] = {
        ...updatedExerciseData[tabId],
        maxes: maxes,
      };
      setExerciseData(updatedExerciseData);
      setTenRepMax(value)
    }
  };

  const handleExerciseNameBlur = () => {
    handleExerciseNameChange(exerciseName, tabId);
  };

  const handleHistoryClick = async () => {
    if (typeof User == 'string'){
      console.log("ExerciseName",exerciseName)
      console.log("ExerciseNames", exerciseNames)
      const histdata = await fetchRMHistory(User, exerciseName)
      console.log("got the history back in the FE",histdata)
      setHistoryEntries(histdata);
      setCurrentEntryIndex(histdata.length - 1);
      setShowHistory(prevShowHistory => !prevShowHistory);    }
  };


  const navigateToNextEntry = () => {
    setCurrentEntryIndex((prevIndex) => prevIndex + 1);
  };

  const navigateToPreviousEntry = () => {
    setCurrentEntryIndex((prevIndex) => prevIndex - 1);
  };
  type GraphData = {
    Date: string;
    Estimated1RM: number[];
  };
  
  const calculateEstimated1RM = (maxes: number[]): number => {
    if (maxes[0] !== 0) {
      return Math.round(maxes[0]);
    } else if (maxes[1] !== 0) {
      return Math.round(maxes[1] / 0.94);
    } else if (maxes[2] !== 0) {
      return Math.round(maxes[2] / 0.91);
    } else if (maxes[3] !== 0) {
      return Math.round(maxes[3] / 0.883);
    } else if (maxes[4] !== 0) {
      return Math.round(maxes[4] / 0.86);
    } else {
      return 0;
    }
  };
  
  
  
  const createGraphData = (historyEntries: HistoryDatum[]): GraphData[] => {
    console.log("maxes", historyEntries)
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };    
    return historyEntries.map(entry => ({
      Date: new Date(entry.created_at).toLocaleDateString(undefined, dateFormatOptions),
      Estimated1RM: [calculateEstimated1RM(entry.maxes)]
    }));
  };
  const graphData: GraphData[] = createGraphData(historyEntries);
  
  console.log(graphData)


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
            <header className="text-4xl text-white font-bold"> 
              Personal Records
            </header>
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
          <div>
          <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">6 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={sixrepmax === 0 ? "" : sixrepmax}
                onChange={(e) => {
                  handleSixRMChange(e, tabId, exercise_data);
                }}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">7 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={sevenrepmax === 0 ? "" : sevenrepmax}
                onChange={(e) => {
                  handleSevenRMChange(e, tabId, exercise_data);
                }}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">8 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={eightrepmax === 0 ? "" : eightrepmax}
                onChange={(e) => {
                  handleEightRMChange(e, tabId, exercise_data);
                }}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">9 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={ninerepmax === 0 ? "" : ninerepmax}
                onChange={(e) => handleNineRMChange(e, tabId, exercise_data)}
              />
            </div>
            <div className="py-5 grid grid-cols-2 w-2/3">
              <label className="px-2 text-white text-xl font-bold flex justify-center">10 Rep Max:</label>
              <input
                className="rounded-md p-2"
                type="number"
                value={tenrepmax === 0 ? "" : tenrepmax}
                onChange={(e) => handleTenRMChange(e, tabId, exercise_data)}
              />
            </div>
          </div>
      </div>
      <div className="pt-5">
          <button
              type='submit'
              onClick={handleHistoryClick}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-md shadow-md">
              History
          </button>
      </div>
      {showHistory && (
  <div className="pt-10 flex items-center">
    <button
      className="p-2 rounded-md shadow-md bg-gray-500 hover:bg-gray-600 text-white font-bold text-xl"
      onClick={navigateToPreviousEntry}
      disabled={currentEntryIndex === 0}
    >
      {"<"}
    </button>
    <div className="ml-4 flex flex-col justify-center">
      <div className="text-white font-bold text-xl">
        {historyEntries.length > 0 && (
          <div className="text-white font-bold text-xl">
            {new Date(historyEntries[currentEntryIndex].created_at).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric"
            })}
          </div>
        )}
      </div>
      <ul className="mt-5 pl-5">
      {historyEntries.length > 0 &&
  historyEntries[currentEntryIndex].maxes &&
  historyEntries[currentEntryIndex].maxes
    .map((max, index) => ({ max, index: index + 1 }))
    .filter(({ max }) => max !== 0)
    .map(({ max, index }) => (
      <li key={index} className="text-white">
        {index}RM: {max}
      </li>
    ))}

      </ul>
    </div>
    <button
      className="ml-4 p-2 rounded-md shadow-md bg-gray-500 hover:bg-gray-600 text-white font-bold text-xl"
      onClick={navigateToNextEntry}
      disabled={currentEntryIndex === historyEntries.length - 1}
    >
      {">"}
    </button>
    <div className="pl-10">
    <div style={{ width: "500px", 
      height: "300px",
      backgroundColor: "white" }}>
      <ResponsiveContainer width="100%" 
                    height="100%">
      <LineChart
      width={500}
      height={300}
      data={graphData}
      margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis domain={[
          Math.min(...graphData.map(entry => entry.Estimated1RM[0])),
          Math.max(...graphData.map(entry => entry.Estimated1RM[0]))
        ]}/>
      <Tooltip />
      <Legend />
      <Line
      type="monotone"
      dataKey="Estimated1RM"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
      />
      </LineChart>
      </ResponsiveContainer>
      </div>
      </div>
  </div>
  
)}


    </div>
    </div>
  );
};

export default CalculatorTab;
