import Divider from "../atoms/Divider";
import Logo from "../atoms/Logo";
import SidebarNavigationMenu from "../atoms/SidebarNavigationMenu";
import SidebarPlaylist from "../molecules/SidebarPlaylist";

function Sidebar(){     
    return (        
        <div className="w-full px-2 bg-black h-[calc(100vh-100px)]">
            <div className="h-full py-5">

                {/* logo */}
                <Logo 
                    width={18}
                    height={18}
                />

                {/* Navigation menu */}
                <SidebarNavigationMenu />


                {/* divider */}
                <Divider />


                {/* Playlist */}
                <SidebarPlaylist />
            </div>
        </div>        
    )
}

export default Sidebar;