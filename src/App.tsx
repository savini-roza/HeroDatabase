import React from 'react';
import './App.css';
import Template from './components/Template';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import './index.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme} >
        <BrowserRouter>
          <Template></Template>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
