import { Link } from "react-router-dom";
import { useEffect } from "react";
import { User } from "./login";
import { fetchExerciseTrend } from "./utils";
import { useState } from "react";
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

interface ExerciseEntry {
    estonerepmax: number;
    created_at: string;
  }
  
  interface DashboardData {
    [exercise: string]: ExerciseEntry[];
  }
  
function HomePage() {

    const [exerciseTrendData, setExerciseTrendData] = useState<DashboardData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (typeof User === 'string') {
                const dashData = await fetchExerciseTrend(User);
                setExerciseTrendData(dashData)
                console.log("dashData", dashData)
                console.log("useState", exerciseTrendData)
            }
        };

        fetchData();
    }, []);
    console.log("useState2", exerciseTrendData)

    return (
        <body className="flex flex-wrap justify-center items-top px-8 h-screen">
            <div className="px-2 py-2 w-full md:w-full lg:w-1/2 py-5 h-min">
                <div className="text-white bg-gray-600 pb-10 rounded-lg shadow-md">
                    <div className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded-md shadow-md text-sm items-top w-min" >
                        My Dashboard
                    </div>
                    <div style={{
      width: "500px",
      height: "300px",
      backgroundColor: "white"
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={Object.keys(exerciseTrendData).flatMap((exercise) =>
            exerciseTrendData[exercise].map((entry) => ({
              created_at: entry.created_at,
              estonerepmax: entry.estonerepmax,
              exercise: exercise,
            }))
          )}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis dataKey="estonerepmax" />
          <Tooltip />
          <Legend />
          {Object.entries(exerciseTrendData).map(([exercise, entries], index) => (
                  <Line
                    key={index}
                    type="monotone"
                    dataKey="estonerepmax"
                    data={entries}
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    name={exercise}
                  />
                ))}
        </LineChart>
      </ResponsiveContainer>
    </div>

                </div>
            </div>
            <div className="px-2 py-2 w-full md:w-full lg:w-1/2 py-5 h-min">
                <div className="text-white p-4 bg-gray-600 p-6 rounded-lg shadow-md justify-center">
                    <div className="flex flex-row py-5 justify-center">
                        <Link to="/">
                            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl px-5" >
                                Training Log
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-row py-5 justify-center">
                        <Link to="/exercise-library">
                            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl px-5" >
                                Exercise Library
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-row py-5 justify-center">
                        <Link to="/tools">
                            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-5 rounded-md shadow-md hover:bg-gray-600 text-xl px-5" >
                                Tools and Resources
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </body>
    );

}

export default HomePage