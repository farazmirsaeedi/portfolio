import { Avatar, Typography } from "@mui/material";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={require("../../assets/avatar.jpg")}
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
