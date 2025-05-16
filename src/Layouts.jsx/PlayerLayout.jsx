import Player from "../components/organisms/Player";
import Sidebar from "../components/organisms/Sidebar";

function PlayerLayout({children}){
    return (
        <>
            <div className="w-screen h-screen relative">


                {/* side bar */}
                <div className="absolute top-0 left-0 w-64 h-screen">
                    <Sidebar />
                </div>
                

                {/* Main Content */}
                <div
                className="mb-24 ml-64"
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