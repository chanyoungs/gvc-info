import { Button, Grid } from "@mui/material";
import React from "react";
import ReactGA from "react-ga";

const buttonSx = (selected) => ({
    background: !selected && "white",
    whiteSpace: "nowrap",
});

export const Menu = ({
    data,
    language,
    chosenCategoryKey,
    setChosenCategoryKey,
}) => {
    data["worship"] = { kor: { name: "찬양가사" }, eng: { name: "Worship" } };
    return (
        <Grid container justifyContent="center" spacing={1}>
            {Object.keys(data).map((categoryKey) => {
                const category = data[categoryKey][language];
                return (
                    <Grid item xs key={categoryKey}>
                        <Button
                            fullWidth
                            variant={
                                chosenCategoryKey === categoryKey
                                    ? "contained"
                                    : "outlined"
                            }
                            sx={buttonSx(chosenCategoryKey === categoryKey)}
                            onClick={() => {
                                ReactGA.event({
                                    category: "Menu",
                                    action: category.name,
                                });
                                setChosenCategoryKey(categoryKey);
                            }}
                        >
                            {category.name}
                        </Button>
                    </Grid>
                );
            })}
        </Grid>
    );
};
