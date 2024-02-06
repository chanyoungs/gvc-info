import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import Background from './assets/background.png';
import Logo from './assets/gods_vision_church_logo.svg';
import { contents } from './contents';
import { CustomLink } from './CustomLink';

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

const contactSx = {
  position: "fixed",
  top: "auto",
  bottom: 0,
};

const buttonSx = (selected) => ({
  background: !selected && "white",
});

export const App = () => {
  const [contentIndex, setContent] = useState(undefined);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        // backgroundPosition: "center",
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
          꿈이있는교회 클라이밍 클럽
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          {contents.map((content) => (
            <Grid item xs={4} key={content.title}>
              <Button
                fullWidth
                variant={
                  contentIndex === content.index ? "contained" : "outlined"
                }
                sx={buttonSx(contentIndex === content.index)}
                onClick={() => {
                  ReactGA.event({
                    category: "Menu",
                    action: content.title,
                  });
                  setContent(content.index);
                }}
              >
                {content.title}
              </Button>
            </Grid>
          ))}
        </Grid>
        <div style={paperContainerSx}>
          {contentIndex !== undefined && (
            <Paper sx={paperSx}>{contents[contentIndex].content}</Paper>
          )}
        </div>
        <div sx={contactSx}>
          <Typography variant="body2" align="center">
            질문이나 참여 관심 있으시면 언제든 연락주세요!
          </Typography>
          <Typography variant="body2" align="center">
            클럽장: 송찬영
          </Typography>
          <Typography variant="body2" align="center">
            Kakao ID: chanyoungs
          </Typography>
          <Typography variant="body2" align="center">
            Email:{" "}
            <CustomLink
              href="chanyoungs@gmail.com"
              color="secondary"
              title="Email"
            >
              chanyoungs@gmail.com
            </CustomLink>
          </Typography>
        </div>
      </Container>
    </div>
  );
};
