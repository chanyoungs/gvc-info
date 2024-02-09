import React from "react";
import { Grid, Switch, Typography } from "@mui/material";

const languageSx = {
    position: "fixed",
    top: "auto",
    bottom: 0,
};

export const LanguageSwitch = ({ language, setLanguage }) => (
    <div sx={languageSx}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>
                <Typography>한글</Typography>
            </Grid>
            <Grid item>
                <Switch
                    color="default"
                    checked={language === "eng"}
                    onChange={() =>
                        setLanguage(language === "kor" ? "eng" : "kor")
                    }
                />
            </Grid>
            <Grid item>
                <Typography>ENG</Typography>
            </Grid>
        </Grid>
    </div>
);
