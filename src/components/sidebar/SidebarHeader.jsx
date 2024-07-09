import { Avatar, Typography } from "@mui/material";

import avatar from "../../assets/avatar.jpg";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                }}
            >
                FM
            </Avatar>
            <Typography variant="h6" color="whitesmoke">
                فراز میرسعیدی
            </Typography>

            <Typography variant="caption" color="whitesmoke">
                برنامه نویس فرانت اند
            </Typography>
        </>
    );
};

export default SidebarHeader;
