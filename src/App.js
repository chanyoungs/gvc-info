import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { fetchData } from "./data";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { Menu } from "./components/Menu";
import { Loading } from "./components/Loading";
import { Contents } from "./components/Contents";
import { Logo } from "./components/Logo";
import { Box, useTheme } from "@mui/material";

export const App = () => {
    const [chosenCategoryKey, setChosenCategoryKey] = useState("teams_recruit");
    const [language, setLanguage] = useState("kor");
    const [data, setData] = useState(undefined);

    const theme = useTheme();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        fetchData(setData);
    }, []);

    return (
            <Container maxWidth="sm">
                <Box
                    top={0}
                    position="sticky"
                    bgcolor={theme.palette.background.default}
                    padding={1}
                >
                    <Logo {...{ language }} />
                    <LanguageSwitch {...{ language, setLanguage }} />
                    {data ? (
                        <Menu
                            {...{
                                data,
                                language,
                                chosenCategoryKey,
                                setChosenCategoryKey,
                            }}
                        />
                    ) : (
                        <Loading {...{ language }} />
                    )}
                </Box>
                <Contents {...{ chosenCategoryKey, data, language }} />
            </Container>
    );
};
