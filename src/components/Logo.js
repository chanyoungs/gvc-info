import { Box } from "@mui/material";
import LogoPath from "../assets/gods_vision_church_logo.svg";
import React from "react";

export const Logo = ({ language }) => (
    <>
        <Box  display="flex" justifyContent="center">
            <img
                style={{
                    maxWidth: "25%",
                }}
                src={LogoPath}
                alt="GVC Logo"
            />
        </Box>
    </>
);
