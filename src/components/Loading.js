import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react"

export const Loading = ({language}) => (
    <Box
        sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Box alignItems="center" display="flex" flexDirection="column">
            <CircularProgress />
            <Typography margin={2}>
                {language === "kor" ? "로딩중..." : "Loading data..."}
            </Typography>
        </Box>
    </Box>
);