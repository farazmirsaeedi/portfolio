import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import MainContext from "../../context";

const SidebarTabs = () => {
    const { pageNumber, handlePageNumber, setDrawerOpen } =
        useContext(MainContext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >
            <Tab
                label="صفحه اصلی"
                icon={<HomeRounded />}
                iconPosition="start"
                sx={{
                    backgroundColor: "tomato",
                    backgroundColor: grey[800],
                    borderRadius: 2,
                    my: 0.5,
                    mx: 1,
                    "&.MuiTab-root": {
                        minHeight: 50,
                    },
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(0)}
            />

            <Tab
                label="درباره من"
                icon={<FaceRounded />}
                sx={{
                    "&.MuiTab-root": {
                        backgroundColor: "tomato",
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        minHeight: 50,
                    },
                }}
                iconPosition="start"
                onClick={() => setDrawerOpen(false)}
                {...tabProps(1)}
            />
            <Tab
                label="رزومه من"
                icon={<TextSnippetRounded />}
                iconPosition="start"
                sx={{
                    "&.MuiTab-root": {
                        backgroundColor: "tomato",
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        minHeight: 50,
                    },
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(2)}
            />
            <Tab
                label="نمونه کارها"
                icon={<TerminalRounded />}
                iconPosition="start"
                sx={{
                    "&.MuiTab-root": {
                        backgroundColor: "tomato",
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        minHeight: 50,
                    },
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(3)}
            />
            <Tab
                label="نظرات دانشجویان"
                icon={<MessageRounded />}
                iconPosition="start"
                sx={{
                    "&.MuiTab-root": {
                        backgroundColor: "tomato",
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        minHeight: 50,
                    },
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(4)}
            />
            <Tab
                label="ارتباط با من"
                icon={<ConnectWithoutContactRounded />}
                iconPosition="start"
                sx={{
                    "&.MuiTab-root": {
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        minHeight: 50,
                    },
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(5)}
            />
        </Tabs>
    );
};

export default SidebarTabs;
