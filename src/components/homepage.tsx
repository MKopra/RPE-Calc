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
import { format, parseISO } from "date-fns";


interface ExerciseEntry {
    exercise: string;
    estonerepmax: number;
    created_at: string;
}


function HomePage() {

    const [exerciseTrendData, setExerciseTrendData] = useState<ExerciseEntry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (typeof User === 'string' && User != undefined) {
                const dashData = await fetchExerciseTrend(User);
                setExerciseTrendData(dashData)
                console.log("dashData", dashData)
                console.log("useState", exerciseTrendData)
            }
        };

        fetchData();
    }, []);
    console.log("useState2", exerciseTrendData)
    const extendToToday = exerciseTrendData.map((entry) => ({
        exercise: entry.exercise,
        estonerepmax: entry.estonerepmax,
        created_at: format(new Date(entry.created_at), "HH:mm yyyy-MM-dd"), // Format the date as a string
      }));
      
      extendToToday.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
       console.log("extendtotoday", extendToToday)  

    const dates = Array.from(new Set(exerciseTrendData.map((entry) => entry.created_at)))
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  
    const earliestDate = dates.length > 0 ? new Date(dates[0]) : null;
    const latestDate = new Date(); // Today's date

    const formattedEarliestDate = earliestDate ? format(earliestDate, "HH:mm yyyy-MM-dd") : "";
    const formattedLatestDate = format(latestDate, "HH:mm yyyy-MM-dd");
    console.log("dates", dates)
    function groupBy(arr: any[], key: string) {
        return arr.reduce((acc, obj) => {
            const groupKey = obj[key];
            const existingEntry = acc.find((entry: any) => entry.exercise === groupKey);
            if (existingEntry) {
                existingEntry.entries.push(obj);
            } else {
                acc.push({
                    exercise: groupKey,
                    entries: [obj],
                });
            }
            return acc;
        }, []);
    }

    console.log(formattedEarliestDate)
    console.log(formattedLatestDate)
    const uniqueExercises = Array.from(new Set(extendToToday.map(entry => entry.exercise)));
    const xAxisLabels = dates.map((date) => format(new Date(date), 'HH:mm yyyy-MM-dd'));
    exerciseTrendData.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    const formattedData = exerciseTrendData.map(entry => ({
        ...entry,
        created_at: new Date(entry.created_at).getTime(),
      }));
      console.log("sorted ex trend", exerciseTrendData)
  // Generate the x-axis labels  
  const sortedData = exerciseTrendData.sort((a, b) =>
  parseISO(a.created_at).getTime() - parseISO(b.created_at).getTime()
);
    return (
        <body className="flex flex-wrap justify-center items-top px-8 h-screen">
            <div className="px-2 py-2 w-full md:w-full lg:w-1/2 py-5 h-min">
                <div className="text-white bg-gray-600 pb-10 rounded-lg shadow-md">
                    <div className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded-md shadow-md text-sm items-top w-min" >
                        My Dashboard
                    </div>
                    <div style={{ width: "500px", height: "300px", backgroundColor: "white" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={sortedData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
      dataKey="created_at"
    //   type="category"
    //   allowDuplicatedCategory={false}
      //tickFormatter={(value: string) => format(parseISO(value), "HH:mm yyyy-MM-dd")}
      //domain={[earliestDate,latestDate]}
      //tickFormatter={(value: number) => format(new Date(value), 'dd MMM yy')}
    />


                                <YAxis dataKey="estonerepmax" />
                                <Tooltip />
                                <Legend />
                                {uniqueExercises.map((exercise: string, index: number) => (
  <Line
    key={index}
    type="monotone"
    data={sortedData.filter((entry) => entry.exercise === exercise)}
    dataKey="estonerepmax"
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