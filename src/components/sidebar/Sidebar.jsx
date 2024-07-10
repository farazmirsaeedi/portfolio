import { SidebarContent } from "./";
import { DrawerActionButton, SidebarDrawer } from "../drawer";

const Sidebar = () => {
    return (
        <>
            <DrawerActionButton />

            <SidebarContent />

            <SidebarDrawer />
        </>
    );
};

export default Sidebar;
