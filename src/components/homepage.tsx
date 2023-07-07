import { Link } from "react-router-dom";

function HomePage() {

    return (
        <body className="flex flex-wrap justify-center items-top px-8 h-screen">
            <div className="px-2 py-2 w-full md:w-full lg:w-1/2 py-5 h-min">
                <div className="text-white bg-gray-600 pb-10 rounded-lg shadow-md">
                        <div className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded-md shadow-md text-sm items-top w-min" >
                            My Dashboard
                        </div>
                        <div>
                            chart goes here
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