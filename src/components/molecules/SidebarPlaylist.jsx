import { useState } from "react"
import SidebarPlaylistItems from "../atoms/SidebarPlaylistItems"


export default function SidebarPlaylist(){

    const [playlists, setPlaylists] = useState([
        {name: "My Playlist"},
        {name: "Trending"},
        {name: "Bollywood"},
        {name: "Marathi"},
    ]);
    return (
        <div className="py-5  h-2/3 overflow-y-auto">
            <ul className="space-y-2">
                {playlists.map((playlist) => (
                    <SidebarPlaylistItems key={playlist.name} name={playlist.name}/>
                ))}
            </ul>
        </div>
    )
}