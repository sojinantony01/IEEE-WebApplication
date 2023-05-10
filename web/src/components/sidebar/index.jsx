import SidebarItem from "./sidebar-item";
const items = ["Home", "Producs", "Categories", "About us"]
const Sidebar = () => {
    return (
        <div className="sidebar">
            {
                items.map(item => {
                    return (<SidebarItem label={item}/>)
                })
            }
        </div>
    )
}

export default Sidebar;