import { Box, Card, Typography } from "@mui/material";
import React from "react"

const paperContainerSx = {
    flex: 1,
    overflowY: "auto",
};

const paperSx = {
    padding: 2,
    marginTop: 1,
    marginBottom: 1,
};


export const Contents = ({chosenCategoryKey, data, language}) => (
    <div style={paperContainerSx}>
        {chosenCategoryKey && (
            <Box sx={paperSx}>
                {data[chosenCategoryKey][language].contents.map(
                    (content) => (
                        <Card
                            key={content.item_name}
                            sx={{ margin: 1, padding: 1 }}
                        >
                            <Typography
                                gutterBottom
                                variant="body1"
                                component="div"
                                align="center"
                                color="secondary"
                            >
                                {content.item_name}
                            </Typography>
                            <Typography variant="body2" align="center">
                                {content.item_content}
                            </Typography>
                            {content.contact_name && (
                                // <Typography
                                //     variant="body2"
                                //     align="center"
                                //     color="text.secondary"
                                // >
                                //     {`${language === "kor" ? "문의" : "Contact"}: ${content.contact_name}, ${language === "kor" ? "카카오" : "Kakao"}: ${content.contact_kakao}`}
                                // </Typography>
                                <>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        color="text.secondary"
                                    >
                                        {`${language === "kor"
                                            ? "문의"
                                            : "Contact"
                                            }: ${content.contact_name}`}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        color="text.secondary"
                                    >
                                        {`${language === "kor"
                                            ? "카카오"
                                            : "Kakao"
                                            }: ${content.contact_kakao}`}
                                    </Typography>
                                </>
                            )}
                        </Card>
                    )
                )}
            </Box>
        )}
    </div>
);