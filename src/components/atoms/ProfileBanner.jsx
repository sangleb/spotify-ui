import UserLogo from "../../assets/userLogo.png"


export default function ProfileBanner(){
    return (
        <div className="bg-cyan-800 p-5 flex items-end">
            <div className="p-5">
                <img  
                    src={UserLogo}
                    className={`w-20 h-20 shadow-2xl rounded-full`}
                />
            </div>
            <div className="p-5 leading-10 text-white">
            <p className="text-xs font-bold uppercase">Profile</p>
            <h1 className="text-6xl font-bold">Shiv Sangle</h1>
            <p className="text-xs ">Public Playlist</p>
            </div>

        </div>
    )
}