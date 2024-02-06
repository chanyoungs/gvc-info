import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';

import { App } from './App';
import { theme } from './theme';

ReactGA.initialize("UA-173197430-1");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ThemeProvider theme={createTheme(theme)}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
