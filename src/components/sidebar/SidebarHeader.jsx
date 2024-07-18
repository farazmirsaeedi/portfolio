import { useState } from "react";

import { Avatar, Typography, Box, IconButton } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { GitHub, Telegram, Instagram, WhatsApp } from "@mui/icons-material";

import ThemeActionButton from "../ThemeActionButton";
import avatar from "../../assets/avatar.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);

    return (
        <>
            <ThemeActionButton />
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
            <Typography variant="h6" color="#F93C92">
                <Typography variant="caption" color="tomato">
                    {" {{ "}
                </Typography>
                <RandomReveal
                    isPlaying
                    duration={4}
                    characterSet={alphabetPersian}
                    characters="فراز میرسعیدی"
                    onComplete={() => setStart(true)}
                />

                <Typography variant="caption" color="tomato">
                    {" }} "}
                </Typography>
            </Typography>
            {start && (
                <Typography variant="caption" color="gray">
                    <Typography variant="caption" color="tomato">
                        [[{" "}
                    </Typography>
                    <RandomReveal
                        isPlaying
                        duration={4}
                        characterSet={alphabetPersian}
                        characters="برنامه نویس فرانت اند"
                    />
                    <Typography variant="caption" color="tomato">
                        {" "}
                        ]]
                    </Typography>
                </Typography>
            )}

            <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
                <IconButton aria-label="Github">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                <IconButton aria-label="Instagram">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                <IconButton aria-label="Telegram">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Telegram sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                <IconButton aria-label="WhatsApp">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <WhatsApp sx={{ color: "gray" }} />
                    </a>
                </IconButton>
            </Box>
        </>
    );
};

export default SidebarHeader;
