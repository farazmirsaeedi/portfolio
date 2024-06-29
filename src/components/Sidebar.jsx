import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Drawer, Fab, Box } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";

import DrawerContent from "./ui/DrawerContent";

const Sidebar = ({ value, handleChange }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{ backgroundColor: grey[900] }}
        >
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none",
                    },
                }}
            >
                <Fab
                    color="primary"
                    aria-label="Sidebar"
                    size="small"
                    sx={{ m: 2 }}
                    onClick={handleDrawerToggle}
                >
                    <MenuRounded />
                </Fab>
            </Box>
            <DrawerContent value={value} handleChange={handleChange} />
            <Drawer
                open={drawerOpen}
                variant="temporary"
                onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 300,
                    },
                }}
            >
                {/* Drawer */}
                <DrawerContent value={value} handleChange={handleChange} />
            </Drawer>
        </Grid>
    );
};

export default Sidebar;
