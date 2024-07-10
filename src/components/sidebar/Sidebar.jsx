import { SidebarContent } from "./";
import { DrawerActionButton, SidebarDrawer } from "../drawer";

const Sidebar = ({ value, handleChange }) => {
    return (
        <>
            <DrawerActionButton />

            <SidebarContent value={value} handleChange={handleChange} />

            <SidebarDrawer />
        </>
    );
};

export default Sidebar;
