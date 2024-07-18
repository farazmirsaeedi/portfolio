import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import {
    Tooltip,
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";

import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import avatar from "../assets/avatar02.jpg";
import { devSkills } from "../constants/skills";
import { devWorkInfo } from "../constants/details";

const About = ({ helmetTitle }) => {
    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [Jquery, setJquery] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 82);
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 73);
            });

            setReactJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);
            });

            setJquery((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 86);
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 66);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
        devSkills;

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Divider
                            textAlign="right"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "primary.main",
                                },
                            }}
                        >
                            <Chip
                                color="primary"
                                icon={<CodeRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        برنامه نویس فرانت اند
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <Grid container>
                            <Grid
                                xs={4}
                                sm={4}
                                md={3}
                                lg={3}
                                sx={{
                                    mt: 3,
                                    display: {
                                        xs: "none",
                                        sm: "block",
                                        md: "block",
                                    },
                                }}
                            >
                                {devWorkInfo.map((item, index) => (
                                    <Box
                                        key={index}
                                        component="div"
                                        sx={{ width: 1, mb: 1 }}
                                    >
                                        <Tooltip
                                            title={item.tooltipTitle}
                                            placement="right"
                                            arrow
                                        >
                                            <Chip
                                                icon={item.icon}
                                                label={
                                                    <Typography
                                                        variant="body1"
                                                        color="whitesmoke"
                                                    >
                                                        <CountUp
                                                            start={0}
                                                            end={item.total}
                                                            duration={2}
                                                        />
                                                    </Typography>
                                                }
                                                sx={{
                                                    p: 2,
                                                    backgroundColor: item.color,
                                                    width: 1,
                                                }}
                                            />
                                        </Tooltip>
                                    </Box>
                                ))}
                            </Grid>

                            <Grid xs={12} sm={8} md={9} lg={9}>
                                <DevInfo>
                                    نام و نام خانوادگی : فراز میرسعیدی
                                </DevInfo>
                        <DevInfo>سن : 25</DevInfo>
                        <DevInfo>شهر : تهران</DevInfo>
                                <DevInfo>
                                    farazmirsaeedi@gmail.com : آدرس ایمیل
                                </DevInfo>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <Avatar
                            src={avatar}
                            variant="rounded"
                            sx={{
                                height: 250,
                                width: 250,
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
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <Divider
                            textAlign="center"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "secondary.main",
                                },
                            }}
                        >
                            <Chip
                                color="secondary"
                                icon={<SelfImprovementRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        مهارت های من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>
                        <Skill
                            name={htmlSkill.name}
                            icon={htmlSkill.icon}
                            color={htmlSkill.color}
                            value={html}
                        />
                        <Skill
                            name={cssSkill.name}
                            icon={cssSkill.icon}
                            color={cssSkill.color}
                            value={css}
                        />
                        <Skill
                            name={jsSkill.name}
                            icon={jsSkill.icon}
                            color={jsSkill.color}
                            value={javascript}
                        />
                        <Skill
                            name={reactSkill.name}
                            icon={reactSkill.icon}
                            color={reactSkill.color}
                            value={reactJs}
                        />
                        <Skill
                            name={nodeSkill.name}
                            icon={nodeSkill.icon}
                            color={nodeSkill.color}
                            value={Jquery}
                        />
                        <Skill
                            name={gitSkill.name}
                            icon={gitSkill.icon}
                            color={gitSkill.color}
                            value={git}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default About;
