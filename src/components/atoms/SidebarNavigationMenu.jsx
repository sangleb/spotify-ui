import { MdHome, MdSearch, MdLibraryMusic } from "react-icons/md";
import { Link } from "react-router-dom";

function SidebarNavigationMenu(){
    const navigationMenu = [
        {
            name: "Home",
            icon: MdHome,
            route: "/",
        },
        {
            name: "Search",
            icon: MdSearch,
            route: "/search",
        },
        {
            name: "Your Library",
            icon: MdLibraryMusic,
            route: "/library",
        }
    ]
    return (
        <div className="mb-5">
                <ul className="space-y-2">
                    {navigationMenu.map((menuItem) => (
                        <li key={menuItem.name} className="text-lg px-5">
                            <Link to={menuItem.route} className="flex item-center space-x-4">
                                <menuItem.icon className="text-white" size={24} />
                                <span className="text-gray-600">{menuItem.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default SidebarNavigationMenu;