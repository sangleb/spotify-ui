import { useState } from "react";
import Player from "../components/organisms/Player";
import Sidebar from "../components/organisms/Sidebar";

function PlayerLayout({children}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
            <div className="w-screen h-screen relative">


                {/* side bar */}
                <div 
                    className={
                        `fixed top-0 left-0 bg-gray-800 text-white w-64 transform ${isSidebarOpen ? 
                        'translate-x-0' : '-translate-x-full'} transition-transform duration-300 
                        ease-in-out md:translate-x-0 md:w-64 z-20`
                    }
                >
                    <Sidebar />
                </div>
                

                {/* Sidebar toggle button */}
                <button 
                    className="md:hidden absolute top-4 left-4 z-30 text-white bg-gray-700 rounded-md"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? "Close Menu" : "Open menu"}
                </button>
                
                {/* Main Content */}
                <div
                    className="flex-grow flex flex-col md:ml-64"
                >
                    <div className="h-[calc(100vh-100px)]">
                        {children}
                    </div>
                </div>


                {/* player module */}
                <div className="absolute bottom-0 left-0 w-full h-[100px]">
                    <Player />
                </div>
            </div>
        </>
    )
}

export default PlayerLayout;