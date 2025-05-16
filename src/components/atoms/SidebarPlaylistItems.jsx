import { Link } from "react-router-dom";

export default function SidebarPlaylistItems({name}){
    return(
            <ul className="space-y-2">
                <li className="px-5">
                    <Link className="hover:underline text-gray-600">{name}</Link>
                </li>
            </ul> 
    )
}