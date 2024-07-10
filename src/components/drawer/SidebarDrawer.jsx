import { Drawer } from "@mui/material";

import { SidebarContent } from "../sidebar";

const SidebarDrawer = () => {
    return (
        <Drawer
            open={drawerOpen}
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300,
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                },
            }}
        >
            {/* Drawer */}
            <SidebarContent
                value={value}
                handleChange={handleChange}
                setDrawerOpen={setDrawerOpen}
            />
        </Drawer>
    );
};

export default SidebarDrawer;
