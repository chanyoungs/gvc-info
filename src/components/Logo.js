import { ImageList, ImageListItem, Typography } from "@mui/material";
import LogoPath from "../assets/gods_vision_church_logo.svg";
import React from "react";

const logoSx = {
    maxWidth: "25%",
};
const logoContainerSx = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
};
const titleSx = {
    fontWeight: "bold",
};

export const Logo = ({ language }) => (
    <>
        <ImageList sx={logoContainerSx}>
            <ImageListItem sx={logoSx}>
                <img src={LogoPath} alt="GVC Logo" />
            </ImageListItem>
        </ImageList>
        <Typography sx={titleSx} variant="h6" align="center">
            {language === "kor" ? "꿈이있는교회" : "God's Vision Church"}
        </Typography>
    </>
);
