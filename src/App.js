import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { fetchData } from "./data";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { Menu } from "./components/Menu";
import { Loading } from "./components/Loading";
import { Contents } from "./components/Contents";
import { Logo } from "./components/Logo";

const rootSx = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
};

const containerSx = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
};

export const App = () => {
    const [chosenCategoryKey, setChosenCategoryKey] = useState(undefined);
    const [language, setLanguage] = useState("kor");
    const [data, setData] = useState(undefined);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        fetchData(setData);
    }, []);

    return (
        <div style={rootSx}>
            <Container maxWidth="sm" sx={containerSx}>
                <Logo {...{ language }} />
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
                <Contents {...{ chosenCategoryKey, data, language }} />
                <LanguageSwitch {...{ language, setLanguage }} />
            </Container>
        </div>
    );
};
