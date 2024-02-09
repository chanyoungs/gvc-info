import { Box, Card, CircularProgress, Switch } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import Logo from './assets/gods_vision_church_logo.svg';
import { fetchData } from './data';

const containerSx = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
};

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
const paperContainerSx = {
    flex: 1,
    overflowY: "auto",
};

const paperSx = {
    padding: 2,
    marginTop: 1,
    marginBottom: 1,
};

const languageSx = {
    position: "fixed",
    top: "auto",
    bottom: 0,
};

const buttonSx = (selected) => ({
    background: !selected && "white",
    whiteSpace: "nowrap",
});

export const App = () => {
    const [chosenCategoryKey, setChosenCategoryKey] = useState(undefined);
    const [language, setLanguage] = useState("kor");
    const [data, setData] = useState(undefined);

    const onLanguageChange = (event) => {
        setLanguage(event.target.checked ? "eng" : "kor");
    };

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        fetchData(setData);
    }, []);

    const Menu = () => (
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

    const Loading = () => (
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

    const Contents = () => (
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
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        color="text.secondary"
                                    >
                                        {`Contact: ${content.contact_name}, Kakao: ${content.contact_kakao}`}
                                    </Typography>
                                )}
                            </Card>
                        )
                    )}
                </Box>
            )}
        </div>
    );

    const LanguageSwitch = () => (
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
                    <Switch color="default" onChange={onLanguageChange} />
                </Grid>
                <Grid item>
                    <Typography>ENG</Typography>
                </Grid>
            </Grid>
        </div>
    );

    return (
        <div
            style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Container maxWidth="sm" sx={containerSx}>
                <ImageList sx={logoContainerSx}>
                    <ImageListItem sx={logoSx}>
                        <img src={Logo} alt="GVC Logo" />
                    </ImageListItem>
                </ImageList>
                <Typography sx={titleSx} variant="h6" align="center">
                    {language === "kor"
                        ? "꿈이있는교회"
                        : "God's Vision Church"}
                </Typography>
                {data ? <Menu /> : <Loading />}
                <Contents />
                <LanguageSwitch />
            </Container>
        </div>
    );
};
