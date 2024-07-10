import { useState } from "react";

import { Typography } from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import ContentContainer from "./ContentContainer";
import TabPanel from "../components/TabPanel";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handlePageNumber = (event, newPage) => {
        console.log(newPage);
        setPageNumber(newPage);
    };

    return (
        <MainContext.Provider
            value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
        >
            <MainLayout>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <ContentContainer>
                    <TabPanel pageNumber={pageNumber} index={0}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            صفحه اصلی
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={1}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            درباره من
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={2}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            رزومه من
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={3}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            نمونه کارها
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={4}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            نظرات دانشجویان
                        </Typography>
                    </TabPanel>
                    <TabPanel pageNumber={pageNumber} index={5}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            ارتباط با من
                        </Typography>
                    </TabPanel>
                </ContentContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default AppContainer;
